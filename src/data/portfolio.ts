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

type ExperienceEntry = {
  highlights: readonly string[];
  organization: string;
  period: string;
  role: string;
  stack: readonly string[];
  summary: string;
};

type FeaturedProject = {
  ctaLabel?: string;
  highlights?: readonly string[];
  impact: string;
  link: string;
  metrics: readonly string[];
  role?: string;
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
  experienceEyebrow: string;
  experienceHighlightsLabel: string;
  experienceSummary: string;
  experienceTitle: string;
  githubLabel: string;
  impactLabel: string;
  languageLabel: string;
  lightMode: string;
  operatingStackEyebrow: string;
  operatingStackTitle: string;
  projectHighlightsLabel: string;
  projectRoleLabel: string;
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
  experience: readonly ExperienceEntry[];
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
    experience: [
      {
        highlights: [
          "Implementación de módulos para estudiantes, empresas, calendario, pagos y reporting.",
          "Frontend React 19 con panel administrativo, tiempo real y flujos conectados a landing pública.",
          "Backend Express + TypeORM con auth, persistencia relacional, webhooks y generación documental.",
        ],
        organization: "IA Academy Team / Campuslands IA Academy",
        period: "Trabajo organizacional actual",
        role: "Contribución full-stack en plataforma educativa",
        stack: ["React 19", "Express", "TypeORM", "MySQL", "WebSockets"],
        summary:
          "Contribuyo sobre Apex, una plataforma operativa para formación, asistencia, pagos, certificados y adquisición pública conectada con la operación diaria.",
      },
      {
        highlights: [
          "Modelado de roles, autenticación JWT, dashboards y procesamiento automático de PDFs.",
          "Separación clara entre backend FastAPI y frontend React con métricas y flujos administrativos.",
          "Exportes, filtros operativos y experiencia diferenciada para administración y operadores.",
        ],
        organization: "DocsFlow",
        period: "Caso full-stack de producto interno",
        role: "Desarrollo full-stack orientado a operaciones documentales",
        stack: ["FastAPI", "React", "MySQL", "JWT", "pdfplumber"],
        summary:
          "Diseñé y desarrollé un sistema para gestionar documentos, extraer tablas desde PDF y dar visibilidad operativa mediante paneles y reportes.",
      },
      {
        highlights: [
          "Arquitectura por capas con dominio, administración y flujos comerciales.",
          "Funciones de matching, chat, créditos y analítica en un producto social más complejo que un CRUD convencional.",
          "Trabajo sobre backend relacional y reglas de negocio conectadas con la experiencia de usuario.",
        ],
        organization: "Campus Love App",
        period: "Caso de producto social",
        role: "Implementación backend + frontend en dominio con monetización",
        stack: [".NET", "C#", "MySQL", "Clean Architecture"],
        summary:
          "Proyecto orientado a producto con señal fuerte de modelado de dominio, herramientas de administración y flujos pensados para engagement y monetización.",
      },
    ],
    featuredProjects: [
      {
        ctaLabel: "Ver organización",
        highlights: [
          "Módulos de estudiantes, empresas, sesiones, asistencia, certificados y formaciones.",
          "Tiempo real, reporting, exports y conexión entre landing pública y plataforma interna.",
          "Integraciones de pagos y automatizaciones operativas sobre frontend y backend.",
        ],
        impact:
          "Unificó inscripciones, asistencia, pagos, certificados, reportes y captación pública en una sola plataforma educativa.",
        link: "https://github.com/IA-Academy-Team",
        metrics: ["React 19", "Express", "TypeORM"],
        role: "Rol: full-stack product contributor",
        summary:
          "Plataforma interna de Campuslands IA Academy con panel administrativo, vistas operativas, tiempo real, exports, flujos de pago y landing conectada al producto.",
        title: "Apex Platform",
      },
      {
        highlights: [
          "Auth JWT, roles, departamentos, dashboards y estados de procesamiento.",
          "Extracción automática de tablas desde PDF y exportación para operación real.",
          "Frontend administrativo y flujo de operador con visibilidad clara del ciclo documental.",
        ],
        impact:
          "Integró procesamiento documental, control por roles y analítica operativa en un sistema full-stack orientado a uso real.",
        link: "https://github.com/xkodigo1/docsflow-project",
        metrics: ["FastAPI", "React", "MySQL"],
        role: "Rol: full-stack developer",
        summary:
          "Sistema de gestión documental con autenticación JWT, extracción automática de tablas desde PDF, dashboard administrativo y experiencia diferenciada para operadores.",
        title: "DocsFlow",
      },
      {
        highlights: [
          "Arquitectura por capas y separación de responsabilidades en backend.",
          "Matching, chat, créditos y administración para una experiencia más rica que una app demo.",
          "Lógica de negocio pensada para engagement, reglas del dominio y evolución del producto.",
        ],
        impact:
          "Combinó matching, chat, créditos y analítica en una aplicación social con lógica de dominio y enfoque comercial.",
        link: "https://github.com/xkodigo1/campus-love-app",
        metrics: [".NET", "C#", "MySQL"],
        role: "Rol: backend + product implementation",
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
      experienceEyebrow: "Experiencia",
      experienceHighlightsLabel: "Aportes clave",
      experienceSummary:
        "Estas experiencias resumen mejor el tipo de problemas que he resuelto: producto, operaciones, backend, autenticación, reporting e interfaces administrativas.",
      experienceTitle: "Experiencia que sirve para frontend y backend, no solo para UI.",
      githubLabel: "GitHub",
      impactLabel: "Resultado",
      languageLabel: "Idioma",
      lightMode: "Claro",
      operatingStackEyebrow: "Stack operativo",
      operatingStackTitle: "Frontend, backend y entrega con estándares de producción",
      projectHighlightsLabel: "Señales técnicas",
      projectRoleLabel: "Rol",
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
    experience: [
      {
        highlights: [
          "Built modules for students, companies, scheduling, payments, and reporting.",
          "React 19 admin experience with realtime flows and a public landing connected to the product.",
          "Express + TypeORM backend with auth, relational persistence, webhooks, and document generation.",
        ],
        organization: "IA Academy Team / Campuslands IA Academy",
        period: "Current organization work",
        role: "Full-stack contribution on an education platform",
        stack: ["React 19", "Express", "TypeORM", "MySQL", "WebSockets"],
        summary:
          "I contribute to Apex, an operational platform for training, attendance, payments, certificates, and public acquisition connected to day-to-day academy workflows.",
      },
      {
        highlights: [
          "JWT auth, roles, dashboards, and automated PDF processing in one product flow.",
          "Clear separation between a FastAPI backend and a React frontend with operational metrics.",
          "Exports, filters, and admin/operator workflows designed for real document operations.",
        ],
        organization: "DocsFlow",
        period: "Internal product case study",
        role: "Full-stack development for document operations",
        stack: ["FastAPI", "React", "MySQL", "JWT", "pdfplumber"],
        summary:
          "I designed and built a document workflow system that extracts data from PDFs and turns operational visibility into an actual product surface.",
      },
      {
        highlights: [
          "Layered architecture with domain logic, administration, and commercial flows.",
          "Matching, chat, credits, and analytics in a product more complex than a standard CRUD app.",
          "Business rules and relational backend work tied directly to the user experience.",
        ],
        organization: "Campus Love App",
        period: "Social product case study",
        role: "Backend + frontend implementation in a monetized domain",
        stack: [".NET", "C#", "MySQL", "Clean Architecture"],
        summary:
          "A product-oriented build that shows domain modeling, admin tooling, and engagement-focused flows with monetization considerations.",
      },
    ],
    featuredProjects: [
      {
        ctaLabel: "View organization",
        highlights: [
          "Student, company, session, attendance, certificate, and training modules.",
          "Realtime flows, reporting, exports, and a bridge between public acquisition and internal operations.",
          "Payment-related integrations and operational automation across frontend and backend.",
        ],
        impact:
          "Unified enrollment, attendance, payments, certificates, reporting, and public acquisition flows into one education platform.",
        link: "https://github.com/IA-Academy-Team",
        metrics: ["React 19", "Express", "TypeORM"],
        role: "Role: full-stack product contributor",
        summary:
          "Campuslands IA Academy's internal platform with admin tooling, operational views, realtime features, exports, payment-linked workflows, and a connected landing surface.",
        title: "Apex Platform",
      },
      {
        highlights: [
          "JWT auth, roles, departments, dashboards, and processing states.",
          "Automatic PDF table extraction and exports for real operations work.",
          "Admin and operator experiences designed around the document lifecycle.",
        ],
        impact:
          "Combined document processing, role-based access, and operational analytics in a full-stack system designed for real use.",
        link: "https://github.com/xkodigo1/docsflow-project",
        metrics: ["FastAPI", "React", "MySQL"],
        role: "Role: full-stack developer",
        summary:
          "Document management platform with JWT auth, automatic PDF table extraction, an admin dashboard, and differentiated operator workflows.",
        title: "DocsFlow",
      },
      {
        highlights: [
          "Layered architecture and backend responsibility separation.",
          "Matching, chat, credits, and admin tooling for a richer product than a demo app.",
          "Domain logic designed for engagement, rules, and product evolution.",
        ],
        impact:
          "Brought matching, chat, credits, and analytics together in a social product with layered domain logic and commercial thinking.",
        link: "https://github.com/xkodigo1/campus-love-app",
        metrics: [".NET", "C#", "MySQL"],
        role: "Role: backend + product implementation",
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
      experienceEyebrow: "Experience",
      experienceHighlightsLabel: "Key contributions",
      experienceSummary:
        "These experience snapshots explain the kinds of problems I have actually solved: product, operations, backend workflows, auth, reporting, and admin interfaces.",
      experienceTitle: "Experience that reads credibly for frontend and backend roles.",
      githubLabel: "GitHub",
      impactLabel: "Outcome",
      languageLabel: "Language",
      lightMode: "Light",
      operatingStackEyebrow: "Operating stack",
      operatingStackTitle: "Frontend, backend, and delivery with production standards",
      projectHighlightsLabel: "Technical signals",
      projectRoleLabel: "Role",
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
    experience: [
      {
        highlights: [
          "Implementação de módulos para estudantes, empresas, calendário, pagamentos e relatórios.",
          "Experiência administrativa em React 19 com tempo real e landing pública conectada ao produto.",
          "Backend Express + TypeORM com autenticação, persistência relacional, webhooks e geração documental.",
        ],
        organization: "IA Academy Team / Campuslands IA Academy",
        period: "Trabalho organizacional atual",
        role: "Contribuição full-stack em plataforma educacional",
        stack: ["React 19", "Express", "TypeORM", "MySQL", "WebSockets"],
        summary:
          "Contribuo para Apex, uma plataforma operacional de formações, presença, pagamentos, certificados e aquisição pública ligada ao dia a dia da academia.",
      },
      {
        highlights: [
          "Autenticação JWT, papéis, dashboards e processamento automático de PDFs em um mesmo fluxo de produto.",
          "Separação clara entre backend FastAPI e frontend React com métricas operacionais.",
          "Exportações, filtros e fluxos de admin e operador para operação documental real.",
        ],
        organization: "DocsFlow",
        period: "Caso de produto interno",
        role: "Desenvolvimento full-stack para operações documentais",
        stack: ["FastAPI", "React", "MySQL", "JWT", "pdfplumber"],
        summary:
          "Projetei e desenvolvi um sistema para fluxos documentais, extração de dados de PDFs e visibilidade operacional transformada em produto.",
      },
      {
        highlights: [
          "Arquitetura em camadas com lógica de domínio, administração e fluxos comerciais.",
          "Matching, chat, créditos e analytics em um produto mais complexo que um CRUD padrão.",
          "Regras de negócio e backend relacional conectados diretamente à experiência do usuário.",
        ],
        organization: "Campus Love App",
        period: "Caso de produto social",
        role: "Implementação backend + frontend em domínio com monetização",
        stack: [".NET", "C#", "MySQL", "Clean Architecture"],
        summary:
          "Build orientado a produto que demonstra modelagem de domínio, ferramentas administrativas e fluxos de engajamento com visão de monetização.",
      },
    ],
    featuredProjects: [
      {
        ctaLabel: "Ver organização",
        highlights: [
          "Módulos de estudantes, empresas, sessões, presença, certificados e formações.",
          "Tempo real, relatórios, exportações e conexão entre aquisição pública e operação interna.",
          "Integrações de pagamentos e automações operacionais em frontend e backend.",
        ],
        impact:
          "Unificou inscrições, presença, pagamentos, certificados, relatórios e captação pública em uma única plataforma educacional.",
        link: "https://github.com/IA-Academy-Team",
        metrics: ["React 19", "Express", "TypeORM"],
        role: "Papel: contribuição full-stack em produto",
        summary:
          "Plataforma interna da Campuslands IA Academy com painel administrativo, vistas operacionais, tempo real, exportações, fluxos de pagamento e landing integrada.",
        title: "Apex Platform",
      },
      {
        highlights: [
          "Autenticação JWT, papéis, departamentos, dashboards e estados de processamento.",
          "Extração automática de tabelas de PDF e exportações para operação real.",
          "Experiências de admin e operador desenhadas em torno do ciclo documental.",
        ],
        impact:
          "Combinou processamento documental, acesso por papéis e análise operacional em um sistema full-stack voltado para uso real.",
        link: "https://github.com/xkodigo1/docsflow-project",
        metrics: ["FastAPI", "React", "MySQL"],
        role: "Papel: desenvolvedor full-stack",
        summary:
          "Plataforma de gestão documental com autenticação JWT, extração automática de tabelas de PDF, dashboard administrativo e experiência diferenciada para operadores.",
        title: "DocsFlow",
      },
      {
        highlights: [
          "Arquitetura em camadas e separação de responsabilidades no backend.",
          "Matching, chat, créditos e ferramentas administrativas para um produto mais rico que uma demo.",
          "Lógica de domínio pensada para engajamento, regras e evolução do produto.",
        ],
        impact:
          "Reuniu matching, chat, créditos e analytics em um produto social com lógica de domínio em camadas e visão comercial.",
        link: "https://github.com/xkodigo1/campus-love-app",
        metrics: [".NET", "C#", "MySQL"],
        role: "Papel: implementação backend + produto",
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
      experienceEyebrow: "Experiência",
      experienceHighlightsLabel: "Contribuições-chave",
      experienceSummary:
        "Esses recortes mostram melhor os problemas que já resolvi: produto, operação, backend, autenticação, relatórios e interfaces administrativas.",
      experienceTitle: "Experiência que faz sentido para vagas de frontend e backend.",
      githubLabel: "GitHub",
      impactLabel: "Resultado",
      languageLabel: "Idioma",
      lightMode: "Claro",
      operatingStackEyebrow: "Stack operacional",
      operatingStackTitle: "Frontend, backend e entrega com padrão de produção",
      projectHighlightsLabel: "Sinais técnicos",
      projectRoleLabel: "Papel",
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
