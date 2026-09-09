import React from "react";
import Reveal from "./Reveal.jsx";
import { SKILL_GROUPS } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32" style={{ background: "var(--ink)", color: "var(--text-light)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <span className="section-tag mono">Skills</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 mb-14" style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 600 }}>
            What I build with
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 90}>
              <h3 style={{ fontSize: "14px", color: "var(--amber)", fontWeight: 600 }} className="mono mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
