# Ravena Solar — landing page

Landing page de energia solar residencial para a Ravena Solar (cliente fictício, Sorocaba/SP). Uma página, uma conversão: pedir uma simulação.

## Leia antes de mexer

- `SPEC.md`: o que a página faz e por quê. É a fonte das decisões.
- `DESIGN.md`: como a página se parece e se comporta.
- `brief.md`: o pedido original do cliente, com as respostas às objeções, o processo e o tom. Está no `.gitignore` e existe só na máquina local: use como fonte de conteúdo, não o publique e não faça commit dele. Se não estiver na pasta, peça ao responsável.

Se um pedido contrariar um desses arquivos, avise e atualize o arquivo primeiro, depois o código. Decisão nova entra na tabela de decisões da spec com o motivo.

## Ordem de trabalho

Siga nesta ordem. Não pule para o código.

1. **Textos primeiro.** Escreva todos os textos da página em `CONTEUDO.md`, seção por seção, na ordem da seção 5 da spec: títulos, parágrafos, rótulos de ficha, botões, mensagens da simulação (estimativa, recusa abaixo de R$ 450, erros, confirmação), mensagem enviada ao WhatsApp, título e descrição para buscadores, texto de consentimento. Use o `brief.md` como fonte e as regras de "Texto" abaixo. Não consulte outras páginas da Ravena Solar para escrever.
2. **Revisão independente dos textos, depois pare.** Rode a revisão por subagente (ver "Revisão independente") sobre o `CONTEUDO.md`, corrija o que ela apontar e só então peça a revisão do responsável, mostrando o relatório. Só siga depois da aprovação dele.
3. **Preparação.** Faça os três itens de "Preparação" abaixo.
4. **Construção.** Monte a página usando os textos aprovados, sem reescrevê-los no HTML.
5. **Verificação.** Ver "Antes de dizer que terminou" e, em seguida, "Revisão independente" sobre a página pronta.

## Preparação

Três arquivos precisam existir antes da construção. Não improvise substitutos.

1. **Fonte Archivo.** Baixe a versão variável com os eixos de peso e de largura (`wght` e `wdth`), de `github.com/google/fonts`, pasta `ofl/archivo`. Licença OFL, pode ser hospedada. Gere um `woff2` só com caracteres latinos e guarde em `fonts/`. O eixo de largura é obrigatório: os números gigantes usam largura 75.
2. **Malha do IBGE para o mapa.** Endereço conferido em 14/11/2026, devolve GeoJSON com todos os municípios de São Paulo (cerca de 310 KB):
   `https://servicodados.ibge.gov.br/api/v3/malhas/estados/SP?intrarregiao=municipio&qualidade=minima&formato=application/vnd.geo+json`
   - Códigos das quatro cidades: Sorocaba 3552205, Votorantim 3557006, Itu 3523909, Salto 3545209.
   - Recorte só os municípios que aparecem dentro do círculo, converta em caminhos SVG e embuta no HTML. O GeoJSON inteiro não vai para a página.
   - Não desenhe os contornos à mão nem decalque a imagem de referência.
3. **Logo da página.** O texto de `material/logo.svg` depende da Helvetica Neue, que não está disponível para converter. Monte a logo assim: o símbolo (sol e painel) copiado do SVG original, sem alterar, e "RAVENA SOLAR" escrito em Archivo. Detalhes na seção 9 do `DESIGN.md`.

## Stack

- HTML, CSS e JavaScript puros. Sem framework, sem dependências, sem etapa de build.
- `index.html` na raiz. Deploy na Vercel como site estático, a partir do GitHub.
- Fonte Archivo variável, hospedada no projeto. Nenhum recurso carregado de terceiros.
- Medição: Vercel Web Analytics. Sem cookies e sem aviso de cookies.

Para ver a página, suba a prévia local `ravena` (`.claude/launch.json`), que serve a pasta em `http://localhost:5173` com `python -m http.server`.

## Números: só estes

Todo número da página vem desta lista. Não arredonde, não atualize e não invente outros.

