"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  sector: string;
  title: string;
  statPill: string;
  challenge: string;
  deployed: string;
  outcomes: string[];
  visualImg: string;
  visualAlt: string;
  visualTag: string;
  themeClass: string;
}

const cases: CaseStudy[] = [
  {
    id: "fortanixor",
    name: "Fortanixor",
    tagline: "Zero-Trust & FIDO2 Enterprise Auth",
    sector: "Cybersecurity & Enterprise Technology",
    title:
      "Accelerating enterprise pipeline generation for next-gen security solutions",
    statPill: "🛡️ 100% Zero-Trust Compliance • 14-Day Launch",
    challenge:
      "Fortanixor needed to reach enterprise accounts and book high-intent security leadership meetings without adding fixed headcount ahead of key growth milestones.",
    deployed:
      "A dedicated outbound SDR pod backed by targeted account research and multi-channel executive outreach, by email and LinkedIn, tailored to CISOs and IT Directors.",
    outcomes: [
      "A repeatable outbound motion running shortly after launch",
      "Qualified enterprise discovery meetings across target territories",
      "Lower cost per qualified opportunity than traditional in-house hiring",
    ],
    visualImg:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    visualAlt: "Cybersecurity and SaaS technology team collaborating on laptop",
    visualTag: "Next-Gen Cybersecurity Outreach",
    themeClass: "panel--fortanixor",
  },
  {
    id: "najoomi",
    name: "Najoomi",
    tagline: "Omnichannel Conversational AI",
    sector: "Digital Platform & AI Technology Services",
    title: "Building a scalable B2B acquisition engine from the ground up",
    statPill: "⚡ 3.8x Meeting Pipeline Velocity",
    challenge:
      "Najoomi wanted to grow its commercial footprint quickly and turn market interest into structured, predictable B2B sales conversations.",
    deployed:
      "An end-to-end go-to-market workflow: structured CRM pipeline stages, refined ICP segmentation and dedicated sales specialists to qualify and nurture inbound and outbound leads.",
    outcomes: [
      "A clean, trackable funnel with full visibility from first touch to close",
      "Faster lead response and qualification times",
      "A consistent monthly cadence of qualified sales opportunities",
    ],
    visualImg:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    visualAlt:
      "Digital platform and technology services team in modern office with laptops",
    visualTag: "Predictable B2B Funnel Scale",
    themeClass: "panel--najoomi",
  },
  {
    id: "keystone",
    name: "Keystone",
    tagline: "Enterprise Advisory & Solutions",
    sector: "Enterprise Advisory & Business Solutions",
    title:
      "Unlocking new market verticals through targeted outbound execution",
    statPill: "🎯 4 New Enterprise Verticals Booked",
    challenge:
      "Keystone's leadership was spending too much time prospecting and qualifying early-stage leads instead of focusing on high-value client delivery and closing.",
    deployed:
      "An embedded Sales-as-a-Service pod that took over top-of-funnel account mapping, outreach sequencing and initial discovery qualification.",
    outcomes: [
      "Senior partners freed up to focus strictly on closing",
      "Pipeline coverage expanded into new industry verticals",
      "A steady stream of sales-qualified appointments on executive calendars",
    ],
    visualImg:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    visualAlt: "Enterprise advisory corporate business center",
    visualTag: "Enterprise Advisory Expansion",
    themeClass: "panel--keystone",
  },
  {
    id: "accelerec",
    name: "Accelerec",
    tagline: "AI Recruitment & ATS Platform",
    sector: "Recruitment Tech & HR Solutions",
    title:
      "Driving high-velocity B2B customer acquisition in a competitive market",
    statPill: "🚀 Up to 60% Lower Acquisition Cost",
    challenge:
      "In a fast-moving talent and recruitment market, Accelerec needed an agile sales team for high-volume, personalized outreach to HR leaders and hiring managers.",
    deployed:
      "A high-velocity outbound pod combining intent-based prospect targeting, tailored messaging sequences and rapid follow-up workflows.",
    outcomes: [
      "Full outbound operations ramped within the first weeks of launch",
      "Strong positive reply rates from HR and talent-acquisition decision-makers",
      "A predictable, scalable pipeline supporting recurring revenue targets",
    ],
    visualImg:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
    visualAlt:
      "Talent acquisition and HR tech specialist working on laptop in modern office",
    visualTag: "High-Velocity Talent Acquisition",
    themeClass: "panel--accelerec",
  },
];

