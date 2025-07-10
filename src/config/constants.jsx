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
    bgImage: "https://picsum.photos/600/400?random=1",
    description:
      "A dynamic pricing solution that provides a banner via an API to display coupons based on user geolocation. It helps businesses optimize product pricing across countries, aiming to capture untapped markets with location-based discounts.",
    frameworks: [
      {
        id: 1,
        name: "Next.js",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "TypeScript",
      },
      {
        id: 4,
        name: "Drizzle ORM",
      },
      {
        id: 5,
        name: "Tailwind CSS",
      },
      {
        id: 6,
        name: "Stripe",
      },
      {
        id: 7,
        name: "Clerk",
      },
    ],
    href: "https://github.com/iamharshdabas/parity-deals",
    id: 1,
    image: "images/1.webp",
    name: "Parity Deals",
  },
  {
    bgImage: "https://picsum.photos/600/400?random=2",
    description:
      "An experimental project that transforms plain text into unique, algorithmically generated waveform audio (WAV). Inspired by chill phonk, it converts text to binary sequences which then determine musical notes and rhythmic patterns.",
    frameworks: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "Bun",
      },
      {
        id: 3,
        name: "Web Audio API",
      },
    ],
    href: "https://github.com/iamharshdabas/wavify",
    id: 2,
    image: "images/2.webp",
    name: "Wavify",
  },
]

export const socialLinks = [
  {
    href: "mailto:iamharshdabas@gmail.com",
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
