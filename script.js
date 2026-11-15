/* Ravena Solar — simulação e comportamentos da página.
   Regras da simulação: CLAUDE.md ("Simulação: regras que não podem quebrar"). */
(function () {
  'use strict';

  var WHATSAPP_EMPRESA = '5515990000000';
  var CONTA_MINIMA = 450;

  var $ = function (id) { return document.getElementById(id); };
  var reais = function (n) { return 'R$ ' + n.toLocaleString('pt-BR'); };
  var movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Cálculo ---------- */

  // Limites em reais inteiros, arredondados para cima; a economia sai dos limites já arredondados.
  function estimar(valor) {
    var contaMin = Math.ceil(valor * 0.10);
    var contaMax = Math.ceil(valor * 0.25);
    return {
      valor: valor,
      contaMin: contaMin,
      contaMax: contaMax,
      economiaMesMin: valor - contaMax,
      economiaMesMax: valor - contaMin,
      economiaAnoMin: (valor - contaMax) * 12,
      economiaAnoMax: (valor - contaMin) * 12
    };
  }

  // "1.250" vira 1250; "780,50" vira 780 (centavos são descartados).
  function limparValor(texto) {
    return texto.replace(/[.\s]/g, '').split(',')[0].replace(/\D/g, '').slice(0, 5);
  }

  /* ---------- Erros ---------- */

  function mostrarErro(campo, mensagem) {
    var p = $(campo.id + '-erro');
    p.innerHTML = '<svg aria-hidden="true"><use href="#icone-erro"/></svg><span></span>';
    p.lastChild.textContent = mensagem;
    p.hidden = false;
    campo.setAttribute('aria-invalid', 'true');
  }

  function limparErro(campo) {
    var p = $(campo.id + '-erro');
    p.hidden = true;
    p.textContent = '';
    campo.removeAttribute('aria-invalid');
  }

  function mostrar(el) {
    el.hidden = false;
    el.classList.remove('entra');
    void el.offsetWidth;
    el.classList.add('entra');
  }

  /* ---------- Etapa 1 ---------- */

  var formValor = $('form-valor');
  var campoValor = $('valor');
  var resultado = $('resultado');
  var recusa = $('recusa');
  var formContato = $('form-contato');
  var confirmacao = $('confirmacao');
  var estimativa = null;

  function validarValor() {
    var bruto = campoValor.value.trim();
    if (bruto === '') {
      mostrarErro(campoValor, 'Informe o valor médio da sua conta de luz.');
      return null;
    }
    var n = parseInt(limparValor(bruto), 10);
    if (!n || n <= 0) {
      mostrarErro(campoValor, 'Digite um valor maior que zero, só com números. Exemplo: 780.');
      return null;
    }
    limparErro(campoValor);
    return n;
  }

  function esconderSaida() {
    estimativa = null;
    resultado.hidden = true;
    recusa.hidden = true;
    formContato.hidden = true;
  }

  campoValor.addEventListener('input', function () {
    var limpo = limparValor(campoValor.value);
    campoValor.value = limpo ? Number(limpo).toLocaleString('pt-BR') : '';
    if (!resultado.hidden || !recusa.hidden) esconderSaida();
  });

  formValor.addEventListener('submit', function (e) {
    e.preventDefault();
    esconderSaida();
    var valor = validarValor();
    if (valor === null) { campoValor.focus(); return; }

    if (valor < CONTA_MINIMA) {
      mostrar(recusa);
      return;
    }

    estimativa = estimar(valor);
    $('r-hoje').textContent = reais(estimativa.valor) + ' por mês';
    $('r-faixa').textContent = reais(estimativa.contaMin) + ' a ' + reais(estimativa.contaMax);
    $('r-mes').textContent = reais(estimativa.economiaMesMin) + ' a ' + reais(estimativa.economiaMesMax);
    $('r-ano').textContent = reais(estimativa.economiaAnoMin) + ' a ' + reais(estimativa.economiaAnoMax);
    mostrar(resultado);
    mostrar(formContato);
  });

  $('corrigir').addEventListener('click', function () {
    esconderSaida();
    campoValor.focus();
    campoValor.select();
  });

  /* ---------- Etapa 2 ---------- */

  var campoNome = $('nome');
  var campoWhats = $('whatsapp');
  var campoCidade = $('cidade');
  var CIDADES = ['Sorocaba', 'Votorantim', 'Itu', 'Salto'];

  function mascararTelefone(texto) {
    var d = texto.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 2) return d.length ? '(' + d : '';
    if (d.length <= 6) return '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length <= 10) return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
    return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
  }

  campoWhats.addEventListener('input', function () {
    campoWhats.value = mascararTelefone(campoWhats.value);
  });

  var validadores = {
    nome: function () {
      if (campoNome.value.trim().length < 2) {
        mostrarErro(campoNome, 'Informe seu nome, com pelo menos 2 letras.');
        return false;
      }
      limparErro(campoNome);
      return true;
    },
    whatsapp: function () {
      var d = campoWhats.value.replace(/\D/g, '');
      if (d.length < 10 || d.charAt(0) === '0') {
        mostrarErro(campoWhats, 'Informe o WhatsApp completo, com DDD. Exemplo: (15) 99999-9999.');
        return false;
      }
      limparErro(campoWhats);
      return true;
    },
    cidade: function () {
      if (CIDADES.indexOf(campoCidade.value) === -1) {
        mostrarErro(campoCidade, 'Escolha uma das quatro cidades.');
        return false;
      }
      limparErro(campoCidade);
      return true;
    }
  };

  // Validação ao sair do campo e ao enviar, nunca durante a digitação.
  [campoNome, campoWhats, campoCidade].forEach(function (campo) {
    campo.addEventListener('blur', validadores[campo.id]);
  });
  campoValor.addEventListener('blur', function () {
    if (campoValor.value.trim() !== '') validarValor();
  });

  function montarMensagem() {
    return [
      'Olá! Quero uma simulação de energia solar para a minha casa.',
      '',
      'Nome: ' + campoNome.value.trim(),
      'WhatsApp: ' + campoWhats.value,
      'Cidade: ' + campoCidade.value,
      'Valor médio da conta de luz: ' + reais(estimativa.valor) + ' por mês',
      'Estimativa mostrada na página: conta de ' + reais(estimativa.contaMin) + ' a ' + reais(estimativa.contaMax) + ' por mês'
    ].join('\n');
  }

  formContato.addEventListener('submit', function (e) {
    e.preventDefault();
    // Sem estimativa válida (conta ausente ou abaixo do mínimo) o pedido não é enviado.
    if (!estimativa || estimativa.valor < CONTA_MINIMA) { campoValor.focus(); return; }

    var ok = [validadores.nome(), validadores.whatsapp(), validadores.cidade()];
    var campos = [campoNome, campoWhats, campoCidade];
    for (var i = 0; i < ok.length; i++) {
      if (!ok[i]) { campos[i].focus(); return; }
    }

    var url = 'https://wa.me/' + WHATSAPP_EMPRESA + '?text=' + encodeURIComponent(montarMensagem());
    $('reabrir').href = url;
    window.open(url, '_blank', 'noopener');
    if (window.va) window.va('event', { name: 'Enviar pelo WhatsApp' });

    formValor.hidden = true;
    $('saida').hidden = true;
    formContato.hidden = true;
    mostrar(confirmacao);
    $('confirmacao-titulo').focus();
  });

  // O clique num botão do painel não tira o foco do campo antes da hora: sem isso, a validação
  // ao sair do campo esconde a mensagem de erro, o botão sobe e o clique cai fora dele.
  Array.prototype.forEach.call(document.querySelectorAll('.painel button'), function (botao) {
    botao.addEventListener('mousedown', function (e) { e.preventDefault(); });
  });

  /* ---------- Política de privacidade: o link do consentimento abre o bloco ---------- */

  function abrirPrivacidade() {
    if (location.hash === '#privacidade') $('privacidade').open = true;
  }
  window.addEventListener('hashchange', abrirPrivacidade);
  $('link-privacidade').addEventListener('click', function () { $('privacidade').open = true; });
  abrirPrivacidade();

  /* ---------- Barra fixa do celular e anel ---------- */

  if ('IntersectionObserver' in window) {
    var barra = $('barra-fixa');
    var visiveis = {};
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) { visiveis[en.target.id] = en.isIntersecting; });
      var esconder = visiveis.topo || visiveis.simulacao || visiveis.rodape;
      barra.classList.toggle('visivel', !esconder);
    });
    ['topo', 'simulacao', 'rodape'].forEach(function (id) { visiveis[id] = id === 'topo'; obs.observe($(id)); });

    var relogio = $('relogio');
    if (!movimentoReduzido) {
      relogio.classList.add('espera');
      var obsRelogio = new IntersectionObserver(function (entradas) {
        if (entradas[0].isIntersecting) {
          relogio.classList.remove('espera');
          obsRelogio.disconnect();
        }
      }, { threshold: 0.4 });
      obsRelogio.observe(relogio);
    }
  }
})();
