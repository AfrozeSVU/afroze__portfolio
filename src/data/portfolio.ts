export const profile = {
  name: "Afroze Mohammad",
  headline: "Machine Learning Engineer | Healthcare AI & Cloud Architect | Building Production-Grade MedTech Solutions.",
  email: "afroze@example.com", // EDIT ME
  socials: {
    linkedin: "https://linkedin.com/in/afroze-mohammad", // EDIT ME
    github: "https://github.com/afroze-mohammad",        // EDIT ME
    twitter: "https://twitter.com/afroze",               // EDIT ME
    leetcode: "https://leetcode.com/u/afroze",           // EDIT ME
    kaggle: "https://kaggle.com/afroze",                 // EDIT ME
    resume: "/resume.pdf",                               // drop your PDF in public/
  },
};

export const featuredWork = [
  {
    title: "Lungsense.ai @ DigiBiomics",
    tag: "Healthcare AI · Production",
    description:
      "Contributed to Lungsense.ai at DigiBiomics (Canadian MedTech). Application is currently serving live hospital data, processing 10+ cases per day. Real-world data is collected and labeled to continuously train deep learning models for cough and X-ray analysis — building toward a scalable multimodal AI system.",
    chips: ["PyTorch", "FastAPI", "AWS SageMaker", "S3", "PostgreSQL"],
  },
  {
    title: "AgroNexus — National Hackathon Winner",
    tag: "AgriTech · 1st Place / 500+ teams",
    description:
      "Engineered a full-stack agri-tech platform bridging farmer–consumer gaps with direct markets, expert consultations, and multilingual support via Google Translate. Integrated Gemini, Geolocation, and Web Speech APIs; automated insights via Puppeteer + Google Play Scraper.",
    chips: ["React", "Node.js", "MongoDB", "Gemini API", "Puppeteer"],
  },
];

export const aboutMd = `# Hi, I'm Afroze 👋

I didn't always know I wanted to work in AI. In fact, my journey into tech started with a simple question: **"How can I build something that actually helps people?"**

That question led me from winning hackathons, interning at two startups along my graduation, to deploying applications in the real world for healthcare.

Today, I'm an **AI/ML Engineer at DigiBiomics**, where I help build backend systems and AI pipelines focused on healthcare. I've had the chance to develop models for respiratory diagnostics, and I enjoy using tools like **FastAPI**, **AWS**, and modern AI to make sure these systems work reliably for doctors and patients.

I'm a recent Computer Science graduate from **Sri Venkateswara University (8.9 CGPA)** and a **Foundation for Excellence Amazon Future Engineer Scholar**, **AnitaB.org Scholar '25**, and **CodessCafe Mentee**. As a woman in tech, I've learned that representation isn't just about being in the room — it's about **building the table**.

My journey has been anything but linear. I keep participating in hackathons and won a national hackathon (beating 500+ teams with **AgroNexus**), led TEDxSVU as the main organizer, and worked as an SDE Intern at BigDoor IT Solutions where I contributed to backend development of an LMS. Projects like **AgroNexus**, **PortfolioGen**, and a stock-investment platform have helped me practice building complete applications and understanding the software development lifecycle.
`;

