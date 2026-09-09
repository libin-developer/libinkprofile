import React from "react";
import Reveal from "./Reveal.jsx";
import { SOFT_SKILLS } from "../data.js";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Reveal>
            <span className="section-tag mono">About</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3" style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 600 }}>
              Comfortable across the whole stack
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal>
            <p style={{ fontSize: "17px", lineHeight: 1.85, color: "var(--text-dark-dim)" }}>
              I graduated with a B.Com specialising in Computer Applications from Kannur
              University, then spent a focused internship turning that theory into a working
              MERN application. I like the parts of web development other people skip — clean
              API design, sensible auth, and interfaces that don't get in the way — and I'm
              eager to bring that attention to detail to a development team.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
            {SOFT_SKILLS.map((s) => (
              <span key={s} className="soft-chip">
                {s}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
