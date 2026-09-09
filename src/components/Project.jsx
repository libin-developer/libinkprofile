import React, { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { PROJECT } from "../data.js";

export default function Project() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleTilt = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="project" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <span className="section-tag mono">Featured project</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 mb-14" style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 600, maxWidth: "560px" }}>
            {PROJECT.name}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <Reveal className="order-2 md:order-1">
            <div
              ref={cardRef}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="browser-frame"
              style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              <div className="browser-bar">
                <span className="browser-dot" style={{ background: "#E5635B" }} />
                <span className="browser-dot" style={{ background: "#E8B84B" }} />
                <span className="browser-dot" style={{ background: "#5FB07C" }} />
                <span className="mono ml-3" style={{ fontSize: "11px", color: "var(--text-dim)" }}>
                  e-commerce-omega-virid.vercel.app
                </span>
              </div>
              <div style={{ padding: "40px 28px", color: "var(--text-light)" }}>
                <p className="mono" style={{ fontSize: "12px", color: "var(--amber)" }}>
                  MERN STACK
                </p>
                <p style={{ fontSize: "22px", fontFamily: "'Fraunces', serif", marginTop: "8px" }}>
                  Storefront, cart &amp; checkout
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-dim)", marginTop: "10px", lineHeight: 1.7 }}>
                  Product listings · Razorpay payments · reviews · admin controls · dark / light mode
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 md:order-2">
            <p style={{ fontSize: "16.5px", lineHeight: 1.8, color: "var(--text-dark-dim)" }}>{PROJECT.blurb}</p>
            <ul className="mt-6 space-y-3">
              {PROJECT.points.map((p) => (
                <li key={p} className="flex items-start gap-3" style={{ fontSize: "15px", color: "var(--text-dark)" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--amber)", marginTop: "8px", flexShrink: 0 }} />
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-6">
              {PROJECT.stack.map((s) => (
                <span
                  key={s}
                  className="mono"
                  style={{ fontSize: "12px", padding: "5px 10px", border: "1px solid var(--parchment-2)", borderRadius: "3px", color: "var(--text-dark-dim)" }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href={PROJECT.url} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                Live site <ExternalLink size={15} />
              </a>
              <a href={PROJECT.code} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                <Github size={15} /> Code
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
