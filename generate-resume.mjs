import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  TabStopPosition,
  TabStopType,
  BorderStyle,
} from "docx";
import PDFDocument from "pdfkit";
import { writeFileSync, createWriteStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = __dirname;

// ── Resume Data ──
const resume = {
  name: "GIDEON ETIM",
  location: "Lagos, Nigeria",
  phone: "+2347081641910",
  email: "gidibetim@gmail.com",
  linkedin: "linkedin.com/in/gideon-etim",
  github: "github.com/gidiblack",
  portfolio: "gideonetim.website",

  summary:
    "Results-driven Frontend Software Engineer with 5+ years of experience building scalable, user-centric web and mobile applications using React, React Native, Next.js, and TypeScript. Proven track record of leading cross-functional teams, optimizing development workflows through modular architecture and process automation, and delivering production-ready applications across fintech, edtech, and insurance domains. Skilled in leveraging AI-assisted development tools and systematic process improvements to accelerate delivery timelines and enhance code quality.",

  skills: {
    Languages: "JavaScript (ES6+), TypeScript, HTML5, CSS3",
    "Frameworks & Libraries": "React, React Native, Next.js, Redux, Redux Toolkit, React Query, jQuery, Angular JS",
    Styling: "Tailwind CSS, SASS, SCSS, Bootstrap 5",
    "Backend & Data (Exposure)": "Node.js, Express, PHP, Laravel, MongoDB, GraphQL, Firebase",
    Testing: "Jest",
    "Tools & Platforms": "Git, Figma, Auth0",
    "Workflow & AI":
      "AI-assisted code generation, Agile/Scrum methodology, modular component architecture, CI/CD workflows",
  },

  experience: [
    {
      title: "Frontend Software Engineer",
      company: "Summit Venture Studios",
      location: "Utah, USA",
      dates: "July 2024 \u2013 July 2025",
      bullets: [
        "Architected and developed modular, reusable UI components for Chemkeyz web and mobile applications using React Native and TypeScript, ensuring cross-platform consistency.",
        "Led frontend development from prototype to production, achieving successful launch on the Google Play Store for beta testing by high school students.",
        "Established rigorous pre-QA testing protocols, reducing bug escape rate and accelerating release cycles.",
        "Standardized component architecture and code patterns, enabling faster onboarding and consistent development practices across the team.",
        "Implemented AI-assisted code review workflows to identify potential issues early and improve code quality before manual QA.",
      ],
    },
    {
      title: "Frontend Software Engineer",
      company: "ETAP Digital Limited",
      location: "Lagos, NG",
      dates: "April 2022 \u2013 July 2024",
      bullets: [
        "Led frontend development for the official website and mobile application, delivering modular, responsive components using React, React Native, and TypeScript.",
        "Collaborated with product designers to prioritize UX improvements, translating design specifications into pixel-perfect, accessible interfaces.",
        "Completed 100+ development tasks using Agile methodologies, optimizing sprint planning and reducing cycle time through process standardization.",
        "Implemented reusable component libraries and design system patterns, reducing development time for new feature iterations.",
        "Introduced automated linting, formatting, and testing workflows to enforce code quality standards across the frontend codebase.",
      ],
    },
    {
      title: "Frontend Software Engineer",
      company: "VeendHQ",
      location: "Lagos, NG",
      dates: "July 2021 \u2013 August 2022",
      bullets: [
        "Spearheaded frontend projects, delivering optimized, performance-tuned UI components using React and TypeScript.",
        "Partnered with product designers to streamline design-to-development handoff, reducing iteration cycles and improving feature delivery speed.",
        "Served as interim engineering lead, implementing Agile methodology and managing task prioritization for the engineering team.",
        "Established frontend development standards and code review processes, improving team output consistency and reducing post-release defects.",
      ],
    },
    {
      title: "Frontend Software Engineer",
      company: "Enye Cohort 5",
      location: "Lagos, NG",
      dates: "February 2021 \u2013 May 2021",
      bullets: [
        "Led a cross-functional Agile team in developing a fully functional MVP for Stokkpile using React Native and TypeScript.",
        "Reduced development time by 65% through creation of modular, reusable component libraries and high-fidelity UI mockups.",
        "Facilitated sprint ceremonies and client demos, ensuring alignment between technical delivery and business requirements.",
      ],
    },
    {
      title: "Frontend Software Engineer",
      company: "HNG i7",
      location: "Lagos, NG",
      dates: "June 2020 \u2013 August 2020",
      bullets: [
        "Led a development team in implementing the full frontend for CustomerPayMe using HTML5, JavaScript, and CSS3.",
        "Generated revenue by designing and developing responsive UI themes for client projects.",
        "Managed and delegated 50+ tasks, ensuring on-time delivery through structured task tracking and team coordination.",
      ],
    },
  ],

  projects: [
    {
      title: "Frontend Software Engineer | LxPath",
      tech: "Next.js",
      dates: "August 2025 \u2013 Present",
      bullets: [
        "Building functional requirements and frontend architecture for an AI-powered learning platform using Next.js and TypeScript.",
      ],
      link: "lxpath.com",
    },
    {
      title: "Frontend Software Engineer | Emma-tob International",
      tech: "Next.js",
      dates: "February 2024 \u2013 December 2024",
      bullets: [
        "Built and optimized 2 organizational websites using Next.js and TypeScript, implementing SEO best practices to improve search visibility.",
      ],
      link: "emma-tob.com",
    },
    {
      title: "Frontend Software Engineer | Grape Assignments",
      tech: "React Native",
      dates: "July 2023",
      bullets: [
        "Optimized React Native UI components for improved performance and user experience on the Grape Assignments platform.",
      ],
      link: "grapeassignments.com",
    },
    {
      title: "Frontend Software Engineer | Yarlo",
      tech: "React",
      dates: "February 2023 \u2013 May 2023",
      bullets: [
        "Redesigned and optimized the Yarlo e-commerce website, enhancing user experience and conversion flow using React.",
      ],
      link: null,
    },
    {
      title: "Frontend Software Engineer | Clinify EMR",
      tech: "React Native",
      dates: "September 2021 \u2013 January 2022",
      bullets: [
        "Developed the Clinify mobile application and admin dashboard using React Native, ensuring consistent UI patterns and responsive styling across devices.",
      ],
      link: null,
    },
    {
      title: "Frontend Software Engineer | Tweetplug",
      tech: "HTML, CSS, JavaScript",
      dates: "February 2020 \u2013 July 2020",
      bullets: [
        "Built the Tweetplug client website and admin dashboard, managing deployment and codebase maintenance.",
      ],
      link: null,
    },
    {
      title: "UI Designer | KazMpire Enterprises",
      tech: "Design",
      dates: "July 2019 \u2013 March 2020",
      bullets: [
        "Designed interactive UI/UX mockups and promotional materials, contributing to increased customer conversion and retention.",
      ],
      link: null,
    },
  ],

  workflowHighlights: [
    "Standardized modular component architecture across multiple projects, reducing feature development time by up to 65% (Enye/Stokkpile).",
    "Implemented Agile/Scrum methodologies across 3 organizations, completing 100+ tasks with optimized sprint cycles (ETAP, VeendHQ, Enye).",
    "Established pre-QA testing protocols and automated code quality workflows, reducing bug escape rates across development teams (Summit Venture Studios, ETAP).",
    "Leveraged AI-assisted development tools for code generation, review, and debugging to accelerate development workflows and improve code quality.",
    "Streamlined design-to-development handoff processes through collaboration with product designers, reducing iteration cycles (ETAP, VeendHQ).",
  ],

  education: {
    school: "University of Lagos",
    degree: "BSc. Geography and Planning",
    date: "November 2018",
  },
};

// ═══════════════════════════════════════════
// DOCX GENERATION
// ═══════════════════════════════════════════

function sectionDivider() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" } },
    spacing: { after: 80 },
  });
}

