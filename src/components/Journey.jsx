import React from "react";
import { GraduationCap, Award } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { JOURNEY, CERTIFICATIONS } from "../data.js";

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32" style={{ background: "var(--parchment-2)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-14">
        <div className="md:col-span-4">
          <Reveal>
            <span className="section-tag mono">Journey</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3" style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 600 }}>
              Education &amp; experience
            </h2>
          </Reveal>

          <Reveal delay={160} className="mt-12">
            <h3 style={{ fontSize: "14px", color: "var(--amber)", fontWeight: 600 }} className="mono mb-4 flex items-center gap-2">
              <Award size={15} /> CERTIFICATIONS
            </h3>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((c) => (
                <li key={c} style={{ fontSize: "14.5px", color: "var(--text-dark-dim)", lineHeight: 1.6 }}>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="md:col-span-8 relative pl-4">
          <div className="timeline-line" />
          {JOURNEY.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="relative flex gap-6 pb-12 last:pb-0">
              <div className="timeline-dot">
                <GraduationCap size={15} style={{ color: "var(--amber)" }} />
              </div>
              <div>
                <p className="mono" style={{ fontSize: "12.5px", color: "var(--amber)" }}>
                  {item.year}
                </p>
                <p style={{ fontSize: "17px", fontWeight: 600, marginTop: "4px" }}>{item.title}</p>
                <p style={{ fontSize: "14.5px", color: "var(--text-dark-dim)", marginTop: "2px" }}>{item.place}</p>
                {item.detail && (
                  <p style={{ fontSize: "14.5px", color: "var(--text-dark-dim)", marginTop: "8px", lineHeight: 1.7, maxWidth: "520px" }}>
                    {item.detail}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
