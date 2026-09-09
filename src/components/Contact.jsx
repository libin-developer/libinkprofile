import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { CONTACT } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "var(--ink)", color: "var(--text-light)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <span className="section-tag mono">Contact</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 mx-auto" style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 600, maxWidth: "620px" }}>
            Let's build something together.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 mx-auto" style={{ color: "var(--text-dim)", maxWidth: "480px", fontSize: "16px" }}>
            Open to full-stack developer roles and freelance web projects.
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
            <Mail size={16} /> {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="btn btn-outline">
            <Phone size={16} /> {CONTACT.phone}
          </a>
        </Reveal>
        <Reveal delay={260} className="mt-10 flex justify-center gap-6">
          <a href={CONTACT.github} target="_blank" rel="noreferrer" style={{ color: "var(--text-dim)" }} className="hover:text-white transition-colors">
            <Github size={22} />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--text-dim)" }} className="hover:text-white transition-colors">
            <Linkedin size={22} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
