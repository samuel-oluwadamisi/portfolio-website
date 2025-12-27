export const siteConfig = {
    name: "Oluwadamisi Samuel",
    title: "Software Engineer & Technical Writer",
    description:
      "I build web applications and write about them. With 3+ years shipping Next.js with TypeScript in production, AI tools and best practices, I create technical content that turns curious developers into active users. My tutorials on freeCodeCamp and Dev.to don't just explain—they convert.",
    email: "oluwadamisi.samuel@gmail.com",
    // Your external blog profiles
    blogUrl: "https://dev.to/oluwadamisisamuel1",
    freecodecampUrl: "https://www.freecodecamp.org/news/author/Oluwadamisi/",
     substackUrl: "https://yourname.substack.com",
  };
  
  export const socialLinks = {
    twitter: "https://x.com/Data_Steve_",
    github: "https://github.com/samuel-oluwadamisi",
    linkedin: "https://www.linkedin.com/in/samuel-oluwadamisi-ab368935b/",
    devto: "https://dev.to/oluwadamisisamuel1",
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
      tags: ["Next.js 15", "Inngest", "Clerk"],
      liveUrl: "https://bukky-s-atelier.vercel.app/",
      githubUrl: "https://github.com/samuel-oluwadamisi",
      impact: "Reduced checkout abandonment by 35%",
    },
    {
      title: "Flight Booking App",
      description:
        "Multi-step booking flow with dynamic state management and form validation.",
      image: "/projects/Marv-Air.png",
      tags: ["TypeScript", "React", "React Hook Form"],
      liveUrl: "https://bukky-s-atelier.vercel.app/",
      githubUrl: "https://github.com/samuel-oluwadamisi",
      impact: "98% form completion rate",
    },
    {
      title: "Event Management Dashboard--Coming Soon",
      description:
        "Real-time event analytics with role-based access control and data caching.",
      image:"/projects/Shanks-Media.png",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://shanksmediaandsoftwarecompany.com/",
      githubUrl: "https://github.com/samuel-oluwadamisi",
      impact: "Increased load speed by 40%",
    },
    {
      title: "GlobeHop",
      description:
       "Country explorer with advanced search, dynamic filtering, and pagination displaying 250+ countries with flags and demographic data via REST API integration.",
      image: "/projects/Globe-Hop.png",
      tags: ["React", "TailwindCss"],
      liveUrl: "https://inventors-skill-test.vercel.app/",
      githubUrl: "https://github.com/samuel-oluwadamisi",
      impact: "Enabled fast, scalable exploration of 250+ countries",
    },
    // {
    //   title: "Developer Portfolio",
    //   description:
    //     "Premium portfolio with smooth animations and clean design.",
    //   image: "/projects/portfolio.png",
    //   tags: ["Next.js 15", "Tailwind", "Framer Motion"],
    //   liveUrl: "https://yourname.dev",
    //   githubUrl: "https://github.com/samuel-oluwadamisi",
    // },
    // {
    //   title: "Blog CMS",
    //   description:
    //     "A headless CMS for managing technical blog content with MDX support.",
    //   image: "/projects/cms.png",
    //   tags: ["Next.js", "MDX", "Prisma"],
    //   githubUrl: "https://github.com/samuel-oluwadamisi",
    // },
  ];
  
  export interface Article {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readingTime: number;
    url: string; // External link to your blog
    platform: "dev.to" | "FreeCodeCamp" | "Substack";
    featured: boolean
  }
  
