// CanaBene - Conteúdo Completo da Landing Page
// Fase 1: Arquitetura de Informação, Copywriting e SEO

export const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20tratamento%20com%20cannabis%20medicinal.";

export const siteConfig = {
  name: "CanaBene",
  tagline: "Cuidado com base em ciência. Acesso com segurança.",
  email: "atendimento@canabene.com.br",
  emailProfissionais: "profissionais@canabene.com.br",
  horarioAtendimento: "Segunda a Sexta, das 8h às 18h | Sábado, das 9h às 13h",
  whatsapp: WHATSAPP_URL,
};

// ============================================================
// SEÇÃO 1 - HERO / HOME
// ============================================================
export const heroContent = {
  badge: "Regulamentado pela ANVISA",
  headline: "Você não precisa enfrentar a dor sozinho.",
  subheadline:
    "A cannabis medicinal é uma opção real, legal e segura para milhares de pacientes no Brasil. Na CanaBene, a gente te orienta em cada etapa do caminho, com informação de verdade e um time que sabe do que está falando.",
  cta: "Quero saber como funciona",
  ctaSecondary: "Tire suas dúvidas agora",
  trustBadges: [
    { icon: "shield", label: "Regulamentado pela ANVISA" },
    { icon: "file-text", label: "Exige prescrição médica" },
    { icon: "lock", label: "Privacidade protegida (LGPD)" },
    { icon: "message-circle", label: "Atendimento humanizado" },
  ],
};

// ============================================================
// SEÇÃO 2 - SOBRE NÓS
// ============================================================
export const aboutContent = {
  sectionLabel: "Quem somos",
  headline: "Nascemos para simplificar o que parece complicado.",
  paragraphs: [
    "Existimos porque acreditamos que nenhum paciente deveria perder tempo tentando entender uma burocracia que deveria ser simples. A CanaBene nasceu da necessidade real: reunir em um só lugar orientação confiável, atendimento humano e acesso a medicamentos regulamentados.",
    "Nossa equipe combina experiência farmacêutica, conhecimento regulatório e, acima de tudo, escuta ativa. Aqui, você não é um número. Você é uma pessoa que merece receber a atenção certa.",
    "Trabalhamos exclusivamente com produtos autorizados pela ANVISA, seguindo todas as exigências legais vigentes no Brasil, para que o seu único foco seja o que importa: a sua saúde.",
  ],
  stats: [
    { value: "2015", label: "ANVISA regulamentou" },
    { value: "100%", label: "Legal e regulamentado" },
    { value: "24h", label: "Retorno máximo" },
  ],
  commitment: {
    title: "Nosso compromisso",
    items: [
      "Apenas produtos autorizados pela ANVISA",
      "Atendimento acolhedor e sem julgamentos",
      "Informações baseadas em evidências científicas",
      "Privacidade protegida pela LGPD",
      "Atendimento realizado por pessoas reais",
    ],
  },
  values: [
    {
      icon: "heart",
      title: "Cuidado genuíno",
      description:
        "Cada atendimento começa com escuta. Entendemos a sua história antes de oferecer qualquer orientação.",
    },
    {
      icon: "book-open",
      title: "Embasamento científico",
      description:
        "Todas as informações que compartilhamos têm respaldo em evidências clínicas e na regulamentação oficial.",
    },
    {
      icon: "shield-check",
      title: "Transparência total",
      description:
        "Sem promessas vazias. Sem milagres. Somos diretos sobre o que a cannabis medicinal pode (e o que ela não pode) fazer.",
    },
    {
      icon: "users",
      title: "Para você e para quem você ama",
      description:
        "Atendemos pacientes de todas as idades, inclusive crianças e idosos, sempre com o suporte de um profissional de saúde.",
    },
  ],
  futureDoctorsTeaser: {
    badge: "Em breve - Área para Profissionais de Saúde",
    label: "Você é profissional de saúde?",
    text: "Em breve, lançamos um espaço exclusivo para médicos e dentistas: protocolos clínicos, dosimetria e suporte prescricional. Cadastre seu interesse.",
    cta: "Quero ser avisado",
  },
};

