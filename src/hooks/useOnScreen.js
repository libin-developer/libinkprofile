import { useEffect, useRef, useState } from "react";

export function useOnScreen(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.unobserve(node);
      }
    }, options || { threshold: 0.2 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return [ref, visible];
}
