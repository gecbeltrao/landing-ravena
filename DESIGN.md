# DESIGN — Landing page Ravena Solar

Status: v1.0 (14/11/2026), direção aprovada pelo responsável. Complementa o `SPEC.md`: lá está o que a página faz, aqui está como ela se parece e se comporta.

A v0.5 troca a direção visual. A anterior (fundo creme, botão âmbar, par "antes e hoje" no topo, barras e linha do tempo) foi descartada pelo responsável.

## 1. Ideia central

**A página é uma ficha técnica desenhada sobre a grade do painel.**

A Ravena se descreve como técnica e gosta de número. Uma proposta de energia solar, no fim, é uma ficha: potência, valor, prazo, garantia. A página assume essa cara em vez de imitar um folheto.

O motivo visual é a grade do painel solar que está na logo: linhas finas dividindo a superfície em células. Na página, as seções são divididas por linhas finas e os dados moram em células. O círculo do sol, também da logo, aparece duas vezes: no relógio de 25 anos e no mapa.

Consequências:

- Dados em linhas de ficha (rótulo à esquerda, valor à direita, linha fina embaixo) em vez de cartões e contadores.
- Seções numeradas de 01 a 11, como itens de um documento técnico.
- Nenhuma ilustração de casa, telhado ou sol sorridente. Sem fotos, sem banco de imagens, sem emoji.
- O topo é azul e tipográfico: o número é a imagem.
- As perguntas que o cliente mais ouve viram títulos de seção, entre aspas.
- A única figura que não é dado é o mapa das quatro cidades.

## 2. O que muda em relação ao site antigo

| Site antigo | Página nova | Motivo |
|---|---|---|
| Gradientes azul e verde | Cores chapadas | O verde não é da marca. |
| Cartões com sombra e cantos de 14 px | Células separadas por linha fina, cantos de 2 px | A grade é o motivo da página. |
| Botões em pílula, texto em maiúsculas | Botão retangular laranja, texto normal | O tom é direto, não alto. |
| Poppins | Archivo | Ver seção 4. |
| Texto justificado, 15 px | Alinhado à esquerda, 17 px | Justificado abre buracos no celular. |
| Aviso de cookies | Sem aviso | A medição da Vercel não usa cookies. |

## 3. Cor

As três cores vêm de `logo.svg`. As demais são neutros de apoio.

| Nome | Valor | Uso |
|---|---|---|
| Azul Ravena | `#123A55` | Fundo do topo, da simulação e do rodapé; texto e linhas nas seções claras |
| Laranja | `#E8721C` | Fundo do botão principal; números grandes sobre branco ou azul |
| Âmbar | `#F2A03D` | Número gigante do topo, células de destaque, cidades no mapa, texto de realce sobre azul |
| Branco | `#FFFFFF` | Fundo principal das seções claras |
| Névoa | `#EEF2F5` | Fundo alternado de seção (cinza frio) |
| Azul profundo | `#0D2C42` | Texto do botão laranja |
| Texto secundário | `#4A5F6E` | Legendas e apoio em fundo claro |
| Gelo | `#C9D6DE` | Texto secundário e linhas em fundo azul |
| Borda de campo | `#6F8290` | Contorno de campos |
| Erro | `#B3261E` | Mensagens de erro |

A página é fria: branco, cinza frio e azul. O calor fica só no laranja e no âmbar, que por isso chamam a atenção.

### Contraste medido

Fórmula da WCAG. Mínimo de 4,5 para texto normal e 3 para texto grande e contornos.

| Combinação | Razão | Pode |
|---|---|---|
| Branco sobre azul | 11,92 | Todo texto |
| Azul sobre branco | 11,92 | Todo texto |
| Azul sobre névoa | 10,59 | Todo texto |
| Gelo sobre azul | 8,03 | Todo texto |
| Texto secundário sobre branco | 6,66 | Todo texto |
| Erro sobre branco | 6,54 | Todo texto |
| Texto secundário sobre névoa | 5,92 | Todo texto |
| Âmbar sobre azul | 5,60 | Todo texto |
| Azul profundo sobre laranja (botão) | 4,71 | Todo texto |
| Borda de campo sobre branco | 3,98 | Contorno |
| Laranja sobre azul | 3,89 | Só número grande |
| Laranja sobre branco | 3,06 | Só número grande (24 px ou mais, em negrito) |
| Laranja sobre névoa | 2,72 | Não usar |
| Âmbar sobre branco | 2,13 | Não usar como texto |

