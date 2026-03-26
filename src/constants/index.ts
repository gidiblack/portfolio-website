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
  type: "web" | "mobile";
  challenge?: string;
  solution?: string;
  interfaceScreenshots?: string[];
}

interface Item {
  label: string;
  value: string;
}

export const allProjects: IProject[] = [
  {
    id: "lxpath-web-app",
    title: "LxPath Web App",
    description:
      "LxPath is an AI-powered platform that creates personalized learning paths tailored to your skills, career goals, and progress. Instead of manually searching through countless courses, it automatically curates and adapts a learning journey for you. Whether you're a beginner looking to break into tech or an experienced professional aiming to upskill, LxPath simplifies your learning experience and helps you achieve your goals faster.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-home.png",
    thumbnailGif: "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-screen_capture-ezgif.gif",
    techStack: ["Next.js", "TypeScript"],
    liveDemoLink: "https://app.lxpath.com/",
    type: "web",
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
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-home.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-dashboard.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-learning_path.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-learning_path2.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-course.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-why_course.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-skill_breakdown.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-schedule.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-app-profile.png",
    ],
  },
  {
    id: "lxpath-landing-page",
    title: "LxPath Landing Page",
    description:
      "LxPath is an AI-powered platform that creates personalized learning paths tailored to your skills, career goals, and progress. Instead of manually searching through countless courses, it automatically curates and adapts a learning journey for you. Whether you're a beginner looking to break into tech or an experienced professional aiming to upskill, LxPath simplifies your learning experience and helps you achieve your goals faster.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/lxpath-landing-hero.png",
    techStack: ["HTML", "JavaScript", "CSS"],
    liveDemoLink: "https://lxpath.com/",
    type: "web",
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
    id: "balloon-landing-page",
    title: "Balloon Landing Page",
    description:
      "Balloon empowers everyday people to achieve financial freedom by simplifying insurance sales into a mobile, flexible, and rewarding experience. It transforms the challenge of breaking into financial services into an opportunity accessible to anyone.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-hero.png",
    thumbnailGif: "https://ik.imagekit.io/gideonimgkit/porfolio/balloon-landing-page.gif",
    techStack: ["Next.js", "TypeScript"],
    liveDemoLink: "https://myballoon.co/",
    type: "web",
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
    id: "etap-website",
    title: "ETAP Insurance",
    description:
      "ETAP transforms car insurance from a bureaucratic hassle into a fast, flexible, and rewarding experience. By combining instant coverage, rapid claims, and safe-driving incentives, it solves the inefficiencies of traditional insurance while empowering drivers with control and savings.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-hero.png",
    thumbnailGif: "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-screen_capture-ezgif.gif",
    techStack: ["Next.js", "TypeScript"],
    liveDemoLink: "https://etapinsure.com/",
    type: "web",
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
    challenge: `
    Traditional car insurance is slow, paperwork-heavy, and inconvenient.\n
    Claims processing often takes days or weeks, leaving drivers stranded.\n
    Premiums are rigid, not reflecting individual driving behavior or lifestyle.\n
    Drivers lack tools to verify documents or track their driving habits.\n
    `,
    solution: `
    Instant Coverage: Get insured in 90 seconds using just a vehicle plate number.\n
    Fast Claims: Verified claims are processed within 3 minutes.\n
    Flexible Plans: Options range from annual to short-term (1–28 days), tailored to lifestyle needs.\n
    Smart Pricing: Personalized premiums that reward safe driving with lower costs.\n
    Driving Insights: Telematics-based feedback on acceleration, braking, speeding, etc., helping drivers improve and save.\n
    Rewards System: Safe Driving Points can be exchanged for vouchers, fuel, cinema tickets, and more.\n
    Document Verification: Free tool to spot fake vehicle documents quickly.\n
    Customer-Friendly Policies: Cancel anytime without fees, with always-on support.\n
    `,
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-vehicles.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-insurance-cover.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-driving_instincts.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-manage_everything.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-verify_docs.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-customer_service.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-claims_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-claims_steps.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-get_insured.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-get_insured-step2.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-premiums.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-how_it_works.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-how_it_works-steps.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-auto_reg.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-lifestyle.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-sdp_vouchers.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-web-more_than.png",
    ],
  },
  {
    id: "etap-mobile-app",
    title: "ETAP Mobile App",
    description:
      "ETAP transforms car insurance from a bureaucratic necessity into a fast, flexible, and rewarding experience. By combining instant coverage, rapid claims, and gamified safe-driving rewards, it solves the inefficiencies of traditional insurance while motivating drivers to be safer and more engaged.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-dashboard.png",
    thumbnailGif: "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-screen_record_ezgif.gif",
    techStack: ["React Native", "TypeScript"],
    liveDemoLink: "https://apps.apple.com/us/app/etap/id1565950437",
    type: "mobile",
    overview: [
      {
        label: "Role",
        value: "Mobile Developer",
      },
      {
        label: "Client",
        value: "ETAP Digital",
      },
      {
        label: "Timeline",
        value: "6 months",
      },
      {
        label: "Tech Stack",
        value: "React Native, TypeScript",
      },
    ],
    engine: [
      {
        label: "Frontend Logic",
        value: "React Native, TypeScript",
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
    challenge: `
    Insurance is slow and rigid: Traditional car insurance often requires paperwork, long wait times, and fixed annual plans.\n
    Claims are frustrating: Drivers face delays and uncertainty when filing claims.\n
    No incentive for safe driving: Good drivers pay the same premiums as risky ones, with no rewards for responsible behavior.\n
    Lack of engagement: Insurance feels like a chore, not something drivers actively benefit from.\n
    `,
    solution: `
    Instant Insurance: Users can insure their car in under 90 seconds directly from the app.\n
    Flexible Coverage: Options range from short-term (1–28 days) to annual plans, tailored to lifestyle needs.\n
    Fast Claims: Verified claims are processed in minutes, not weeks.\n
    Driving Insights: The app tracks speed, braking, acceleration, and phone handling, giving drivers a score and feedback to improve.\n
    Safe Driving Points (SDP): Earn points for smooth driving, which can be redeemed for gifts, vouchers, fuel, or tickets.\n
    Gamification: Leaderboards rank drivers by SDP, encouraging friendly competition and consistent safe driving.\n
    Policy Management: Users can add cover, view policy details, and get reminders when insurance is about to expire.\n
    Trip Tracking: Detailed trip history and activity graphs help drivers monitor usage and performance.\n
    `,
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-dashboard.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-garage.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-trips.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-trip_details.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-leaderboard.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-create_league.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-driving_points.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-referrals.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-mobile-map.png",
    ],
  },
  {
    id: "etap-enterprise-dashboard",
    title: "ETAP Fleet Manager",
    description:
      "a fleet insurance management platform. It solves the problem of fragmented policy oversight by offering a single dashboard where managers can monitor drivers, ensure compliance, and keep policies up to date.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-dashboard.png",
    thumbnailGif: "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-screen_capture-ezgif.gif",
    techStack: ["Next.js", "TypeScript", "Node.js", "AWS"],
    liveDemoLink: "https://fleet.etapinsure.com/",
    type: "web",
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
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-claims.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-drivers.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-wallet.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-make_claim.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-driver_leaderboard.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-add_driver.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-signup.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/etap-enterprise-capture_reminder.png",
    ],
  },
  {
    id: "veendhq-website",
    title: "VeendHQ",
    description:
      "VeendHQ transforms lending in Nigeria by making credit fast, flexible, and accessible. It eliminates the barriers of traditional banking, offering tailored financial solutions that empower individuals, civil servants, and businesses to meet urgent needs and pursue opportunities confidently.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-hero.png",
    thumbnailGif: "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-screen_capture-ezgif.gif",
    techStack: ["Next.js", "TypeScript"],
    liveDemoLink: "https://veendhq.com/",
    type: "web",
    overview: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Client",
        value: "VeendHQ",
      },
      {
        label: "Timeline",
        value: "6-7 weeks",
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
    challenge: `In Nigeria, access to credit is often hindered by bureaucratic processes, lack of collateral, and rigid repayment terms.\n
    The challenge was to create a digital platform that simplifies lending, making it fast, flexible, and accessible to a wide range of users, including individuals, civil servants, and businesses.\n
     Traditional banking systems often exclude those with urgent financial needs or non-traditional credit profiles, creating a gap in financial inclusion.\n
     `,
    solution: `The solution was to develop a user-friendly website that offers tailored financial solutions, eliminating traditional barriers.\n
    By leveraging technology, VeendHQ provides a seamless lending experience that empowers users to meet urgent needs and pursue opportunities confidently.\n
     The platform streamlines the application process, offers flexible repayment options, and uses alternative data for credit assessment, making credit accessible to a broader audience.\n
     `,
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-partners.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-faqs.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-get_assistance.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-why_veend.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-why_veend2.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_lend-easy.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-web_loan.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-ussd.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-payroll_loans.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-bnpl.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/veendhq-website_home-customized_products.png",
    ],
  },
  {
    id: "emmatob-website",
    title: "Emmatob Technologies",
    description:
      "Emma-Tob Technologies bridges the gap between industrial demand and supply by offering locally accessible, precision-engineered machine parts and fabrication services. It solves the challenge of scarce, costly, and delayed spare parts, empowering manufacturers to reduce production costs and maintain efficiency",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-home_hero.png",
    thumbnailGif: "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-screen_capture-ezgif.gif",
    techStack: ["Next.js", "TypeScript"],
    liveDemoLink: "https://emma-tob.com/",
    type: "web",
    overview: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Client",
        value: "Emma-Tob Technologies",
      },
      {
        label: "Timeline",
        value: "6 weeks",
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
    challenge: `Manufacturers in Nigeria face significant challenges in sourcing machine parts, including scarcity, high costs, and long lead times.\n
    The challenge was to create a digital platform that connects manufacturers with locally accessible, precision-engineered machine parts and fabrication services, reducing production costs and improving efficiency.\n
     Traditional supply chains often fail to meet the urgent needs of manufacturers, leading to costly downtime and lost productivity.\n`,
    solution: `The solution was to develop a user-friendly website that serves as a marketplace for machine parts and fabrication services.\n
    By leveraging technology, Emma-Tob Technologies bridges the gap between industrial demand and supply, empowering manufacturers to access the parts they need quickly and affordably, ultimately enhancing their operational efficiency.\n
     The platform offers a wide range of precision-engineered parts, connects manufacturers with local fabricators, and provides real-time availability and pricing information, streamlining the procurement process.\n`,
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-home_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-clients.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-get_in_touch.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-testimonials.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-sercives_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-usp.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-mission_vision.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-engineering_service.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-about_us-hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-tools_service.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-products_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-products_list.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-products.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-products_list2.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_website-story_statement.png",
    ],
  },
  {
    id: "emmatob-international-academy",
    title: "Emmatob International Academy",
    description:
      "Emma-Tob International Academy bridges the gap between education and industry by offering practical, flexible, and industry-aligned engineering training. It solves the challenge of underprepared graduates and career stagnation by equipping learners with hands-on skills, certifications, and tailored programmes that meet both personal and corporate needs.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-home_hero.png",
    thumbnailGif: "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-screen_capture-ezgif.gif",
    techStack: ["Next.js", "TypeScript"],
    liveDemoLink: "https://academy.emma-tob.com/",
    type: "web",
    overview: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Client",
        value: "Emma-Tob Technologies",
      },
      {
        label: "Timeline",
        value: "6 weeks",
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
    challenge: `Many engineering graduates in Nigeria struggle to find employment due to a gap between academic training and industry needs.\n
    The challenge was to create a digital platform that offers practical, flexible, and industry-aligned engineering training, equipping learners with the skills and certifications needed to succeed in the job market.\n
     Traditional education systems often fail to provide hands-on experience or tailored programs that meet the specific needs of both learners and employers, leading to underprepared graduates and career stagnation.\n`,
    solution: `The solution was to develop a user-friendly website that serves as an online academy, providing a range of engineering courses and training programs. By leveraging technology, Emma-Tob International Academy bridges the gap between education and industry, empowering learners to acquire hands-on skills and certifications that enhance their employability and career prospects.\n
     The platform offers a variety of courses, from foundational engineering principles to advanced technical skills, all designed in collaboration with industry experts to ensure relevance and practical application.\n
     Learners can access flexible learning paths, earn certifications, and connect with potential employers, creating a comprehensive ecosystem that supports career growth and development in the engineering field.\n`,
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-home_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-who_we_are.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-contact_form.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-home_programmes.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-usps.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-programmes_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-programmes_list.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-programmes_specializations.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-about_us_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-founders_message.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-history.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-approach.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-approach2.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-admissions_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-admission_requirements.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-admission_process.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-referrals.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-interview_prep.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-services_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-services_mentorship.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-support_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-faqs.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/emmatob_academy_website-fee_structure.png",
    ],
  },
  {
    id: "yarlo-marketplace",
    title: "Yarlo Marketplace",
    description:
      "Yarlo transforms idle assets into income opportunities and makes rentals more accessible, affordable, and trustworthy. It solves the inefficiencies of traditional rental markets by creating a digital, community-driven ecosystem where everyone benefits—owners earn, renters save.",
    thumbnailImg: "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-home_hero.png",
    techStack: ["React Js", "JavaScript"],
    liveDemoLink: "https://yarlo-frontend.vercel.app/",
    type: "web",
    overview: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Client",
        value: "Yarlo",
      },
      {
        label: "Timeline",
        value: "4 months",
      },
      {
        label: "Tech Stack",
        value: "React Js, JavaScript",
      },
    ],
    engine: [
      {
        label: "Frontend Logic",
        value: "React Js, JavaScript",
      },
      {
        label: "API Integration",
        value: "Node.js",
      },
    ],
    challenge: `
    Traditional rental markets are inefficient, with high costs, limited accessibility, and trust issues between owners and renters.\n
    Owners of idle assets struggle to monetize them, while renters face barriers to access and affordability.\n
    The lack of a digital, community-driven platform creates friction and limits the potential for shared economic opportunities.\n
    Renting from strangers can feel risky without verification or a structured platform.
      `,
    solution: `
    The solution was to develop a user-friendly marketplace that connects asset owners with renters, creating a digital ecosystem that fosters trust and accessibility.\n
    By leveraging technology, Yarlo transforms idle assets into income opportunities for owners while providing renters with affordable and trustworthy options, ultimately creating a win-win situation for all parties involved.\n
    The platform includes features such as user verification, secure payment processing, and a review system to build trust and ensure a positive rental experience for both owners and renters.\n
      `,
    interfaceScreenshots: [
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-home_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-popular-categories.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-all_categories.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-connect_and_earn.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-about_hero.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-mission.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-how_it_works.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-how_it_works2.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-faqs.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-faqs2.png",
      "https://ik.imagekit.io/gideonimgkit/porfolio/yarlo_website-footer.png",
    ],
  },
];
