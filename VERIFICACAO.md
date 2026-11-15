# VERIFICACAO — Landing page Ravena Solar

## 1. Textos (`CONTEUDO.md`) — revisão independente, 14/11/2026

Três rodadas, cada uma com um subagente novo, sem o histórico da conversa. Cada subagente leu por conta própria `CLAUDE.md`, `SPEC.md`, `DESIGN.md` e `brief.md`, conferiu o `CONTEUDO.md` regra por regra e só relatou, sem editar arquivos.

### Histórico

| Rodada | Cumpre | Não cumpre | Não foi possível verificar |
|---|---|---|---|
| 1 | 70 | 4 | 5 |
| 2 | 57 | 1 | 4 |
| 3 | 83 | 0 | 7 |

(As contagens variam porque cada revisor agrupou os itens à sua maneira.)

### O que foi apontado e corrigido

| Rodada | Apontamento | Correção |
|---|---|---|
| 1 | Seção 03: "números conferidos na conta de luz" acrescenta ao brief como a conferência foi feita | Ficou "com números conferidos" |
| 1 | Seção 07: "É o medo mais comum de quem tem telha de barro" inverte o brief | Ficou "O medo de infiltração aparece principalmente em quem tem telha de barro" |
| 1 | Seção 05: a descrição do relógio dizia que a volta inteira é a garantia do painel; o DESIGN diz que é a vida útil | Descrição reescrita com vida útil |
| 1 | Seção 10 dizia "o investimento não se paga" e a recusa da simulação, "demora demais para se pagar" | Unificado em "demora demais para se pagar" (formulação do DESIGN, seção 8) |
| 1 | Sem fonte: "Nada muda nas tomadas nem nos aparelhos" e "não identifica quem visita" | As duas frases foram retiradas |
| 2 | Seções 09 e 11 prometiam a simulação completa no mesmo dia útil; o brief sustenta só a resposta no mesmo dia útil | Reescritas como "Respondemos ... no mesmo dia útil" |
| 2 | Seção 05: "Um sistema residencial custa" generaliza a faixa do sistema típico | Ficou "Um sistema residencial típico custa" |
| 3 | O exemplo de R$ 780 na simulação não dizia se era texto da página | Marcado como nota para a construção |

### Relatório final (rodada 3)

Nenhum "não cumpre". Conferidos e aprovados: todos os números contra a tabela do `CLAUDE.md`; ausência dos termos e promessas proibidos; afirmações sobre a empresa contra o brief; presença de todos os textos do passo 1, incluindo as mensagens da simulação; coerência interna.

Itens que o revisor não pôde verificar, para decisão do responsável:

1. **"Lei 14.300"** é exigida pela spec e pelo design, mas o número não está na tabela "Números: só estes".
2. **Economia por ano na simulação** (exemplo: R$ 7.020 a R$ 8.424) é calculada pela regra da spec, mas não está na tabela nem nos casos de teste.
3. **Cópia de outras páginas da Ravena:** o site antigo não está no repositório, então não houve comparação. Os textos foram escritos sem consultá-lo.
4. **Seção 04:** as explicações de painel, inversor e consumo são fatos gerais de energia solar, sem fonte no brief.
5. **Política de privacidade:** a finalidade única e o direito de ver, corrigir ou apagar dados são compromissos que o brief não menciona.
6. **"Energia já paga"** (legenda do relógio, literal do design) pode ser lida como contrária a "a conta não zera".
7. **Colchete de 45 a 60 dias:** começa na assinatura, que fica dentro da célula 3; a posição só se confere na página montada.

Também apontado na rodada 2, sem veredito de descumprimento: as seções 02, 05 e 07 têm textos a mais do que o design descreve (abertura e fecho na 02, ficha de oito linhas na 05, parágrafo de apoio na 07).

### Respostas do responsável aos itens não verificados (14/11/2026)

Ajustes feitos depois da rodada 3, sem nova revisão por subagente, por decisão do responsável.