Regras que saem daí:

- **O botão principal é laranja com texto em azul profundo.** Texto branco no laranja dá 3,06 e não passa.
- **Número laranja só sobre branco ou azul**, nunca sobre névoa.
- **Âmbar como texto só sobre azul.**
- Links no texto são azuis e sublinhados.

Tema único. Sem modo escuro.

## 4. Tipografia

**Archivo** para tudo, em arquivo variável hospedado no próprio projeto (um `woff2`, só caracteres latinos). Confirmado pelo responsável.

- A logo é em Helvetica Neue, que não pode ser distribuída na web. A Archivo é uma grotesca da mesma linhagem e gratuita.
- A Archivo variável tem eixo de largura. Os números gigantes usam a versão condensada (largura 75), em negrito: cabem maiores na tela e ganham cara de placa técnica. O texto usa a largura normal.
- Algarismos tabulares em toda ficha e na estimativa.

Reserva: `"Helvetica Neue", Helvetica, Arial, sans-serif`.

| Papel | Celular | Desktop | Peso e largura |
|---|---|---|---|
| Número gigante do topo | 88 px | 200 px | 700, condensada |
| Número de destaque | 48 px | 80 px | 700, condensada |
| Título da página | 26 px | 36 px | 600 |
| Título de seção | 24 px | 32 px | 700 |
| Texto | 17 px | 18 px | 400 |
| Rótulo de ficha e número de seção | 13 px | 13 px | 500, maiúsculas com espaçamento de 0,12 em |
| Texto do botão | 17 px | 17 px | 700 |

- **Exceção na simulação (decidido pelo responsável, 14/11/2026):** dentro do painel da simulação, o campo do valor e a faixa estimada ficam em 48 px também no desktop. Em 80 px, uma faixa como "R$ 1.250 a R$ 3.125" não cabe em uma linha do painel.
- **Rótulo no centro do anel (decidido pelo responsável, 15/11/2026):** "Retorno do investimento" fica em 11 px, em duas linhas, para caber dentro do anel abaixo do número. Em 13 px e uma linha, o texto passava por cima do anel.
- **Número gigante no desktop (decidido pelo responsável, 14/11/2026):** vale o tamanho de 200 px da tabela. Nessa medida ele não preenche a coluna inteira; "ocupa a largura" descreve o celular.
- Altura de linha: 1,5 no texto, 1,1 nos títulos, 0,9 nos números gigantes.
- Linhas de texto com no máximo 65 caracteres.
- Maiúsculas só nos rótulos pequenos de ficha, que repetem o "SOLAR" espaçado da logo.
- Valores no formato brasileiro: `R$ 1.250`, `4,8`, `75% a 90%`.

## 5. Espaço e grade

- Primeiro o celular: uma coluna, margem lateral de 20 px.
- A partir de 1024 px: largura máxima de 1120 px, 12 colunas.
- Escala de espaços: 4, 8, 12, 16, 24, 32, 48, 72, 112 px.
- **Linhas visíveis.** Cada seção começa com uma linha fina de ponta a ponta e o número dela ("04"). Dentro das seções, colunas e linhas de ficha também são separadas por linha fina: azul a 15% de opacidade em fundo claro, gelo a 25% em fundo azul.
- Cantos de 2 px em botões e campos. Sem sombras, exceto na barra fixa do celular.
- Ritmo de fundos: azul no topo, depois névoa e branco alternados, e azul na simulação e no rodapé. A página abre e fecha em azul. As seções com número laranja (3 e 5) caem sempre em branco.

## 6. Elementos fixos

### Cabeçalho

Dentro do topo azul: versão clara da logo à esquerda e botão "Pedir simulação" à direita. Sem menu. Não fica fixo ao rolar.

### Barra fixa no celular

Depois que o topo sai da tela, aparece uma barra na base com o botão "Pedir simulação". Ela some quando a simulação está visível. No desktop não existe.

### Botões

| Tipo | Aparência | Uso |
|---|---|---|
| Principal | Fundo laranja, texto azul profundo em negrito, altura de 52 px, canto de 2 px, seta à direita | "Pedir simulação", "Ver estimativa", "Enviar pelo WhatsApp" |
| Secundário | Sem fundo, contorno de 2 px na cor do texto | "Corrigir o valor" |

- Ao passar o mouse, o laranja escurece um pouco. Foco pelo teclado: contorno de 3 px afastado 2 px, azul em fundo claro e branco em fundo azul.

## 7. Seções

