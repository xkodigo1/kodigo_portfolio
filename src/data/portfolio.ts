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

type StackGroup = {
  items: readonly string[];
  summary: string;
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
  stackGroupLabel: string;
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
  stackGroups: readonly StackGroup[];
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
          "Interfaces de producto, paneles administrativos y sistemas UI pensados para claridad, velocidad y mantenibilidad.",
        title: "Frontend de producto",
      },
      {
        description:
          "APIs, autenticación, modelado relacional, websockets y flujos de negocio que soportan complejidad real.",
        title: "Backend y lógica de dominio",
      },
      {
        description:
          "Procesamiento documental, exportes, reporting y automatizaciones que conectan operación con producto.",
        title: "Sistemas operativos end-to-end",
      },
      {
        description:
          "Guardrails de CI/CD, pruebas, tipado y verificación visual para publicar con menos riesgo.",
        title: "Entrega con estándares de producción",
      },
    ],
    contact: {
      eyebrow: "Contacto",
      githubLabel: "GitHub",
      primaryAction: "Escríbeme",
      title: "¿Necesitas un producto, dashboard o plataforma que funcione bien de punta a punta?",
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
      availability: "Disponible para roles full-stack, frontend y backend orientados a producto",
      description:
        "Desarrollador full-stack enfocado en interfaces pulidas, APIs sólidas y sistemas web que soportan operación real.",
      email: "180666585+xkodigo1@users.noreply.github.com",
      githubUrl: "https://github.com/xkodigo1",
      heroBlurb:
        "Diseño y desarrollo productos web completos: frontend, backend, datos e integraciones con foco en ejecución confiable.",
      location: "Remoto desde Colombia",
      name: "Fabian Galan",
      title: "Desarrollador Full-Stack + Ingeniero de Sistemas de Producto",
    },
    stack: sharedStack,
    stackGroups: [
      {
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        summary: "Interfaces de producto, dashboards y sistemas UI mantenibles.",
        title: "Frontend",
      },
      {
        items: ["Node.js", "Express", "FastAPI", ".NET", "JWT", "MySQL", "TypeORM"],
        summary: "APIs, autenticación, persistencia y lógica de negocio real.",
        title: "Backend",
      },
      {
        items: ["GitHub Actions", "Playwright", "Vitest", "Storybook", "Lighthouse", "Vercel"],
        summary: "Pruebas, automatización y despliegue con guardrails claros.",
        title: "Entrega",
      },
    ],
    timeline: [
      {
        label: "Alcance",
        value: "Definir el problema, roles, datos e integraciones antes de construir.",
      },
      {
        label: "Arquitectura",
        value: "Traducir requisitos a frontend, backend y contratos que escalen con el producto.",
      },
      {
        label: "Entrega",
        value: "Publicar con pruebas, validación de calidad y cambios rastreables.",
      },
    ],
    ui: {
      capabilitiesEyebrow: "Capacidades",
      capabilitiesSummary:
        "El perfil aquí ya no está planteado solo como frontend: combina interfaz, lógica de negocio, persistencia, integraciones y calidad de entrega.",
      capabilitiesTitle: "Construyo producto completo, no solo la capa visual.",
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
      operatingStackTitle: "Frontend, backend y entrega con estándares de producción",
      processEyebrow: "Proceso",
      processBadge: "Entrega con previews, validación visual y commits trazables.",
      processSummary:
        "El valor no está solo en la implementación visual: también en cómo se modela, valida y entrega el sistema completo.",
      processTitle: "La ejecución full-stack necesita claridad técnica y disciplina operativa.",
      principleLabel: "Principio",
      projectButton: "Ver proyecto",
      selectedWorkEyebrow: "Trabajo seleccionado",
      selectedWorkSummary:
        "Selección hecha desde tus repositorios y tu proyecto organizacional, priorizando complejidad de producto, amplitud técnica y señal profesional.",
      selectedWorkTitle: "Proyectos que demuestran rango de producto y profundidad de ingeniería.",
      stackGroupLabel: "Área",
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
          "Product interfaces, admin dashboards, and UI systems built for clarity, speed, and maintainability.",
        title: "Product frontend",
      },
      {
        description:
          "APIs, authentication, relational modeling, websockets, and business flows built for real complexity.",
        title: "Backend and domain logic",
      },
      {
        description:
          "Document processing, exports, reporting, and automation that connect operations with product delivery.",
        title: "End-to-end operational systems",
      },
      {
        description:
          "CI/CD guardrails, testing, typing, and visual review that reduce release risk.",
        title: "Production-grade delivery",
      },
    ],
    contact: {
      eyebrow: "Contact",
      githubLabel: "GitHub",
      primaryAction: "Email me",
      title: "Need a product, dashboard, or platform that works well end to end?",
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
      availability: "Open for full-stack, frontend, and backend product work",
      description:
        "Full-stack developer building polished interfaces, reliable APIs, and web systems that hold up under real operational complexity.",
      email: "180666585+xkodigo1@users.noreply.github.com",
      githubUrl: "https://github.com/xkodigo1",
      heroBlurb:
        "I design and ship complete web products: frontend, backend, data, and integrations with reliable execution.",
      location: "Remote from Colombia",
      name: "Fabian Galan",
      title: "Full-Stack Developer + Product Systems Engineer",
    },
    stack: sharedStack,
    stackGroups: [
      {
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        summary: "Product interfaces, dashboards, and maintainable UI systems.",
        title: "Frontend",
      },
      {
        items: ["Node.js", "Express", "FastAPI", ".NET", "JWT", "MySQL", "TypeORM"],
        summary: "APIs, auth, persistence, and real business logic.",
        title: "Backend",
      },
      {
        items: ["GitHub Actions", "Playwright", "Vitest", "Storybook", "Lighthouse", "Vercel"],
        summary: "Testing, automation, and deployment with clear guardrails.",
        title: "Delivery",
      },
    ],
    timeline: [
      {
        label: "Scope",
        value: "Define the problem, actors, data, and integrations before building.",
      },
      {
        label: "Architecture",
        value: "Translate requirements into frontend, backend, and contracts that scale.",
      },
      {
        label: "Delivery",
        value: "Ship with tests, quality checks, and traceable changes.",
      },
    ],
    ui: {
      capabilitiesEyebrow: "Capabilities",
      capabilitiesSummary:
        "This portfolio is no longer framed as frontend-only work: it brings together interface, business logic, persistence, integrations, and release quality.",
      capabilitiesTitle: "I build complete products, not just the visual layer.",
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
      operatingStackTitle: "Frontend, backend, and delivery with production standards",
      processEyebrow: "Process",
      processBadge: "Ship with previews, visual checks, and traceable commits.",
      processSummary:
        "The value is not only in how the interface looks, but in how the whole system is modeled, validated, and delivered.",
      processTitle: "Full-stack execution needs technical clarity and operational discipline.",
      principleLabel: "Principle",
      projectButton: "View project",
      selectedWorkEyebrow: "Selected work",
      selectedWorkSummary:
        "Chosen from your repositories and your organization project, prioritizing product complexity, technical breadth, and professional signal.",
      selectedWorkTitle: "Projects that show both product range and engineering depth.",
      stackGroupLabel: "Domain",
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
          "Interfaces de produto, dashboards administrativos e sistemas UI construídos para clareza, velocidade e manutenção.",
        title: "Frontend de produto",
      },
      {
        description:
          "APIs, autenticação, modelagem relacional, websockets e fluxos de negócio feitos para complexidade real.",
        title: "Backend e lógica de domínio",
      },
      {
        description:
          "Processamento documental, exportações, relatórios e automações que conectam operação e produto.",
        title: "Sistemas operacionais end-to-end",
      },
      {
        description:
          "Guardrails de CI/CD, testes, tipagem e revisão visual para reduzir risco de entrega.",
        title: "Entrega com padrão de produção",
      },
    ],
    contact: {
      eyebrow: "Contato",
      githubLabel: "GitHub",
      primaryAction: "Enviar e-mail",
      title: "Precisa de um produto, dashboard ou plataforma que funcione bem de ponta a ponta?",
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
      availability: "Disponível para trabalhos full-stack, frontend e backend orientados a produto",
      description:
        "Desenvolvedor full-stack focado em interfaces polidas, APIs confiáveis e sistemas web que sustentam operação real.",
      email: "180666585+xkodigo1@users.noreply.github.com",
      githubUrl: "https://github.com/xkodigo1",
      heroBlurb:
        "Projeto e entrego produtos web completos: frontend, backend, dados e integrações com execução confiável.",
      location: "Remoto da Colômbia",
      name: "Fabian Galan",
      title: "Desenvolvedor Full-Stack + Engenheiro de Sistemas de Produto",
    },
    stack: sharedStack,
    stackGroups: [
      {
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        summary: "Interfaces de produto, dashboards e sistemas UI sustentáveis.",
        title: "Frontend",
      },
      {
        items: ["Node.js", "Express", "FastAPI", ".NET", "JWT", "MySQL", "TypeORM"],
        summary: "APIs, autenticação, persistência e lógica de negócio real.",
        title: "Backend",
      },
      {
        items: ["GitHub Actions", "Playwright", "Vitest", "Storybook", "Lighthouse", "Vercel"],
        summary: "Testes, automação e deploy com guardrails claros.",
        title: "Entrega",
      },
    ],
    timeline: [
      {
        label: "Escopo",
        value: "Definir problema, atores, dados e integrações antes de construir.",
      },
      {
        label: "Arquitetura",
        value: "Traduzir requisitos em frontend, backend e contratos que escalam com o produto.",
      },
      {
        label: "Entrega",
        value: "Publicar com testes, checagens de qualidade e mudanças rastreáveis.",
      },
    ],
    ui: {
      capabilitiesEyebrow: "Capacidades",
      capabilitiesSummary:
        "Este portfólio não está mais posicionado como trabalho só de frontend: ele combina interface, lógica de negócio, persistência, integrações e qualidade de entrega.",
      capabilitiesTitle: "Eu construo produto completo, não só a camada visual.",
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
      operatingStackTitle: "Frontend, backend e entrega com padrão de produção",
      processEyebrow: "Processo",
      processBadge: "Entregue com previews, checagens visuais e commits rastreáveis.",
      processSummary:
        "O valor não está apenas em como a interface parece, mas em como o sistema inteiro é modelado, validado e entregue.",
      processTitle: "Execução full-stack exige clareza técnica e disciplina operacional.",
      principleLabel: "Princípio",
      projectButton: "Ver projeto",
      selectedWorkEyebrow: "Projetos selecionados",
      selectedWorkSummary:
        "Seleção feita a partir dos seus repositórios e do seu projeto organizacional, priorizando complexidade de produto, amplitude técnica e sinal profissional.",
      selectedWorkTitle: "Projetos que mostram alcance de produto e profundidade de engenharia.",
      stackGroupLabel: "Domínio",
      stepLabel: "Etapa",
      themeLabel: "Tema",
      viewOrganization: "Ver organização",
      workButton: "Explorar projetos",
    },
  },
} as const;
