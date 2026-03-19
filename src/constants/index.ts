interface IProject {
  id: string;
  title: string;
  description: string;
  thumbnailImg: string;
  thumbnailGif?: string;
  techStack: string[];
  liveDemoLink: string;
  githubRepoLink?: string;
  overview: Item[];
  engine: Item[];
  challenge?: string;
  solution?: string;
  interfaceScreenshots?: string[];
}

interface Item {
  label: string;
  value: string;
}

export const recentProjects = [
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with real-time inventory management and payment integration.",
    techStack: ["React", "Node.js", "MongoDB"],
    imageSrc: "/ecommerce_project.png",
  },
  {
    title: "Social Media App",
    description: "A feature-rich social media application with real-time chat and media sharing capabilities.",
    techStack: ["Flutter", "Firebase", "GraphQL"],
    imageSrc: "/social_media_project.png",
  },
];

export const allProjects: IProject[] = [
  {
    id: "lxpath-landing-page",
    title: "LxPath Landing Page",
    description:
      "LxPath is an AI-powered platform that creates personalized learning paths tailored to your skills, career goals, and progress. Instead of manually searching through countless courses, it automatically curates and adapts a learning journey for you. Whether you're a beginner looking to break into tech or an experienced professional aiming to upskill, LxPath simplifies your learning experience and helps you achieve your goals faster.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-landing-hero.png",
    techStack: ["HTML", "JavaScript", "CSS"],
    liveDemoLink: "https://lxpath.com/",
    overview: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Client",
        value: "LxPath",
      },
      {
        label: "Timeline",
        value: "2 weeks",
      },
      {
        label: "Tech Stack",
        value: "HTML, JavaScript, CSS",
      },
    ],
    engine: [
      {
        label: "Frontend Logic",
        value: "HTML, JavaScript, CSS",
      },
    ],
    challenge:
      "The challenge was to create a high-performance landing page that effectively communicates LxPath's value proposition while ensuring fast load times and a seamless user experience across devices.",
    solution:
      "The solution was to design and implement a responsive, visually appealing landing page using HTML, JavaScript, and CSS, optimizing performance and user experience across all devices.",
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-landing-hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-landing-aianalysis.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-landing-sharepath.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-landing-appdemo.png",
    ],
  },
  {
    id: "lxpath-web-app",
    title: "LxPath Web App",
    description:
      "LxPath is an AI-powered platform that creates personalized learning paths tailored to your skills, career goals, and progress. Instead of manually searching through countless courses, it automatically curates and adapts a learning journey for you. Whether you're a beginner looking to break into tech or an experienced professional aiming to upskill, LxPath simplifies your learning experience and helps you achieve your goals faster.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-home.png",
    techStack: ["Next.js", "TypeScript"],
    liveDemoLink: "https://app.lxpath.com/",
    overview: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Client",
        value: "LxPath",
      },
      {
        label: "Timeline",
        value: "6 months",
      },
      {
        label: "Tech Stack",
        value: "Next.js, TypeScript",
      },
    ],
    engine: [
      {
        label: "Frontend Logic",
        value: "Next.js, TypeScript",
      },
      {
        label: "API Integration",
        value: "Node.js",
      },
      {
        label: "Database",
        value: "AWS",
      },
    ],
    challenge: `People waste significant time trying to figure out which courses or resources are best for their career development.\n
    Traditional learning platforms often provide static, one-size-fits-all paths that don’t adjust to individual skill levels or evolving goals.\n
    Learners struggle to identify their knowledge gaps and track progress effectively.`,
    solution: `AI-Powered Analysis: Advanced algorithms assess your current skills and highlight gaps.\n
    Personalized Path Generation: The platform curates a unique learning path based on your profile and goals.\n
    Dynamic Adaptation: As you progress, the learning path adjusts in real-time to keep you on track and motivated.`,
    interfaceScreenshots: [""],
  },
  {
    id: "balloon-landing-page",
    title: "Balloon Landing Page",
    description:
      "Balloon empowers everyday people to achieve financial freedom by simplifying insurance sales into a mobile, flexible, and rewarding experience. It transforms the challenge of breaking into financial services into an opportunity accessible to anyone.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-hero.png",
    thumbnailGif: "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-landing-page.gif",
    techStack: ["Next.js", "TypeScript"],
    liveDemoLink: "https://myballoon.co/",
    overview: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Client",
        value: "ETAP Digital",
      },
      {
        label: "Timeline",
        value: "3 weeks",
      },
      {
        label: "Tech Stack",
        value: "Next.js, TypeScript",
      },
    ],
    engine: [
      {
        label: "Frontend Logic",
        value: "Next.js, TypeScript",
      },
    ],
    challenge:
      "The challenge was to create a high-performance landing page that effectively communicates Balloon's value proposition while ensuring fast load times and a seamless user experience across devices.",
    solution:
      "The solution was to design and implement a responsive, visually appealing landing page using Next.js and TypeScript, optimizing performance and user experience across all devices.",
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-howitworks.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-benefits.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-earn.jpeg",
      "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-faqs.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-testimonials.jpeg",
    ],
  },
  {
    id: "etap-enterprise-dashboard",
    title: "ETAP Fleet Management Dashboard",
    description:
      "a fleet insurance management platform. It solves the problem of fragmented policy oversight by offering a single dashboard where managers can monitor drivers, ensure compliance, and keep policies up to date.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-dashboard.png",
    techStack: ["Next.js", "TypeScript", "Node.js", "AWS"],
    liveDemoLink: "https://fleet.etapinsure.com/",
    overview: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Client",
        value: "ETAP Digital",
      },
      {
        label: "Timeline",
        value: "4 months",
      },
      {
        label: "Tech Stack",
        value: "Next.js, TypeScript, Node.js, AWS",
      },
    ],
    engine: [
      {
        label: "Frontend Logic",
        value: "Next.js, TypeScript",
      },
      {
        label: "API Integration",
        value: "Node.js",
      },
      {
        label: "Database",
        value: "AWS",
      },
    ],
    challenge: `Fleet managers often struggle with fragmented policy oversight, leading to compliance issues and increased risk. The challenge was to create a unified dashboard that provides real-time insights into driver behavior, policy status, and compliance metrics.`,
    solution: `The solution was to develop a comprehensive dashboard that consolidates all relevant data, offering real-time updates and actionable insights. This allows fleet managers to monitor drivers, ensure compliance, and keep policies up to date efficiently.`,
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-dashboard.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-policies.png",
    ],
  },
];