1. "Lei 14.300" entrou na tabela "Números: só estes" do `CLAUDE.md`.
2. A economia por ano entrou nos casos de teste fixos: para R$ 780, de R$ 7.020 a R$ 8.424.
3. Seção 04 aprovada. Conferido: os únicos números são 12 a 20 painéis e 5 a 8 kWp, ambos da tabela; a célula 4 diz que à noite o sistema não produz, em dia nublado produz menos, e o que compensa é o crédito acumulado no mês.
4. Política de privacidade aprovada.
5. "Energia já paga" virou "Sistema já pago" no `CONTEUDO.md` e no `DESIGN.md`.
6. Seção 02: abertura e fecho com uma frase cada. Seção 05: ficha reduzida a quatro linhas, sem garantias, retorno e vida útil. Seção 07: apoio em duas frases. `DESIGN.md` atualizado para descrever o que ficou.
7. Cópia do site antigo: sem ação.

Textos aprovados pelo responsável em 14/11/2026.

## 2. Preparação — 14/11/2026

| Item | Como foi feito | Resultado |
|---|---|---|
| Fonte Archivo | Baixada de `github.com/google/fonts`, pasta `ofl/archivo` (`Archivo[wdth,wght].ttf`). Subconjunto latino (Basic Latin, Latin-1 e pontuação tipográfica) gerado com fonttools em `woff2`. Eixos limitados ao que a página usa: `wght` 400–700, `wdth` 75–100 | `fonts/archivo-latin.woff2`, 52 KB, com a licença em `fonts/OFL.txt`. No navegador, `document.fonts` informa "Archivo loaded"; o número gigante mede 604 px com largura 75 e 761 px com largura 100, o que confirma o eixo de largura ativo |
| Malha do IBGE | GeoJSON baixado do endereço do `CLAUDE.md` (310 KB). Um script recorta os municípios em volta das quatro cidades (códigos 3552205, 3557006, 3523909, 3545209), projeta e converte em caminhos SVG | 4 cidades e 68 vizinhos embutidos no `index.html` (cerca de 12 KB). O GeoJSON não está no repositório. Nenhum contorno desenhado à mão. Leitura de norte a sul conferida na tela: Salto, Itu, Sorocaba, Votorantim |
| Logo | Símbolo copiado de `material/logo.svg` com as mesmas coordenadas; "RAVENA" (peso 700) e "SOLAR" (peso 400) em Archivo, nas posições do original. Versão clara: painel e "RAVENA" brancos, grade azul, sol e "SOLAR" âmbar | Embutida como `<symbol>` no `index.html`, usada no cabeçalho e no rodapé |

## 3. Página — verificação no navegador, 14/11/2026

Feita pelo autor na prévia local (`http://localhost:5173`, navegador embutido do aplicativo, motor Chromium), digitando e clicando na página. A revisão independente está na seção 4.

### Simulação

| Teste | O que foi feito | O que apareceu | Resultado |
|---|---|---|---|
| Etapa 1 vazia | Clique em "Ver estimativa" sem digitar | Erro "Informe o valor médio da sua conta de luz.", foco no campo, sem estimativa | passa |
| R$ 449 | Digitado 449, Enter | Recusa "Com essa conta, não recomendamos o sistema", sem estimativa, etapa 2 escondida | passa |
| Corrigir o valor | Clique no botão | Recusa some, foco volta ao campo | passa |
| R$ 450 | Digitado 450, Enter | Conta estimada R$ 45 a R$ 113; economia R$ 337 a R$ 405 por mês; etapa 2 aparece | passa |
| R$ 780 | Digitado "780,50" (centavos descartados), Enter | R$ 78 a R$ 195; economia R$ 585 a R$ 702 por mês e R$ 7.020 a R$ 8.424 por ano. A faixa contém R$ 118 | passa |
| R$ 783 | Digitado 783, Enter | R$ 79 a R$ 196 | passa |
| Valor alterado depois do resultado | Digitado outro valor sem reenviar | Estimativa e etapa 2 somem até novo "Ver estimativa" | passa |
| Etapa 2 vazia | Clique em "Enviar pelo WhatsApp" | Três erros em vermelho (`#B3261E`), `aria-invalid` nos três campos, foco em Nome, nada aberto | passa |
| WhatsApp incompleto | Digitado "159", Tab | Máscara "(15) 9", erro do campo ao sair | passa |
| Sem cidade | Nome e WhatsApp válidos, Enter | Erro só em Cidade, foco em Cidade, nada aberto | passa |
| Envio válido | Ana Souza, (15) 98888-7777, Itu, conta de R$ 780 | Abre `https://wa.me/5515990000000?text=...` com: saudação, Nome, WhatsApp, Cidade, "Valor médio da conta de luz: R$ 780 por mês" e "Estimativa mostrada na página: conta de R$ 78 a R$ 195 por mês". Painel troca para a confirmação, foco no título, "Abrir o WhatsApp de novo" aponta para o mesmo endereço | passa |

