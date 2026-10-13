/**
 * Conteúdo da landing page do NCE.
 * O que ainda depende de informação oficial do Nicolas está marcado com [ ].
 */
import nicolasPhoto from "@/assets/nicolas.png.asset.json";
import proofRyan from "@/assets/provas/prova-ryan.webp.asset.json";
import proofIsabel from "@/assets/provas/prova-isabel.webp.asset.json";
import proofSara from "@/assets/provas/prova-sara.webp.asset.json";
import proofDaiane from "@/assets/provas/prova-daiane.webp.asset.json";
import proofAnanda from "@/assets/provas/prova-ananda.webp.asset.json";
import proofGuilherme from "@/assets/provas/prova-guilherme.webp.asset.json";
import modulo1 from "@/assets/modulos/modulo-1.webp.asset.json";
import modulo2 from "@/assets/modulos/modulo-2.webp.asset.json";
import modulo3 from "@/assets/modulos/modulo-3.webp.asset.json";
import modulo4 from "@/assets/modulos/modulo-4.webp.asset.json";
import modulo5 from "@/assets/modulos/modulo-5.webp.asset.json";
import modulo6 from "@/assets/modulos/modulo-6.webp.asset.json";

export const brand = {
  name: "NCE",
  eyebrow: "NCE • Método de e-commerce",
  ctaPrimary: "Conhecer o método NCE",
  ctaSecondary: "Entender como funciona",
  ctaBuy: "Quero entrar para o NCE",
};

export const hero = {
  headline: "E-commerce não é sorte repetida. É método aplicado.",
  sub: "O NCE é o método que o Nicolas construiu para ensinar a enxergar, estruturar e operar um negócio de e-commerce — independente de canal, plataforma ou marketplace da vez.",
  note: "Para quem já cansou de juntar informação solta e quer operar com direção.",
  panels: [
    { label: "Visão", value: "Entender o negócio antes da ferramenta" },
    { label: "Estrutura", value: "Processo que sustenta a operação" },
    { label: "Decisão", value: "Critério para saber o que priorizar" },
  ],
};

export const hook = {
  eyebrow: "Primeiro, um ajuste de perspectiva",
  headline: "Vender em marketplace e operar um negócio são duas coisas diferentes.",
  body: [
    "Cadastrar um produto na Shopee ou no Mercado Livre é simples. Milhares de pessoas fazem isso todos os dias e conseguem a primeira venda em poucas semanas.",
    "O que é difícil é o que vem depois: escolher o produto certo pelo motivo certo, precificar sem corroer a margem, sustentar o anúncio quando o CPA sobe, decidir quanto comprar, onde guardar, quando contratar e como manter a parte fiscal em ordem enquanto o volume cresce.",
    "É nessa camada — a que não aparece no painel do marketplace — que a maioria das operações trava. E é exatamente aí que o NCE começa.",
  ],
};

export const problem = {
  eyebrow: "O problema",
  headline: "O problema quase nunca é falta de informação.",
  intro:
    "Quem está tentando crescer dentro dos marketplaces hoje costuma saber mais do que imagina. O que falta é ordem para usar o que já sabe.",
  items: [
    {
      title: "O consumo vira rotina",
      text: "Mais um vídeo sobre Shopee, mais um conteúdo sobre Mercado Livre, mais um print de faturamento. A sensação de evolução é real, mas a operação continua no mesmo lugar.",
    },
    {
      title: "A direção muda toda semana",
      text: "Uma estratégia nova aparece, você troca de rumo, abandona o anúncio que ainda estava maturando — e recomeça sem nunca fechar um ciclo.",
    },
    {
      title: "Tudo parece prioridade",
      text: "Produto, anúncio, ads, preço, estoque, atendimento, nota fiscal. Sem critério para escolher, a energia se espalha e nada avança de verdade.",
    },
    {
      title: "Decisão no achismo",
      text: "Sem processo, cada decisão é uma aposta isolada. Quando dá certo, é difícil repetir. Quando dá errado, é difícil entender por quê.",
    },
  ],
  close:
    "Isso não se resolve com mais conteúdo. Resolve-se com método: uma forma consistente de analisar, decidir e executar.",
};

