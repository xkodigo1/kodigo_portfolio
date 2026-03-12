export type Locale = "es" | "en" | "pt";

type CapabilityGroup = {
  description: string;
  title: string;
};

type ContactCopy = {
  eyebrow: string;
  githubLabel: string;
  primaryAction: string;
  title: string;
};

type FeaturedProject = {
  ctaLabel?: string;
  impact: string;
  link: string;
  metrics: readonly string[];
  summary: string;
  title: string;
};

type ProcessStep = {
  detail: string;
  title: string;
};

type SiteConfig = {
  availability: string;
  description: string;
  email: string;
  githubUrl: string;
  heroBlurb: string;
  location: string;
  name: string;
  title: string;
};

type TimelineEntry = {
  label: string;
  value: string;
};

type UiCopy = {
  capabilitiesEyebrow: string;
  capabilitiesSummary: string;
  capabilitiesTitle: string;
  contactButton: string;
  controlsEyebrow: string;
  controlsSummary: string;
  controlsTitle: string;
  darkMode: string;
  githubLabel: string;
  languageLabel: string;
  lightMode: string;
  operatingStackEyebrow: string;
  operatingStackTitle: string;
  processEyebrow: string;
  processBadge: string;
  processSummary: string;
  processTitle: string;
  principleLabel: string;
  projectButton: string;
  selectedWorkEyebrow: string;
  selectedWorkSummary: string;
  selectedWorkTitle: string;
  stepLabel: string;
  themeLabel: string;
  viewOrganization: string;
  workButton: string;
};

type PortfolioLocaleContent = {
  capabilityGroups: readonly CapabilityGroup[];
  contact: ContactCopy;
  featuredProjects: readonly FeaturedProject[];
  principles: readonly string[];
  processSteps: readonly ProcessStep[];
  siteConfig: SiteConfig;
  stack: readonly string[];
  timeline: readonly TimelineEntry[];
  ui: UiCopy;
};

export const defaultLocale: Locale = "es";

export const localeOptions = [
  { code: "es", label: "ES", nativeName: "Español" },
  { code: "en", label: "EN", nativeName: "English" },
  { code: "pt", label: "PT", nativeName: "Português" },
] as const;

const sharedStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "Motion",
  "Biome",
  "Vitest",
  "Playwright",
  "Storybook",
  "Chromatic",
  "Vercel",
] as const;