export const experiencePy = `"""
experience.py — Afroze Mohammad's professional timeline
Run: python experience.py  # outputs the journey
"""

from dataclasses import dataclass
from typing import List


@dataclass
class Experience:
    company: str
    role: str
    period: str
    location: str
    highlights: List[str]


timeline: List[Experience] = [
    Experience(
        company="DigiBiomics",
        role="AI/ML Engineer",
        period="Sep 2025 — Mar 2026",
        location="Remote · Canada",
        highlights=[
            "Developed 3 deep learning models (ResNet-18, CNN-BiLSTM) using PyTorch on AWS SageMaker for respiratory diagnostics; trained on 24,520 samples — 89.6% accuracy (X-ray), 92.59% accuracy (chest sounds), 0.83 AUC-ROC (cough sounds).",
            "Architected production backend with FastAPI + SQLAlchemy: 52 REST endpoints, PostgreSQL, rate limiting (100 req/min), round-robin auto-assignment — serving live hospital deployment with 10+ cases/day.",
            "Deployed AWS infra serving live hospital platform; migrated to S3 presigned URLs (boto3) reducing EC2 load by 100%; resolved iOS/Android audio incompatibility via Web Audio API WAV — 100% cross-platform compatibility.",
        ],
    ),
    Experience(
        company="BigDoor IT Solutions",
        role="Software Development Engineer (Intern)",
        period="Feb 2025 — Sep 2025",
        location="Bengaluru · Remote",
        highlights=[
            "Delivered v1 of a Learning Management System in 4 months — backend in Express.js + TypeScript + Prisma ORM (MVC), documented REST APIs in Swagger.",
            "Configured AWS for document/image/certificate uploads; implemented S3 bucket policies and IAM roles; automated 100% of initial data validation pipeline.",
            "Applied a 3-branch Git strategy in Agile with validations, error handling, pagination, and ERD-driven models — accelerating feature deployment by 40%.",
        ],
    ),
    Experience(
        company="Infosys Springboard",
        role="Java Full Stack Intern",
        period="Feb 2025 — Apr 2025",
        location="Remote",
        highlights=[
            "Built a full-stack Stock Investment Platform: React frontend, Spring Boot backend, MongoDB.",
            "Integrated Alpha Vantage API for live NSE/BSE prices; implemented Buy/Sell with portfolio tracking.",
            "Built live dashboard for real-time gain/loss insights with charts; designed budget management feature.",
        ],
    ),
    Experience(
        company="GirlScript Summer of Code",
        role="Open Source Contributor (GSSOC'24 Extd)",
        period="May 2024 — Nov 2024",
        location="Remote",
        highlights=[
            "Added interactive features with React.js, MongoDB, Node.js, and Express.js — improving UX across multiple projects.",
            "Identified and resolved bugs; optimized code for performance.",
            "Collaborated via GitHub: PR reviews, version control, code quality.",
        ],
    ),
    Experience(
        company="Tekie's Zen LLC",
        role="Frontend Developer Intern",
        period="Apr 2024 — Jul 2024",
        location="Remote",
        highlights=[
            "Crafted UI from high-fidelity Figma/Visily designs.",
            "Built responsive web pages using Tailwind CSS, React, and JavaScript.",
            "Contributed to a 20% increase in project growth via team collaboration.",
        ],
    ),
]


if __name__ == "__main__":
    for exp in timeline:
        print(f"→ {exp.company} · {exp.role} ({exp.period})")
`;

export const projectsJs = `// projects.js — Things I've built
// Tip: each project below ships as production code or has won something.

const projects = [
  {
    name: "Multi-Class Respiratory Diagnostic Model",
    period: "Dec 2025 — Jan 2026",
    stack: ["PyTorch", "ResNet-18", "ImageNet", "Python"],
    summary: \`End-to-end deep learning pipeline:
      ingest raw .wav files, parse patient diagnosis.txt into a structured DataFrame,
      fine-tune ResNet-18 (ImageNet) — 94.5% accuracy, 0.945 macro F1 across 5 respiratory disease classes.
      Resolved 49.5x class imbalance via cap-count augmentation, lifting minority-class F1 to 0.91–0.96.
      Validated generalization on 1,211 unseen samples via full batch inference.\`,
    link: "https://github.com/afroze-mohammad",
  },

  {
    name: "AgroNexus — National Hackathon Winner",
    period: "Oct 2024 — Nov 2024",
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    summary: \`Bridged farmer–consumer gaps with direct markets, expert consultations,
      and multilingual support via Google Translate API — reducing communication delays from hours to seconds.
      Integrated Gemini, Geolocation, and Web Speech APIs; automated app insights by extracting ratings/reviews
      with Google Play Scraper and Puppeteer — 30% increase in user engagement.\`,
    link: "https://github.com/afroze-mohammad",
  },

  {
    name: "Stock Investment Platform — Infosys Springboard",
    period: "Feb 2025 — Apr 2025",
    stack: ["React", "Spring Boot", "MongoDB", "Alpha Vantage API"],
    summary: \`Full-stack platform consolidating portfolio tracking, budgeting, learning modules,
      and dashboards — eliminating the need for multiple brokerage apps.
      React Hooks + React Router + Tailwind CSS frontend; Spring Boot (Maven) backend with NoSQL MongoDB,
      CORS-enabled, real-time stock data via Alpha Vantage API.\`,
    link: "https://github.com/afroze-mohammad",
  },

  {
    name: "PortfolioGen",
    period: "2024",
    stack: ["MERN", "Three.js", "Tailwind", "GitHub API", "Vercel API", "Nodemailer"],
    summary: \`Personalized portfolio generator with modern themes and user-friendly form inputs.
      Automates folder creation, GitHub repository creation, and Vercel deployment.
      AI integration + Nodemailer for delivering live-hosted links and repo URLs to users.\`,
    link: "https://github.com/afroze-mohammad",
  },
];

export default projects;
`;

