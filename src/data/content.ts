// CanaBene - Conteúdo Completo da Landing Page
// Fase 1: Arquitetura de Informação, Copywriting e SEO

export const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20tratamento%20com%20cannabis%20medicinal.";

export const siteConfig = {
  name: "CanaBene",
  tagline: "Juntos pelo seu bem-estar.",
  email: "atendimento@canabene.com.br",
  emailProfissionais: "profissionais@canabene.com.br",
  horarioAtendimento: "Segunda a Sexta, das 8h às 20h | Sábado, das 9h às 13h",
  whatsapp: WHATSAPP_URL,
};

// ============================================================
// SEÇÃO 1 - HERO / HOME
// ============================================================
export const heroContent = {
  headline: "Você não precisa enfrentar a dor sozinho.",
  subheadline:
    "A cannabis medicinal é uma opção real, legal e segura para milhares de pacientes no Brasil.",
  cta: "Quero saber mais",
  ctaSecondary: "Tire suas dúvidas",
  trustBadges: [
    { icon: "file-text", label: "Exige prescrição médica" },
    { icon: "lock", label: "Privacidade protegida (LGPD)" },
    { icon: "message-circle", label: "Atendimento humanizado" },
  ],
};

// ============================================================
// SEÇÃO 2 - O QUE É O TRATAMENTO
// ============================================================
export const treatmentContent = {
  sectionLabel: "O tratamento",
  headline: "Entenda como funciona, sem complicação.",
  intro:
    "A cannabis medicinal não é uma novidade, é ciência aplicada. Plantas do gênero Cannabis produzem compostos chamados canabinoides, que interagem com um sistema presente naturalmente no corpo humano.",
  howItWorks: {
    title: "Como o seu corpo responde ao tratamento",
    body: "O seu organismo possui o **Sistema Endocanabinoide**, uma rede de receptores distribuída pelo cérebro, sistema imunológico e órgãos. Ela regula funções como dor, sono, humor e inflamação. Os canabinoides presentes na cannabis medicinal se encaixam nesses receptores como uma chave na fechadura, ajudando o corpo a recuperar o equilíbrio que a doença tirou.",
  },
  mainCompounds: [
    {
      acronym: "CBD",
      name: "Canabidiol",
      color: "green",
      description:
        "O CBD é o composto mais conhecido quando o assunto é cannabis medicinal, justamente porque não causa o efeito psicoativo do THC. Esse composto costuma ser a porta de entrada para muitos pacientes. Ele é estudado e utilizado principalmente por seu potencial de reduzir a ansiedade, aliviar inflamações e ajudar no controle de crises epilépticas, além de auxiliar na regulação do sono. Uma característica interessante do CBD é que ele também ajuda a \"equilibrar\" os efeitos do THC, tornando o tratamento mais completo quando os dois são usados juntos.",
    },
    {
      acronym: "THC",
      name: "Tetrahidrocanabinol",
      color: "teal",
      description:
        "O THC é o composto responsável pelo efeito \"psicoativo\" e que produz relaxamento. Mas, no contexto medicinal, ele vai muito além disso: em doses controladas e com orientação profissional, o THC pode ajudar no alívio de dores crônicas, na redução de náuseas, no estímulo do apetite e na melhora do sono. O que define se o THC será um aliado terapêutico é a dose certa, a proporção com outros compostos e o acompanhamento médico.",
    },
    {
      acronym: "CBG",
      name: "canabigerol",
      color: "teal",
      description:
        "O CBG aparece em quantidades pequenas na planta madura, e vem ganhando atenção crescente. Assim como o CBD, o CBG não causa efeito psicoativo, e as pesquisas apontam possíveis benefícios ligados à ação anti-inflamatória, ao conforto digestivo, à proteção das células nervosas e a um efeito de foco e disposição relatado por alguns pacientes.",
    },
    {
      acronym: "CBN",
      name: "canabinol",
      color: "green",
      description:
        "O CBN aparece em maior quantidade em plantas mais \"maduras\". Seu efeito psicoativo é muito leve, bem mais fraco que o do THC. O CBN vem sendo estudado principalmente pelo seu potencial relaxante e por ajudar na qualidade do sono, sendo frequentemente associado à sensação de tranquilidade, o que o torna interessante para quem busca auxílio para insônia e descanso.",
    },
  ],
  compoundNote:
  "Um aspecto importante é que esses compostos agem de formas diferentes em cada pessoa, diferente de medicamentos convencionais e o tratamento com cannabis medicinal deve sempre ser feito com prescrição e acompanhamento de um profissional de saúde.",
  conditions: {
    title: "Condições em que o tratamento é estudado",
    disclaimer:
      "* Estes são campos de pesquisa clínica ativa. A indicação deve sempre partir de um médico, com base no seu histórico de saúde.",
    list: [
      "Ansiedade, transtornos de humor e Depressão",
      "Insônia e distúrbios do sono",
      "Autismo (comportamento e qualidade do sono)",
      "Dor crônica e neuropática (incluindo fibromialgia)",
      "Epilepsia resistente a outros medicamentos",
      "Náuseas, dor e perda de apetite na quimioterapia",      
      "Doenças neurodegenerativas (Parkinson e Alzheimer)",
      "Espasticidade muscular (Esclerose Múltipla)",
    ],
  },
  treatmentFaq: [
    {
      id: 1,
      question: "A cannabis medicinal serve como cura para todas as doenças?",
      answer: [
        "Não. É importante entender que a cannabis medicinal, na maioria das vezes, atua como um tratamento complementar. E tem a função de equilibrar o organismo e promover o funcionamento normal de todos os sistemas, o objetivo é auxiliar o organismo a combater sintomas e desconfortos. Seu principal benefício é o alívio de sintomas e a melhora significativa da qualidade de vida em condições como dores crônicas, ansiedade, insônia e espasmos musculares. Ela não deve ser vista como uma cura definitiva para todas as patologias, e o acompanhamento médico é indispensável para monitorar a evolução do quadro.",
      ],
      highlight:
        "Alívio de sintomas e melhora da qualidade de vida, não uma cura definitiva.",
    },
    {
      id: 2,
      question: "O efeito do tratamento é imediato a partir da primeira dose?",
      answer: [
        "Na grande maioria das vezes a melhora dos sintomas ocorre a partir de 7 dias de utilização. O organismo humano precisa de um período de adaptação aos canabinoides. O protocolo médico padrão costuma iniciar com doses muito baixas, que são aumentadas gradualmente (processo chamado de titulação) até que se encontre a dose ideal para o paciente. Os benefícios mais consistentes costumam ser observados após algumas semanas de uso regular e contínuo.",
      ],
      highlight:
        "Paciência e acompanhamento médico são parte do tratamento.",
    },
    {
      id: 3,
      question: "Crianças e idosos podem fazer o tratamento?",
      answer: [
        "Sim, ambos os públicos podem se beneficiar amplamente. Em crianças, o uso é comum em casos de epilepsia refratária e autismo; em idosos, é frequentemente indicado para dores crônicas, Parkinson e Alzheimer. No entanto, por serem públicos mais sensíveis, o monitoramento médico deve ser rigoroso para ajustar as doses corretamente e evitar interações com outros medicamentos que o paciente já utilize.",
      ],
      highlight:
        "Crianças e idosos podem fazer o tratamento, com acompanhamento médico especializado.",
    },
    {
      id: 4,
      question: "Posso dirigir ou trabalhar normalmente durante o tratamento?",
      answer: [
        "Isso depende da composição do produto (especialmente o teor de THC) e da reação individual de cada organismo. Nas primeiras semanas de tratamento ou após ajustes de dose, recomenda-se observar atentamente como o corpo reage antes de realizar atividades que exijam muita atenção, como dirigir ou operar máquinas pesadas. Sempre consulte seu médico sobre sua rotina diária para receber orientações personalizadas.",
      ],
      highlight:
        "Observe como o corpo reage nas primeiras semanas antes de dirigir ou operar máquinas.",
    },
  ],
  howToAccess: {
    title: "Como funciona o acesso ao cannabis medicinal",
    steps: [
      {
        number: "01",
        title: "Consulta médica",
        description:
          "O processo começa com um médico ou profissional da saúde apto a prescrever cannabis medicinal, que avalia o seu caso e, se indicado, realiza uma prescrição.",
      },
      {
        number: "02",
        title: "Prescrição e documentação",
        description:
          "Dependendo do produto, você recebe uma Receita de Dupla Via (produtos com até 0,2% de THC) ou uma Receita Amarela. Notificação de Receita A (produtos com mais de 0,2% de THC). Guarde a sua via da receita.",
      },
      {
        number: "03",
        title: "Orientação CanaBene",
        description:
          "Nossa equipe te ajuda na orientação sobre os próximos passos para adquirir o seu produto. Te orientamos sobre a utilização da medicação. E acompanhamos você nas dúvidas do dia a dia.",
      },
      {
        number: "04",
        title: "Acesso ao medicamento",
        description:
          "O produto é entregue com nota fiscal, dentro das normas da ANVISA. Da consulta até o produto chegar em casa, o processo costuma levar de 2 a 4 semanas.",
      },
    ],
  },
  cta: "Quer saber mais? Fale conosco!",
};

