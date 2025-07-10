import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react"

export const servicesData = [
  {
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
        title: "Backend Engineering",
      },
      {
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
        title: "Frontend Excellence",
      },
      {
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
        title: "Database Design",
      },
    ],
    title: "FullStack Development",
  },
  {
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        description: "(GitHub Actions, Docker, Kubernetes)",
        title: "CI/CD Pipelines",
      },
      {
        description: "(Linux, Nginx, Load Balancing)",
        title: "Server Management ",
      },
      {
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
        title: "Performance Tuning",
      },
    ],
    title: "DevOps & Cloud Solutions",
  },
  {
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        description: "(Refactoring, Tech Debt Cleanup)",
        title: "Code Audits",
      },
      {
        description: "(Vulnerability Assessments)",
        title: "Pen Testing",
      },
      {
        description: "(SSR, Metadata, Structured Data)",
        title: "SEO Tech Stack",
      },
    ],
    title: "Security & Optimization",
  },
  {
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        description: "(Single codebase for iOS/Android/Web)",
        title: "Cross-Platform Apps",
      },
      {
        description: "(Offline mode, Push Notifications)",
        title: "PWAs",
      },
      {
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
        title: "E-Commerce",
      },
    ],
    title: "Web & Mobile Apps",
  },
]

export const projectsData = [
  {
    bgImage: "/assets/backgrounds/blanket.jpg",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    frameworks: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Next.js",
      },
      {
        id: 3,
        name: "Node.js",
      },
      {
        id: 4,
        name: "MongoDB",
      },
      {
        id: 5,
        name: "Tailwind CSS",
      },
    ],
    href: "",
    id: 1,
    image: "/assets/projects/mobile-accessories-store.jpg",
    name: "Mobile Accessories E-commerce",
  },
  {
    bgImage: "/assets/backgrounds/curtains.jpg",
    description: "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    frameworks: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Next.js",
      },
      {
        id: 3,
        name: "Stripe API",
      },
      {
        id: 4,
        name: "Tailwind CSS",
      },
    ],
    href: "",
    id: 2,
    image: "/assets/projects/plant-shop.jpg",
    name: "Plant Shop E-commerce",
  },
  {
    bgImage: "/assets/backgrounds/map.jpg",
    description: "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    frameworks: [
      {
        id: 1,
        name: "Blazor",
      },
      {
        id: 2,
        name: "ASP.NET Core",
      },
      {
        id: 3,
        name: "SQL Server",
      },
      {
        id: 4,
        name: "Bootstrap",
      },
    ],
    href: "",
    id: 3,
    image: "/assets/projects/apple-tech-store.jpg",
    name: "Apple Tech Marketplace",
  },
  {
    bgImage: "/assets/backgrounds/poster.jpg",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    frameworks: [
      {
        id: 1,
        name: "Vue.js",
      },
      {
        id: 2,
        name: "Laravel",
      },
      {
        id: 3,
        name: "MySQL",
      },
      {
        id: 4,
        name: "SCSS",
      },
    ],
    href: "",
    id: 4,
    image: "/assets/projects/electronics-store.jpg",
    name: "Electronics & Gadgets Store",
  },
  {
    bgImage: "/assets/backgrounds/table.jpg",
    description: "A curated collection of designer home decor items, including furniture and artisan vases.",
    frameworks: [
      {
        id: 1,
        name: "Angular",
      },
      {
        id: 2,
        name: "Firebase",
      },
      {
        id: 3,
        name: "GraphQL",
      },
      {
        id: 4,
        name: "Material UI",
      },
    ],
    href: "",
    id: 5,
    image: "/assets/projects/home-decor-store.jpg",
    name: "Home Decor Marketplace",
  },
  {
    bgImage: "/assets/backgrounds/curtains.jpg",
    description: "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    frameworks: [
      {
        id: 1,
        name: "Svelte",
      },
      {
        id: 2,
        name: "Node.js",
      },
      {
        id: 3,
        name: "MongoDB",
      },
      {
        id: 4,
        name: "Chakra UI",
      },
    ],
    href: "",
    id: 6,
    image: "/assets/projects/game-store.jpg",
    name: "Digital Game Store",
  },
]

export const socialLinks = [
  {
    href: "mailto:iamharshdabas",
    icon: MailIcon,
    name: "Mail",
  },
  {
    href: "https://github.com/iamharshdabas",
    icon: GithubIcon,
    name: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/harsh-dabas-454848300/",
    icon: LinkedinIcon,
    name: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/iamharshdabas",
    icon: InstagramIcon,
    name: "Instagram",
  },
]

export const navbarLinks = [
  {
    image: "https://picsum.photos/600/400?random=1",
    link: "home",
    text: "home",
  },
  {
    image: "https://picsum.photos/600/400?random=2",
    link: "services",
    text: "services",
  },
  {
    image: "https://picsum.photos/600/400?random=3",
    link: "about",
    text: "about",
  },
  {
    image: "https://picsum.photos/600/400?random=4",
    link: "work",
    text: "work",
  },
  {
    image: "https://picsum.photos/600/400?random=5",
    link: "contact",
    text: "contact",
  },
]
