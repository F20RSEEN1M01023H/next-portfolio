export const PROFILE = {
  name: 'Engr Hammad Ashraf!',
  role: 'Full-Stack Software Engineer',
  tagline:
    'Building scalable, real-time web applications with Next.js, TypeScript, and modern cloud architectures.',
  availability: 'Available for Full-Time Roles & Freelance Projects',
  location: 'Remote / Worldwide',
  email: 'hammad.dev@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Shipped', value: '18+' },
    { label: 'System Uptime', value: '99.9%' },
  ],
  bio: [
    'I am a full-stack developer specializing in high-performance React and Next.js applications backed by resilient Node.js, PostgreSQL, and Redis architectures.',
    'From engineering real-time WebSocket chat systems with background worker queues to designing type-safe Next.js App Router platforms, I focus on clean code, sub-second load times, and intuitive user interfaces.',
  ],
};

export const EXPERIENCE = [
  {
    role: 'Full-Stack Developer',
    company: 'TechFlow Solutions',
    period: '2024 — Present',
    points: [
      'Architected full-stack web applications using Next.js App Router, TypeScript, and PostgreSQL.',
      'Reduced API response latency by 45% using Redis caching and background job queues.',
    ],
  },
  {
    role: 'Frontend React Developer',
    company: 'PixelCraft Studio',
    period: '2023 — 2024',
    points: [
      'Built responsive, accessible component libraries with Tailwind CSS and Framer Motion.',
      'Collaborated with backend teams to integrate REST and WebSocket real-time data streams.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'B.S. in Computer Science',
    institution: 'University of Technology',
    period: '2020 — 2024',
    details:
      'Focused on Data Structures, Distributed Systems, Databases, and Software Engineering.',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Full-Stack Web Development & Cloud Architecture',
    issuer: 'Meta / Coursera',
    year: '2024',
  },
  {
    title: 'Docker & Containerized Microservices',
    issuer: 'Linux Foundation',
    year: '2025',
  },
];

export const TECH_STACK = [
  {
    category: 'Frontend & UI',
    items: [
      'Next.js (App Router)',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Redux Toolkit',
    ],
  },
  {
    category: 'Backend & Real-Time',
    items: ['Node.js', 'Express', 'Server Actions', 'Socket.IO', 'BullMQ Workers', 'REST APIs'],
  },
  {
    category: 'Databases & DevOps',
    items: [
      'PostgreSQL / Supabase',
      'MongoDB',
      'Redis',
      'Docker & Compose',
      'Git / GitHub Actions',
      'Vercel',
    ],
  },
];

// export const PROJECTS = [
//   {
//     id: 1,
//     title: 'ChatShat Real-Time Messenger',
//     category: 'Full-Stack',
//     featured: true,
//     description:
//       'End-to-end real-time chat platform featuring WebSocket messaging, Redis presence tracking, BullMQ background email workers, and multi-container Docker deployment.',
//     tech: ['React', 'Node.js', 'Socket.IO', 'Redis', 'MongoDB', 'Docker'],
//     github: 'https://github.com',
//     live: 'https://example.com',
//   },
//   {
//     id: 2,
//     title: 'Nexus Headless E-Commerce',
//     category: 'Full-Stack',
//     featured: true,
//     description:
//       'High-speed storefront and role-protected admin dashboard built with Next.js Server Components, Zod validation, and Supabase PostgreSQL.',
//     tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Zod'],
//     github: 'https://github.com',
//     live: 'https://example.com',
//   },
//   {
//     id: 3,
//     title: 'Developer Snippet Vault',
//     category: 'Frontend',
//     featured: false,
//     description:
//       'Instant code snippet organizer leveraging Next.js Server Actions, optimistic UI states, and one-click clipboard copy.',
//     tech: ['Next.js', 'Server Actions', 'PostgreSQL', 'Lucide Icons'],
//     github: 'https://github.com',
//     live: 'https://example.com',
//   },
//   {
//     id: 4,
//     title: 'Pulse Analytics Dashboard',
//     category: 'Frontend',
//     featured: false,
//     description:
//       'Interactive SaaS metrics dashboard with smooth Framer Motion transitions, dark mode glassmorphism, and responsive data grids.',
//     tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
//     github: 'https://github.com',
//     live: 'https://example.com',
//   },
// ];

export const SERVICES = [
  {
    title: 'Full-Stack Web Applications',
    description:
      'End-to-end development from database schema design and authentication to responsive frontend interfaces.',
  },
  {
    title: 'Real-Time & Scalable Backends',
    description:
      'WebSocket systems, Redis caching layers, background workers, and Dockerized deployments built for speed.',
  },
  {
    title: 'UI Engineering & Performance',
    description:
      'Converting Figma designs into pixel-perfect, SEO-friendly Next.js websites with smooth micro-interactions.',
  },
];
export interface ProjectItem {
  id: number;
  title: string;
  category: 'Full-Stack' | 'Frontend';
  featured: boolean;
  role: string;
  metrics: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'ChatShat Real-Time Messenger',
    category: 'Full-Stack',
    featured: true,
    role: 'Lead Full-Stack Architect',
    metrics: 'Sub-40ms message delivery • Multi-container Docker stack',
    description:
      'End-to-end real-time chat platform featuring WebSocket messaging, Redis presence tracking, BullMQ background email workers, and multi-container Docker deployment.',
    highlights: [
      'Engineered bi-directional WebSocket rooms with Socket.IO and Redis pub/sub synchronization.',
      'Offloaded transactional OTP & notification emails to asynchronous BullMQ background workers.',
      'Containerized frontend, API server, Redis, and MongoDB using Docker Compose for one-command deployment.',
    ],
    tech: ['React', 'Node.js', 'Socket.IO', 'Redis', 'MongoDB', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 2,
    title: 'Nexus Headless E-Commerce',
    category: 'Full-Stack',
    featured: true,
    role: 'Full-Stack Next.js Engineer',
    metrics: '99 Lighthouse Performance • Role-Based Middleware Guard',
    description:
      'High-speed storefront and role-protected admin dashboard built with Next.js Server Components, Zod validation, and Supabase PostgreSQL.',
    highlights: [
      'Implemented Next.js Edge Middleware to protect /admin routes using cookie-based Supabase SSR sessions.',
      'Built type-safe Server Actions with Zod schema validation for inventory mutations and order processing.',
      'Rendered SEO-optimized product pages on the server with zero client-side data fetching waterfalls.',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Zod'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'Developer Snippet Vault',
    category: 'Frontend',
    featured: false,
    role: 'Creator & Developer',
    metrics: 'Instant Server Revalidation • Zero-Latency Copy',
    description:
      'Instant code snippet organizer leveraging Next.js Server Actions, optimistic UI states, and one-click clipboard copy.',
    highlights: [
      'Separated database queries into modular service layers for clean maintainability.',
      'Used Next.js revalidatePath() to refresh server-rendered lists seamlessly after mutations.',
    ],
    tech: ['Next.js', 'Server Actions', 'PostgreSQL', 'Lucide Icons'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 4,
    title: 'Pulse Analytics Dashboard',
    category: 'Frontend',
    featured: false,
    role: 'Frontend UI Engineer',
    metrics: '60fps Framer Motion Transitions • Responsive Grid',
    description:
      'Interactive SaaS metrics dashboard with smooth Framer Motion transitions, dark mode glassmorphism, and responsive data grids.',
    highlights: [
      'Crafted custom GPU-accelerated micro-interactions and responsive layout transitions.',
      'Designed accessible dark-mode UI tokens with Tailwind CSS.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Delivered our full-stack web platform ahead of schedule with remarkably clean TypeScript architecture and sub-second page transitions.',
    author: 'Sarah Jenkins',
    title: 'Product Lead, TechFlow Solutions',
  },
  {
    quote:
      'Rarely do you find an engineer equally comfortable optimizing Redis/PostgreSQL backend pipelines and crafting fluid Framer Motion interfaces.',
    author: 'Marcus Vance',
    title: 'Senior Engineering Manager',
  },
  {
    quote:
      'Transformed our rough Figma wireframes into a fast, SEO-ready Next.js production app with rock-solid validation and error handling.',
    author: 'Usman Tariq',
    title: 'Founder, LaunchPad Digital',
  },
];