export const turn = {
  eyebrow: "A virada",
  headline: "Saber vender é o começo. Saber operar é o que sustenta.",
  body: [
    "Vender é conseguir um pedido. Operar é entender por que aquele pedido aconteceu, quanto ele realmente deixou e o que precisa existir para que ele se repita em escala.",
    "Quem opera com método consegue olhar para uma queda de vendas e saber onde procurar: no anúncio, no preço, na verba de mídia, na concorrência ou na ruptura de estoque.",
    "Foi essa diferença que fez o Nicolas sair de tentativas frustradas para uma operação que hoje gira em outro patamar. Não foi um atalho — foi sequência.",
  ],
  steps: [
    { n: "01", title: "Análise", text: "Ler o mercado e escolher produto com critério, não por palpite." },
    { n: "02", title: "Estrutura", text: "Anúncio, preço, estoque e processo montados para aguentar volume." },
    { n: "03", title: "Tráfego", text: "Publicidade dentro dos marketplaces com leitura de números." },
    { n: "04", title: "Escala", text: "Gestão, equipe, espaço físico e fiscal acompanhando o crescimento." },
  ],
};

export const what = {
  eyebrow: "O que é o NCE",
  headline: "O NCE é a operação do Nicolas, aberta e transformada em método.",
  body: [
    "NCE significa Nicolas Ecommerce. É um treinamento que ensina, passo a passo, como estruturar, operar e escalar uma operação dentro dos marketplaces — com foco em Shopee e Mercado Livre.",
    "Ele não para na parte que todo mundo mostra. Além de análise de mercado, criação de anúncios e publicidade, o NCE entra no que aparece quando a operação cresce: estrutura de galpão, momento certo de contratar, quando procurar um espaço maior, questões fiscais, uso de inteligência artificial e dashboards para acompanhar os números.",
    "Por isso o aluno não está comprando um pacote de aulas sobre marketplace. Está tendo acesso às decisões que o Nicolas toma dentro da própria operação, organizadas em uma sequência que pode ser aplicada.",
  ],
  meaning: {
    label: "O que significa NCE",
    value: "Nicolas Ecommerce — o método construído dentro da operação do próprio Nicolas.",
  },
  why: {
    label: "Por que o método existe",
    value:
      "Porque o Nicolas perdeu tempo e dinheiro tentando descobrir tudo sozinho, e só avançou quando passou a aprender com quem já operava. O NCE é essa redução de margem de erro organizada em um caminho.",
  },
  cards: [
    {
      title: "Passo a passo aplicável",
      text: "Do estudo de mercado à escala, na ordem em que cada etapa precisa acontecer dentro da operação.",
    },
    {
      title: "Bastidor de operação real",
      text: "As estratégias, os processos e os erros de uma operação ativa em Shopee e Mercado Livre.",
    },
    {
      title: "Visão de gestão",
      text: "Dashboards, indicadores, equipe, estrutura e fiscal: o que segura o negócio quando o volume aumenta.",
    },
  ],
};

export const pillars = {
  eyebrow: "O método",
  headline: "As frentes que o NCE cobre.",
  intro:
    "O treinamento é organizado por frentes da operação. Cada uma responde a uma pergunta prática de quem está montando ou ampliando as vendas em Shopee e Mercado Livre.",
  items: [
    {
      n: "01",
      title: "Análise de mercado",
      what: "Como estudar nichos, demanda e concorrência dentro dos marketplaces antes de comprar qualquer estoque.",
      why: "A maior parte do prejuízo no e-commerce é decidida na escolha do produto, não na execução.",
      result: "Você passa a escolher o que vender com argumento, e não porque viu alguém vendendo.",
    },
    {
      n: "02",
      title: "Criação de anúncios",
      what: "Estruturação de título, imagens, ficha e oferta para competir dentro da busca da Shopee e do Mercado Livre.",
      why: "O anúncio é o vendedor. Ele decide se o clique vira pedido e se o algoritmo continua entregando.",
      result: "Anúncios construídos por padrão, prontos para receber tráfego e serem otimizados.",
    },
    {
      n: "03",
      title: "Publicidade",
      what: "Como usar a mídia paga dos marketplaces e ler os números que ela devolve.",
      why: "Investir sem leitura de indicadores é o jeito mais rápido de queimar caixa com sensação de movimento.",
      result: "Clareza sobre quando aumentar, ajustar ou cortar investimento em um anúncio.",
    },
    {
      n: "04",
      title: "Operação e gestão",
      what: "Rotina de compras, estoque, expedição, atendimento e acompanhamento por dashboards — com apoio de inteligência artificial nos processos.",
      why: "Sem processo, o crescimento vira desorganização: ruptura, atraso, reputação em risco.",
      result: "Uma operação que funciona por rotina e por número, não por memória e improviso.",
    },
    {
      n: "05",
      title: "Escala e estrutura",
      what: "O que muda quando o volume cresce: estrutura de galpão, momento de contratar, espaço maior e questões fiscais.",
      why: "Essa é a parte que quase ninguém mostra — e é onde a maioria trava depois dos primeiros bons meses.",
      result: "Você entende o próximo degrau antes de chegar nele, em vez de descobrir no susto.",
    },
  ],
};