| Dado | Valor |
|---|---|
| Sistemas residenciais instalados | 412 |
| Nota no Google | 4,8, com 137 avaliações |
| Tempo de empresa | 6 anos |
| Equipe | 11 pessoas, própria, com carteira assinada |
| Queda da conta | de 75% a 90% (a conta não zera) |
| Investimento | de R$ 14 mil a R$ 19 mil |
| Sistema típico | 5 a 8 kWp, 12 a 20 painéis |
| Retorno | 3 a 4 anos |
| Vida útil | mais de 25 anos |
| Garantias | 25 anos do painel (performance), 10 do inversor, 5 da instalação (inclui infiltração causada pela obra) |
| Prazo | 45 a 60 dias da assinatura ao sistema ligado; 2 dias de instalação |
| Caso conferido | Sorocaba, 6,4 kWp, março de 2025: de R$ 780 para R$ 118 por mês (média de 12 meses) |
| Diferença no caso conferido | R$ 662 por mês, R$ 7.944 por ano |
| Financiamento | dois bancos, entrada zero possível |
| Proposta | três tamanhos de sistema |
| Empresas da região que fecharam | pelo menos três, deixando obra pela metade |
| Lei da cobrança sobre a energia injetada | Lei 14.300 |
| Conta mínima | R$ 450 por mês |
| Cidades | Sorocaba, Votorantim, Itu, Salto (raio de 80 km) |
| Distribuidora | CPFL |
| Resposta à simulação | no mesmo dia útil, por WhatsApp |
| WhatsApp | (15) 99000-0000 |
| Telefone | (15) 3200-0000 |
| E-mail | contato@ravenasolar.com.br |
| Endereço | Av. das Nações, 1420, sala 8, Sorocaba/SP, CEP 18000-000 |
| Horário | segunda a sexta, das 8h às 18h |
| CNPJ | 00.000.000/0001-00 |

## Texto

- Português do Brasil. Direto, específico, com número.
- Proibido: "energia do futuro", "sustentabilidade" como slogan, "revolução solar", promessa de 95% de economia, "grátis" (use "sem custo"), prazo inventado.
- Nunca dizer que a conta zera.
- Só residencial. A Ravena não vende bateria, não atende indústria nem comércio acima de 75 kWp e não faz manutenção de sistema de outra empresa.
- Sem fotos de banco de imagens, sem depoimento inventado, sem emoji.
- Não citar nem copiar outras páginas da Ravena Solar. Texto e visual são próprios.

## Simulação: regras que não podem quebrar

1. Etapa 1 pede só o valor da conta e mostra a estimativa na hora.
2. Conta estimada = de 10% a 25% do valor digitado. Sempre em faixa, sempre rotulada como estimativa.
   - Os dois limites são mostrados em reais inteiros, sempre arredondados para cima (`Math.ceil`). Sem centavos.
   - A economia é calculada a partir dos limites já arredondados (valor digitado menos cada limite), para os números da tela fecharem entre si.
3. Abaixo de R$ 450: mensagem que desaconselha, sem estimativa e sem etapa 2. O pedido não é enviado. R$ 450 exatos passam.
4. Etapa 2 pede nome, WhatsApp e cidade (lista fechada com as quatro). Todos obrigatórios.
5. O envio abre `wa.me` no número da empresa com nome, WhatsApp digitado, cidade, valor da conta e estimativa na mensagem. Nenhum dado vai para servidor.

Casos de teste fixos: R$ 449 barra; R$ 450 passa e mostra R$ 45 a R$ 113; R$ 780 mostra R$ 78 a R$ 195, com economia de R$ 585 a R$ 702 por mês e de R$ 7.020 a R$ 8.424 por ano; R$ 783 mostra R$ 79 a R$ 196.

## Design: o essencial

Os detalhes estão em `DESIGN.md`. O que mais se erra:

- Cores da logo: azul `#123A55`, laranja `#E8721C`, âmbar `#F2A03D`. Nada de verde nem gradiente.
- Botão principal: fundo laranja com texto `#0D2C42`. Nunca texto branco no laranja.
- Número laranja só sobre branco ou azul. Âmbar como texto só sobre azul.
- Cantos de 2 px, linhas finas, sem sombras, sem cartões.
- Primeiro o celular. Campos com texto de 17 px.
- Respeitar `prefers-reduced-motion`.

