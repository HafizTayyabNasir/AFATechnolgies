"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CaseStudy {
  id: string;
  name: string;
  sector: string;
  title: string;
  challenge: string;
  deployed: string;
  outcomes: string[];
  visualImg: string;
  visualAlt: string;
  visualTag: string;
}

const cases: CaseStudy[] = [
  {
    id: "fortanixor",
    name: "Fortanixor",
    sector: "Cybersecurity and enterprise technology",
    title:
      "Accelerating enterprise pipeline generation for next-gen security solutions",
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
  },
  {
    id: "najoomi",
    name: "Najoomi",
    sector: "Digital platform and technology services",
    title: "Building a scalable B2B acquisition engine from the ground up",
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
  },
  {
    id: "keystone",
    name: "Keystone",
    sector: "Enterprise advisory and business solutions",
    title:
      "Unlocking new market verticals through targeted outbound execution",
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
  },
  {
    id: "accelerec",
    name: "Accelerec",
    sector: "Recruitment tech and HR solutions",
    title:
      "Driving high-velocity B2B customer acquisition in a competitive market",
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
  },
];

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
    <section className="section" id="client-impact">
      <div className="wrap">
        <div className="section-head">
          <h2>Real partners. Real pipeline. Real results.</h2>
          <p>
            See how AFA Technologies helps high-growth companies turn outbound
            into a reliable revenue channel.
          </p>
        </div>
        <div className="cases">
          <div className="tablist" role="tablist" aria-label="Client case studies">
            {cases.map((c, i) => (
              <button
                key={c.id}
                className="tab"
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={activeTab === i}
                aria-controls={`panel-${c.id}`}
                tabIndex={activeTab === i ? 0 : -1}
                onClick={() => setActiveTab(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                <b>{c.name}</b>
                <span>{c.sector}</span>
              </button>
            ))}
          </div>

          <div>
            {cases.map((c, i) => (
              <article
                key={c.id}
                className="panel"
                role="tabpanel"
                id={`panel-${c.id}`}
                aria-labelledby={`tab-${c.id}`}
                hidden={activeTab !== i}
              >
                <span className="panel-sector">{c.sector}</span>
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
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 10.5l4 4 8-9" />
                        </svg>
                        {out}
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

        <div className="cases-cta">
          <p>Want results like these?</p>
          <a className="btn btn--navy" href="#contact">
            Book a growth strategy call
          </a>
        </div>
      </div>
    </section>
  );
}
