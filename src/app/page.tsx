"use client";

import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Cpu,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  Terminal,
  Wifi,
  Workflow,
  X,
} from "lucide-react";

type Category = "All" | "Web" | "AI & Automation" | "IoT";

type Project = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  category: Exclude<Category, "All">;
  tags: string[];
  status: string;
  visual: "ykflow" | "imah" | "doorbell" | "studio";
  href?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "YKFlow",
    eyebrow: "PERSONAL PRODUCTIVITY",
    description:
      "A personal workspace concept for notes, schedules, and daily finance tracking that keeps everyday tasks organized in one place.",
    category: "Web",
    tags: ["React Native", "Expo", "TypeScript"],
    status: "In development",
    visual: "ykflow",
  },
  {
    number: "02",
    title: "Imah Wangi",
    eyebrow: "DIGITAL SHOPPING EXPERIENCE",
    description:
      "A fragrance catalog featuring product selections, WhatsApp ordering, and an experience for exploring scent combinations.",
    category: "Web",
    tags: ["Next.js", "User experience", "WhatsApp"],
    status: "Project",
    visual: "imah",
    href: "https://github.com/ykidnwg/imah-wangi",
  },
  {
    number: "03",
    title: "LoRa Smart Doorbell",
    eyebrow: "CONNECTED HARDWARE",
    description:
      "A wireless doorbell experiment connecting an ESP32, LoRa SX1278 module, physical button, and remote buzzer.",
    category: "IoT",
    tags: ["ESP32", "LoRa SX1278", "Embedded systems"],
    status: "Hardware experiment",
    visual: "doorbell",
  },
  {
    number: "04",
    title: "AI Social Studio",
    eyebrow: "AI CONTENT WORKFLOW CONCEPT",
    description:
      "An automation concept for organizing AI-assisted content, reviewing creative assets, and planning posts across social media accounts.",
    category: "AI & Automation",
    tags: ["AI workflows", "Content tools", "Otomasi"],
    status: "Concept in development",
    visual: "studio",
  },
];

const filters: Category[] = ["All", "Web", "AI & Automation", "IoT"];

