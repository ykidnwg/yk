"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Loader2, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "@/animations/animations";

const contactInfo = [
  { icon: Mail, label: "Email", value: "muhamadwldn22@gmail.com", href: "mailto:muhamadwldn22@gmail.com" },
  { icon: Phone, label: "WhatsApp", value: "082116172809", href: "https://wa.me/6282116172809" },
  { icon: MapPin, label: "Lokasi", value: "Sukabumi, Indonesia", href: "#" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}>
            <span className="section-tag">Let&apos;s Work Together</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold mt-3">
            Get In{" "}
            <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-subtext mt-4 max-w-lg mx-auto">
            Punya project atau mau ngobrol? Drop pesan dan saya akan balas secepatnya.
          </motion.p>
          <div className="divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-5">Kontak</h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-200">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-subtext text-xs mb-0.5">{info.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-secondary animate-ping opacity-60"></div>
                </div>
                <p className="text-secondary font-semibold text-sm">Available for Work</p>
              </div>
              <p className="text-subtext text-sm leading-relaxed">
                Terbuka untuk proyek freelance, kolaborasi, atau full-time. Respon dalam 24 jam.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Pesan Terkirim!</h3>
                  <p className="text-subtext max-w-sm">
                    Makasih udah ngehubungin. Saya akan balas secepatnya.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-subtext">
                        Nama <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-subtext">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-subtext">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="form-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-subtext">
                      Pesan <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cerita tentang project kamu..."
                      className="form-input resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Kirim Pesan
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