// ============================================================
// SEÇÃO 3 - O QUE É O TRATAMENTO
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
        "O principal composto terapêutico, presente na maioria dos produtos prescritos no Brasil. Não causa euforia nem alteração de consciência. Reconhecido pela OMS como seguro e sem potencial significativo de abuso. Usado para epilepsia, ansiedade, autismo, dor crônica e insônia. Prescrito por Receita de Controle Especial (receituário branco, em duas vias).",
    },
    {
      acronym: "THC",
      name: "Tetrahidrocanabinol",
      color: "teal",
      description:
        "Presente em produtos com mais de 0,2% de THC, sempre em doses controladas e prescritas. Indicado principalmente para dor intensa, náusea e espasticidade. Exige Receita Amarela (Notificação de Receita A) e acompanhamento médico regular, dentro dos limites legais da ANVISA.",
    },
  ],
  conditions: {
    title: "Condições em que o tratamento é estudado",
    disclaimer:
      "* Estes são campos de pesquisa clínica ativa. A indicação deve sempre partir de um médico, com base no seu histórico de saúde.",
    list: [
      "Ansiedade e transtornos de humor",
      "Insônia e distúrbios do sono",
      "Depressão",
      "Autismo (comportamento e qualidade do sono)",
      "Dor crônica e neuropática (incluindo fibromialgia)",
      "Epilepsia resistente a outros medicamentos",
      "Náuseas, dor e perda de apetite na quimioterapia",      
      "Doenças neurodegenerativas (Parkinson e Alzheimer)",
      "Espasticidade muscular (Esclerose Múltipla)",
    ],
  },
  howToAccess: {
    title: "Como funciona o acesso legal",
    steps: [
      {
        number: "01",
        title: "Consulta médica",
        description:
          "O processo começa com um médico ou cirurgião-dentista que conheça cannabis medicinal, avalie o seu caso e, se indicado, emita uma prescrição.",
      },
      {
        number: "02",
        title: "Prescrição e documentação",
        description:
          "Dependendo do produto, você recebe uma Receita de Controle Especial (produtos com até 0,2% de THC) ou uma Receita Amarela — Notificação de Receita A (produtos com mais de 0,2% de THC). Guarde sempre o original: ela é exigida na farmácia ou no desembaraço da importação.",
      },
      {
        number: "03",
        title: "Orientação CanaBene",
        description:
          "Nossa equipe te ajuda a escolher entre as três formas de aquisição: farmácias autorizadas, importação direta (com autorização individual da ANVISA) ou associações de pacientes. E acompanhamos você nas dúvidas do dia a dia.",
      },
      {
        number: "04",
        title: "Acesso ao medicamento",
        description:
          "O produto é entregue com nota fiscal, dentro das normas da ANVISA. Da consulta até o produto chegar em casa, o processo costuma levar de 2 a 4 semanas.",
      },
    ],
  },
  cta: "Falar com um especialista no WhatsApp",
};