export const skillsCategories = [
  {
    category: "Languages",
    items: [
      { name: "Java", slug: "openjdk" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Python", slug: "python" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", slug: "html5" },
      { name: "React", slug: "react" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Streamlit", slug: "streamlit" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Express.js", slug: "express" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Nginx", slug: "nginx" },
    ],
  },
  {
    category: "Databases & ORM",
    items: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Supabase", slug: "supabase" },
      { name: "Prisma", slug: "prisma" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "NumPy", slug: "numpy" },
      { name: "Pandas", slug: "pandas" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "scikit-learn", slug: "scikitlearn" },
      { name: "Matplotlib", slug: "matplotlib" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Vercel", slug: "vercel" },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Figma", slug: "figma" },
      { name: "Canva", slug: "canva" },
      { name: "Nodemon", slug: "nodemon" },
    ],
  },
];

export const educationYaml = `# education.yaml
education:
  - institution: Sri Venkateswara University
    degree: B.Tech, Computer Science & Engineering
    cgpa: 8.9
    period: 2021 - 2025
    location: Tirupati, India

scholarships_and_programs:
  - name: Foundation for Excellence — Amazon Future Engineer Scholar
    year: 2023
  - name: AnitaB.org Scholar
    year: 2025
  - name: CodessCafe Mentee
    year: 2024

certifications:
  - AWS Cloud Practitioner essentials (course)
  - Infosys Springboard — Java Full Stack
  - GirlScript Summer of Code 2024 (Extended)
`;

export const honorsTxt = `HONORS & AWARDS
================================================================

🏆  AgroNexus — National Hackathon Winner
    Beat 500+ teams. Agri-tech platform bridging farmer–consumer gaps.

🎓  Foundation for Excellence — Amazon Future Engineer Scholar
    Selected for academic merit and leadership in tech.

🌸  AnitaB.org Scholar '25
    Recognized for contribution to women in computing.

☕  CodessCafe Mentee
    Selected mentee in a curated program for women in software.

🎤  TEDxSVU — Main Organizer
    Led organization and execution of the flagship campus TEDx event.

💻  GirlScript Summer of Code 2024 (Extended)
    Active open-source contributor across multiple repositories.

📚  CGPA 8.9 / 10 — Sri Venkateswara University
    Computer Science & Engineering.
`;

export const recommendations = [
  {
    name: "Chandra Teja Reddy",
    role: "Senior Engineer",
    text: "I had the pleasure of working with Afroze, a talented Frontend Developer with a great eye for detail and a strong sense of design. She excels at turning ideas into clean, responsive, and user-friendly web interfaces. Afroze is not just technically sound but also a great team player. She quickly understands requirements and ensures seamless collaboration between design and development. Her ability to troubleshoot issues and optimize frontend performance is truly commendable. If you're looking for a skilled and dedicated frontend developer, Afroze is an excellent choice.",
  },
  {
    name: "Trived Chinchula",
    role: "Mentor · Travel-tech Startup",
    text: "I had the privilege of mentoring Afroze in frontend development while working on a travel industry startup application. From the start, she demonstrated a strong willingness to learn, quickly grasping React, JavaScript, and UI/UX best practices. She showed impressive problem-solving skills and an ability to translate complex business requirements into seamless user experiences. Beyond technical skills, Afroze is a great collaborator, always open to feedback and committed to continuous improvement.",
  },
  {
    name: "Tejasri Taral",
    role: "Project Maintainer · GSSOC'24",
    text: "I had the pleasure of working with Afroze during GSSOC'24 Extd, where she contributed to my project as an open-source contributor. She worked actively on frontend development, delivering clean, efficient, and well-structured code. Afroze demonstrated strong UI development skills, attention to detail, and a keen willingness to learn. Her proactive approach and growth mindset made her a valuable asset to the project.",
  },
  {
    name: "Swanith Pidugu",
    role: "Co-developer · AgroNexus & PortfolioGen",
    text: "I had the pleasure of studying and working alongside Afroze, collaborating on AgroNexus (which won us a hackathon) and PortfolioGen. Afroze is an exceptional software developer with a strong problem-solving mindset and deep expertise in MongoDB, Express.js, React, and Node.js. She excels at building scalable, high-performance applications with a keen eye for UI/UX. Highly adaptable, proactive, and collaborative — she would be an invaluable asset to any team.",
  },
  {
    name: "Pooja Gupta Rastogi",
    role: "Mentor",
    text: "I've had the pleasure of mentoring Afroze. She is hardworking and dedicated with a strong growth mindset. What sets her apart is her ability to apply knowledge effectively, converting it into intelligence and impact. Afroze demonstrates grit and perseverance — she challenges herself to implement what she learns in real-world scenarios. Her commitment to continuous improvement and adaptability make her a valuable asset to any team.",
  },
  {
    name: "Asif Shaik",
    role: "Peer",
    text: "Afroze is a highly motivated and enthusiastic individual. Her passion for learning is evident in her active participation in hackathons, where she consistently demonstrates problem-solving skills and creativity. She is knowledgeable in development, patient and diligent in refining her skills. Her eagerness to learn and ability to collaborate make her a valuable asset to any team.",
  },
];
