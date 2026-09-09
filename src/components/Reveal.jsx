import React from "react";
import { useOnScreen } from "../hooks/useOnScreen.js";

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, visible] = useOnScreen();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