// Authentic Client Brand Logos
function ClientBrandLogo({
  id,
  context,
}: {
  id: string;
  context: "tab" | "panel";
}) {
  switch (id) {
    case "fortanixor":
      return (
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Fortanixor Logo"
          style={{
            height: context === "panel" ? "28px" : "24px",
            width: "auto",
            aspectRatio: "5 / 6",
            display: "block",
            flexShrink: 0,
          }}
        >
          <path
            d="M50 115C50 115 10 95 10 50V15L50 5L90 15V50C90 95 50 115 50 115Z"
            fill="#4D79FF"
          />
          <path
            d="M50 105C50 105 18 88 18 50V22L50 14L82 22V50C82 88 50 105 50 105Z"
            fill="#0a0814"
          />
          <circle cx="50" cy="52" r="22" fill="#00BCD4" />
        </svg>
      );
    case "najoomi":
      return (
        <Image
          src={context === "panel" ? "/logos/najoomi-logo-white.png" : "/logos/najoomi-logo.png"}
          alt="Najoomi Official Logo"
          width={context === "panel" ? 110 : 40}
          height={context === "panel" ? 30 : 22}
          style={{
            height: context === "panel" ? "26px" : "18px",
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      );
    case "keystone":
      return (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Keystone Logo"
          style={{
            height: context === "panel" ? "28px" : "24px",
            width: "auto",
            display: "block",
            flexShrink: 0,
          }}
        >
          <path
            d="M22 80V45C22 29.5 34.5 17 50 17C65.5 17 78 29.5 78 45V80H64V45C64 37.3 57.7 31 50 31C42.3 31 36 37.3 36 45V80H22Z"
            fill="#F59E0B"
            opacity="0.45"
          />
          <polygon points="38 15 62 15 57 40 43 40" fill="#F59E0B" />
          <rect x="22" y="76" width="56" height="8" rx="2" fill="#F59E0B" />
        </svg>
      );
    case "accelerec":
      return (
        <Image
          src={context === "panel" ? "/logos/accelerec-logo-white.png" : "/logos/accelerec-logo.png"}
          alt="Accelerec Official Logo"
          width={context === "panel" ? 115 : 40}
          height={context === "panel" ? 30 : 22}
          style={{
            height: context === "panel" ? "26px" : "18px",
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      );
    default:
      return null;
  }
}

export default function ClientImpact() {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      nextIndex = (index + 1) % cases.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      nextIndex = (index - 1 + cases.length) % cases.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = cases.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveTab(nextIndex);
  };

  return (
    <section className="section section--mist" id="client-impact">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow-badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <span>Verified Customer Results</span>
          </div>
          <h2>Real partners. Real pipeline. Real results.</h2>
          <p>
            See how AFA Technologies helps high-growth tech companies turn outbound
            into an accountable, multi-region revenue channel.
          </p>
        </div>

        <div className="cases reveal">
          <div className="tablist" role="tablist" aria-label="Client case studies">
            {cases.map((c, i) => (
              <button
                key={c.id}
                className={`tab tab--${c.id}`}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={activeTab === i}
                aria-controls={`panel-${c.id}`}
                tabIndex={activeTab === i ? 0 : -1}
                onClick={() => setActiveTab(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                <div className="tab-logo-box" aria-hidden="true">
                  <ClientBrandLogo id={c.id} context="tab" />
                </div>
                <div className="tab-info">
                  <b>{c.name}</b>
                  <span>{c.sector}</span>
                </div>
              </button>
            ))}
          </div>

          <div>
            {cases.map((c, i) => (
              <article
                key={c.id}
                className={`panel ${c.themeClass}`}
                role="tabpanel"
                id={`panel-${c.id}`}
                aria-labelledby={`tab-${c.id}`}
                hidden={activeTab !== i}
              >
                {/* Dynamic Cyber / Tech Animation Layers */}
                <div className="panel-glow" aria-hidden="true"></div>
                <div className="panel-scanline" aria-hidden="true"></div>
                <div className="panel-border-beam" aria-hidden="true"></div>
                {c.id === "najoomi" && (
                  <div className="panel-orbital-ring" aria-hidden="true"></div>
                )}

                <div className="panel-top-bar">
                  <div className="panel-brand-identity">
                    <div className="panel-logo-wrap">
                      <ClientBrandLogo id={c.id} context="panel" />
                    </div>
                    <div className="panel-brand-meta">
                      <span className="panel-brand-name">{c.name}</span>
                      <span className="panel-brand-tagline">{c.tagline}</span>
                    </div>
                  </div>

                  <div className="panel-meta-badges">
                    <div className="panel-live-beacon">
                      <span className="beacon-dot"></span>
                      <span>Verified Client Results</span>
                    </div>
                    <div className="panel-stat-badge">
                      <span>{c.statPill}</span>
                    </div>
                  </div>
                </div>

                <h3>{c.title}</h3>

                <div className="panel-grid">
                  <div>
                    <h4>The challenge</h4>
                    <p>{c.challenge}</p>
                  </div>
                  <div>
                    <h4>What AFA Technologies deployed</h4>
                    <p>{c.deployed}</p>
                  </div>
                </div>

                <div className="outcome">
                  <h4>The outcome</h4>
                  <ul>
                    {c.outcomes.map((out, idx) => (
                      <li key={idx}>
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M4 10.5l4 4 8-9" />
                        </svg>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="panel-visual">
                  <Image
                    src={c.visualImg}
                    alt={c.visualAlt}
                    width={400}
                    height={340}
                    loading="lazy"
                  />
                  <div className="panel-visual-overlay"></div>
                  <div className="panel-visual-tag">{c.visualTag}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="cases-cta reveal">
          <p>Want results like these?</p>
          <a className="btn btn--navy" href="#contact">
            Book a growth strategy call
          </a>
        </div>
      </div>
    </section>
  );
}
