"use client";

import { useEffect } from "react";

export default function ScrollAnimation() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal, .reveal-scale").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-scale");
    elements.forEach((el) => observer.observe(el));

    // Also observe dynamically in case of client transitions
    const handleMutation = () => {
      const unrevealed = document.querySelectorAll(
        ".reveal:not(.is-visible), .reveal-scale:not(.is-visible)"
      );
      unrevealed.forEach((el) => observer.observe(el));
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
