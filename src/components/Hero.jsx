import React, { useEffect, useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { ROLES } from "../data.js";
import profilePhoto from "../assets/profile.png";

export default function Hero({ scrollTo }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [gridOffset, setGridOffset] = useState(0);

  /* typewriter effect cycling through roles */
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (typed.length < current.length) {
          setTyped(current.slice(0, typed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else if (typed.length > 0) {
        setTyped(current.slice(0, typed.length - 1));
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIndex]);

  /* subtle parallax on the background grid while scrolling */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setGridOffset(window.scrollY * 0.15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32" style={{ background: "var(--ink)", color: "var(--text-light)" }}>
      <div className="grid-bg" style={{ transform: `translateY(${gridOffset}px)` }} />
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <p className="hero-anim-1 mono" style={{ color: "var(--amber)", fontSize: "14px" }}>
           Kasargod, Kerala
          </p>
          <h1 className="hero-anim-2 mt-4" style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", lineHeight: 1.05, fontWeight: 600 }}>
            Libin K
          </h1>
          <div className="hero-anim-3 mt-4 flex items-center" style={{ minHeight: "34px" }}>
            <span style={{ fontSize: "clamp(1.05rem, 2.4vw, 1.5rem)", color: "var(--text-dim)" }}>{typed}</span>
            <span className="caret" style={{ height: "1.3em" }}></span>
          </div>
          <p className="hero-anim-4 mt-6 max-w-lg" style={{ color: "var(--text-dim)", fontSize: "16px", lineHeight: 1.7 }}>
            A recent B.Com graduate who builds full-stack web applications with the MERN stack —
            from database schema to the pixels on screen — and is looking to join a team that
            ships real products.
          </p>
          <div className="hero-anim-4 mt-9 flex flex-wrap gap-4">
            <button className="btn btn-primary" onClick={() => scrollTo("project")}>
              See the project <ArrowUpRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
              Get in touch
            </button>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="hero-anim-4 relative" style={{ width: "min(280px, 70vw)" }}>
            <div style={{ position: "absolute", inset: "14px -14px -14px 14px", border: "2px solid var(--amber)", borderRadius: "6px" }} />
            <img
              src={profilePhoto}
              alt="Libin K"
              style={{ position: "relative", width: "100%", display: "block", borderRadius: "6px", filter: "grayscale(15%)" }}
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo("about")}
        className="hero-anim-4 hidden md:flex items-center justify-center mx-auto mt-16"
        style={{ color: "var(--text-dim)" }}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} className="animate-bounce" />
      </button>
    </section>
  );
}
