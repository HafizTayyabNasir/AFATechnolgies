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

// Custom Client Logos
function ClientLogo({ id }: { id: string }) {
  switch (id) {
    case "fortanixor":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "najoomi":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "keystone":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 20h16M7 20V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12M10 6l2-3 2 3M9 12h6" />
        </svg>
      );
    case "accelerec":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
        </svg>
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
                <div className="tab-icon-wrap" aria-hidden="true">
                  <ClientLogo id={c.id} />
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
                <div className="panel-glow" aria-hidden="true"></div>

                <div className="panel-top-bar">
                  <div className="panel-brand-pill">
                    <ClientLogo id={c.id} />
                    <span>{c.name} &bull; {c.tagline}</span>
                  </div>
                  <div className="panel-stat-badge">
                    <span>{c.statPill}</span>
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