export const shift = {
  eyebrow: "O que muda",
  headline: "A diferença aparece no jeito de decidir, antes de aparecer no faturamento.",
  intro:
    "Método não é promessa de resultado. É mudança na qualidade das decisões — e é isso que muda a rotina de quem opera.",
  pairs: [
    {
      before: "Escolho produto pelo que vi alguém vendendo.",
      after: "Escolho produto depois de analisar demanda, concorrência e margem.",
    },
    {
      before: "Coloco verba em ads e torço para vender.",
      after: "Acompanho os indicadores e sei quando escalar ou cortar o anúncio.",
    },
    {
      before: "Cresci nas vendas e a operação virou bagunça.",
      after: "Sei o que precisa estar de pé antes de aumentar o volume.",
    },
    {
      before: "Estrutura, equipe e fiscal eu resolvo depois.",
      after: "Entendo quando contratar, quando ampliar o espaço e o que o fiscal exige.",
    },
  ],
};

export type ModuleSlide = {
  id: string;
  /** URL ou import da arte do módulo. Enquanto vazio, exibe o espaço reservado. */
  src?: string;
  /** Texto alternativo (acessibilidade). Não é exibido quando há imagem. */
  alt: string;
};

export const modules = {
  eyebrow: "Por dentro do NCE",
  headline: "Por dentro do NCE.",
  intro: "Cada módulo do treinamento, na ordem em que a operação é construída.",
  slides: [
    { id: "m1", src: modulo1.url, alt: "Módulo Comece por Aqui" },
    { id: "m2", src: modulo2.url, alt: "Módulo Mercado Livre" },
    { id: "m3", src: modulo3.url, alt: "Módulo Shopee" },
    { id: "m4", src: modulo4.url, alt: "Módulo TikTok Shop" },
    { id: "m5", src: modulo5.url, alt: "Módulo Gestão Financeira" },
    { id: "m6", src: modulo6.url, alt: "Módulo Materiais e Ferramentas" },
  ] as ModuleSlide[],
};

export const author = {
  eyebrow: "Quem está por trás",
  headline: "Nicolas aprendeu a operar perdendo dinheiro antes de ganhar.",
  paragraphs: [
    "Em 2023, logo depois de sair da escola, ele abriu o primeiro negócio: uma loja própria de dropshipping. Foram cerca de seis meses sem o retorno esperado, até encerrar o projeto.",
    "Meses depois, montou com o irmão uma loja de moda masculina focada em camisetas básicas. Investiram mais de R$ 30 mil sem conhecimento e sem experiência — e o resultado foi estoque parado e publicidade sem retorno.",
    "Em 2024 ele entrou nos marketplaces com outra postura: em vez de tentar descobrir tudo sozinho, foi buscar cursos e mentorias ao vivo com quem já operava. Segundo ele, foi isso que reduziu drasticamente sua margem de erro.",
    "O primeiro mês fechou em torno de R$ 5 mil. No sexto mês, a operação já estava perto de R$ 100 mil mensais. Hoje, de acordo com os dados do próprio Nicolas, ela fatura cerca de R$ 800 mil por mês, com a meta de chegar a R$ 1 milhão.",
    "Esses números são a trajetória dele, não uma previsão do seu resultado. O que o NCE entrega é o raciocínio e os processos que ele usa nessa operação.",
  ],
  facts: [
    { label: "Início nos marketplaces", value: "2024" },
    { label: "Faturamento atual", value: "~R$ 800 mil/mês" },
    { label: "Canais principais", value: "Shopee e ML" },
  ],
  photo: nicolasPhoto.url,
};