### Layout, teclado e demais critérios

| Item | Como | Resultado |
|---|---|---|
| 375 px | Janela de 375 × 812. `scrollWidth` = `clientWidth` = 375; nenhum elemento passa da borda direita. Número gigante em 88 px; campos em 17 px | passa |
| 1280 px | Janela de 1280 × 800. `scrollWidth` = `clientWidth` = 1265 (descontada a barra de rolagem) | passa |
| Barra fixa do celular | Em 375 px: escondida no topo, visível a partir da seção 02, escondida com a simulação na tela. Em 1280 px: `display: none` | passa |
| Teclado | 13 paradas com Tab, na ordem da página; todas com contorno de 3 px: branco no azul, azul nas seções claras e no painel da simulação. Enter em "Pedir simulação" leva a `#simulacao` | passa |
| Botão do topo | Leva à seção de simulação (topo da seção a 16 px da borda da janela) | passa |
| Ordem das seções | 01 a 11 e rodapé, na ordem da seção 5 da spec | passa |
| Link do consentimento | Clique em "política de privacidade" abre o bloco no rodapé | passa |
| Relógio de 25 anos | Arcos desenhados depois de entrar na tela: âmbar de 0 a 3 anos, âmbar claro de 3 a 4, azul de 4 a 25 | passa |
| Console | Um único erro: 404 em `/_vercel/insights/script.js`, que só existe no deploy da Vercel | esperado |

Correção sobre o relógio: depois da revisão independente (seção 4), o trecho âmbar passou a ir de 0 a 4 anos em uma cor só, e o azul de 4 a 25.

### O que não foi verificado

- **Abertura real do WhatsApp.** No teste, `window.open` foi interceptado para ler o endereço sem abrir a conversa. O endereço e a mensagem foram conferidos; a abertura do aplicativo, não.
- **Safari, Firefox e Edge.** Só o navegador embutido (Chromium) foi usado.
- **Celular de verdade.** O teclado numérico e o zoom do iPhone em campos não foram testados em aparelho.
- **Zoom de 200%** e leitor de tela (anúncio do resultado por `aria-live`).
- **`prefers-reduced-motion`:** a regra está no CSS e no script, mas não foi testada com a preferência ligada.
- **Deploy na Vercel e Web Analytics:** a página ainda não foi publicada. O evento personalizado do clique no WhatsApp está no código, mas depende do plano (item aberto da spec, seção 9).
- **Porta da prévia:** o aplicativo informou a porta 5174, mas o servidor atende na 5173, como está no `launch.json`.

## 4. Página — revisão independente, 14/11/2026

Duas rodadas, cada uma com um subagente novo, sem o histórico da conversa. Os dois abriram a página de verdade em `http://localhost:5173` pelas ferramentas de navegador, em 375 px e 1280 px, digitaram e clicaram na simulação e leram o estado depois de cada ação. Nenhum editou arquivos nem enviou mensagem: `window.open` foi substituído por uma função que só guarda o endereço.

### Histórico

| Rodada | Cumpre | Não cumpre | Não foi possível verificar |
|---|---|---|---|
| 1 | 36 | 6 | 12 |
| 2 | 67 | 4 | 10 |