// ============================================================
// SEÇÃO 3 - FAQ (DÚVIDAS FREQUENTES)
// ============================================================
export const faqContent = {
  sectionLabel: "Dúvidas frequentes",
  headline: "As dúvidas mais comuns respondidas com clareza.",
  intro:
    "Informações gerais sobre cannabis medicinal - Mitos e Verdades.",
  faqs: [
    {
      id: 1,
      question: "Cannabis medicinal causa dependência ou vício?",
      answer: [
        "O **canabidiol (também abreviado muito frequente para CBD)**, presente na maioria dos produtos prescritos no Brasil, **não causa dependência e não produz efeitos de euforia**. É considerado seguro pela **Organização Mundial da Saúde (OMS)**.",
        "Produtos com teores mais elevados de **Tetrahidrocannabinol (THC)** podem, em casos específicos, causar efeitos sobre a mente, humor e produzir relaxamento, sendo usados em situação que envolvem dor - por isso exigem acompanhamento médico regular. Quando usado sob orientação com acompanhamento médico, o risco é muito baixo.",

      ],
      highlight:
        "A OMS não classifica o CBD como substância com potencial de abuso.",
    },
    {
      id: 2,
      question: "É legal usar cannabis medicinal no Brasil? Posso ser preso?",
      answer: [
        "Sim, o uso de cannabis medicinal é **totalmente legal**. O uso de cannabis medicinal no Brasil é regulamentado pela ANVISA (Agência Nacional de Vigilância Sanitária) desde **2015** e hoje conta com uma legislação clara.",
        "Desde que você tenha **receita médica** válida e adquira o produto por canais autorizados, **não há nenhum risco legal**. Guardar a receita e a **nota fiscal** do produto é suficiente para comprovar o uso lícito. Não esqueça a sua receita se for viajar com o produto.",
      ],
      highlight:
        "Regulamentado pela ANVISA desde 2015. Com receita e nota fiscal, você está protegido.",
    },
    {
      id: 3,
      question: "O tratamento deixa o paciente confuso ou eufórico?",
      answer: [
        "A grande maioria dos tratamentos utiliza produtos ricos em **CBD**, que **não possui propriedades psicoativas**, ou seja, não altera a percepção da realidade. Mesmo nos casos em que o médico prescreve fórmulas contendo **THC**, as doses são calculadas de forma precisa para oferecer alívio de sintomas (como dor ou espasmos) **sem causar euforia** ou desorientação, sonolência ou confusão mental. O objetivo médico é sempre o bem-estar sem prejudicar a percepção da realidade.",
      ],
      highlight:
        "CBD não causa euforia. THC é controlado por dosagem precisa e acompanhamento médico.",
    },
    {
      id: 4,
      question: "Preciso de receita médica para comprar cannabis medicinal?",
      answer: [
        "Sim, sempre. Isso não é burocracia à toa, é uma proteção para você.",
        "A prescrição médica garante que o produto certo foi indicado para a sua condição específica, na dose adequada para o seu peso e histórico de saúde. Automedicar-se com cannabis medicinal pode ser ineficaz ou, em alguns casos, contraproducente.",
        "Se você ainda não tem acompanhamento médico para este tratamento, podemos te orientar sobre os próximos passos. Fale com a gente pelo WhatsApp.",
      ],
      highlight: "Sem receita, sem produto. Isso é uma regra e uma proteção.",
    },
    {
      id: 5,
      question: "Quanto tempo leva para o tratamento fazer efeito?",
      answer: [
        "Não existe uma resposta única e desconfie de quem der uma.",
        "O tempo de resposta varia de acordo com a condição tratada, a dose prescrita, o metabolismo individual e a regularidade no uso. Alguns pacientes relatam melhora em semanas; outros, em meses. O processo de **titulação** (ajuste gradual da dose) é essencial para encontrar o ponto ideal para cada pessoa.",
        "O que podemos garantir: com acompanhamento médico adequado e uso regular conforme prescrito, as chances de encontrar uma resposta positiva aumentam significativamente.",
      ],
      highlight:
        "Paciência e acompanhamento médico são parte do tratamento.",
    },
    {
      id: 6,
      question: "Crianças e idosos podem fazer o tratamento?",
      answer: [
        "Sim, e em muitos casos, são exatamente esses grupos que mais se beneficiam.",
        "**Crianças:** o uso de CBD em crianças com epilepsia refratária é uma das indicações com maior volume de evidências científicas no mundo. No Brasil, foi justamente o caso de crianças com epilepsia grave que motivou as primeiras autorizações da ANVISA. O canabidiol também é usado com frequência em crianças com autismo, ajudando na melhora do comportamento e da qualidade do sono. O tratamento pediátrico exige atenção redobrada na dosagem e acompanhamento constante, o que um bom médico garantirá.",
        "**Idosos:** pacientes idosos frequentemente apresentam dores crônicas, insônia, Parkinson e Alzheimer, entre outras condições. O CBD tem um perfil de segurança favorável nessa faixa etária, com menos interações adversas do que muitos medicamentos convencionais. A avaliação médica é indispensável para checar interações com outros remédios em uso.",
      ],
      highlight:
        "Crianças e idosos podem fazer o tratamento, com acompanhamento médico especializado.",
    },
    {
      id: 7,
      question: "A cannabis medicinal cura todas as doenças?",
      answer: [
        "Não. Na maioria dos casos, a cannabis medicinal atua como um tratamento complementar, e não como cura.",
        "O principal benefício é o alívio de sintomas e a melhora significativa da qualidade de vida em condições como dor crônica, ansiedade, insônia e espasmos musculares. Ela não deve ser vista como cura definitiva para todas as patologias, e o acompanhamento médico contínuo é indispensável para monitorar a evolução do quadro.",
      ],
      highlight:
        "Alívio de sintomas e melhora da qualidade de vida — não uma cura definitiva.",
    },
    {
      id: 8,
      question: "Posso dirigir ou trabalhar normalmente durante o tratamento?",
      answer: [
        "Depende da composição do produto, especialmente do teor de THC, e da reação individual do seu organismo.",
        "Nas primeiras semanas de tratamento, ou logo após qualquer ajuste de dose, o recomendado é observar com atenção como o seu corpo reage antes de dirigir ou operar máquinas pesadas. Produtos ricos em CBD costumam ter impacto mínimo na atenção; já produtos com THC podem causar sonolência leve no início.",
        "Converse sempre com o seu médico sobre a sua rotina diária para receber orientações personalizadas.",
      ],
      highlight:
        "Observe como o corpo reage nas primeiras semanas antes de dirigir ou operar máquinas.",
    },
    {
      id: 9,
      question: "Quais são os efeitos colaterais mais comuns?",
      answer: [
        "Os efeitos mais comuns são leves e tendem a desaparecer nas primeiras semanas: boca seca, sonolência, aumento do apetite e alterações de humor.",
        "Na maioria das vezes, eles ocorrem enquanto a dose está sendo ajustada. Se aparecerem, comunique ao seu médico — uma simples adaptação na dose ou no horário costuma resolver.",
      ],
      highlight:
        "Efeitos leves e passageiros. Fale com seu médico para ajustar dose ou horário.",
    },
    {
      id: 10,
      question: "Como devo tomar o óleo de cannabis medicinal?",
      answer: [
        "O ideal é colocar o óleo diretamente na boca ou em uma colher — a absorção é muito mais eficiente dessa forma. Misturar em água não é recomendado, já que o óleo não se dissolve e boa parte do produto se perde na superfície ou na parede do copo.",
        "Se preferir misturar com algum alimento, escolha algo gorduroso, como iogurte integral, leite ou abacate. Tomar junto com uma refeição também costuma melhorar a absorção e reduzir efeitos colaterais.",
        "O melhor horário depende do objetivo do tratamento: para dor crônica e ansiedade, o uso pela manhã (ou dividido entre manhã e noite) é mais comum; para insônia, a dose à noite costuma fazer mais sentido. Siga sempre a orientação do seu médico.",
      ],
      highlight:
        "Tome diretamente na boca ou com alimento gorduroso, de preferência durante uma refeição.",
    },
    {
      id: 11,
      question: "Quanto custa o tratamento com cannabis medicinal?",
      answer: [
        "O valor mensal varia bastante conforme o produto, a dose e a forma de aquisição, mas costuma ficar entre R$ 150 e R$ 800.",
        "Em alguns estados, como São Paulo, o SUS fornece o medicamento gratuitamente para indicações de maior gravidade e benefício clínico comprovado.",
        "Fale com a gente para entender as opções de acesso que fazem mais sentido para o seu caso e o seu orçamento.",
      ],
      highlight:
        "Custo médio mensal entre R$ 150 e R$ 800, variando conforme o produto e a dose.",
    },
  ],
  cta: "Ainda tem dúvidas? Fale conosco",
};