const navLinks = [
  { label: "Project", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "React & Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "AI API integration",
  "PostgreSQL",
  "ESP32 & LoRa",
];

function ProjectArtwork({ project }: { project: Project }) {
  if (project.visual === "ykflow") {
    return (
      <div className="project-art art-ykflow" aria-label="YKFlow interface illustration">
        <div className="mini-dashboard">
          <aside className="mini-sidebar">
            <span className="mini-logo">yk.</span>
            <span className="mini-sidebar-dot active" />
            <span className="mini-sidebar-dot" />
            <span className="mini-sidebar-dot" />
            <span className="mini-sidebar-dot" />
          </aside>
          <div className="mini-dash-main">
            <div className="mini-dash-top">
              <span>Good morning, Wildan</span>
              <span className="mini-avatar">W</span>
            </div>
            <div className="mini-dash-heading">Your space, more organized.</div>
            <div className="mini-metric-row">
              <div className="mini-metric">
                <span>Monthly overview</span>
                <strong>Stay on track</strong>
                <i className="metric-line" />
              </div>
              <div className="mini-metric peach-metric">
                <span>Today’s focus</span>
                <strong>One step at a time</strong>
                <i className="metric-bubble" />
              </div>
            </div>
            <div className="mini-task">
              <span className="task-check"><Check size={10} /></span>
              <span>Review weekly goals</span>
              <small>Today</small>
            </div>
            <div className="mini-task">
              <span className="task-check muted-check" />
              <span>Plan the next project</span>
              <small>Later</small>
            </div>
          </div>
        </div>
        <span className="art-caption">PERSONAL SYSTEMS / 001</span>
      </div>
    );
  }

  if (project.visual === "imah") {
    return (
      <div className="project-art art-imah" aria-label="Perfume bottle illustration">
        <div className="imah-copy">
          <span>NIKMATI AROMA.</span>
          <strong>IMAH<br />WANGI</strong>
          <small>Find a scent that feels like you.</small>
        </div>
        <div className="perfume-shadow" />
        <div className="perfume-bottle">
          <div className="perfume-cap" />
          <div className="perfume-neck" />
          <div className="perfume-body">
            <span>IW</span>
            <small>EAU DE PARFUM</small>
          </div>
        </div>
        <span className="imah-sun" />
        <span className="art-caption">DIGITAL COMMERCE / 002</span>
      </div>
    );
  }

  if (project.visual === "doorbell") {
    return (
      <div className="project-art art-doorbell" aria-label="Wireless doorbell system illustration">
        <div className="circuit-grid" />
        <div className="circuit-ring ring-outer" />
        <div className="circuit-ring ring-inner" />
        <div className="chip-core"><Cpu size={36} strokeWidth={1.25} /></div>
        <div className="signal-node node-one"><Wifi size={15} /></div>
        <div className="signal-node node-two"><span /></div>
        <div className="signal-node node-three"><span /></div>
        <div className="signal-label label-one">ESP32</div>
        <div className="signal-label label-two">SX1278</div>
        <div className="signal-label label-three">LONG RANGE</div>
        <span className="art-caption">CONNECTED DEVICES / 003</span>
      </div>
    );
  }

  return (
    <div className="project-art art-studio" aria-label="AI-assisted content workflow illustration">
      <div className="studio-orbit orbit-one" />
      <div className="studio-orbit orbit-two" />
      <div className="studio-center"><Sparkles size={32} strokeWidth={1.3} /></div>
      <div className="studio-card studio-card-a">
        <span className="studio-card-icon"><Bot size={15} /></span>
        <span><strong>Draf siap</strong><small>Takarir · ID</small></span>
        <span className="studio-check"><Check size={12} /></span>
      </div>
      <div className="studio-card studio-card-b">
        <span className="studio-thumb" />
        <span><strong>Review creative</strong><small>Menunggu persetujuan</small></span>
      </div>
      <div className="studio-card studio-card-c">
        <span className="studio-dot" />
        <span><strong>Schedule post</strong><small>Berikutnya · 18.30</small></span>
      </div>
      <span className="art-caption">ALUR KERJA BERBANTUAN AI / 004</span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className={"project-card project-card-" + project.visual}
    >
      <ProjectArtwork project={project} />
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.eyebrow}</span>
          <span className="project-number">{project.number}</span>
        </div>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          {project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer" className="project-open" aria-label={"Open " + project.title + " source repository"}>
              <ArrowUpRight size={19} />
            </a>
          ) : (
            <span className="project-open project-open-static" aria-hidden="true"><ArrowDownRight size={19} /></span>
          )}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-card-footer">
          <span className="project-status"><span />{project.status}</span>
          {project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer" className="text-link">
              View project <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="muted-note">Detail menyusul</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = projects.filter((project) => activeFilter === "All" || project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="portfolio-shell">
        <div className="top-progress" aria-hidden="true" />
        <header className="site-header">
          <div className="nav-inner">
            <a className="wordmark" href="#home" onClick={closeMenu} aria-label="ykidnwg home">
              <span className="wordmark-symbol">y</span>
              <span>ykidnwg<span className="wordmark-period">.</span></span>
            </a>
            <nav className="desktop-nav" aria-label="Main navigation">
              {navLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
            </nav>
            <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                className="mobile-nav"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}<ArrowUpRight size={17} /></a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <section className="hero-section" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } }}
            >
              <motion.div className="eyebrow hero-eyebrow" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                <span className="eyebrow-dot" /> CREATIVE DEVELOPER <span className="eyebrow-divider">/</span> SUKABUMI, ID
              </motion.div>
              <motion.h1 variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}>
                Creating with intention.<br />
                <span className="hero-title-accent">Built to feel</span><br />
                <span className="hero-title-italic">berbeda.</span>
              </motion.h1>
              <motion.p className="hero-description" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                I build digital experiences that bring together frontend development, AI, and practical tools for everyday life. Thoughtful interfaces, useful ideas, and curiosity in every detail.
              </motion.p>
              <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                <a className="button-primary" href="#work">Explore projects <ArrowDownRight size={17} /></a>
                <a className="button-quiet" href="#about">About me <ArrowRight size={16} /></a>
              </motion.div>
              <motion.div className="hero-socials" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <span>FIND ME ON</span>
                <a href="https://github.com/ykidnwg" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
                <a href="https://www.linkedin.com/in/ykidnwg/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
                <a href="mailto:muhamadwldn22@gmail.com" aria-label="Email"><Mail size={17} /></a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-art"
              initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              aria-label="Ilustrasi abstrak pengembang kreatif"
            >
              <div className="hero-art-wash" />
              <div className="hero-orbit hero-orbit-a" />
              <div className="hero-orbit hero-orbit-b" />
              <div className="hero-sun" />
              <div className="hero-letter">y<span>.</span></div>
              <motion.div className="floating-note note-top" animate={{ y: [0, -7, 0], rotate: [-3, -1, -3] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
                <span className="note-icon"><Code2 size={16} /></span>
                <span><strong>Berpikir desain</strong><small>Detail itu penting</small></span>
              </motion.div>
              <motion.div className="floating-note note-bottom" animate={{ y: [0, 8, 0], rotate: [2, 0, 2] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}>
                <span className="note-spark"><Sparkles size={17} /></span>
                <span><strong>Build & explore</strong><small>One idea at a time</small></span>
              </motion.div>
              <div className="hero-art-label"><span>YK / 26</span><span>INDEPENDENT BY DESIGN</span></div>
            </motion.div>
          </div>
          <a className="hero-scroll" href="#work"><span>SCROLL TO EXPLORE</span><span className="scroll-line"><i /></span></a>
        </section>

        <div className="ticker" aria-label="Design with intention, build with care">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className="ticker-group" key={i}>
                <span>DESIGN WITH INTENTION</span><Sparkles size={15} /><span>BUILD WITH CARE</span><span className="ticker-star">✳</span><span>STAY CURIOUS</span><Code2 size={15} /><span>MAKE IT USEFUL</span><span className="ticker-star">✳</span>
              </div>
            ))}
          </div>
        </div>

        <section className="work-section section-pad" id="work">
          <div className="section-container">
            <motion.div className="section-heading work-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div>
                <span className="section-kicker"><span>01</span> / SELECTED WORK</span>
                <h2>A few things I’m<br />I’m currently <em>building.</em></h2>
              </div>
              <p>A collection of web projects, ongoing experiments, and ideas taking shape. Every project starts with a problem worth solving.</p>
            </motion.div>

            <div className="project-toolbar">
              <div className="project-filters" role="group" aria-label="Filter projects">
                {filters.map((filter) => (
                  <button type="button" key={filter} className={activeFilter === filter ? "filter-pill active" : "filter-pill"} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>
                    {filter}
                  </button>
                ))}
              </div>
              <span className="project-count">{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span>
            </div>

            <motion.div layout className="projects-grid">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
              </AnimatePresence>
            </motion.div>

            <div className="all-work-line">
              <span>You can find more experiments on my GitHub.</span>
              <a href="https://github.com/ykidnwg" target="_blank" rel="noreferrer" className="text-link">Visit GitHub <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="section-container about-layout">
            <motion.div className="about-aside" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-kicker"><span>02</span> / THE PERSON BEHIND THE CODE</span>
              <div className="about-photo-frame"><img src="/images/profile.jpeg" alt="Profile photo of Muhamad Wildan Mubarok" className="about-photo" /><span className="about-photo-caption">YK / PROFILE</span><i>always curious</i></div>
              <div className="about-location"><span className="location-dot" /> BASED IN SUKABUMI, INDONESIA</div>
            </motion.div>
            <motion.div className="about-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2>It’s not just how it looks.<br /><span>It’s how it <em>works.</em></span></h2>
              <p className="about-lead">I’m Muhamad Wildan Mubarok, a developer who enjoys turning early ideas into clear, useful digital products.</p>
              <p className="about-detail">I’m interested in frontend development, AI-powered tools, and systems that connect software with the real world. I aim to understand the problem before writing code, then refine the details until everything feels right.</p>
              <div className="about-principles">
                <div><span>01</span><strong>Keep learning</strong><small>Explore, ask questions, keep learning.</small></div>
                <div><span>02</span><strong>Build with purpose</strong><small>Make every interaction meaningful.</small></div>
                <div><span>03</span><strong>Prioritize usefulness</strong><small>Good technology helps people.</small></div>
              </div>
              <a className="text-link about-github" href="https://github.com/ykidnwg" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a>
            </motion.div>
          </div>
        </section>

        <section className="expertise-section section-pad">
          <div className="section-container expertise-layout">
            <motion.div className="expertise-intro" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-kicker"><span>03</span> / SKILLS & CURIOSITY</span>
              <h2>A toolkit that<br />keeps <em>evolving.</em></h2>
              <p>My toolkit evolves with every project. I enjoy learning the right technology for each problem rather than forcing every idea into the same stack.</p>
            </motion.div>
            <motion.div className="skills-panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              <div className="skills-panel-head"><span>ON MY WORKBENCH</span><span className="live-mark"><i /> ALWAYS LEARNING</span></div>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={skill}>
                    <span className="skill-icon">
                      {index < 3 ? <Code2 size={17} /> : index === 3 || index === 4 ? <Terminal size={17} /> : index === 5 ? <Bot size={17} /> : index === 6 ? <Layers3 size={17} /> : <Cpu size={17} />}
                    </span>
                    <span>{skill}</span>
                    <ArrowUpRight size={14} className="skill-arrow" />
                  </div>
                ))}
              </div>
              <div className="skills-footnote"><Sparkles size={15} /><span>Choose technology for the problem — not just the trend.</span></div>
            </motion.div>
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="section-container">
            <motion.div className="section-heading process-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div>
                <span className="section-kicker"><span>04</span> / HOW I BUILD</span>
                <h2>Small steps.<br /><em>Thoughtful results</em> </h2>
              </div>
              <p>A simple process keeps the work focused, leaves room to experiment, and gives every decision a purpose.</p>
            </motion.div>
            <div className="process-grid">
              <motion.article className="process-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.03 }}>
                <div className="process-card-top"><span>01 / UNDERSTAND</span><span className="process-symbol"><Sparkles size={20} /></span></div>
                <h3>Start with<br /><em>the why.</em></h3>
                <p>Understand the user, the context, and what success should actually look like before jumping into implementation.</p>
                <div className="process-line"><i /></div>
              </motion.article>
              <motion.article className="process-card process-card-accent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
                <div className="process-card-top"><span>02 / EXPLORE</span><span className="process-symbol"><Workflow size={20} /></span></div>
                <h3>Make room<br />for <em>ideas.</em></h3>
                <p>Shape a clear direction, test the risky bits early, and keep the experience simple enough to use.</p>
                <div className="process-line"><i /></div>
              </motion.article>
              <motion.article className="process-card process-card-dark" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.21 }}>
                <div className="process-card-top"><span>03 / BUILD</span><span className="process-symbol"><Code2 size={20} /></span></div>
                <h3>Build.<br /><em>Refine.</em></h3>
                <p>Build in small, testable steps, then refine the details until the product feels cohesive and reliable.</p>
                <div className="process-line"><i /></div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-shape contact-shape-a" aria-hidden="true" />
          <div className="contact-shape contact-shape-b" aria-hidden="true" />
          <div className="section-container contact-content">
            <motion.span className="section-kicker contact-kicker" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><span>05</span> / HAVE AN IDEA OR PROJECT?</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>Let’s make<br /><em>good things</em> happen.</motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>Have a project, an idea, or want to talk tech? I’d love to hear from you.</motion.p>
            <motion.a className="contact-button" href="mailto:muhamadwldn22@gmail.com" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}>Say hello <ArrowUpRight size={18} /></motion.a>
            <div className="contact-bottom">
              <a href="mailto:muhamadwldn22@gmail.com"><Mail size={15} /> muhamadwldn22@gmail.com</a>
              <span>OPEN TO CONVERSATIONS</span>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="section-container footer-inner">
            <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-symbol">y</span><span>ykidnwg<span className="wordmark-period">.</span></span></a>
            <span className="footer-note">Made with curiosity, coffee, and attention to detail.</span>
            <div className="footer-links">
              <a href="https://github.com/ykidnwg" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href="https://www.linkedin.com/in/ykidnwg/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href="mailto:muhamadwldn22@gmail.com" aria-label="Email"><Mail size={17} /></a>
            </div>
            <span className="footer-year">© 2026 YKIDNWG</span>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