export const articles: Article[] = [
  {
    title: "How to Use AI to Automate Unit Testing with TestGen-LLM and Cover-Agent",
    excerpt: "Automated test generation using AI tools that write unit tests for your codebase, saving hours of manual work.",
    category: "AI",
    date: "2024-06-03",
    readingTime: 12,
    url: "https://www.freecodecamp.org/news/automated-unit-testing-with-testgen-llm-and-cover-agent/",
    platform: "FreeCodeCamp",
    featured: true,
  },
  {
    title: "How to Work with React Forms So They Don't Break Your Brain",
    excerpt: "A practical guide to handling React forms without the frustration. Learn state management, Controlled and Uncontrolled forms in React, and best practices.",
    category: "React",
    date: "2025-07-07",
    readingTime: 10,
    url: "https://www.freecodecamp.org/news/how-to-work-with-react-forms/",
    platform: "FreeCodeCamp",
    featured: true,
  },
  {
    title: "How to Build A Logistic Regression Model – Linear Regression Explained",
    excerpt: "Learn how to build a spam filter using logistic regression. Real-world machine learning tutorial with practical examples.",
    category: "Machine Learning",
    date: "2024-05-05",
    readingTime: 15,
    url: "https://dev.to/oluwadamisisamuel1/how-to-build-a-logistic-regression-model-a-spam-filter-tutorial-261b",
    platform: "dev.to",
    featured: true,
  },
  {
    title: "How to Improve and Restructure Your Codebase with AI Tools & Version Control",
    excerpt: "Modern workflow for refactoring legacy code using AI assistants and Git. Best practices for code quality.",
    category: "Best Practices",
    date: "2024-10-29",
    readingTime: 11,
    url: "https://www.freecodecamp.org/news/improve-and-restructure-codebase-with-ai-tools/",
    platform: "FreeCodeCamp",
    featured: true,
  },
  {
    title: "Git Solutions: CodiumAI's PR-Agent vs GitHub Copilot for Pull Requests",
    excerpt: "Compare AI-powered tools for pull request reviews. Which tool helps your team ship faster?",
    category: "DevOps",
    date: "2023-12-16",
    readingTime: 9,
    url: "https://dev.to/yourhandle/pr-agent-vs-copilot",
    platform: "dev.to",
    featured: true,
  },

  // Writing Page Articles (featured: false)
  {
    title: "How to Fetch API Data in React Using Axios",
    excerpt: "Master data fetching in React with Axios. Handle loading states, errors, and async requests like a pro.",
    category: "React",
    date: "2024-07-04",
    readingTime: 8,
    url: "https://dev.to/oluwadamisisamuel1/how-to-fetch-data-from-an-api-using-the-fetch-api-in-javascript-21m9",
    platform: "dev.to",
    featured: false,
  },
  {
    title: "A Comprehensive Guide to Web Scraping with Selenium in Python",
    excerpt: "Extract data from dynamic websites using Selenium. Complete guide for automating browser interactions.",
    category: "Python",
    date: "2023-08-03",
    readingTime: 14,
    url: "https://dev.to/oluwadamisisamuel1/a-comprehensive-guide-to-web-scraping-with-selenium-in-python-3ki8",
    platform: "dev.to",
    featured: false,
  },
  {
    title: "Secure Ways to Access DeepSeek Using Third-Party Apps",
    excerpt: "Best practices for securely integrating DeepSeek AI into your applications without compromising data.",
    category: "AI",
    date: "2025-02-20",
    readingTime: 7,
    url: "https://www.freecodecamp.org/news/secure-ways-to-access-deepseek-using-third-party-apps/",
    platform: "FreeCodeCamp",
    featured: false,
  },
  {
    title: "Merge Mastery: Elevating Your Pull Request Game in Open Source Projects",
    excerpt: "Level up your open source contributions with better pull requests. Code review best practices and Git workflows.",
    category: "Open Source",
    date: "2024-02-15",
    readingTime: 10,
    url: "https://dev.to/oluwadamisisamuel1/merge-mastery-elevating-your-pull-request-game-in-open-source-projects-25fo",
    platform: "dev.to",
    featured: false,
  },
  {
    title: "How to Use Chart.js for Interactive Data Visualization",
    excerpt: "Create beautiful, interactive charts for your web apps. Practical Chart.js tutorial with real examples.",
    category: "Frontend",
    date: "2024-09-12",
    readingTime: 9,
    url: "https://www.freecodecamp.org/news/how-to-use-chart-js-for-interactive-data-visualization/",
    platform: "FreeCodeCamp",
    featured: false,
  },
  {
    title: "How to Write Cleaner JavaScript Code with The Ternary Operator",
    excerpt: "Simplify your conditional logic and write more readable JavaScript using ternary operators effectively.",
    category: "JavaScript",
    date: "2024-10-25",
    readingTime: 6,
    url: "https://www.freecodecamp.org/news/write-cleaner-javascript-code-with-the-ternary-operator/",
    platform: "FreeCodeCamp",
    featured: false,
  },
  {
    title: "How to Use Callback Functions in JavaScript",
    excerpt: "Master asynchronous JavaScript by understanding callbacks. Foundation for promises and async/await.",
    category: "JavaScript",
    date: "2024-07-03",
    readingTime: 8,
    url: "https://www.freecodecamp.org/news/how-to-use-callback-functions-in-javascript/",
    platform: "FreeCodeCamp",
    featured: false,
  },
];