// ============================================================
// SEÇÃO 4 - BLOG / BIBLIOTECA (TEASER)
// ============================================================
export const blogContent = {
  sectionLabel: "Atualizações",
  headline: "Informação que facilita o tratamento e melhora os resultados.",
  intro:
    "Aqui você vai encontrar informações atuais para entender mais sobre o tratamento com cannabis medicinal, com evidências científicas e embasamento real.",
  futureBlogTeaser: {
    badge: "Em breve - Área para Blog",
    label: "Espaço de Informação e Saúde",
    text: "Estamos preparando um guia completo com artigos médicos, atualizações científicas e histórias de superação para simplificar ainda mais a sua jornada com a cannabis medicinal.",
  },
  newsletter: {
    label: "Seja o primeiro a saber",
    text: "Cadastre seu e-mail e receba em primeira mão as atualizações sobre cannabis medicinal.",
    placeholder: "seu@email.com.br",
    cta: "Quero receber novidades",
  },
};

// ============================================================
// SEÇÃO 5 - SOBRE NÓS
// ============================================================
export const aboutContent = {
  sectionLabel: "Quem somos",
  headline: "Nascemos para simplificar o que parece complicado.",
  paragraphs: [
    "Nosso principal propósito é ajudar você a encontrar o caminho certo para o seu tratamento com cannabis medicinal. Sabemos que o acesso a essa terapia ainda levanta dúvidas sobre prescrição, regulamentação, produtos e segurança.",
    "Por isso, estamos aqui para orientar cada etapa com informação de qualidade e transparência. Aqui, você não é um número. Você é uma pessoa que merece receber a atenção certa.",
    "Acreditamos que nenhum paciente deveria perder tempo tentando entender uma burocracia que deveria ser simples. Nosso papel é simplificar o que parece complexo.",
  ],

  commitment: {
    title: "Nosso compromisso",
    items: [
      "Orientação transparente e baseada em evidências científicas",
      "Proteção de dados e privacidade asseguradas pela LGPD",
      "Acolhimento humanizado para simplificar a sua jornada",
    ],
  },
  futureDoctorsTeaser: {
    badge: "Em breve - Área para Profissionais de Saúde",
    label: "Você é profissional de saúde?",
    text: "Em breve, lançamos um espaço exclusivo para profissionais da saúde protocolos clínicos, dosimetria e suporte prescricional. Cadastre seu interesse.",
    cta: "Quero ser avisado",
  },
};

