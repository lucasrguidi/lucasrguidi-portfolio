import {
  Beaker,
  Box,
  Code,
  Database,
  GitBranch,
  Globe,
  Layout,
  Library,
  PenTool,
  Server,
  Terminal,
  Wrench,
} from 'lucide-react';

export const STACKS = [
  {
    title: 'Tecnologias Principais',
    items: [
      {
        icon: <Code className="w-6 h-6" />,
        name: 'JavaScript & TypeScript',
        description:
          'Desenvolvimento de aplicações robustas com JavaScript moderno e TypeScript para tipagem estática e melhor experiência do desenvolvedor.',
      },
      {
        icon: <Layout className="w-6 h-6" />,
        name: 'React & Next.js',
        description:
          'Criação de interfaces interativas com React e Next.js para renderização server-side e performance otimizada.',
      },
      {
        icon: <PenTool className="w-6 h-6" />,
        name: 'CSS & Tailwind',
        description:
          'Design de interfaces responsivas com CSS puro e Tailwind para desenvolvimento ágil e consistente.',
      },
      {
        icon: <Server className="w-6 h-6" />,
        name: 'Node.js & Express',
        description:
          'Construção de APIs RESTful e serviços backend com Node.js e Express para aplicações fullstack.',
      },
    ],
  },
  {
    title: 'Bibliotecas e Pacotes',
    items: [
      {
        icon: <Database className="w-6 h-6" />,
        name: 'Gerenciamento de Estado',
        description:
          'Redux, Zustand e React Query para gestão eficiente de estado, fetching de dados e cache.',
      },
      {
        icon: <Library className="w-6 h-6" />,
        name: 'UI Libraries',
        description:
          'Material UI, Chakra UI e Shadcn/UI para sistemas de componentes acessíveis e consistentes.',
      },
      {
        icon: <Globe className="w-6 h-6" />,
        name: 'Data Fetching',
        description:
          'Axios, SWR e TanStack Query para requisições eficientes e sincronização de dados em tempo real.',
      },
      {
        icon: <Box className="w-6 h-6" />,
        name: 'Animações',
        description:
          'Framer Motion, GSAP e React Spring para transições fluidas e interações dinâmicas.',
      },
    ],
  },
  {
    title: 'Ferramentas e Plataformas',
    items: [
      {
        icon: <Beaker className="w-6 h-6" />,
        name: 'Testes',
        description:
          'Jest, React Testing Library e Cypress para testes unitários, de integração e E2E.',
      },
      {
        icon: <GitBranch className="w-6 h-6" />,
        name: 'Versionamento',
        description: 'Git, GitHub e GitLab para controle de versão, colaboração e fluxos de CI/CD.',
      },
      {
        icon: <Terminal className="w-6 h-6" />,
        name: 'Build Tools',
        description: 'Webpack, Vite e Babel para bundling, transpilação e otimização de projetos.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        name: 'DevOps',
        description:
          'Docker, GitHub Actions e Vercel para containerização, automação e deploy contínuo.',
      },
    ],
  },
];
