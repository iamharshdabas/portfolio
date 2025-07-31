import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react"

export const servicesData = [
  {
    description:
      "I build fast, responsive, and scalable web applications from the ground up. With a focus on clean architecture and modern technologies, I can deliver a complete front-to-back solution that meets your business needs.",
    items: [
      {
        description: "(Next.js, React, TypeScript, Tailwind CSS)",
        title: "Frontend Development",
      },
      {
        description: "(Node.js, Express, TypeScript)",
        title: "Backend Development",
      },
      {
        description: "(PostgreSQL, SQLite, Drizzle ORM)",
        title: "Database Management",
      },
    ],
    title: "Full-Stack Development",
  },
  {
    description:
      "I bring digital experiences to life with interactive 3D graphics and animations. Using modern web technologies, I can create engaging and immersive visuals for your web applications.",
    items: [
      {
        description: "(Three.js, React Three Fiber)",
        title: "3D Web Graphics",
      },
      {
        description: "(GSAP)",
        title: "Interactive Animations",
      },
      {
        description: "(Web Audio API)",
        title: "Creative Audio Solutions",
      },
    ],
    title: "Creative & 3D Development",
  },
  {
    description:
      "I design and build robust and secure APIs to power your applications. I have experience with RESTful APIs, authentication, and integrating third-party services.",
    items: [
      {
        description: "(RESTful APIs, Express)",
        title: "API Design & Development",
      },
      {
        description: "(JWT, bcrypt, Clerk)",
        title: "Authentication Systems",
      },
      {
        description: "(Stripe)",
        title: "Third-Party API Integration",
      },
    ],
    title: "API & Backend Services",
  },
  {
    description:
      "I can help you automate your development and deployment workflows. I have experience with setting up CI/CD pipelines and containerizing applications.",
    items: [
      {
        description: "(GitHub Actions)",
        title: "CI/CD Pipelines",
      },
      {
        description: "(Docker)",
        title: "Containerization",
      },
      {
        description: "(Vite, Bun)",
        title: "Modern Build Tools",
      },
    ],
    title: "DevOps & Tooling",
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
  {
    bgImage: "https://picsum.photos/600/400?random=3",
    description:
      "A terminal-based CLI tool to master Data Structures and Algorithms by typing out solutions to common problems, building muscle memory and coding speed.",
    frameworks: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Ink",
      },
      {
        id: 3,
        name: "TypeScript",
      },
      {
        id: 4,
        name: "Bun",
      },
      {
        id: 5,
        name: "Yargs",
      },
    ],
    href: "https://github.com/iamharshdabas/dsaify",
    id: 3,
    image: "images/3.webp",
    name: "DSAify",
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
