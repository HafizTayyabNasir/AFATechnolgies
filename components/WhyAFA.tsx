"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export default function WhyAFA() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let width = (canvas.width = section.offsetWidth);
    let height = (canvas.height = section.offsetHeight);

    const mouse: { x: number | null; y: number | null } = { x: null, y: null };

    // High density particle count (dense field of crisp pinpoint stars)
    const count = Math.min(140, Math.max(70, Math.floor((width * height) / 6500)));
    const particles: Particle[] = [];

    const colorPalette = [
      "rgba(0, 225, 255,",   // Saturated Vivid Neon Cyan
      "rgba(0, 162, 255,",   // Saturated Azure Blue
      "rgba(124, 58, 237,",  // Vivid Electric Violet
      "rgba(14, 165, 233,",  // Vibrant Sky Blue
      "rgba(6, 214, 160,",   // Vivid Mint / Teal Cyan
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 0.8 + 0.9, // Crisp, small pinpoint dots (0.9px to 1.7px)
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        alpha: Math.random() * 0.4 + 0.55,
      });
    }

    const maxLineDist = 95;
    const maxMouseDist = 135;

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Connecting Network Constellation Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLineDist) {
            const alpha = (1 - dist / maxLineDist) * 0.28;
            ctx.strokeStyle = `rgba(0, 215, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. Draw Interactive Mouse Connections
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxMouseDist) {
            const alpha = (1 - dist / maxMouseDist) * 0.55;
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
            ctx.lineWidth = 0.95;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // 3. Update & Draw Particles (Crisp Small Pinpoint Dots)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Crisp small pinpoint dot
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently at section borders
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Mouse Tracking for dynamic constellation link
    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    // Resize Handler
    const handleResize = () => {
      if (!section || !canvas) return;
      width = canvas.width = section.offsetWidth;
      height = canvas.height = section.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Pause when scrolled out of view to save CPU/battery
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(section);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section section--navy section-why-particles" id="why-afa" ref={sectionRef}>
      {/* Dynamic Cyber Particles Network Canvas */}
      <canvas ref={canvasRef} className="why-particles-canvas" aria-hidden="true" />

      <div className="wrap why">
        <div className="reveal-slide-left">
          <div className="section-head">
            <h2 style={{ color: "#fff" }}>
              Global standards. Unmatched capital efficiency.
            </h2>
            <p>
              Headquartered in Pakistan and built for international markets, AFA
              Technologies combines university-educated, English-fluent
              commercial talent with Western enterprise sales discipline. Our
              teams work inside your Slack, CRM and calendar, giving you the
              responsiveness of an internal team with the unit economics of a
              global delivery center.
            </p>
          </div>
          <ul className="adv reveal reveal-stagger">
            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12l12-6 12 6-12 6z" />
                <path d="M9 15.5V21c0 2 3.5 4 7 4s7-2 7-4v-5.5" />
              </svg>
              <div>
                <b>English-fluent, university-educated talent</b>
                <span>
                  Commercial professionals trained to sell to Western
                  enterprise buyers.
                </span>
              </div>
            </li>
            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="16" cy="16" r="11" />
                <path d="M16 9v7l5 3" />
              </svg>
              <div>
                <b>Time-zone overlap</b>
                <span>
                  Live coverage synchronized to your target client business hours.
                </span>
              </div>
            </li>
            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4l10 4v8c0 6-4.5 10.5-10 12-5.5-1.5-10-6-10-12V8z" />
                <path d="M11.5 16l3.5 3.5 6-7" />
              </svg>
              <div>
                <b>Enterprise-grade stack and compliance</b>
                <span>
                  HubSpot, Salesforce, secure workflows and proper email
                  deliverability (SPF, DKIM, DMARC).
                </span>
              </div>
            </li>
            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 24l7-8 5 4 10-12" />
                <path d="M20 8h7v7" />
              </svg>
              <div>
                <b>Capital efficiency</b>
                <span>
                  Predictable monthly pod pricing instead of six-figure hires.
                </span>
              </div>
            </li>
          </ul>
        </div>

        <aside className="cover reveal-slide-right" aria-label="Time-zone coverage">
          <h3>One team, three business days covered</h3>
          <p>
            Regional business hours (9 to 6) shown against a 24-hour day in
            Pakistan time.
          </p>
          <div className="cover-grid">
            <div className="cover-row">
              <span>APAC</span>
              <div className="track">
                <div
                  className="bar b-apac"
                  style={{ left: "25%", width: "37.5%" }}
                ></div>
              </div>
            </div>
            <div className="cover-row">
              <span>EMEA</span>
              <div className="track">
                <div className="bar" style={{ left: "54.17%", width: "37.5%" }}></div>
              </div>
            </div>
            <div className="cover-row">
              <span>US East</span>
              <div className="track">
                <div
                  className="bar b-us"
                  style={{ left: "79.17%", width: "20.83%" }}
                ></div>
                <div
                  className="bar b-us"
                  style={{ left: 0, width: "16.67%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="axis">
            <span></span>
            <div>
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
          </div>
          <small>
            Approximate, based on standard time. Pods can be scheduled around the
            hours your buyers are online.
          </small>
          <div className="why-media-card">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="International sales team working collaboratively on laptops in modern corporate workspace"
              width={400}
              height={180}
              loading="lazy"
            />
            <div className="why-media-badge">
              <b>Global Delivery Center</b>
              <span>Western Enterprise Discipline</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
