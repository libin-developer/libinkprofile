import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center" style={{ background: "var(--ink)", borderTop: "1px solid rgba(236,230,216,0.08)" }}>
      <p className="mono" style={{ fontSize: "12.5px", color: "var(--text-dim)" }}>
        © {new Date().getFullYear()} Libin K — built with React
      </p>
    </footer>
  );
}