Nas duas rodadas passaram: os critérios de aceite da spec que dependem só da página (todos menos o de navegadores), os casos de teste fixos (449, 450, 780, 783), a validação, o link do WhatsApp com a mensagem igual à do `CONTEUDO.md`, a ausência de rolagem horizontal em 375 px e 1280 px, o teclado com foco visível, a ordem das seções e a igualdade dos textos com o `CONTEUDO.md` (231 trechos conferidos na rodada 2).

### O que foi apontado e corrigido

| Rodada | Apontamento | Correção |
|---|---|---|
| 1 | Botão do cabeçalho no celular com 44 px e texto de 15 px (regra: 52 px e 17 px) | Botão com 52 px e 17 px; logo do cabeçalho reduzida para caber |
| 1 | Linhas de texto com até 87 caracteres em 1280 px (regra: 65) | Largura máxima dos parágrafos reduzida; maior linha medida na rodada 2: 64 |
| 1 | Cor `#F8CF9E` no anel, fora da tabela de cores e sem legenda | Trecho âmbar único de 0 a 4 anos |
| 1 | "R$ 7.944" em peso 600 (regra: 700) | Peso 700 |
| 1 | "Retorno do investimento" com 11 px no celular (regra: 13 px) | 13 px |
| 1 | Links do rodapé e link da política com menos de 44 px de altura | 44 px ou mais; rodada 2 não encontrou nenhum alvo menor |
| 2 | Rodapé sem a linha fina que o separa da simulação | Linha adicionada; conferida pelo autor (borda de 1 px medida em 375 e 1280) |
| 2 | Espaços fora da escala do design (6, 10, 14, 20, 40, 56 px) | Trocados por valores da escala (8, 12, 16, 24, 48). Fica fora dela só a margem lateral de 20 px, que é regra do próprio design. Conferido pelo autor depois da troca: sem rolagem horizontal e sem alvo de toque abaixo de 44 px nas duas larguras |

### Pendências levadas ao responsável (não corrigidas)

1. **Número de destaque na simulação em desktop.** A tabela do design pede 80 px no desktop; o campo do valor e a faixa estimada estão em 48 px. Motivo: o painel tem cerca de 450 px úteis, e "R$ 1.250 a R$ 3.125" em 80 px não cabe em uma linha.
2. **"75–90%" ocupa a largura.** Em 1280 px o número tem 200 px de altura, como manda a tabela, e 604 px de largura numa coluna de 1080 px. As duas regras do design não fecham entre si no desktop.

As correções da rodada 2 foram conferidas só pelo autor; não houve terceira rodada de subagente, à espera da decisão sobre as duas pendências.

### Não foi possível verificar (rodada 2)

- Safari, Firefox e Edge.
- Zoom de 200%, leitor de tela, `prefers-reduced-motion`, rolagem suave e transição de 200 ms (o painel do navegador estava oculto e não havia emulação).
- Contorno de campo de 1,5 px (a tela de teste, de densidade 1, mostra 1 px).
- Grade de 12 colunas (o CSS usa proporções, sem grade explícita).
- Tamanhos de fonte sem papel na tabela do design: 15 px (texto secundário, erros, política), 19 e 22 px (títulos de célula e do painel), 24 px (colchete), nomes do mapa com cerca de 12 px no celular.
- Proporção das quatro cidades no círculo do mapa: cerca de 53% do diâmetro na vertical (regra: cerca de 60%).
- Vercel Web Analytics, que só existe no deploy.

### Observações do revisor sem regra escrita

- No celular, "3 a 4 anos" quase encosta na borda interna do anel (cerca de 3 px de cada lado na rodada 2; o texto central ganhou um pouco de espaço depois).
- Depois de um erro no valor, a mensagem fica na tela enquanto a pessoa redigita, até o próximo envio ou a saída do campo.
- A prévia local serve também `brief.md` e os demais `.md`. O `brief.md` está no `.gitignore` e não vai para o repositório.

## 5. Página — revisão final, 15/11/2026