// ============================================================
// SEÇÃO 4 - FAQ (DÚVIDAS FREQUENTES)
// ============================================================
export const faqContent = {
  sectionLabel: "Dúvidas frequentes",
  headline: "As perguntas que todo paciente faz, respondidas com honestidade.",
  intro:
    "Entendemos que este é um tema que ainda carrega muitos mitos. Aqui, vamos direto ao ponto.",
  faqs: [
    {
      id: 1,
      question: "Cannabis medicinal causa dependência ou vício?",
      answer: [
        "Esta é, de longe, a dúvida mais comum, e a resposta é mais tranquilizadora do que muita gente espera.",
        "O **CBD (Canabidiol)**, composto presente na maioria dos medicamentos de cannabis medicinal, foi avaliado pela **Organização Mundial da Saúde (OMS)** que concluiu: o CBD **não apresenta potencial significativo de abuso ou dependência** e não é associado a efeitos adversos relacionados ao vício.",
        "Quanto ao **THC**, presente em alguns medicamentos em doses baixas e controladas: sim, em doses elevadas e uso recreativo não supervisionado, ele pode gerar dependência psicológica em pessoas predispostas. É exatamente por isso que, no tratamento medicinal, ele é prescrito por médico, em dosagem precisa e com acompanhamento regular.",
        "Em resumo: **tratamento medicinal ≠ uso recreativo**. A diferença está na dose, no controle e na supervisão profissional, assim como acontece com qualquer outro medicamento controlado.",
      ],
      highlight:
        "A OMS não classifica o CBD como substância com potencial de abuso.",
    },
    {
      id: 2,
      question: "É legal usar cannabis medicinal no Brasil? Posso ser preso?",
      answer: [
        "Sim, é **completamente legal**, desde que feito dentro das regras. E não, você não pode ser preso por seguir o processo correto.",
        "Desde **2015**, a ANVISA (Agência Nacional de Vigilância Sanitária) regulamentou o uso de produtos à base de cannabis para fins medicinais no Brasil. Desde então, as normas foram aprimoradas e hoje o acesso é mais claro do que nunca.",
        "**O que garante a sua segurança jurídica:**",
        "• **Prescrição médica:** emitida por médico registrado no CRM, com seu nome, CPF e a substância prescrita;\n• **Nota fiscal:** o produto deve ser adquirido de fornecedor autorizado, com nota fiscal em seu nome;\n• **Documentação completa:** guarde sempre a receita e o comprovante de compra.",
        "Com esses documentos em mãos, você está protegido legalmente. **Nenhuma autoridade pode questionar um paciente que segue o protocolo legal.**",
        "Uma dica prática: se for viajar com o produto, leve sempre a receita original com você.",
        "A CanaBene só opera dentro dessas regras. Se você ainda não tem prescrição, podemos te orientar sobre como iniciar esse processo com um médico.",
      ],
      highlight:
        "Regulamentado pela ANVISA desde 2015. Com receita e nota fiscal, você está protegido.",
    },
    {
      id: 3,
      question: "O tratamento deixa o paciente confuso ou eufórico?",
      answer: [
        "Depende do medicamento prescrito, e o seu médico vai te explicar exatamente o que esperar.",
        "**Se o seu medicamento é à base de CBD puro:** não. O CBD **não tem propriedades psicoativas**. Ele não altera a consciência, não causa euforia, não deixa «chapado» e não prejudica a capacidade de dirigir ou trabalhar. A grande maioria dos pacientes relata melhora sem qualquer efeito sedativo indesejado.",
        "**Se o seu medicamento contém THC em associação com CBD:** a dosagem é prescrita de forma gradual e controlada pelo médico, começando sempre por doses muito baixas. O objetivo é alcançar o efeito terapêutico sem comprometer o funcionamento diário. Efeitos como leve sonolência podem ocorrer no início da titulação, é por isso que existe o acompanhamento médico.",
        "**Na prática:** a maioria dos pacientes em tratamento com cannabis medicinal regulamentada mantém sua rotina normalmente. Trabalham, estudam, cuidam dos filhos.",
        "Se você tiver qualquer dúvida sobre o medicamento prescrito pelo seu médico, fale com a gente. Estamos aqui para ajudar na interpretação e no acompanhamento.",
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
  cta: "Ainda tem dúvidas? Fale com a gente",
};

// ============================================================
// SEÇÃO 5 - BLOG / BIBLIOTECA (TEASER)
// ============================================================
export const blogContent = {
  sectionLabel: "Conteúdo e conhecimento",
  headline: "Informação que empodera. Conhecimento que acolhe.",
  intro:
    "Em breve, nosso Blog e Biblioteca de Conteúdo entrarão no ar. Aqui você vai encontrar artigos, guias práticos e referências científicas para entender cada aspecto do tratamento com cannabis medicinal, sempre com linguagem acessível e embasamento real.",
  categories: [
    {
      icon: "📖",
      title: "Guias para Pacientes",
      description:
        "Como iniciar o tratamento, o que levar na consulta, como interpretar a sua prescrição.",
      tag: "Em breve",
    },
    {
      icon: "🔬",
      title: "Ciência & Pesquisa",
      description:
        "Resumos de estudos clínicos em linguagem acessível. Entenda o que a ciência diz, sem precisar de doutorado.",
      tag: "Em breve",
    },
    {
      icon: "⚖️",
      title: "Direitos & Regulamentação",
      description:
        "Tudo sobre as leis da ANVISA, seus direitos como paciente e como se proteger juridicamente.",
      tag: "Em breve",
    },
    {
      icon: "💬",
      title: "Histórias Reais",
      description:
        "Relatos de pacientes (com autorização) que encontraram qualidade de vida com o tratamento.",
      tag: "Em breve",
    },
  ],
  newsletter: {
    label: "Seja o primeiro a saber",
    text: "Cadastre seu e-mail e receba em primeira mão quando o Blog e a Biblioteca entrarem no ar.",
    placeholder: "seu@email.com.br",
    cta: "Quero receber novidades",
  },
};

// ============================================================
// SEÇÃO 6 - CONTATO
// ============================================================
export const contactContent = {
  sectionLabel: "Contato",
  headline: "Pronto para dar o próximo passo?",
  subheadline:
    "Fale com a nossa equipe. Sem julgamentos, sem pressa. Só escuta e orientação.",
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
          "Médicos e dentistas: canal exclusivo para suporte prescricional. (Área em construção)",
      },
      {
        icon: "clock",
        label: "Horário de atendimento",
        value: "Seg-Sex: 8h às 18h | Sábado: 9h às 13h",
        description: "Fora do horário? Deixe sua mensagem e retornamos em até 1 dia útil.",
      },
    ],
  },
};

// ============================================================
// RODAPÉ (FOOTER)
// ============================================================
export const footerContent = {
  tagline: "Cuidado com base em ciência. Acesso com segurança.",
  links: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "O Tratamento", href: "#tratamento" },
    { label: "FAQ", href: "#faq" },
    { label: "Conteúdo", href: "#conteudo" },
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
