# SPEC — Landing page Ravena Solar

Status: v1.2 (15/11/2026). Nenhum item aberto. O último, sobre o evento personalizado da medição (seção 9), foi fechado depois do deploy.

Fontes: o brief do cliente, a logo em `material/logo.svg` e o site antigo do cliente, de 2021. O brief e o site antigo não fazem parte deste repositório.

## 1. Objetivo

Uma página que vende energia solar residencial e leva a uma única ação: **pedir uma simulação**.

Duas metas do cliente, e as duas contam:

- Subir de cerca de 12 para 25 pedidos de simulação por mês.
- Receber menos pedidos de quem tem conta baixa. Abaixo de R$ 450 por mês o sistema não se paga, e a própria empresa desaconselha.

A segunda meta significa que a página não deve maximizar o número de envios a qualquer custo: ela precisa filtrar.

## 2. Quem compra

Dono da própria casa, 35 a 60 anos, conta de luz acima de R$ 450, em Sorocaba, Votorantim, Itu ou Salto. Pede três orçamentos e leva de duas a oito semanas para decidir. Ou seja: vai comparar a página com a de concorrentes e voltar a ela mais de uma vez.

## 3. Decisões tomadas

| Decisão | Motivo |
|---|---|
| Uma página só, com uma única conversão | O site antigo espalha a atenção em seis serviços, blog e "quem somos", e quase não traz cliente. |
| Só residencial | É o pedido do brief. Comercial, industrial, rural, manutenção de terceiros e bateria ficam fora. |
| Formulário com quatro campos: nome, WhatsApp, cidade e valor médio da conta | São os dados de que a empresa precisa para a simulação valer. O site antigo pedia e-mail, assunto e mensagem, que não servem para isso. |
| Cidade é uma lista fechada com as quatro cidades | Decisão do responsável pelo projeto: a empresa só atende essas quatro. |
| Valor da conta é digitado em R$ | Decisão do responsável. O valor exato também alimenta o cálculo. |
| A página calcula a estimativa na hora | Decisão do responsável. Entrega algo ao visitante antes de pedir o contato e ajuda a filtrar conta baixa. |
| Conta abaixo de R$ 450 é desaconselhada e barrada: o pedido não é enviado | Decisão do responsável. O brief pede menos pedidos de conta baixa, porque o vendedor perde o dia com quem não tem como comprar. |
| Estimativa aparece só com o valor da conta; nome, WhatsApp e cidade vêm depois | Decisão do responsável. A pessoa recebe algo antes de dar o contato, e a conta baixa é barrada antes de virar pedido. |
| Pedido vai para o WhatsApp da empresa com a mensagem preenchida | Decisão do responsável. É o canal em que a empresa já responde no mesmo dia útil, e dispensa servidor. |
| Simulação em seção própria perto do fim, com botão no topo que leva a ela | Decisão do responsável. A pessoa chega à simulação já com as objeções respondidas. |
| Página sem fotos nem vídeos | O material não veio e não há previsão. Imagem genérica fingindo ser obra seria prova falsa. |
| Números derivados ou só do brief podem aparecer: diferença do caso de Sorocaba (R$ 662 por mês, R$ 7.944 por ano), "dois bancos", "três tamanhos de sistema" na proposta, "pelo menos três empresas da região fecharam" | Decisão do responsável (14/11/2026). O design pede o extrato do caso, e o brief sustenta os demais. |
| A política de privacidade é um bloco que abre e fecha no rodapé; o link do consentimento leva até ele | Decisão do responsável (14/11/2026). Mantém a página única. |
| A mensagem do WhatsApp leva também o número digitado pela pessoa | Decisão do responsável (14/11/2026). Cobre o caso de a pessoa enviar de outro número. |
| A legenda do trecho azul do relógio de 25 anos é "Sistema já pago", não "Energia já paga" | Decisão do responsável (14/11/2026). A legenda anterior podia ser lida como "a conta zera". |
| No desktop, os números da simulação ficam em 48 px e o "75–90%" em 200 px | Decisão do responsável (14/11/2026), depois da revisão independente da página. Em 80 px a faixa estimada não cabe no painel, e o número gigante segue a tabela tipográfica. Detalhe no `DESIGN.md`, seção 4. |
| Deploy na Vercel a partir do GitHub | Decisão do responsável. |
| HTML, CSS e JavaScript puros | Sem exigência técnica do cliente. Uma página só não justifica framework nem etapa de build. |
| Cores tiradas da logo: `#123A55`, `#F2A03D`, `#E8721C` | O brief diz que as cores da marca são as da logo. O verde-azulado do site antigo não está nela e sai. |