### Decisão do responsável sobre as pendências da seção 4

Mantidos os 48 px nos números da simulação e os 200 px do "75–90%" no desktop. Registrado no `DESIGN.md` (seção 4) e na tabela de decisões do `SPEC.md`.

### Rodada 3 (revisão completa, subagente novo)

Página aberta pelo subagente em 375 px, 1280 px e 640 px. Resultado: 85 "cumpre", 1 "não cumpre", 6 "não foi possível verificar". Passaram os critérios de aceite, os casos de teste fixos, os textos (12 seções iguais ao `CONTEUDO.md`), as larguras, o teclado, cor, tipografia, espaços e componentes, incluindo a linha do rodapé e a escala de espaços corrigidas depois da rodada 2.

| Apontamento | Correção |
|---|---|
| O primeiro clique em "Enviar pelo WhatsApp" se perdia quando o campo em foco ainda mostrava mensagem de erro: ao sair do campo o erro sumia, o botão subia e o clique caía fora dele. Só o segundo clique enviava. Pelo teclado funcionava | Os botões do painel não tiram mais o foco do campo no `mousedown` (`script.js`). Conferido pelo autor em 375 px: foco em Nome com erro visível, um clique, WhatsApp aberto uma vez e confirmação na tela |

### Rodada 4 (conferência da correção, subagente novo, só o comportamento da simulação)

Página aberta pelo subagente em 375 px e 1280 px, com digitação e cliques reais e registro dos eventos. Resultado: 7 "cumpre", 0 "não cumpre", 0 "não foi possível verificar".

| Item | O que foi feito e visto |
|---|---|
| Casos fixos | 449 barra; 450 mostra R$ 45 a R$ 113; 780 mostra R$ 78 a R$ 195, com R$ 585 a R$ 702 por mês e R$ 7.020 a R$ 8.424 por ano; 783 mostra R$ 79 a R$ 196 |
| Formulário inválido | Tudo vazio: três erros, foco em Nome, nada aberto. Nome válido e WhatsApp "159": erros de WhatsApp e cidade, foco em WhatsApp |
| Primeiro clique em "Enviar pelo WhatsApp" | Quatro variações (foco em Nome ou em WhatsApp com erro visível, em 375 e 1280): enviou no primeiro clique em todas. Eventos: `mousedown`, `mouseup` e `click` no botão, depois `submit`; o campo só perde o foco depois do envio |
| Primeiro clique em "Ver estimativa" | Erro de valor vazio na tela, 780 digitado sem sair do campo, um clique: estimativa no primeiro clique, nas duas larguras |
| Endereço e mensagem | `https://wa.me/5515990000000?text=...` com nome, WhatsApp digitado, cidade, valor e estimativa; conferido com as quatro cidades |
| Só teclado | Tab, Enter e setas, do campo do valor até a confirmação; contorno de 3 px em todas as paradas |
| Rolagem horizontal | Nenhuma em 375 px e 1280 px, com recusa, estimativa, erros e confirmação |

A rodada 4 não refez a revisão de design nem a comparação de textos: a única mudança depois da rodada 3 foi no `script.js`.

### Estado final

- Nenhum "não cumpre" em aberto.
- Continua sem verificação, pelos limites do ambiente: Safari, Firefox e Edge; celular de verdade; abertura real do WhatsApp; leitor de tela; `prefers-reduced-motion`; zoom real de 200% (só simulado com janela de 640 px); contorno de 1,5 px em tela de alta densidade; Vercel Web Analytics e o deploy.
- Pontos que o revisor deixou para o responsável, sem regra clara: a grade do topo é feita com `linear-gradient` de 1 px (não é degradê de cor); o escurecimento do botão ao passar o mouse é quase imperceptível (`#E8721C` para `#E4701B`, limite para manter o contraste de 4,5); as quatro cidades ocupam cerca de 53% do diâmetro do mapa (regra: cerca de 60%); depois da confirmação não há botão para refazer a simulação sem recarregar a página.

## 6. Ajuste pedido pelo responsável depois da revisão final, 15/11/2026