export const proof = {
  eyebrow: "Provas",
  headline: "Não é sobre o que prometemos. É sobre o que pode ser comprovado.",
  intro:
    "Resultados e feedbacks reais de quem está aplicando o método.",
  slides: [
    { id: "p1", src: proofRyan.url, alt: "Faturamento e margem de aluno do NCE" },
    { id: "p2", src: proofIsabel.url, alt: "Resultado de vendas de aluna do NCE" },
    { id: "p3", src: proofSara.url, alt: "Relatório de vendas de aluna do NCE" },
    { id: "p4", src: proofDaiane.url, alt: "Crescimento de vendas de aluna do NCE" },
    { id: "p5", src: proofAnanda.url, alt: "Crescimento de aluna do NCE" },
    { id: "p6", src: proofGuilherme.url, alt: "Resultado de vendas de aluno do NCE" },
  ] as ModuleSlide[],
};

export const deliverables = {
  eyebrow: "O que você recebe",
  headline: "O que está incluído nos 12 meses — e por que cada parte existe.",
  items: [
    {
      title: "Método NCE completo",
      what: "O passo a passo da operação: análise de mercado, criação de anúncios, publicidade, gestão, escala, estrutura, contratação, fiscal, IA e dashboards.",
      why: "Porque conteúdo fora de ordem vira acúmulo. Em sequência, vira operação.",
    },
    {
      title: "12 meses de acesso",
      what: "Um ano inteiro para estudar, aplicar e voltar ao material conforme a operação evolui.",
      why: "Nenhuma operação amadurece em uma semana. Você revisita cada etapa no momento em que ela aparece.",
    },
    {
      title: "Conteúdos atualizados mensalmente",
      what: "Novos materiais adicionados conforme surgem mudanças nos marketplaces e novidades na operação.",
      why: "Shopee e Mercado Livre mudam. O método acompanha em vez de envelhecer.",
    },
    {
      title: "Grupo de networking",
      what: "Um grupo com os demais alunos do treinamento para troca entre quem está operando.",
      why: "Conversar com quem enfrenta os mesmos problemas encurta decisões que sozinho demorariam semanas.",
    },
    {
      title: "Sorteios de visita à operação",
      what: "Sorteios para conhecer pessoalmente a operação real do Nicolas em São Paulo.",
      why: "Ver o galpão, o processo e a rotina funcionando explica o que nenhuma aula consegue descrever.",
    },
  ],
};

export const objections = {
  eyebrow: "Antes de decidir",
  headline: "As dúvidas que aparecem antes de qualquer decisão honesta.",
  items: [
    {
      q: "E se eu ainda estiver começando?",
      a: "O método parte da análise de mercado, antes mesmo da primeira compra de estoque. Quem está começando segue a sequência desde o início, sem pular etapa.",
    },
    {
      q: "E se eu já vendo em marketplace?",
      a: "Quem já opera costuma usar mais as frentes de publicidade, gestão, escala e estrutura — as partes que normalmente travam depois dos primeiros meses bons.",
    },
    {
      q: "O treinamento é focado em qual canal?",
      a: "Em Shopee e Mercado Livre. É onde a operação do Nicolas funciona e onde os processos ensinados foram testados.",
    },
    {
      q: "Isso é só teoria sobre marketplace?",
      a: "Não. O conteúdo vem das decisões de uma operação ativa, incluindo estrutura de galpão, contratação, fiscal, uso de IA e dashboards.",
    },
    {
      q: "Preciso investir muito dinheiro em estoque?",
      a: "[RESPOSTA OFICIAL sobre capital inicial necessário]",
    },
    {
      q: "Vou ter o mesmo resultado do Nicolas?",
      a: "Os números citados são da trajetória dele, não uma promessa. O que você recebe é o método e o critério de decisão que ele usa — o resultado depende da sua execução.",
    },
  ],
};

