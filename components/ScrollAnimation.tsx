"use client";

import React, { useEffect } from "react";

export default function ScrollAnimation() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Scroll Progress Bar Update
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      const bar = document.getElementById("scroll-progress-bar");
      if (bar) bar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const selectors = [
      ".reveal",
      ".reveal-scale",
      ".reveal-slide-left",
      ".reveal-slide-right",
      ".reveal-slide-up",
      ".reveal-stagger",
    ].join(", ");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(selectors).forEach((el) => {
        el.classList.add("is-visible");
      });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
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
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08,
      }
    );

    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => observer.observe(el));

    // Observe dynamically created/rendered nodes
    const handleMutation = () => {
      const unrevealed = document.querySelectorAll(
        ".reveal:not(.is-visible), .reveal-scale:not(.is-visible), .reveal-slide-left:not(.is-visible), .reveal-slide-right:not(.is-visible), .reveal-slide-up:not(.is-visible), .reveal-stagger:not(.is-visible)"
      );
      unrevealed.forEach((el) => observer.observe(el));
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      id="scroll-progress-bar"
      className="scroll-progress-bar"
      aria-hidden="true"
    />
  );
}
