export const site = {
  name: "Yiğit Turhan",
  shortName: "nyturhan",
  title: "Yiğit Turhan — Software engineer & team lead",
  description:
    "Portfolio of Nahit Yiğit Turhan — software engineer and team lead at TechNarts, working on telecom OSS and network automation.",
  url: "https://www.nyturhan.dev",
  email: "nyturhan@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1Cs-l6Efc0w6fvJLc0hp36aQ5Su6T1oO2/view?usp=sharing",
  tagline: "Software engineer & team lead at TechNarts",
  openToWork: false,
  social: [
    { label: "GitHub", href: "https://github.com/Nyturhan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nyturhan/" },
    { label: "Medium", href: "https://medium.com/@nyturhan" },
    { label: "Email", href: "mailto:nyturhan@gmail.com" },
  ],
} as const;

export type WorkEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  summary: string;
  logo?: string;
};

export const work: WorkEntry[] = [
  {
    role: "Team Lead",
    company: "TechNarts",
    companyUrl: "https://technarts.com",
    date: "Sep 2025 – Present",
    summary:
      "Leading a group of four on RedKit, TechNarts’ zero-touch provisioning and smart configuration platform for multi-vendor transport networks.",
    logo: "/images/technarts.png",
  },
  {
    role: "Software Developer",
    company: "TechNarts",
    companyUrl: "https://technarts.com",
    date: "Jul 2023 – Sep 2025",
    summary:
      "Built and shipped features on STAR Suite, an operator OSS for fault, performance, topology, and inventory. From around June 2025, moved onto RedKit ahead of stepping into the team lead role.",
    logo: "/images/technarts.png",
  },
  {
    role: "Part-time Software Engineer",
    company: "TechNarts",
    companyUrl: "https://technarts.com",
    date: "Feb 2023 – Jul 2023",
    summary:
      "Joined TechNarts part-time while finishing university, contributing to STAR Suite engineering.",
    logo: "/images/technarts.png",
  },
  {
    role: "Software Engineer Intern",
    company: "TÜRKSAT Bilişim",
    date: "Aug 2022 – Sep 2022",
    summary:
      "Helped build an internal fleet-tracking system with a cohort of new hires and interns. The mobile app the intern team delivered is still used by employees day to day.",
    logo: "/images/turksat.png",
  },
];

export type FeaturedProject = {
  name: string;
  eyebrow: string;
  description: string;
  href: string;
  linkLabel: string;
};

export const featured: FeaturedProject[] = [
  {
    name: "RedKit",
    eyebrow: "Leading now",
    description:
      "Zero-touch provisioning and smart configuration for Access Backhaul — automating device onboarding, templates, validation, and work orders across multi-vendor networks. I lead a team of four building and shipping this product.",
    href: "https://technarts.com/solutions/redkit",
    linkLabel: "View RedKit",
  },
  {
    name: "STAR Suite",
    eyebrow: "Feb 2023 – ~Jun 2025",
    description:
      "An operator OSS that makes large networks visible and manageable — correlating alarms with topology, tracking performance and inventory, and giving NOC teams a single source of truth across fiber to RAN.",
    href: "https://technarts.com/solutions/star-suite",
    linkLabel: "View STAR Suite",
  },
];

export const education = {
  school: "Middle East Technical University",
  degree: "Bachelor of Science in Computer Engineering",
  date: "Sep 2018 – Jun 2023",
  note: "Coursework across OOP, cloud computing, and machine learning. Senior project: a machine-learning advisor web app for people who aren’t tech-savvy.",
  logo: "/images/metu.png",
};

export type Achievement = {
  title: string;
  detail: string;
  logo: string;
};

export const achievements: Achievement[] = [
  {
    title: "25th Annual Programming Competition Finalist",
    detail:
      "Qualified for the final round and finished 11th with my team.",
    logo: "/images/cclub.png",
  },
  {
    title: "HUPROG’22 Finalist",
    detail:
      "Top 15 in qualification; finished 11th in the final round.",
    logo: "/images/acm.png",
  },
  {
    title: "KODTÜ3 Top 10",
    detail: "Placed in the top 10 with my team.",
    logo: "/images/cclub.png",
  },
  {
    title: "KODTÜ2 Top 15",
    detail: "Early competitive programming experience; top 15 finish.",
    logo: "/images/cclub.png",
  },
];

export const skills = [
  "Python",
  "Java",
  "C++",
  "Flutter",
  "Django",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
] as const;