// ============================================================
// SEÇÃO 6 - CONTATO
// ============================================================
export const contactContent = {
  sectionLabel: "Contato",
  headline: "Quer falar conosco?",
  subheadline:
    "Nossa equipe está pronta para te atender.",
  whatsappCta: {
    title: "Atendimento via WhatsApp",
    description:
      "Clique no botão abaixo e inicie uma conversa. Nosso assistente vai te receber, coletar seus dados básicos e conectar você com o especialista certo.",
    button: "Iniciar atendimento pelo WhatsApp",
    note: "O atendimento é gratuito. Nenhum dado é compartilhado com terceiros.",
  },
  alternativeContact: {
    title: "Outras formas de falar com a gente",
    items: [
      {
        icon: "mail",
        label: "E-mail geral",
        value: "atendimento@canabene.com.br",
        description: "Para dúvidas que preferir enviar por escrito.",
      },
      {
        icon: "stethoscope",
        label: "E-mail para profissionais de saúde",
        value: "profissionais@canabene.com.br",
        description:
          "Profissionais da saúde: canal exclusivo para suporte prescricional.",
      },
      {
        icon: "clock",
        label: "Horário de atendimento",
        value: "Seg-Sex: 8h às 20h | Sábado: 9h às 13h",
        description: "Fora do horário? Deixe sua mensagem e retornamos em até 1 dia útil.",
      },
    ],
  },
};