function sectionHeading(text) {
  return new Paragraph({
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 24, font: "Calibri" })],
    spacing: { before: 200, after: 80 },
    heading: HeadingLevel.HEADING_2,
  });
}

function bulletParagraph(text) {
  return new Paragraph({
    children: [new TextRun({ text, size: 21, font: "Calibri" })],
    bullet: { level: 0 },
    spacing: { after: 40 },
  });
}

function roleHeader(title, company, location, dates) {
  return new Paragraph({
    children: [
      new TextRun({ text: `${title} | ${company} | ${location}`, bold: true, size: 22, font: "Calibri" }),
      new TextRun({ text: `\t${dates}`, size: 22, font: "Calibri" }),
    ],
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    spacing: { before: 120, after: 40 },
  });
}

function projectHeader(title, dates) {
  return new Paragraph({
    children: [
      new TextRun({ text: title, bold: true, size: 22, font: "Calibri" }),
      new TextRun({ text: `\t${dates}`, size: 22, font: "Calibri" }),
    ],
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    spacing: { before: 120, after: 40 },
  });
}

async function generateDocx() {
  const children = [];

  // Name
  children.push(
    new Paragraph({
      children: [new TextRun({ text: resume.name, bold: true, size: 36, font: "Calibri" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
    })
  );

  // Contact line
  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: `${resume.location} | ${resume.phone} | ${resume.email}`, size: 20, font: "Calibri" }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 20 },
    })
  );
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `LinkedIn: ${resume.linkedin} | GitHub: ${resume.github} | Portfolio: ${resume.portfolio}`,
          size: 20,
          font: "Calibri",
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
    })
  );

  // Professional Summary
  children.push(sectionDivider());
  children.push(sectionHeading("Professional Summary"));
  children.push(
    new Paragraph({
      children: [new TextRun({ text: resume.summary, size: 21, font: "Calibri" })],
      spacing: { after: 80 },
    })
  );

  // Skills
  children.push(sectionDivider());
  children.push(sectionHeading("Skills"));
  for (const [category, skills] of Object.entries(resume.skills)) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: `${category}: `, bold: true, size: 21, font: "Calibri" }),
          new TextRun({ text: skills, size: 21, font: "Calibri" }),
        ],
        spacing: { after: 40 },
      })
    );
  }

  // Experience
  children.push(sectionDivider());
  children.push(sectionHeading("Professional Experience"));
  for (const role of resume.experience) {
    children.push(roleHeader(role.title, role.company, role.location, role.dates));
    for (const b of role.bullets) {
      children.push(bulletParagraph(b));
    }
  }

  // Projects
  children.push(sectionDivider());
  children.push(sectionHeading("Projects"));
  for (const proj of resume.projects) {
    children.push(projectHeader(proj.title, proj.dates));
    for (const b of proj.bullets) {
      children.push(bulletParagraph(b));
    }
    if (proj.link) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: proj.link, size: 20, font: "Calibri", italics: true })],
          spacing: { after: 40 },
        })
      );
    }
  }

  // Workflow Optimization Highlights
  children.push(sectionDivider());
  children.push(sectionHeading("Workflow Optimization Highlights"));
  for (const h of resume.workflowHighlights) {
    children.push(bulletParagraph(h));
  }

  // Education
  children.push(sectionDivider());
  children.push(sectionHeading("Education"));
  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: `${resume.education.school}, `, bold: true, size: 22, font: "Calibri" }),
        new TextRun({ text: resume.education.degree, italics: true, size: 22, font: "Calibri" }),
        new TextRun({ text: `\t${resume.education.date}`, size: 22, font: "Calibri" }),
      ],
      tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
      spacing: { after: 80 },
    })
  );

  const doc = new Document({
    sections: [{ properties: { page: { margin: { top: 720, bottom: 720, left: 900, right: 900 } } }, children }],
    styles: { default: { document: { run: { font: "Calibri", size: 22 } } } },
  });

  const buffer = await Packer.toBuffer(doc);
  const filePath = join(OUTPUT_DIR, "Gideon_Etim_ATS_Optimized_Resume.docx");
  writeFileSync(filePath, buffer);
  console.log("DOCX written:", filePath);
  return filePath;
}