export const portfolioContent: Record<Locale, PortfolioLocaleContent> = {
  es: {
    capabilityGroups: [
      {
        description:
          "Landings, micrositios y superficies de producto afinadas para conversión, claridad narrativa y percepción premium.",
        title: "Interfaces listas para lanzamiento",
      },
      {
        description:
          "Componentes, tokens y patrones reutilizables que se mantienen consistentes cuando el producto crece.",
        title: "Sistemas de diseño con criterio",
      },
      {
        description:
          "Validaciones automáticas para accesibilidad, responsividad, build, tipado y regresiones antes de publicar.",
        title: "Calidad impuesta por automatización",
      },
      {
        description:
          "Decisiones de frontend conectadas con operación, métricas y objetivos reales del negocio.",
        title: "Ejecución orientada a producto",
      },
    ],
    contact: {
      eyebrow: "Contacto",
      githubLabel: "GitHub",
      primaryAction: "Escríbeme",
      title:
        "¿Necesitas un portafolio, dashboard o sistema UI que se sienta más sólido que la media?",
    },
    featuredProjects: [
      {
        ctaLabel: "Ver organización",
        impact:
          "Unificó inscripciones, asistencia, pagos, certificados, reportes y captación pública en una sola plataforma educativa.",
        link: "https://github.com/IA-Academy-Team",
        metrics: ["React 19", "Express", "TypeORM"],
        summary:
          "Plataforma interna de Campuslands IA Academy con panel administrativo, vistas operativas, tiempo real, exports, flujos de pago y landing conectada al producto.",
        title: "Apex Platform",
      },
      {
        impact:
          "Integró procesamiento documental, control por roles y analítica operativa en un sistema full-stack orientado a uso real.",
        link: "https://github.com/xkodigo1/docsflow-project",
        metrics: ["FastAPI", "React", "MySQL"],
        summary:
          "Sistema de gestión documental con autenticación JWT, extracción automática de tablas desde PDF, dashboard administrativo y experiencia diferenciada para operadores.",
        title: "DocsFlow",
      },
      {
        impact:
          "Combinó matching, chat, créditos y analítica en una aplicación social con lógica de dominio y enfoque comercial.",
        link: "https://github.com/xkodigo1/campus-love-app",
        metrics: [".NET", "C#", "MySQL"],
        summary:
          "Aplicación de citas enfocada en comunidad universitaria, con arquitectura por capas, herramientas de administración y flujos de monetización.",
        title: "Campus Love App",
      },
    ],
    principles: [
      "La identidad visual debe ser intencional, no plantilla.",
      "La automatización debe quitar errores, no agregar fricción.",
      "Cada sección debe explicar, demostrar o convertir.",
    ],
    processSteps: [
      {
        detail: "Defino audiencia, objetivo y restricciones antes de diseñar una sola pantalla.",
        title: "Alinear el problema",
      },
      {
        detail: "Traduzco narrativa, jerarquía e interacción en un lenguaje visual reconocible.",
        title: "Diseñar el sistema",
      },
      {
        detail: "Construyo con componentes reutilizables, tipado fuerte y checks automáticos.",
        title: "Implementar con rigor",
      },
      {
        detail: "Mido, ajusto y dejo el producto suficientemente rápido para sentirse inevitable.",
        title: "Pulir el resultado",
      },
    ],
    siteConfig: {
      availability: "Disponible para colaboraciones selectas en producto y frontend",
      description:
        "Ingeniero frontend enfocado en interfaces pulidas, dashboards operativos y sistemas web que soportan complejidad real.",
      email: "180666585+xkodigo1@users.noreply.github.com",
      githubUrl: "https://github.com/xkodigo1",
      heroBlurb:
        "Diseño y desarrollo productos web que equilibran precisión visual, profundidad operativa y ejecución confiable.",
      location: "Remoto desde Colombia",
      name: "Fabian Galan",
      title: "Ingeniero Frontend + Constructor de Sistemas UI",
    },
    stack: sharedStack,
    timeline: [
      {
        label: "Estrategia",
        value: "Aterrizar alcance, audiencia y narrativa antes de implementar.",
      },
      {
        label: "Sistema",
        value: "Convertir la dirección visual en componentes, secciones y reglas reutilizables.",
      },
      {
        label: "Prueba",
        value: "Respaldar cada entrega con build, tipado, pruebas y verificación visual.",
      },
    ],
    ui: {
      capabilitiesEyebrow: "Capacidades",
      capabilitiesSummary:
        "Desde landings premium hasta dashboards y flujos en tiempo real, el mejor trabajo aquí mezcla criterio visual con disciplina técnica.",
      capabilitiesTitle: "El buen frontend debe verse bien y aguantar presión de producción.",
      contactButton: "Abrir conversación",
      controlsEyebrow: "Preferencias",
      controlsSummary:
        "Idioma y tema persistentes para navegar el sitio en el formato que prefieras. Español es el punto de partida.",
      controlsTitle: "Personaliza la experiencia",
      darkMode: "Oscuro",
      githubLabel: "GitHub",
      languageLabel: "Idioma",
      lightMode: "Claro",
      operatingStackEyebrow: "Stack operativo",
      operatingStackTitle: "Frontend moderno con automatización y guardrails reales",
      processEyebrow: "Proceso",
      processBadge: "Entrega con previews, validación visual y commits trazables.",
      processSummary:
        "El flujo de trabajo está diseñado para sostener calidad alta incluso cuando el proyecto avanza rápido.",
      processTitle: "El proceso importa tanto como el resultado visual.",
      principleLabel: "Principio",
      projectButton: "Ver proyecto",
      selectedWorkEyebrow: "Trabajo seleccionado",
      selectedWorkSummary:
        "Selección hecha desde tus repositorios y tu proyecto organizacional, priorizando complejidad de producto, amplitud técnica y señal profesional.",
      selectedWorkTitle: "Proyectos que demuestran rango de producto y profundidad de ingeniería.",
      stepLabel: "Paso",
      themeLabel: "Tema",
      viewOrganization: "Ver organización",
      workButton: "Explorar proyectos",
    },
  },
  en: {
    capabilityGroups: [
      {
        description:
          "Landing pages, microsites, and product surfaces tuned for conversion, narrative clarity, and premium feel.",
        title: "Launch-ready interfaces",
      },
      {
        description:
          "Reusable components, tokens, and interaction patterns that remain coherent as a product grows.",
        title: "Design systems with judgment",
      },
      {
        description:
          "Automated checks for accessibility, responsiveness, build health, typing, and regressions before shipping.",
        title: "Quality enforced by automation",
      },
      {
        description:
          "Frontend decisions tied to operations, metrics, and real business constraints.",
        title: "Product-minded execution",
      },
    ],
    contact: {
      eyebrow: "Contact",
      githubLabel: "GitHub",
      primaryAction: "Email me",
      title: "Need a portfolio, dashboard, or UI system that feels sharper than the default?",
    },
    featuredProjects: [
      {
        ctaLabel: "View organization",
        impact:
          "Unified enrollment, attendance, payments, certificates, reporting, and public acquisition flows into one education platform.",
        link: "https://github.com/IA-Academy-Team",
        metrics: ["React 19", "Express", "TypeORM"],
        summary:
          "Campuslands IA Academy's internal platform with admin tooling, operational views, realtime features, exports, payment-linked workflows, and a connected landing surface.",
        title: "Apex Platform",
      },
      {
        impact:
          "Combined document processing, role-based access, and operational analytics in a full-stack system designed for real use.",
        link: "https://github.com/xkodigo1/docsflow-project",
        metrics: ["FastAPI", "React", "MySQL"],
        summary:
          "Document management platform with JWT auth, automatic PDF table extraction, an admin dashboard, and differentiated operator workflows.",
        title: "DocsFlow",
      },
      {
        impact:
          "Brought matching, chat, credits, and analytics together in a social product with layered domain logic and commercial thinking.",
        link: "https://github.com/xkodigo1/campus-love-app",
        metrics: [".NET", "C#", "MySQL"],
        summary:
          "University-focused dating app with layered architecture, admin tooling, and monetization-oriented product flows.",
        title: "Campus Love App",
      },
    ],
    principles: [
      "Visual identity should feel intentional, not template-shaped.",
      "Automation should remove failure modes, not create ceremony.",
      "Every section should explain, prove, or convert.",
    ],
    processSteps: [
      {
        detail: "I define audience, goal, and constraints before drawing a single screen.",
        title: "Frame the problem",
      },
      {
        detail:
          "I turn narrative, hierarchy, and interaction into a visual language with its own character.",
        title: "Design the system",
      },
      {
        detail: "I build with reusable components, strong typing, and automated quality checks.",
        title: "Implement with rigor",
      },
      {
        detail: "I measure, refine, and make the product fast enough to feel inevitable.",
        title: "Tighten the finish",
      },
    ],
    siteConfig: {
      availability: "Open for select product and frontend collaborations",
      description:
        "Frontend engineer building polished interfaces, operational dashboards, and web systems that hold up under real complexity.",
      email: "180666585+xkodigo1@users.noreply.github.com",
      githubUrl: "https://github.com/xkodigo1",
      heroBlurb:
        "I design and ship web products that balance visual precision, operational depth, and reliable execution.",
      location: "Remote from Colombia",
      name: "Fabian Galan",
      title: "Frontend Engineer + UI Systems Builder",
    },
    stack: sharedStack,
    timeline: [
      {
        label: "Strategy",
        value: "Clarify scope, audience, and narrative before implementation starts.",
      },
      {
        label: "System",
        value: "Turn visual direction into reusable sections, components, and rules.",
      },
      {
        label: "Proof",
        value: "Back each release with build, typing, tests, and visual verification.",
      },
    ],
    ui: {
      capabilitiesEyebrow: "Capabilities",
      capabilitiesSummary:
        "From premium landing pages to dashboards and realtime workflows, the strongest work here blends visual taste with technical discipline.",
      capabilitiesTitle: "Good frontend work should look sharp and survive production pressure.",
      contactButton: "Start a conversation",
      controlsEyebrow: "Preferences",
      controlsSummary:
        "Persistent language and theme controls so the site stays readable the way you want. Spanish is the default.",
      controlsTitle: "Tune the experience",
      darkMode: "Dark",
      githubLabel: "GitHub",
      languageLabel: "Language",
      lightMode: "Light",
      operatingStackEyebrow: "Operating stack",
      operatingStackTitle: "Modern frontend systems with real automation and guardrails",
      processEyebrow: "Process",
      processBadge: "Ship with previews, visual checks, and traceable commits.",
      processSummary:
        "The workflow is designed to keep quality high even when the project moves fast.",
      processTitle: "Process matters as much as the visual result.",
      principleLabel: "Principle",
      projectButton: "View project",
      selectedWorkEyebrow: "Selected work",
      selectedWorkSummary:
        "Chosen from your repositories and your organization project, prioritizing product complexity, technical breadth, and professional signal.",
      selectedWorkTitle: "Projects that show both product range and engineering depth.",
      stepLabel: "Step",
      themeLabel: "Theme",
      viewOrganization: "View organization",
      workButton: "Explore projects",
    },
  },
  pt: {
    capabilityGroups: [
      {
        description:
          "Landing pages, microsites e superfícies de produto pensadas para conversão, clareza narrativa e percepção premium.",
        title: "Interfaces prontas para lançamento",
      },
      {
        description:
          "Componentes, tokens e padrões reutilizáveis que continuam coerentes quando o produto cresce.",
        title: "Sistemas de design com critério",
      },
      {
        description:
          "Validações automáticas para acessibilidade, responsividade, build, tipagem e regressões antes de publicar.",
        title: "Qualidade garantida por automação",
      },
      {
        description:
          "Decisões de frontend conectadas à operação, métricas e restrições reais do negócio.",
        title: "Execução orientada a produto",
      },
    ],
    contact: {
      eyebrow: "Contato",
      githubLabel: "GitHub",
      primaryAction: "Enviar e-mail",
      title:
        "Precisa de um portfólio, dashboard ou sistema UI que pareça mais sólido que o padrão?",
    },
    featuredProjects: [
      {
        ctaLabel: "Ver organização",
        impact:
          "Unificou inscrições, presença, pagamentos, certificados, relatórios e captação pública em uma única plataforma educacional.",
        link: "https://github.com/IA-Academy-Team",
        metrics: ["React 19", "Express", "TypeORM"],
        summary:
          "Plataforma interna da Campuslands IA Academy com painel administrativo, vistas operacionais, tempo real, exportações, fluxos de pagamento e landing integrada.",
        title: "Apex Platform",
      },
      {
        impact:
          "Combinou processamento documental, acesso por papéis e análise operacional em um sistema full-stack voltado para uso real.",
        link: "https://github.com/xkodigo1/docsflow-project",
        metrics: ["FastAPI", "React", "MySQL"],
        summary:
          "Plataforma de gestão documental com autenticação JWT, extração automática de tabelas de PDF, dashboard administrativo e experiência diferenciada para operadores.",
        title: "DocsFlow",
      },
      {
        impact:
          "Reuniu matching, chat, créditos e analytics em um produto social com lógica de domínio em camadas e visão comercial.",
        link: "https://github.com/xkodigo1/campus-love-app",
        metrics: [".NET", "C#", "MySQL"],
        summary:
          "Aplicativo de relacionamentos voltado para a comunidade universitária, com arquitetura em camadas, ferramentas administrativas e fluxos de monetização.",
        title: "Campus Love App",
      },
    ],
    principles: [
      "A identidade visual deve ser intencional, não parecer um template.",
      "A automação deve remover erros, não adicionar burocracia.",
      "Cada seção precisa explicar, provar ou converter.",
    ],
    processSteps: [
      {
        detail: "Defino público, objetivo e restrições antes de desenhar qualquer tela.",
        title: "Enquadrar o problema",
      },
      {
        detail:
          "Transformo narrativa, hierarquia e interação em uma linguagem visual com personalidade.",
        title: "Desenhar o sistema",
      },
      {
        detail: "Construo com componentes reutilizáveis, tipagem forte e verificações automáticas.",
        title: "Implementar com rigor",
      },
      {
        detail: "Meço, refino e deixo o produto rápido o bastante para parecer inevitável.",
        title: "Refinar o resultado",
      },
    ],
    siteConfig: {
      availability: "Disponível para colaborações seletivas em produto e frontend",
      description:
        "Engenheiro frontend focado em interfaces polidas, dashboards operacionais e sistemas web que suportam complexidade real.",
      email: "180666585+xkodigo1@users.noreply.github.com",
      githubUrl: "https://github.com/xkodigo1",
      heroBlurb:
        "Projeto e entrego produtos web que equilibram precisão visual, profundidade operacional e execução confiável.",
      location: "Remoto da Colômbia",
      name: "Fabian Galan",
      title: "Engenheiro Frontend + Construtor de Sistemas UI",
    },
    stack: sharedStack,
    timeline: [
      {
        label: "Estratégia",
        value: "Definir escopo, público e narrativa antes de implementar.",
      },
      {
        label: "Sistema",
        value: "Transformar a direção visual em componentes, seções e regras reutilizáveis.",
      },
      {
        label: "Prova",
        value: "Sustentar cada entrega com build, tipagem, testes e verificação visual.",
      },
    ],
    ui: {
      capabilitiesEyebrow: "Capacidades",
      capabilitiesSummary:
        "De landing pages premium a dashboards e fluxos em tempo real, o melhor trabalho aqui combina bom gosto visual com disciplina técnica.",
      capabilitiesTitle: "Bom frontend precisa parecer refinado e resistir à pressão de produção.",
      contactButton: "Iniciar conversa",
      controlsEyebrow: "Preferências",
      controlsSummary:
        "Idioma e tema persistentes para navegar no formato que você preferir. Espanhol é o padrão.",
      controlsTitle: "Ajuste a experiência",
      darkMode: "Escuro",
      githubLabel: "GitHub",
      languageLabel: "Idioma",
      lightMode: "Claro",
      operatingStackEyebrow: "Stack operacional",
      operatingStackTitle: "Frontend moderno com automação e guardrails de verdade",
      processEyebrow: "Processo",
      processBadge: "Entregue com previews, checagens visuais e commits rastreáveis.",
      processSummary:
        "O fluxo de trabalho foi desenhado para manter alta qualidade mesmo quando o projeto acelera.",
      processTitle: "O processo importa tanto quanto o resultado visual.",
      principleLabel: "Princípio",
      projectButton: "Ver projeto",
      selectedWorkEyebrow: "Projetos selecionados",
      selectedWorkSummary:
        "Seleção feita a partir dos seus repositórios e do seu projeto organizacional, priorizando complexidade de produto, amplitude técnica e sinal profissional.",
      selectedWorkTitle: "Projetos que mostram alcance de produto e profundidade de engenharia.",
      stepLabel: "Etapa",
      themeLabel: "Tema",
      viewOrganization: "Ver organização",
      workButton: "Explorar projetos",
    },
  },
} as const;