O responsável apontou, por captura de tela, que "Retorno do investimento" passava por cima do anel de 25 anos no desktop.

| Mudança | Arquivo |
|---|---|
| Rótulo do centro do anel em 11 px, quebrado em duas linhas | `styles.css` |
| Anel mais fino e com raio maior (traço de 28 para 24, raio de 150 para 160 no desenho), com as marcas de 5, 10 e 25 anos reposicionadas, para dar folga ao texto central | `index.html` |
| Exceção registrada na seção 4 | `DESIGN.md` |

Conferido pelo autor no navegador, medindo a distância entre os cantos do texto e a borda interna do anel:

| Largura | Folga do rótulo | Folga do número "3 a 4 anos" | Rolagem horizontal |
|---|---|---|---|
| 375 px | 46 px | 3 px (em uma linha) | nenhuma |
| 1280 px | 41 px | 15 px (em duas linhas) | nenhuma |

Esse ajuste não passou por revisão de subagente.

## 7. Página publicada — 15/11/2026

Repositório: `https://github.com/gecbeltrao/landing-ravena` (branch `main`, commit `d3d38ac`). Deploy: `https://landing-ravena.vercel.app`.

Conferido pelo autor no endereço publicado, no navegador embutido (Chromium), digitando e clicando na página:

| Item | O que foi feito e visto | Resultado |
|---|---|---|
| Página abre | Título correto, seções 01 a 11, fonte Archivo carregada. Recursos carregados: só `fonts/archivo-latin.woff2`, `styles.css` e `script.js`, do próprio domínio | passa |
| `brief.md` | `https://landing-ravena.vercel.app/brief.md` responde 404: o brief não foi publicado | passa |
| Cookies | `document.cookie` vazio | passa |
| R$ 449 | Digitado 449, Enter: recusa, sem estimativa, sem etapa 2 | passa |
| R$ 450 | R$ 45 a R$ 113; economia de R$ 337 a R$ 405 por mês | passa |
| R$ 780 | R$ 78 a R$ 195; R$ 585 a R$ 702 por mês; R$ 7.020 a R$ 8.424 por ano | passa |
| R$ 783 | R$ 79 a R$ 196 | passa |
| Formulário inválido | Etapa 2 vazia, clique em enviar: três erros, foco em Nome, nada aberto | passa |
| Envio | Teste, (15) 98888-7777, Salto, conta de R$ 780, um clique: `https://wa.me/5515990000000` com nome, WhatsApp, cidade, valor e estimativa na mensagem; confirmação na tela. A abertura foi interceptada, nenhuma mensagem enviada | passa |
| Larguras | 375 px: `scrollWidth` 375. 1280 px: `scrollWidth` = `clientWidth` = 1265 | passa |
| Vercel Web Analytics | `/_vercel/insights/script.js` responde **404** no endereço publicado | **não funciona ainda** |

### Pendências depois do deploy

- **Web Analytics desligado.** O script de medição não existe no deploy, sinal de que o Web Analytics não foi ativado no projeto da Vercel. Depois de ativar no painel, é preciso um novo deploy para o script passar a ser servido. Até lá a página funciona, mas não conta acessos e registra um erro 404 no console.
- **Evento personalizado do clique no WhatsApp:** segue aberto (spec, seção 9), depende do plano.
- Continuam sem verificação: Safari, Firefox e Edge; celular de verdade; abertura real do WhatsApp; leitor de tela; movimento reduzido.

### Web Analytics ativado — 15/11/2026

O responsável ativou o Web Analytics no painel da Vercel e refez o deploy. Conferido pelo autor em `https://landing-ravena.vercel.app`, no navegador embutido:

- `/_vercel/insights/script.js` responde 200 (antes, 404).
- Ao abrir a página, sai um `POST /_vercel/insights/view` com resposta 200: o acesso é registrado.
- `document.cookie` continua vazio, e todos os recursos vêm do próprio domínio.

Não conferido: o acesso aparecendo no painel da Vercel (só o responsável vê) e o evento personalizado do clique no WhatsApp, que segue aberto na spec.

