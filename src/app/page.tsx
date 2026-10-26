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

type Category = "Semua" | "Web" | "AI & Otomasi" | "IoT";

type Project = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  category: Exclude<Category, "Semua">;
  tags: string[];
  status: string;
  visual: "ykflow" | "imah" | "doorbell" | "studio";
  href?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "YKFlow",
    eyebrow: "PRODUKTIVITAS PERSONAL",
    description:
      "Konsep ruang kerja personal untuk catatan, jadwal, dan pencatatan keuangan harian agar berbagai kebutuhan tetap tertata di satu tempat.",
    category: "Web",
    tags: ["React Native", "Expo", "TypeScript"],
    status: "Dalam pengembangan",
    visual: "ykflow",
  },
  {
    number: "02",
    title: "Imah Wangi",
    eyebrow: "PENGALAMAN TOKO DIGITAL",
    description:
      "Katalog parfum dengan pilihan beberapa produk, pemesanan melalui WhatsApp, dan fitur eksplorasi racikan aroma.",
    category: "Web",
    tags: ["Next.js", "Pengalaman pengguna", "WhatsApp"],
    status: "Proyek",
    visual: "imah",
    href: "https://github.com/ykidnwg/imah-wangi",
  },
  {
    number: "03",
    title: "LoRa Smart Doorbell",
    eyebrow: "PERANGKAT KERAS TERHUBUNG",
    description:
      "Eksperimen bel pintu nirkabel yang menghubungkan ESP32, modul LoRa SX1278, tombol fisik, dan buzzer jarak jauh.",
    category: "IoT",
    tags: ["ESP32", "LoRa SX1278", "Sistem tertanam"],
    status: "Eksperimen perangkat keras",
    visual: "doorbell",
  },
  {
    number: "04",
    title: "AI Social Studio",
    eyebrow: "KONSEP ALUR KERJA KONTEN",
    description:
      "Konsep otomasi untuk mengatur konten berbantuan AI, meninjau materi kreatif, dan merencanakan unggahan berbagai akun media sosial.",
    category: "AI & Otomasi",
    tags: ["Alur AI", "Alat konten", "Otomasi"],
    status: "Konsep dalam pengembangan",
    visual: "studio",
  },
];

const filters: Category[] = ["All", "Web", "AI & Otomasi", "IoT"];

