import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

export const servicesData = [
  {
    description:
      "I build fast, responsive, and scalable web applications from the ground up. With a focus on clean architecture and modern technologies, I can deliver a complete front-to-back solution that meets your business needs.",
    items: [
      {
        description: "(JavaScript, TypeScript, React, Next.js)",
        title: "Frontend Development",
      },
      {
        description: "(Node.js, Express, Hono",
        title: "Backend Development",
      },
      {
        description: "(PostgreSQL, SQLite, Unit Testing)",
        title: "Database & Testing",
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
        description: "(RESTful API Design)",
        title: "API Design & Development",
      },
      {
        description: "(JWT, Third-Party Auth)",
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
      "A dynamic pricing API that provides location-based coupons to help businesses optimize product pricing and capture untapped markets.",
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
    preview: "https://parity-deals.vercel.app/",
  },
  {
    bgImage: "https://picsum.photos/600/400?random=2",
    description:
      "An experimental tool that transforms plain text into unique, algorithmically generated waveform audio inspired by Angelcore music.",
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
      "A terminal-based CLI tool for mastering Data Structures and Algorithms by typing out solutions to build muscle memory.",
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
    preview: "https://www.npmjs.com/package/dsaify",
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
    name: "Github",
  },
  {
    href: "https://www.linkedin.com/in/harsh-dabas-454848300/",
    icon: LinkedinIcon,
    name: "LinkedIn",
  },
]

export const educationData = {
  degree: "Bachelor of Technology (BTech) in Computer Science",
  university: "PDM University",
}

export const workExperienceData = [
  {
    company: "BetaTest Solutions Pvt. Ltd.",
    description: [
      "Led frontend development for the Killer Whale Ventures trading platform, contributed to successful launch.",
      "Achieved a 50% reduction in API response time through backend optimizations, significantly improving system efficiency.",
      "Reduced bug reports by 30% through meticulous frontend development and testing, ensuring a seamless user experience.",
    ],
    duration: "Mar 2025 - Apr 2025",
    position: "Software Engineer Intern",
  },
  {
    company: "Business Web Solutions",
    description: [
      "Boosted website performance by 20% through targeted optimizations, leading to improved user engagement and reduced bounce rates.",
      "Enhanced API response times by 15% using Python and Django, directly contributing to more responsive web applications.",
      "Engineered and delivered highly reliable web applications that consistently met and exceeded client requirements, resulting in positive feedback.",
    ],
    duration: "Jan 2023 - Jan 2024",
    position: "Full Stack Web Development Intern",
  },
]

export const detailsData = [
  {
    label: "Full Name",
    value: "Harsh Dabas",
  },
  {
    label: "Email",
    value: socialLinks[0].href.replace("mailto:", ""),
  },
  {
    label: "Phone Number",
    value: "8810576690",
  },
  {
    label: "Location",
    value: "New Delhi, India",
  },
  {
    label: "LinkedIn",
    value: socialLinks[2].href,
  },
  {
    label: "GitHub",
    value: socialLinks[1].href,
  },
  {
    label: "Portfolio Website",
    value: "https://iamharshdabas.vercel.app",
  },
  {
    label: "Resume",
    value: "https://iamharshdabas.vercel.app/resume",
  },
  {
    label: "Cover Letter (Template)",
    value: `I am writing to express my interest in the [Job Title] position at [Company Name], which I discovered through [Platform, e.g., LinkedIn]. With a strong background in full-stack development and a passion for creating innovative web solutions, I am confident that my skills and experience align perfectly with the requirements of this role.`,
  },
  {
    label: "Notice Period",
    value: "Immediately Available",
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