## 8. Testes do responsável na página publicada — 15/11/2026

Feitos pelo responsável em `https://landing-ravena.vercel.app` e relatados por ele. O autor não repetiu estes testes.

| Item | Relato do responsável | Situação |
|---|---|---|
| Celular de verdade | "Tudo certo pelo celular, nada quebrado." Aparelho e navegador não informados | verificado pelo responsável |
| Outros navegadores | Edge e Opera: "tudo certo" | verificado pelo responsável |
| Movimento reduzido | Testado com a preferência de movimento reduzido ligada, sem problema relatado | verificado pelo responsável |
| Contagem de acessos | Captura do painel da Vercel (Web Analytics, últimos 7 dias): 3 visitantes, 114 visualizações de página, 3 online | verificado pelo responsável |

### Continua sem verificação

- **Safari e Firefox.** O critério de aceite da spec cita Chrome, Safari, Firefox e Edge; Edge foi testado pelo responsável, e Chromium pelo autor e pelos subagentes.
- **Conversa aberta no WhatsApp:** não se aplica a esta entrega. O número (15) 99000-0000 é fictício, como toda a empresa, então a conversa não tem como abrir. O que a página controla foi conferido: o endereço `wa.me/5515990000000` e a mensagem completa (seções 3, 5 e 7). Com um número real, basta trocar a constante `WHATSAPP_EMPRESA` no `script.js` e os contatos do rodapé.
- **Evento personalizado "Enviar pelo WhatsApp":** a captura mostra visitantes e visualizações, não a lista de eventos. O item da spec (seção 9) segue aberto.
- **Leitor de tela** e zoom real de 200%.

Observação: 114 visualizações para 3 visitantes é um número alto. Pode ser efeito dos testes repetidos e das recargas de página durante a verificação; vale olhar de novo depois de alguns dias de uso normal.

### Mais testes do responsável e o evento do WhatsApp — 15/11/2026

| Item | O que foi feito e visto | Situação |
|---|---|---|
| Firefox e Safari | Testados pelo responsável: "deu certo" | verificado pelo responsável |
| Zoom de 200% | Testado pelo responsável: "deu tudo certo" | verificado pelo responsável |
| Evento "Enviar pelo WhatsApp": envio | Conferido pelo autor no endereço publicado: depois de um envio de teste (abertura interceptada), a página fez `POST /_vercel/insights/event` e recebeu 200 | a página envia o evento |
| Evento "Enviar pelo WhatsApp": painel | O responsável relatou que o clique não aparece no painel da Vercel | não aparece; causa não confirmada |

Com isso, o critério de aceite de navegadores está coberto: Chromium (autor e subagentes), Edge, Opera, Firefox e Safari (responsável).

Sobre o evento: como a página envia e a Vercel aceita, a hipótese mais provável é que o plano em uso não exiba eventos personalizados. Isso não foi confirmado no painel. O item segue aberto na seção 9 da spec, agora com esse achado.

Continua sem verificação: leitor de tela.

### Leitor de tela e evento do WhatsApp — 15/11/2026

| Item | Relato do responsável | Situação |
|---|---|---|
| Leitor de tela | Testado pelo responsável na página publicada: "deu certo" | verificado pelo responsável |
| Evento "Enviar pelo WhatsApp" no painel | O plano da Vercel em uso não exibe eventos personalizados | limitação do plano, confirmada pelo responsável |

O item aberto da seção 9 da spec foi fechado com esse resultado. A página continua enviando o evento, que a Vercel aceita; ele só não é exibido neste plano.

### Situação da verificação

Não resta item sem verificação entre os listados neste arquivo. Verificado pelo autor e por subagentes: simulação, validação, endereço e mensagem do WhatsApp, larguras, teclado, textos, design e deploy. Verificado pelo responsável: celular, Edge, Opera, Firefox, Safari, movimento reduzido, zoom de 200%, leitor de tela e contagem de acessos. Não se aplica: abertura da conversa no WhatsApp, por o número ser fictício.
