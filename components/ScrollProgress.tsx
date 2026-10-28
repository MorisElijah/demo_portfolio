"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const maxScroll = scrollHeight - clientHeight;
      setProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-indigo-500 z-50"
    />
  );
}