// ============================================================
// RODAPÉ (FOOTER)
// ============================================================
export const footerContent = {
  tagline: "Juntos pelo seu bem-estar.",
  links: [
    { label: "Início", href: "#inicio" },
    { label: "O Tratamento", href: "#tratamento" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Atualizações", href: "#atualizacoes" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],
  legalNotice: `**Aviso Legal:** As informações disponibilizadas neste site têm caráter **exclusivamente informativo e educacional**, não substituindo consulta, diagnóstico ou prescrição médica. O acesso a medicamentos à base de cannabis no Brasil é regulamentado pela ANVISA e **exige prescrição de profissional de saúde habilitado**. A CanaBene não realiza diagnósticos, não prescreve medicamentos e não promove o uso recreativo de cannabis. Todas as informações estão em conformidade com a **RDC ANVISA nº 327/2019** e legislações complementares.`,
  privacyNotice: `**Privacidade e LGPD:** Em conformidade com a **Lei Geral de Proteção de Dados (Lei nº 13.709/2018)**, coletamos apenas os dados necessários para o atendimento. Seus dados não são vendidos, compartilhados ou utilizados para fins publicitários sem seu consentimento. Para exercer seus direitos de titular, entre em contato pelo e-mail: **atendimento@canabene.com.br**.`,
  copyright: `© ${new Date().getFullYear()} CanaBene. Todos os direitos reservados.`,
  anvisaNote: "Produto sujeito à regulamentação ANVISA. Exige prescrição médica.",
};

// ============================================================
// SEO - PALAVRAS-CHAVE E META TAGS
// ============================================================
export const seoData = {
  primaryKeywords: [
    "cannabis medicinal brasil",
    "canabidiol legal no brasil",
    "CBD ansiedade tratamento",
    "como comprar cannabis medicinal com receita",
    "cannabis medicinal ANVISA regulamentada",
    "CBD epilepsia crianças brasil",
    "tratamento dor crônica cannabis",
    "cannabis medicinal insônia",
    "canabidiol esclerose múltipla",
    "cannabis medicinal oncologia enjoo quimioterapia",
    "como prescrever canabidiol médico",
    "CBD legal ou ilegal brasil",
    "cannabis medicinal sem ficar chapado",
    "canabidiol OMS segurança dependência",
    "acesso cannabis medicinal anvisa rdc 327",
    "CBD autismo tratamento",
    "cannabis medicinal Parkinson Alzheimer",
    "receita amarela cannabis medicinal",
    "receita controle especial CBD",
    "quanto custa tratamento cannabis medicinal",
  ],
  pageTitle:
    "CanaBene | Cannabis Medicinal Legal no Brasil - Orientação para Pacientes",
  metaDescription:
    "A CanaBene orienta pacientes sobre o acesso legal à cannabis medicinal regulamentada pela ANVISA. Tire suas dúvidas, entenda o tratamento e fale com nossos especialistas pelo WhatsApp.",
};