## 4. Simulação

### 4.1 Campos

| Campo | Tipo | Regras |
|---|---|---|
| Nome | texto | obrigatório, mínimo de 2 caracteres |
| WhatsApp | telefone | obrigatório, DDD + número, máscara `(15) 99999-9999` |
| Cidade | lista | obrigatório: Sorocaba, Votorantim, Itu, Salto |
| Valor médio da conta de luz | número em R$ | obrigatório, maior que zero |

### 4.2 Cálculo na hora (decidido)

Usa só números do brief, sempre como faixa e sempre rotulado como estimativa:

- **Nova conta estimada:** entre 10% e 25% do valor informado (a conta dos clientes cai entre 75% e 90%).
- **Economia estimada por mês e por ano:** a diferença.
- **Arredondamento (decidido):** os limites da faixa aparecem em reais inteiros, sempre arredondados para cima. Centavos dariam a uma estimativa uma precisão que ela não tem, e arredondar para cima nunca promete conta menor do que o cálculo dá.
- **Referências fixas, não calculadas:** investimento típico entre R$ 14 mil e R$ 19 mil, retorno em três a quatro anos.

Conferência com o caso real do brief: conta de R$ 780 resulta em faixa de R$ 78 a R$ 195. O cliente real ficou em R$ 118, dentro da faixa.

O texto do resultado deixa claro que a conta não zera (taxa mínima e custo do fio) e que o número final sai da visita técnica.

- **Fórmula confirmada pelo responsável.**
- **Conta abaixo de R$ 450 (decidido): desaconselhar e barrar.** A página não mostra economia nem pede contato. Diz com franqueza que nessa faixa o investimento não se paga e que a própria Ravena desaconselha. O pedido não é enviado. R$ 450 exatos já passam.
- **Fluxo em duas etapas (decidido).** Primeiro a pessoa informa só o valor da conta e vê a estimativa (ou a recusa, se for abaixo de R$ 450). Em seguida a página pede nome, WhatsApp e cidade para ela receber a simulação completa.

### 4.3 Envio

- **Destino (decidido): WhatsApp da empresa, (15) 99000-0000.** O botão abre a conversa com a mensagem preenchida: nome, WhatsApp digitado, cidade, valor da conta e a estimativa mostrada. A empresa já responde por WhatsApp no mesmo dia útil, não exige servidor, e a pessoa pode mandar a foto da conta na mesma conversa (o brief diz que ajuda muito).
- A página convida a anexar a foto ou o PDF da conta na conversa, sem obrigar.
- Limite conhecido: o pedido só chega se a pessoa tocar em enviar dentro do WhatsApp. A página não tem como confirmar que chegou.
- Depois do envio, a página diz o que acontece: resposta no mesmo dia útil, por WhatsApp, e visita técnica sem custo e sem compromisso.
- Texto de consentimento (LGPD) junto ao botão.

## 5. Estrutura da página (decidido)

A simulação fica numa seção própria perto do fim, e o topo tem um botão que leva direto a ela.

A ordem intercala prova e explicação: primeiro o medo número um, depois o resultado, e só então como funciona e quanto custa. As três objeções mais fortes do brief viram seções próprias, e as outras ficam nas perguntas do fim.

1. **Topo:** promessa com número (conta cai de 75% a 90%), cidades atendidas e o botão "Pedir simulação", que rola até a seção 11.
2. **"Vocês não vão sumir?":** a resposta ao medo número um, com os números da empresa: 412 sistemas residenciais, nota 4,8 no Google com 137 avaliações, seis anos, onze pessoas com carteira assinada, assistência autorizada do inversor, acompanhamento no primeiro ano.
3. **Um caso conferido:** a casa de Sorocaba (R$ 780 para R$ 118) e o aviso de que a conta não zera.
4. **Como funciona a energia solar:** do painel ao crédito na conta, em poucos passos. Responde também "e à noite, e em dia nublado?".
5. **Quanto custa e quando se paga:** faixa de investimento, retorno em três a quatro anos, financiamento com entrada zero, garantias de 25, 10 e 5 anos.
6. **"Taxaram o sol?":** a Lei 14.300 em poucas linhas: existe a cobrança, ela sobe ano a ano, e o retorno de três a quatro anos é o que os clientes têm tido.
7. **Telhado:** garantia de 5 anos da instalação, incluindo infiltração causada pela obra.
8. **Onde atendemos:** o mapa das quatro cidades e o raio de 80 km.
9. **Etapas e prazo:** da simulação à ligação, 45 a 60 dias, dois dias de instalação.
10. **Outras dúvidas:** mudança de casa, bateria, e o que a Ravena não faz.
11. **Simulação:** o fluxo em duas etapas da seção 4.
12. **Rodapé:** contato, endereço, horário, CNPJ, política de privacidade.