export const offer = {
  eyebrow: "A decisão",
  headline: "Agora é sobre aplicar isso dentro da sua operação.",
  lead: [
    "Você viu onde a maioria trava: informação demais, critério de menos.",
    "Viu as frentes que o método cobre — da análise de mercado à escala, estrutura e fiscal.",
    "E viu de onde ele vem: uma operação real em Shopee e Mercado Livre.",
  ],
  includes: [
    "Método NCE completo, do estudo de mercado à escala",
    "12 meses de acesso ao treinamento",
    "Conteúdos atualizados mensalmente",
    "Grupo de networking com os alunos",
    "Sorteios para visitar a operação real em São Paulo",
  ],
  includesNote: "Estes são os itens atuais da oferta. Nada além disso é prometido.",
  price: "R$ 179,90",
  priceNote: "Cartão de crédito ou Pix. No cartão, em até 8x de R$ 26,57.",
  guaranteeTitle: "7 dias de garantia",
  guaranteeText:
    "Você tem 7 dias para acessar o treinamento na Cakto e decidir se o método faz sentido para a sua operação. Se achar que não é para você, devolvemos o valor.",
  urgencyNote:
    "Nenhum prazo, lote ou vaga limitada é exibido aqui até que exista uma condição real informada pelo Nicolas.",
};

export const faq = {
  eyebrow: "FAQ",
  headline: "Ficou com alguma dúvida?",
  sub: "Relaxa, a gente responde agora.",
  text: "Se a sua pergunta não estiver aqui, é só chamar no WhatsApp. Sem robô de atendimento, sem formulário longo — direto com a equipe.",
  cta: {
    label: "WhatsApp",
    sub: "11 93962-8392 • Suporte oficial",
    url: "https://wa.me/5511939628392",
  },
  items: [
    {
      q: "O que significa NCE?",
      a: "Nicolas Ecommerce. É o treinamento em que o Nicolas ensina como estruturar, operar e escalar uma operação dentro dos marketplaces.",
    },
    {
      q: "Para quem é o NCE?",
      a: "Para quem quer montar uma operação em marketplace com método, e para quem já vende e precisa organizar gestão, publicidade e crescimento.",
    },
    {
      q: "Preciso já estar vendendo para entrar?",
      a: "Não. O método começa pela análise de mercado e segue até a escala, então serve tanto para quem vai iniciar quanto para quem já tem vendas.",
    },
    {
      q: "Quais canais o treinamento cobre?",
      a: "O foco é Shopee e Mercado Livre.",
    },
    {
      q: "Quais temas estão incluídos?",
      a: "Análise de mercado, criação de anúncios, publicidade, estratégias de operação, escala, gestão, uso de inteligência artificial, dashboards, estruturação da operação, contratação e crescimento de equipe, estrutura física e galpão, e questões fiscais.",
    },
    {
      q: "Por quanto tempo tenho acesso?",
      a: "São 12 meses de acesso, com conteúdos atualizados mensalmente conforme surgem novidades.",
    },
    {
      q: "Existe grupo de alunos?",
      a: "Sim. O treinamento inclui um grupo de networking com os demais alunos.",
    },
    {
      q: "Como funcionam os sorteios de visita?",
      a: "São sorteios entre os alunos para conhecer pessoalmente a operação do Nicolas em São Paulo.",
    },
    {
      q: "Como funciona o acesso e o pagamento?",
      a: "O treinamento ficará hospedado na Cakto. O pagamento pode ser feito no cartão de crédito ou Pix. No cartão, o valor de R$ 179,90 pode ser parcelado em até 8x de R$ 26,57.",
    },
  ],
};

export const contact = {
  email: "metodonce@gmail.com",
  instagram: "@Nicolas.ecommerce",
  instagramUrl: "https://www.instagram.com/nicolas.ecommerce",
  phone: "11 93962-8392",
  whatsappUrl: "https://wa.me/5511939628392",
};

export const policies = [
  { label: "Políticas de Privacidade", href: "/privacidade" },
  { label: "Termos de Uso", href: "/termos" },
];

export const finalCta = {
  headline: "Você pode continuar juntando conteúdo sobre marketplace.",
  sub: "Ou aprender como uma operação real é conduzida por dentro.",
  text: "Nenhuma página decide por você. Mas se hoje a sua operação depende mais de tentativa do que de critério, é exatamente esse ponto que o NCE trata.",
};