## Antes de dizer que terminou

Verifique no navegador, não só lendo o código:

- Os três casos de teste da simulação.
- Formulário inválido não envia e aponta o campo.
- O link do WhatsApp abre com a mensagem completa.
- Largura de 375 px e de 1280 px, sem rolagem horizontal.
- Navegação só pelo teclado, com foco visível.
- Os critérios de aceite da seção 11 da spec.

Registre o que foi verificado, e como, em `VERIFICACAO.md`. Se algo não pôde ser verificado, escreva isso lá em vez de omitir.

## Revisão independente

Quem escreveu não é bom juiz do próprio trabalho. Em dois momentos, use um subagente novo, sem o histórico da conversa, para conferir o resultado contra os arquivos `.md`:

- **Depois de escrever o `CONTEUDO.md`,** antes de pedir a revisão do responsável.
- **Depois de construir e verificar a página,** antes de dizer que terminou.

### O que pedir ao subagente

- Ler `CLAUDE.md`, `SPEC.md`, `DESIGN.md` e `brief.md` por conta própria. Não resuma as regras para ele: o resumo carrega os seus enganos.
- Conferir regra por regra e devolver uma lista. Cada item traz: a regra e o arquivo de onde ela vem, o lugar exato no resultado (arquivo e linha, ou seção da página), e um veredito entre **cumpre**, **não cumpre** e **não foi possível verificar**.
- Só relatar. O subagente não edita nenhum arquivo.
- Não aprovar por falta de prova: o que ele não conseguiu conferir é "não foi possível verificar", nunca "cumpre".

### O que ele confere em cada momento

**Nos textos:**

- Cada número, um por um, contra a tabela "Números: só estes".
- Os termos e promessas proibidos em "Texto".
- Cada afirmação sobre a empresa contra o `brief.md`: nada inventado, nada além do que o brief sustenta.
- Se todos os textos pedidos no passo 1 estão lá, incluindo as mensagens da simulação.

**Na página:**

- Os critérios de aceite da seção 11 da spec.
- A ordem das seções (spec, seção 5) e as regras de cor, tipografia e componentes do design.
- Se os textos da página são os do `CONTEUDO.md` aprovado, sem alteração.
- O comportamento, com a página aberta no navegador pelo próprio subagente: os casos de teste da simulação, validação, link do WhatsApp, 375 px e 1280 px, teclado. Ler o código não vale como verificação desses itens.

### O subagente abre a página

A revisão da página só vale se o subagente abrir a página de verdade. Decisão do responsável.

- Antes de chamar o subagente, suba a prévia local: a configuração `ravena` em `.claude/launch.json` serve a pasta em `http://localhost:5173`. Confirme você mesmo que a página abre.
- Use um subagente do tipo geral, que tem as ferramentas de navegador. Passe a ele o endereço e peça que navegue, preencha a simulação, redimensione a janela e leia a página pelas ferramentas de navegador.
- No relatório, cada item de comportamento diz o que o subagente fez e o que viu (valor digitado, texto que apareceu, largura usada).
- Se o subagente não conseguir abrir a página, não aceite um relatório baseado em leitura de código e não marque a verificação como feita. Pare, explique ao responsável o que falhou e combine com ele a saída. Uma saída possível é revisar pelo endereço de prévia da Vercel depois do deploy.

### Depois do relatório

- Corrija cada "não cumpre" e rode a revisão de novo, com outro subagente novo, até não restar nenhum.
- Se discordar de um item, não o descarte: leve ao responsável.
- Guarde em `VERIFICACAO.md` o relatório final e o histórico do que foi apontado e corrigido. É a evidência de verificação da entrega.
- A revisão por subagente não substitui a do responsável. Ela confere regra escrita; se a página está boa, quem decide é ele.

## Arquivos

- `material/logo.svg` e `material/logo.png`: logo original do cliente. Não editar; gerar as versões da página a partir delas.
- `material/mapa-cidades-referencia.png`: referência de enquadramento do mapa. Não vai para a página.
