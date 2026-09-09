import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { SECTIONS } from "../data.js";

export default function Nav({ active, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(20,31,51,0.88)", backdropFilter: "blur(10px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="font-semibold"
          style={{ color: "var(--text-light)", fontFamily: "'Fraunces', serif", fontSize: "19px" }}
        >
          Libin K
        </button>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {SECTIONS.map((s) => (
            <button key={s} onClick={() => handleClick(s)} className={`navlink capitalize ${active === s ? "active" : ""}`}>
              {s}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden"
          style={{ color: "var(--text-light)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-5" style={{ background: "var(--ink)" }}>
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => handleClick(s)}
              className={`navlink capitalize text-left py-2 ${active === s ? "active" : ""}`}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