O botão "Pedir simulação" se repete ao longo da página (no mínimo nas seções 3 e 5) e fica sempre à mão no celular, para que a simulação no fim não dependa de a pessoa rolar tudo.

## 6. Tom e restrições de texto

Direto, específico, com número. Não usar: "energia do futuro", "sustentabilidade" como slogan, "revolução solar", promessa de 95% de economia, "grátis", prazo inventado. Todo número da página vem do brief.

## 7. Site antigo: o que fica e o que sai

**Fica:** logo, as três cores, dados de contato.

**Sai:**

- Título com "energia do futuro" e promessa de "até 95%": o brief proíbe os dois.
- Contadores: "+300 clientes" e "5 anos" estão desatualizados (hoje 412 e seis anos); "100% satisfação" não tem lastro; "24h atendimento" contradiz o horário de segunda a sexta, das 8h às 18h.
- Missão, visão e valores, parceiros, blog.
- Serviços comercial, industrial, rural, manutenção e consultoria.
- Formulário de contato genérico no fim da página.

**Contatos (decidido):** os mesmos do site antigo, já que a empresa é fictícia. Telefone (15) 3200-0000, WhatsApp (15) 99000-0000, contato@ravenasolar.com.br, Av. das Nações, 1420, sala 8, Sorocaba/SP, CEP 18000-000, CNPJ 00.000.000/0001-00, segunda a sexta, das 8h às 18h.

## 8. Material que falta

O brief cita 40 fotos de obra e três depoimentos em vídeo, mas a pasta `material/` só tem a logo e o site antigo, e não há previsão de receber o resto.

**Decidido:** a página é projetada para funcionar sem fotos e sem vídeos. A prova vem em texto e números (412 sistemas, nota 4,8, caso de Sorocaba), e o visual se apoia em tipografia, cor e ilustração derivada da logo. Não usar banco de imagens passando por obra da empresa nem depoimento inventado. Se as fotos chegarem, entram na seção de prova sem refazer a página.

## 9. Requisitos técnicos

- Pensada primeiro para celular.
- Leve: sem fontes ou bibliotecas que não se justifiquem.
- Acessível: campos com rótulo, uso por teclado, contraste adequado.
- SEO local: energia solar residencial e as quatro cidades no título e na descrição.
- **Hospedagem (decidido):** repositório público no GitHub com deploy na Vercel. Site estático, com `index.html` na raiz, sem configuração de build.
- **Medição (decidido):** Vercel Web Analytics, que conta acessos. Cliques no botão que abre o WhatsApp só são contados com evento personalizado, que depende do plano da Vercel. **Fechado em 15/11/2026:** a página envia o evento "Enviar pelo WhatsApp" e a Vercel o aceita (resposta 200), mas o plano em uso não exibe eventos personalizados no painel, conforme conferido pelo responsável. A contagem de cliques no botão fica indisponível enquanto o plano for esse; o código não precisa mudar se o plano mudar.

## 10. Entrega

Conforme o brief: página no ar e repositório público no GitHub contendo esta spec, o arquivo de instruções do agente, o design escrito no disco e a evidência de verificação.

## 11. Critérios de aceite

- Os quatro campos são obrigatórios e validados; formulário inválido não é enviado e indica o que corrigir.
- O cálculo para R$ 780 mostra uma faixa que contém R$ 118.
- Conta de R$ 449 mostra a mensagem que desaconselha e não permite enviar o pedido; conta de R$ 450 mostra a estimativa e permite.
- O botão do topo leva à seção de simulação.
- As seções aparecem na ordem da seção 5.
- A estimativa aparece só com o valor da conta, antes de qualquer dado de contato.
- O botão de envio abre o WhatsApp no número (15) 99000-0000 com nome, cidade e valor da conta na mensagem.
- Nenhum termo ou promessa vetados na seção 6 aparece na página.
- Todo número da página confere com o brief.
- Funciona em celular e desktop, nas versões atuais de Chrome, Safari, Firefox e Edge.
