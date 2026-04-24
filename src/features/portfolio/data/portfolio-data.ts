import type { PortfolioData } from "@/features/portfolio/types";

export const portfolioData: PortfolioData = {
  name: "Ravano Akbar Widodo",
  role: "Fullstack Developer",
  tagline:
    "Crafting modern, responsive, and scalable web applications with a strong focus on performance and clean architecture.",
  summary:
    "Fresh graduate in Software Engineering with practical fullstack experience across logistics, sales systems, social media, and e-commerce products. Strong in React-based interfaces, API integration, and collaborative delivery.",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { label: "Years Building Real Projects", value: "3+" },
    { label: "Professional Engagements", value: "4" },
    { label: "Primary Stack", value: "React + Node.js" },
  ],
  experiences: [
    {
      company: "PT. GLOBAL MITRA COPIERINDO",
      role: "Fullstack Developer",
      employmentType: "Contract",
      period: "May 2025 - Oct 2025",
      description: [
        "Developed a full Sales Management System using React.js, JavaScript, and Chakra UI.",
        "Collaborated with backend engineers for robust API integration and synchronized data flow.",
        "Delivered a responsive platform that improved operational workflow and usability.",
      ],
    },
    {
      company: "PT. EDIfly Solusi Indonesia",
      role: "Fullstack Developer",
      employmentType: "Contract",
      period: "Jul 2023 - Jul 2024",
      description: [
        "Built an in-flight cargo terminal application for internal operations.",
        "Implemented flight-messaging related modules and end-to-end fullstack features.",
      ],
    },
    {
      company: "PT. Dumbways Indonesia Teknologi",
      role: "Fullstack Developer",
      employmentType: "Program / Intensive Training",
      period: "Jan 2024 - Jun 2024",
      description: [
        "Strengthened practical frontend and backend development through team-based projects.",
        "Applied React, Node.js, Express, Nest.js, TypeScript, and modern UI libraries in production-like workflows.",
      ],
    },
    {
      company: "PT. JAYA KONSULTAN INDONESIA",
      role: "Fullstack Developer",
      employmentType: "Field Practice",
      period: "Feb 2022 - Mar 2022",
      description: [
        "Created a responsive landing page with React.js and Bootstrap.",
        "Optimized frontend interactions and integrated components with backend logic.",
      ],
    },
  ],
  education: [
    {
      institution: "Binus University (Online)",
      degree: "Computer Science (Ongoing)",
      period: "Aug 2024 - Aug 2028",
      description: [
        "Core computer science foundation in algorithms, OOP, and software engineering.",
        "Database systems, cloud fundamentals, and CI/CD with containerization topics.",
      ],
    },
    {
      institution: "SMK Media Informatika",
      degree: "Software Engineering",
      period: "Jul 2020 - May 2023",
      description: [
        "Graduated with an average score of 82.86/100.",
        "Built practical fullstack projects from planning to release and maintained teamwork discipline.",
      ],
    },
  ],
  skillGroups: [
    {
      title: "Frontend",
      caption: "Interactive interfaces with a strong UX focus",
      items: [
        { name: "React.js", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "Next.js", level: 84 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      caption: "API design, business logic, and service integration",
      items: [
        { name: "Node.js", level: 86 },
        { name: "Express.js", level: 85 },
        { name: "Nest.js", level: 79 },
        { name: "Prisma ORM", level: 82 },
      ],
    },
    {
      title: "Database & Cloud",
      caption: "Data modeling, query tuning, and deployment foundations",
      items: [
        { name: "PostgreSQL", level: 84 },
        { name: "MySQL", level: 81 },
        { name: "MongoDB", level: 75 },
        { name: "Docker / CI-CD", level: 72 },
      ],
    },
    {
      title: "Core Professional Skills",
      caption: "Collaboration and execution in real teams",
      items: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 92 },
        { name: "Communication", level: 87 },
        { name: "Leadership", level: 80 },
      ],
    },
  ],
  projects: [
    {
      title: "Circle App",
      category: "Social Media Platform",
      overview:
        "Thread-based social app inspired by Instagram and Twitter interactions, built with a RESTful architecture.",
      stack: [
        "React.js",
        "Express.js",
        "TypeScript",
        "Chakra UI",
        "Prisma",
        "PostgreSQL",
      ],
      highlights: [
        "Users can create, interact, and manage threaded conversations.",
        "Designed reusable UI modules and clean API integration flow.",
        "Delivered responsive behavior across desktop and mobile layouts.",
      ],
      image: "/projects/circle-app.svg",
      links: [
        {
          label: "Source Code",
          url: "https://github.com/ravano-2464/Circle_Apps",
        },
      ],
    },
    {
      title: "Lakoe App",
      category: "E-Commerce Application",
      overview:
        "Team-based e-commerce bootcamp project with RESTful API structure and a production-minded interface.",
      stack: [
        "React.js",
        "Nest.js",
        "TypeScript",
        "Material UI",
        "PostgreSQL",
      ],
      highlights: [
        "Implemented browsing and purchase-oriented user flows.",
        "Collaborated in a four-person team with modular code ownership.",
        "Focused on maintainable architecture and responsive UI behavior.",
      ],
      image: "/projects/lakoe-app.svg",
      links: [
        {
          label: "Frontend Repository",
          url: "https://github.com/ravano-2464/Ravano-Shop-FE",
        },
        {
          label: "Backend Repository",
          url: "https://github.com/ravano-2464/Ravano-Shop-BE",
        },
      ],
    },
    {
      title: "Mood Tracker",
      category: "Mobile / Utility App",
      overview:
        "Simple mood journaling app that helps users log emotional states and observe long-term patterns.",
      stack: ["Java", "Android Development", "HTML"],
      highlights: [
        "Built intuitive daily mood logging flows and clear visual structure.",
        "Prioritized simplicity to improve consistency of user input.",
      ],
      image: "/projects/mood-tracker.svg",
      links: [
        {
          label: "Source Code",
          url: "https://github.com/ravano-2464/MoodTracker",
        },
      ],
    },
    {
      title: "Sales Management System",
      category: "Business Operations Platform",
      overview:
        "Comprehensive web sales system for managing customers, products, and transactions with scalable modular components.",
      stack: [
        "React.js",
        "Node.js",
        "TypeScript",
        "TanStack Query",
        "Prisma",
        "MySQL",
      ],
      highlights: [
        "Automated core operational workflows for business teams.",
        "Implemented maintainable component architecture and real-time data sync patterns.",
        "Optimized user experience for speed, clarity, and reliability.",
      ],
      image: "/projects/sales-system.svg",
      links: [
        {
          label: "Frontend Repository",
          url: "https://github.com/ravano-2464/FrontEnd-Project-Management",
        },
        {
          label: "Backend Repository",
          url: "https://github.com/ravano-2464/BackEnd-Project-Management",
        },
      ],
    },
  ],
  contact: {
    email: "ravanoganteng123@gmail.com",
    phone: "+62-856-9757-2220",
    whatsapp: "https://wa.me/6285697572220",
    location: "Tangerang, Banten, Indonesia",
    github: "https://github.com/ravano-2464",
  },
};