const navLinks = [
  { label: "Proyek", href: "#work" },
  { label: "Tentang", href: "#about" },
  { label: "Proses", href: "#process" },
  { label: "Kontak", href: "#contact" },
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
      <div className="project-art art-ykflow" aria-label="Ilustrasi antarmuka YKFlow">
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
              <span>Selamat pagi, Wildan</span>
              <span className="mini-avatar">W</span>
            </div>
            <div className="mini-dash-heading">Ruangmu, lebih tertata.</div>
            <div className="mini-metric-row">
              <div className="mini-metric">
                <span>Ringkasan bulanan</span>
                <strong>Tetap terarah</strong>
                <i className="metric-line" />
              </div>
              <div className="mini-metric peach-metric">
                <span>Fokus hari ini</span>
                <strong>Satu per satu</strong>
                <i className="metric-bubble" />
              </div>
            </div>
            <div className="mini-task">
              <span className="task-check"><Check size={10} /></span>
              <span>Tinjau target mingguan</span>
              <small>Hari ini</small>
            </div>
            <div className="mini-task">
              <span className="task-check muted-check" />
              <span>Rencanakan proyek berikutnya</span>
              <small>Nanti</small>
            </div>
          </div>
        </div>
        <span className="art-caption">PERSONAL SYSTEMS / 001</span>
      </div>
    );
  }

  if (project.visual === "imah") {
    return (
      <div className="project-art art-imah" aria-label="Ilustrasi botol parfum">
        <div className="imah-copy">
          <span>NIKMATI AROMA.</span>
          <strong>IMAH<br />WANGI</strong>
          <small>Temukan aroma yang terasa seperti dirimu.</small>
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
        <span className="art-caption">NIAGA DIGITAL / 002</span>
      </div>
    );
  }

  if (project.visual === "doorbell") {
    return (
      <div className="project-art art-doorbell" aria-label="Ilustrasi sistem bel pintu nirkabel">
        <div className="circuit-grid" />
        <div className="circuit-ring ring-outer" />
        <div className="circuit-ring ring-inner" />
        <div className="chip-core"><Cpu size={36} strokeWidth={1.25} /></div>
        <div className="signal-node node-one"><Wifi size={15} /></div>
        <div className="signal-node node-two"><span /></div>
        <div className="signal-node node-three"><span /></div>
        <div className="signal-label label-one">ESP32</div>
        <div className="signal-label label-two">SX1278</div>
        <div className="signal-label label-three">JARAK JAUH</div>
        <span className="art-caption">PERANGKAT TERHUBUNG / 003</span>
      </div>
    );
  }

  return (
    <div className="project-art art-studio" aria-label="Ilustrasi alur kerja konten berbantuan AI">
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
        <span><strong>Tinjau materi</strong><small>Menunggu persetujuan</small></span>
      </div>
      <div className="studio-card studio-card-c">
        <span className="studio-dot" />
        <span><strong>Jadwalkan</strong><small>Berikutnya · 18.30</small></span>
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
            <a href={project.href} target="_blank" rel="noreferrer" className="project-open" aria-label={"Open " + project.title + " repositori sumber"}>
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
              Lihat proyek <ArrowUpRight size={14} />
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
  const [activeFilter, setActiveFilter] = useState<Category>("Semua");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = projects.filter((project) => activeFilter === "Semua" || project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="portfolio-shell">
        <div className="top-progress" aria-hidden="true" />
        <header className="site-header">
          <div className="nav-inner">
            <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Beranda ykidnwg">
              <span className="wordmark-symbol">y</span>
              <span>ykidnwg<span className="wordmark-period">.</span></span>
            </a>
            <nav className="desktop-nav" aria-label="Navigasi utama">
              {navLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
            </nav>
            <a className="nav-cta" href="#contact">Mari berbincang <ArrowUpRight size={15} /></a>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={menuOpen}>
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
                aria-label="Navigasi seluler"
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
                <span className="eyebrow-dot" /> PENGEMBANG KREATIF <span className="eyebrow-divider">/</span> SUKABUMI, ID
              </motion.div>
              <motion.h1 variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}>
                Berkarya dengan tujuan.<br />
                <span className="hero-title-accent">Dibuat agar terasa</span><br />
                <span className="hero-title-italic">berbeda.</span>
              </motion.h1>
              <motion.p className="hero-description" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                Saya membangun pengalaman digital yang memadukan pengembangan frontend, AI, dan alat praktis untuk keseharian. Antarmuka yang matang, ide yang berguna, dan rasa ingin tahu dalam setiap detail.
              </motion.p>
              <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                <a className="button-primary" href="#work">Jelajahi proyek <ArrowDownRight size={17} /></a>
                <a className="button-quiet" href="#about">Tentang saya <ArrowRight size={16} /></a>
              </motion.div>
              <motion.div className="hero-socials" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <span>TEMUKAN SAYA DI</span>
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
                <span><strong>Bangun & jelajahi</strong><small>Satu ide setiap saat</small></span>
              </motion.div>
              <div className="hero-art-label"><span>YK / 26</span><span>MANDIRI DALAM BERKARYA</span></div>
            </motion.div>
          </div>
          <a className="hero-scroll" href="#work"><span>GULIR UNTUK MENJELAJAH</span><span className="scroll-line"><i /></span></a>
        </section>

        <div className="ticker" aria-label="Design with intention, build with care">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className="ticker-group" key={i}>
                <span>DESAIN DENGAN TUJUAN</span><Sparkles size={15} /><span>BANGUN DENGAN TELITI</span><span className="ticker-star">✳</span><span>TERUS PENUH RASA INGIN TAHU</span><Code2 size={15} /><span>BUAT AGAR BERMANFAAT</span><span className="ticker-star">✳</span>
              </div>
            ))}
          </div>
        </div>

        <section className="work-section section-pad" id="work">
          <div className="section-container">
            <motion.div className="section-heading work-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div>
                <span className="section-kicker"><span>01</span> / PROYEK PILIHAN</span>
                <h2>Beberapa hal yang<br />sedang saya <em>bangun.</em></h2>
              </div>
              <p>Kumpulan proyek web, eksperimen yang masih berjalan, dan ide yang sedang saya wujudkan. Setiap proyek dimulai dari masalah yang layak diselesaikan.</p>
            </motion.div>

            <div className="project-toolbar">
              <div className="project-filters" role="group" aria-label="Filter proyek">
                {filters.map((filter) => (
                  <button type="button" key={filter} className={activeFilter === filter ? "filter-pill active" : "filter-pill"} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>
                    {filter}
                  </button>
                ))}
              </div>
              <span className="project-count">{String(visibleProjects.length).padStart(2, "0")} PROYEK</span>
            </div>

            <motion.div layout className="projects-grid">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
              </AnimatePresence>
            </motion.div>

            <div className="all-work-line">
              <span>Eksperimen lainnya bisa kamu lihat di GitHub saya.</span>
              <a href="https://github.com/ykidnwg" target="_blank" rel="noreferrer" className="text-link">Kunjungi GitHub <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="section-container about-layout">
            <motion.div className="about-aside" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-kicker"><span>02</span> / SOSOK DI BALIK KODE</span>
              <div className="about-photo-frame"><img src="/images/profile.jpeg" alt="Foto profil Muhamad Wildan Mubarok" className="about-photo" /><span className="about-photo-caption">YK / PROFIL</span><i>selalu ingin tahu</i></div>
              <div className="about-location"><span className="location-dot" /> BERBASIS DI SUKABUMI, INDONESIA</div>
            </motion.div>
            <motion.div className="about-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2>Bukan hanya soal tampilan.<br /><span>cara ia <em>bekerja.</em></span></h2>
              <p className="about-lead">Saya Muhamad Wildan Mubarok — pengembang yang senang mengubah ide mentah menjadi produk digital yang jelas dan bermanfaat.</p>
              <p className="about-detail">Ketertarikan saya mencakup pengembangan frontend, alat berbantuan AI, dan sistem yang menghubungkan perangkat lunak dengan dunia nyata. Saya berusaha memahami masalahnya sebelum mulai menulis kode, lalu menyempurnakan detail agar semuanya terasa tepat.</p>
              <div className="about-principles">
                <div><span>01</span><strong>Terus belajar</strong><small>Jelajahi, bertanya, terus belajar.</small></div>
                <div><span>02</span><strong>Bangun dengan tujuan</strong><small>Pastikan setiap interaksi punya manfaat.</small></div>
                <div><span>03</span><strong>Utamakan manfaat</strong><small>Teknologi yang baik membantu manusia.</small></div>
              </div>
              <a className="text-link about-github" href="https://github.com/ykidnwg" target="_blank" rel="noreferrer">Lihat lebih banyak di GitHub <ArrowUpRight size={15} /></a>
            </motion.div>
          </div>
        </section>

        <section className="expertise-section section-pad">
          <div className="section-container expertise-layout">
            <motion.div className="expertise-intro" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-kicker"><span>03</span> / KEAHLIAN & RASA INGIN TAHU</span>
              <h2>Perangkat yang<br />terus <em>berkembang.</em></h2>
              <p>Kumpulan teknologi yang terus berkembang di setiap proyek. Saya senang mempelajari teknologi yang sesuai dengan masalah, bukan memaksakan setiap ide menggunakan perangkat yang sama.</p>
            </motion.div>
            <motion.div className="skills-panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              <div className="skills-panel-head"><span>DI MEJA KERJA SAYA</span><span className="live-mark"><i /> TERUS BELAJAR</span></div>
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
              <div className="skills-footnote"><Sparkles size={15} /><span>Teknologi dipilih sesuai kebutuhan — bukan sekadar tren.</span></div>
            </motion.div>
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="section-container">
            <motion.div className="section-heading process-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div>
                <span className="section-kicker"><span>04</span> / CARA SAYA MENGEMBANGKAN PROYEK</span>
                <h2>Langkah kecil.<br /><em>Hasil yang matang</em> </h2>
              </div>
              <p>Proses yang sederhana membuat pekerjaan tetap terarah, memberi ruang untuk bereksperimen, dan membantu setiap keputusan memiliki tujuan.</p>
            </motion.div>
            <div className="process-grid">
              <motion.article className="process-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.03 }}>
                <div className="process-card-top"><span>01 / PAHAMI KEBUTUHAN</span><span className="process-symbol"><Sparkles size={20} /></span></div>
                <h3>Mulai dari<br /><em>alasannya.</em></h3>
                <p>Understand the user, the context, and what success should actually look like before jumping into implementation.</p>
                <div className="process-line"><i /></div>
              </motion.article>
              <motion.article className="process-card process-card-accent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
                <div className="process-card-top"><span>02 / EKSPLORASI</span><span className="process-symbol"><Workflow size={20} /></span></div>
                <h3>Beri ruang<br />untuk <em>ide.</em></h3>
                <p>Shape a clear direction, test the risky bits early, and keep the experience simple enough to use.</p>
                <div className="process-line"><i /></div>
              </motion.article>
              <motion.article className="process-card process-card-dark" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.21 }}>
                <div className="process-card-top"><span>03 / BANGUN</span><span className="process-symbol"><Code2 size={20} /></span></div>
                <h3>Bangun.<br /><em>Sempurnakan.</em></h3>
                <p>Kembangkan dalam langkah kecil yang bisa diuji, lalu poles detail agar produk terasa menyatu dan dapat diandalkan.</p>
                <div className="process-line"><i /></div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-shape contact-shape-a" aria-hidden="true" />
          <div className="contact-shape contact-shape-b" aria-hidden="true" />
          <div className="section-container contact-content">
            <motion.span className="section-kicker contact-kicker" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><span>05</span> / PUNYA IDE ATAU PROYEK?</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>Mari wujudkan<br /><em>hal-hal baik</em> terjadi.</motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>Punya proyek, ide, atau ingin berbincang soal teknologi? Silakan hubungi saya.</motion.p>
            <motion.a className="contact-button" href="mailto:muhamadwldn22@gmail.com" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}>Sapa saya <ArrowUpRight size={18} /></motion.a>
            <div className="contact-bottom">
              <a href="mailto:muhamadwldn22@gmail.com"><Mail size={15} /> muhamadwldn22@gmail.com</a>
              <span>TERBUKA UNTUK DISKUSI</span>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="section-container footer-inner">
            <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-symbol">y</span><span>ykidnwg<span className="wordmark-period">.</span></span></a>
            <span className="footer-note">Dibuat dengan rasa ingin tahu, kopi, dan ketelitian.</span>
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