Na ordem do `SPEC.md`, seção 5. Cada uma leva o número no canto. Fundos: o topo é azul; daí em diante alternam névoa e branco, começando pela névoa; simulação e rodapé são azuis.

1. **Topo (azul).** O número `75–90%` gigante, em âmbar, condensado, ocupa a largura. Abaixo, em branco: é quanto cai a conta de luz dos clientes, e ela não zera. Uma linha com as quatro cidades e o botão principal. Ao fundo, linhas finas formam a grade de um painel. Sem ilustração e sem par "antes e hoje".
2. **"Vocês não vão sumir?" (névoa).** A pergunta é o título, entre aspas. A resposta é uma ficha de seis linhas: sistemas residenciais instalados, 412; nota no Google, 4,8 com 137 avaliações; tempo de empresa, 6 anos; equipe, 11 pessoas com carteira assinada; inversor, assistência técnica autorizada; depois de ligado, acompanhamento no primeiro ano. Antes da ficha, uma frase de abertura; depois dela, uma frase de fecho.
3. **Um caso conferido (branco).** Um extrato: conta antes, R$ 780; conta hoje, R$ 118; diferença por mês, R$ 662; diferença por ano, R$ 7.944. A última linha em número de destaque laranja. Ao lado, os dados do sistema: Sorocaba, 6,4 kWp, março de 2025. Embaixo, o aviso de que a conta não zera. Botão principal.
4. **Como funciona a energia solar (névoa).** Quatro células lado a lado (empilhadas no celular), numeradas, só com texto: painel, inversor, casa, crédito na rede. A última explica a noite e o dia nublado. Sem desenho.
5. **Quanto custa e quando se paga (branco).** A peça principal é o **relógio de 25 anos**: um anel em que a volta inteira é a vida útil do painel. O trecho dos primeiros 3 a 4 anos é âmbar ("pagando o sistema") e o resto é azul ("sistema já pago"). Três marcas na borda indicam o fim das garantias: 5 anos (instalação), 10 (inversor) e 25 (painel). No centro do anel, "3 a 4 anos" em número de destaque laranja. Acima do anel, uma frase de abertura com investimento, retorno e vida útil. Ao lado, uma ficha de quatro linhas: investimento de R$ 14 mil a R$ 19 mil, financiamento por dois bancos, entrada zero possível, parcela próxima da conta atual. As garantias aparecem só como marcas no anel, não na ficha. Abaixo, uma nota de uma frase sobre a visita técnica. Botão principal.
6. **"Taxaram o sol?" (névoa).** Pergunta como título, entre aspas, e três frases curtas de resposta. Seção estreita, só texto, com "Lei 14.300" como rótulo de ficha.
7. **Telhado (branco).** Uma frase grande e uma linha de ficha: garantia contra infiltração causada pela obra, 5 anos. Embaixo, um apoio de no máximo duas frases, que não repete as garantias.
8. **Onde atendemos (névoa).** O mapa em círculo de um lado e as quatro cidades em ficha do outro. Ver seção 9. Dentro do círculo, o fundo do mapa é branco.
9. **Etapas e prazo (branco).** Seis células numeradas em sequência horizontal (duas por linha no celular). Um colchete marca o trecho da assinatura até a ligação com "45 a 60 dias". A célula da CPFL diz que o prazo dela não depende da Ravena.
10. **Outras dúvidas (névoa).** Três itens que abrem e fecham (`details` e `summary`), separados por linha fina: mudança de casa, bateria, e o que a Ravena não faz.
11. **Simulação (azul).** Ver seção 8.
12. **Rodapé (azul).** Continua a seção azul da simulação, separado por linha fina: logo clara, contatos, CNPJ, política de privacidade.

## 8. Simulação

Seção azul de ponta a ponta. À esquerda, título em branco e a promessa de resposta no mesmo dia útil. À direita (abaixo, no celular), um painel branco com a simulação.

### Etapa 1: valor da conta

- Um campo grande, "Valor médio da sua conta de luz", com `R$` fixo à esquerda, número em tamanho de destaque e teclado numérico no celular.
- Botão "Ver estimativa".
- Texto secundário: "A estimativa aparece aqui mesmo. Só depois pedimos seu contato."

### Resultado: conta de R$ 450 ou mais

Aparece como ficha, no mesmo estilo da seção 4:

- Sua conta hoje: o valor digitado.
- Conta estimada com o sistema: a faixa, em número de destaque laranja. Exemplo para R$ 780: `R$ 78 a R$ 195`.
- Economia estimada por mês e por ano, em faixa.
- Investimento típico e retorno, como referência fixa.
- Aviso: estimativa pela média dos clientes, a conta não zera, o valor final sai da visita técnica.
- Em seguida abre a etapa 2, no mesmo painel.

### Resultado: conta abaixo de R$ 450

- Sem número de economia e sem etapa 2.
- Mensagem em tom de conselho, não de erro (sem vermelho): com essa conta, o sistema demora demais para se pagar, e a própria Ravena desaconselha.
- Botão secundário "Corrigir o valor".

### Etapa 2: contato

- Campos: nome, WhatsApp com máscara, cidade (lista com as quatro).
- Rótulo sempre visível acima do campo.
- Consentimento curto com link para a política de privacidade.
- Botão "Enviar pelo WhatsApp".
- Linha de apoio: resposta no mesmo dia útil; se puder, mande a foto da conta na conversa.

### Depois de enviar

O painel troca para uma confirmação: o WhatsApp foi aberto com a mensagem pronta, falta tocar em enviar lá. Um link "Abrir o WhatsApp de novo" cobre o caso de a pessoa ter fechado a janela.

### Erros

- Mensagem em vermelho de erro abaixo do campo, com ícone, dizendo o que corrigir.
- Validação ao sair do campo e ao enviar, nunca enquanto a pessoa digita.
- Ao enviar com erro, o foco vai para o primeiro campo inválido.

### Campos

Altura de 52 px, texto de 17 px (abaixo de 16 px o iPhone dá zoom sozinho), contorno de 1,5 px na cor de borda, que vira azul de 2 px no foco. Canto de 2 px.

## 9. Logo e mapa

- **Logo (decidido pelo responsável):** o símbolo (sol e painel) é copiado de `material/logo.svg` sem alteração. As palavras são reescritas em Archivo, a fonte da página: "RAVENA" em peso 700 com espaçamento leve, "SOLAR" em peso 400 com espaçamento largo, nas mesmas proporções e posições do original.
  - Motivo: o texto do SVG original depende da Helvetica Neue instalada no aparelho de quem visita, e a fonte não está disponível para converter o texto em contornos. Em Archivo, a logo aparece igual em todo lugar. Fica muito próxima da original, não idêntica.
  - O `logo.png` original não é usado na página: não tem versão clara e perde nitidez ao ampliar.
- **Versão clara:** "RAVENA" e o painel em branco, com a grade do painel em azul; "SOLAR" e o sol em âmbar. É a versão do cabeçalho e do rodapé, que ficam sobre azul. Como a página abre e fecha em azul, é a única versão que ela usa.
- **Mapa das cidades (seção 8):** contornos dos municípios da região, com Sorocaba, Votorantim, Itu e Salto preenchidos em âmbar e os vizinhos só em linha. Decisão do responsável, com referência em `material/mapa-cidades-referencia.png`.
  - **Recorte em círculo.** As quatro cidades no centro e os vizinhos em volta, cortados pela borda. Contorno fino azul.
  - O círculo é moldura, não o raio de 80 km (confirmado pelo responsável).
  - As quatro cidades juntas ocupam cerca de 60% do diâmetro. Diâmetro de 320 px no celular e até 440 px no desktop.
  - Leitura confirmada, de norte a sul: Salto, Itu, Sorocaba, Votorantim.
  - Contornos da malha municipal do IBGE, aprovada pelo responsável.
  - Nome de cada cidade em azul sobre o âmbar (contraste 5,60). Salto e Votorantim são pequenas: se o nome não couber, fica ao lado, ligado por um traço.
  - Divisas brancas entre as quatro, para elas se lerem como quatro.
  - As quatro cidades também aparecem em texto ao lado, com o raio de 80 km.

## 10. Movimento

Pouco:

- Rolagem suave ao tocar em "Pedir simulação".
- O resultado da estimativa surge com transição de 200 ms.
- O anel da seção 5 se desenha uma vez, quando entra na tela.

Tudo desligado para quem configurou o aparelho para reduzir movimento.

## 11. Acessibilidade

- Contrastes da seção 3 respeitados.
- Áreas de toque com no mínimo 44 px.
- Tudo utilizável por teclado, com foco sempre visível.
- O resultado da estimativa é anunciado por leitores de tela quando aparece.
- O relógio de 25 anos e o mapa têm o mesmo dado escrito em texto; nenhuma informação depende só de cor.
- A página continua legível com zoom de 200%.