// ═══════════════════════════════════════════
// PDF GENERATION
// ═══════════════════════════════════════════

function generatePdf() {
  return new Promise((resolve, reject) => {
    const filePath = join(OUTPUT_DIR, "Gideon_Etim_ATS_Optimized_Resume.pdf");
    const doc = new PDFDocument({ size: "A4", margins: { top: 50, bottom: 50, left: 60, right: 60 } });
    const stream = createWriteStream(filePath);
    doc.pipe(stream);

    const PAGE_WIDTH = doc.page.width - 120; // margins
    const FONT_REGULAR = "Helvetica";
    const FONT_BOLD = "Helvetica-Bold";
    const FONT_ITALIC = "Helvetica-Oblique";

    const checkPage = (needed = 60) => {
      if (doc.y + needed > doc.page.height - 50) doc.addPage();
    };

    // Name
    doc.font(FONT_BOLD).fontSize(20).text(resume.name, { align: "center" });
    doc.moveDown(0.2);

    // Contact
    doc
      .font(FONT_REGULAR)
      .fontSize(9)
      .text(`${resume.location} | ${resume.phone} | ${resume.email}`, { align: "center" });
    doc.text(`LinkedIn: ${resume.linkedin} | GitHub: ${resume.github} | Portfolio: ${resume.portfolio}`, {
      align: "center",
    });
    doc.moveDown(0.4);

    const drawLine = () => {
      doc
        .moveTo(60, doc.y)
        .lineTo(doc.page.width - 60, doc.y)
        .lineWidth(0.5)
        .stroke();
      doc.moveDown(0.3);
    };

    const sectionTitle = (title) => {
      checkPage(40);
      drawLine();
      doc.font(FONT_BOLD).fontSize(11).text(title.toUpperCase());
      doc.moveDown(0.2);
    };

    const roleLine = (left, right) => {
      checkPage(30);
      const rightW = doc.font(FONT_REGULAR).fontSize(9.5).widthOfString(right);
      doc
        .font(FONT_BOLD)
        .fontSize(9.5)
        .text(left, 60, doc.y, { width: PAGE_WIDTH - rightW - 10, continued: false });
      doc
        .font(FONT_REGULAR)
        .fontSize(9.5)
        .text(right, doc.page.width - 60 - rightW, doc.y - doc.currentLineHeight(), { width: rightW, align: "right" });
      doc.moveDown(0.1);
    };

    const bullet = (text) => {
      checkPage(25);
      doc
        .font(FONT_REGULAR)
        .fontSize(9)
        .text(`\u2022  ${text}`, 72, doc.y, { width: PAGE_WIDTH - 12, lineGap: 1 });
      doc.moveDown(0.15);
    };

    // Professional Summary
    sectionTitle("Professional Summary");
    doc.font(FONT_REGULAR).fontSize(9).text(resume.summary, { lineGap: 1.5 });
    doc.moveDown(0.4);

    // Skills
    sectionTitle("Skills");
    for (const [cat, skills] of Object.entries(resume.skills)) {
      checkPage(20);
      doc.font(FONT_BOLD).fontSize(9).text(`${cat}: `, { continued: true });
      doc.font(FONT_REGULAR).text(skills);
      doc.moveDown(0.1);
    }
    doc.moveDown(0.3);

    // Experience
    sectionTitle("Professional Experience");
    for (const role of resume.experience) {
      roleLine(`${role.title} | ${role.company} | ${role.location}`, role.dates);
      for (const b of role.bullets) bullet(b);
      doc.moveDown(0.2);
    }

    // Projects
    sectionTitle("Projects");
    for (const proj of resume.projects) {
      roleLine(proj.title, proj.dates);
      for (const b of proj.bullets) bullet(b);
      if (proj.link) {
        checkPage(15);
        doc.font(FONT_ITALIC).fontSize(8.5).text(proj.link, 72);
      }
      doc.moveDown(0.15);
    }

    // Workflow Optimization Highlights
    sectionTitle("Workflow Optimization Highlights");
    for (const h of resume.workflowHighlights) bullet(h);
    doc.moveDown(0.3);

    // Education
    sectionTitle("Education");
    checkPage(30);
    const eduRight = resume.education.date;
    const eduRightW = doc.font(FONT_REGULAR).fontSize(9.5).widthOfString(eduRight);
    doc.font(FONT_BOLD).fontSize(9.5).text(`${resume.education.school}, `, 60, doc.y, { continued: true });
    doc.font(FONT_ITALIC).text(resume.education.degree, { continued: false });
    doc
      .font(FONT_REGULAR)
      .fontSize(9.5)
      .text(eduRight, doc.page.width - 60 - eduRightW, doc.y - doc.currentLineHeight(), {
        width: eduRightW,
        align: "right",
      });

    doc.end();
    stream.on("finish", () => {
      console.log("PDF written:", filePath);
      resolve(filePath);
    });
    stream.on("error", reject);
  });
}

// ── Run ──
(async () => {
  await generateDocx();
  await generatePdf();
  console.log("Done. Both files generated.");
})();
