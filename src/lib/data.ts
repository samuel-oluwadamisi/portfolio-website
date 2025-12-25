export const siteConfig = {
    name: "Oluwadamisi Samuel",
    title: "Frontend Developer & Technical Writer",
    description:
      "I build fast, accessible web apps and write about them. Specializing in Next.js, TypeScript, and modern web development.",
    email: "oluwadamisi.samuel@gmail.com",
    // Your external blog profiles
    blogUrl: "https://dev.to/yourhandle",
    substackUrl: "https://yourname.substack.com",
    freecodecampUrl: "https://freecodecamp.org/news/author/yourname",
  };
  
  export const socialLinks = {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    devto: "https://dev.to/yourhandle",
  };
  
  export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    impact?: string;
  }
  
  export const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description:
        "A resilient marketplace with zero-fail checkout and automated workflows using Inngest.",
      image: "/projects/Bukky-Store.png",
      tags: ["Next.js 15", "TypeScript", "Inngest", "Clerk"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      impact: "Reduced checkout abandonment by 35%",
    },
    {
      title: "Flight Booking App",
      description:
        "Multi-step booking flow with dynamic state management and form validation.",
      image: "/projects/Bukky-Store.png",
      tags: ["TypeScript", "React", "React Hook Form"],
      githubUrl: "https://github.com/example",
      impact: "98% form completion rate",
    },
    {
      title: "Event Management Dashboard",
      description:
        "Real-time event analytics with role-based access control and data caching.",
      image:"/projects/Bukky-Store.png",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://example.com",
      impact: "Increased load speed by 40%",
    },
    {
      title: "Component Library",
      description:
        "A design system built with Chakra UI and TypeScript for monorepo architecture.",
      image: "/projects/components.png",
      tags: ["TypeScript", "Chakra UI", "Storybook"],
      githubUrl: "https://github.com/example",
      impact: "Reduced dev time by 25%",
    },
    {
      title: "Developer Portfolio",
      description:
        "Premium portfolio with smooth animations and clean design.",
      image: "/projects/portfolio.png",
      tags: ["Next.js 15", "Tailwind", "Framer Motion"],
      liveUrl: "https://yourname.dev",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Blog CMS",
      description:
        "A headless CMS for managing technical blog content with MDX support.",
      image: "/projects/cms.png",
      tags: ["Next.js", "MDX", "Prisma"],
      githubUrl: "https://github.com/example",
    },
  ];
  
  export interface Article {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readingTime: number;
    url: string; // External link to your blog
    platform: "devto" | "freecodecamp" | "substack";
  }
  
  export const articles: Article[] = [
    {
      title: "Why I Stopped Building Separate Backends",
      excerpt:
        "How Server Actions changed my workflow and why the Frontend/Backend divide is blurring.",
      category: "Next.js",
      date: "2024-12-18",
      readingTime: 12,
      url: "https://dev.to/yourhandle/why-i-stopped-building-separate-backends",
      platform: "devto",
    },
    {
      title: "Stop Using `any`: TypeScript Patterns for Next.js",
      excerpt:
        "If your frontend crashes because the backend sent null, that's on you.",
      category: "TypeScript",
      date: "2024-12-16",
      readingTime: 8,
      url: "https://dev.to/yourhandle/typescript-patterns",
      platform: "devto",
    },
    {
      title: "Goodbye useEffect: Managing Server State with TanStack Query",
      excerpt:
        "Every React developer has written the same data fetching code. There's a better way.",
      category: "React",
      date: "2024-12-14",
      readingTime: 10,
      url: "https://freecodecamp.org/news/tanstack-query-guide",
      platform: "freecodecamp",
    },
    {
      title: "Background Jobs in Next.js with Inngest",
      excerpt:
        "Solving the Vercel timeout problem without a separate worker server.",
      category: "Next.js",
      date: "2024-12-12",
      readingTime: 15,
      url: "https://dev.to/yourhandle/inngest-nextjs",
      platform: "devto",
    },
    {
      title: "Authentication with Clerk in Next.js 15",
      excerpt:
        "Rolling your own auth is a rite of passage, but it's a security liability.",
      category: "Next.js",
      date: "2024-12-10",
      readingTime: 8,
      url: "https://dev.to/yourhandle/clerk-auth",
      platform: "devto",
    },
    {
      title: "Database Design for Frontend Developers",
      excerpt:
        "Moving from JSON state of mind to relational tables with Prisma.",
      category: "Backend",
      date: "2024-12-08",
      readingTime: 12,
      url: "https://freecodecamp.org/news/database-design-frontend",
      platform: "freecodecamp",
    },
  ];