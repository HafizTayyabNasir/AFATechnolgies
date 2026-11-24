"use client";

import React, { useState } from "react";

interface FeatureBox {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bgClass: string;
}

interface KanbanLead {
  initials: string;
  avatarBg: string;
  name: string;
  role: string;
  tag: string;
  statusBadge: string;
  statusType: "success" | "active" | "neutral" | "score";
}

interface StatItem {
  val: string;
  label: string;
}

interface ClientCaseData {
  id: string;
  name: string;
  pillLabel: string;
  dotColor: string;
  tintBg: string;
  tintBorder: string;
  eyebrow: string;
  headlineMain: string;
  headlineAccent: string;
  story: string;
  features: FeatureBox[];
  linkText: string;
  mockupTitle: string;
  mockupBanner: string;
  columns: { name: string; count: number }[];
  leads: KanbanLead[];
  stats: StatItem[];
}

const casesData: ClientCaseData[] = [
  {
    id: "fortanixor",
    name: "Fortanixor",
    pillLabel: "Fortanixor Security",
    dotColor: "#00BCD4",
    tintBg: "rgba(0, 188, 212, 0.08)",
    tintBorder: "rgba(0, 188, 212, 0.22)",
    eyebrow: "Zero-Trust & Cybersecurity Pod",
    headlineMain: "Accelerating enterprise pipeline, ",
    headlineAccent: "faster with Zero-Trust.",
    story:
      "Fortanixor needed to reach enterprise accounts and book high-intent security leadership meetings without adding fixed headcount ahead of critical growth milestones. AFA deployed an embedded outbound SDR pod tailored specifically to CISOs and IT Directors.",
    features: [
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <circle cx="11" cy="11" r="3"></circle>
          </svg>
        ),
        title: "Account Mapping",
        desc: "Precision CISO & VP IT target accounts",
        bgClass: "feat-box--purple",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        ),
        title: "Multi-Touch Motion",
        desc: "Tailored executive LinkedIn & email sequences",
        bgClass: "feat-box--green",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        ),
        title: "Zero-Trust Outreach",
        desc: "100% SOC2 & technical compliance messaging",
        bgClass: "feat-box--teal",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        ),
        title: "Meeting Qualification",
        desc: "Pre-vetted executive discovery calls booked",
        bgClass: "feat-box--blue",
      },
    ],
    linkText: "Explore Fortanixor GTM Pod",
    mockupTitle: "AFA Engine • Pipeline Operations • Fortanixor CISO Pod",
    mockupBanner: "✓ 100% Zero-Trust Compliance • 14-Day Pod Launch • 38 Enterprise Accounts Engaged",
    columns: [
      { name: "ENGAGED", count: 38 },
      { name: "DISCOVERY", count: 14 },
      { name: "QUALIFIED", count: 6 },
    ],
    leads: [
      {
        initials: "DV",
        avatarBg: "#0f766e",
        name: "David Vance",
        role: "Chief Information Security Officer",
        tag: "FinTech Scale-Up",
        statusBadge: "Score 98",
        statusType: "score",
      },
      {
        initials: "ER",
        avatarBg: "#4338ca",
        name: "Elena Rostova",
        role: "VP Global Cybersecurity",
        tag: "Enterprise Cloud",
        statusBadge: "Today 3:00 PM",
        statusType: "active",
      },
      {
        initials: "MV",
        avatarBg: "#065f46",
        name: "Marcus Vance",
        role: "Head of Infrastructure & Auth",
        tag: "Global Logistics",
        statusBadge: "Accepted ✓",
        statusType: "success",
      },
      {
        initials: "JB",
        avatarBg: "#1e293b",
        name: "Julian Becker",
        role: "Director Security Architecture",
        tag: "B2B SaaS 5 yr",
        statusBadge: "Score 94",
        statusType: "score",
      },
    ],
    stats: [
      { val: "14 Days", label: "Ramp to First Meetings" },
      { val: "100%", label: "Zero-Trust Compliance" },
      { val: "3 Regions", label: "Simultaneous Time Zones" },
    ],
  },
  {
    id: "najoomi",
    name: "Najoomi",
    pillLabel: "Najoomi AI Platform",
    dotColor: "#a855f7",
    tintBg: "rgba(168, 85, 247, 0.08)",
    tintBorder: "rgba(168, 85, 247, 0.22)",
    eyebrow: "Digital Platform & Conversational AI",
    headlineMain: "Building a scalable B2B acquisition engine, ",
    headlineAccent: "powered by AI velocity.",
    story:
      "Najoomi wanted to turn high market interest into predictable commercial conversations. AFA deployed structured CRM pipeline stages, refined ICP segmentation, and dedicated sales development specialists to qualify and nurture sales pipelines.",
    features: [
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        ),
        title: "ICP Segmentation",
        desc: "Targeted digital platform & enterprise buyers",
        bgClass: "feat-box--purple",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        ),
        title: "CRM Architecture",
        desc: "Full pipeline visibility from touch to close",
        bgClass: "feat-box--green",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 14 14"></polyline>
          </svg>
        ),
        title: "Speed to Lead",
        desc: "Rapid qualification workflows for inbound & outbound",
        bgClass: "feat-box--teal",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        ),
        title: "Predictable Cadence",
        desc: "Consistent monthly qualified sales opportunities",
        bgClass: "feat-box--blue",
      },
    ],
    linkText: "Explore Najoomi Scale Engine",
    mockupTitle: "AFA Engine • Pipeline Operations • Najoomi AI Platform",
    mockupBanner: "✓ 3.8x Meeting Pipeline Velocity • Clean CRM Funnel • 42 Qualified Opportunities",
    columns: [
      { name: "LEADS", count: 94 },
      { name: "QUALIFIED", count: 28 },
      { name: "BOOKED", count: 12 },
    ],
    leads: [
      {
        initials: "AM",
        avatarBg: "#6b21a8",
        name: "Amina Al-Mansoor",
        role: "Head of Digital Customer Experience",
        tag: "Omnichannel Retail",
        statusBadge: "Score 96",
        statusType: "score",
      },
      {
        initials: "TR",
        avatarBg: "#4338ca",
        name: "Tariq Rahmani",
        role: "Chief Technology Officer",
        tag: "Telecom Enterprise",
        statusBadge: "Today 11:30 AM",
        statusType: "active",
      },
      {
        initials: "KZ",
        avatarBg: "#0f766e",
        name: "Kareem Zaheer",
        role: "VP of Operations & Automation",
        tag: "Fintech Platform",
        statusBadge: "Demo Confirmed ✓",
        statusType: "success",
      },
      {
        initials: "SH",
        avatarBg: "#1e293b",
        name: "Sarah Hashmi",
        role: "Director of Enterprise Support",
        tag: "Logistics AI 4 yr",
        statusBadge: "Score 92",
        statusType: "score",
      },
    ],
    stats: [
      { val: "3.8x", label: "Pipeline Velocity Ramp" },
      { val: "42+", label: "Sales Qualified Meetings" },
      { val: "< 24h", label: "Lead Qualification Turnaround" },
    ],
  },
  {
    id: "keystone",
    name: "Keystone",
    pillLabel: "Keystone Advisory",
    dotColor: "#f59e0b",
    tintBg: "rgba(245, 158, 11, 0.08)",
    tintBorder: "rgba(245, 158, 11, 0.22)",
    eyebrow: "Enterprise Advisory & Scale",
    headlineMain: "Unlocking new market verticals, ",
    headlineAccent: "freeing partners to close.",
    story:
      "Keystone's leadership was spending too much valuable time prospecting early-stage leads instead of focusing on high-value client delivery and closing. AFA's embedded Sales pod took over top-of-funnel account mapping and initial discovery qualification.",
    features: [
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        ),
        title: "Vertical Expansion",
        desc: "Penetrated 4 new enterprise market verticals",
        bgClass: "feat-box--purple",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        ),
        title: "Bespoke Sequencing",
        desc: "High-touch C-suite strategic advisory briefs",
        bgClass: "feat-box--green",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m4.93 4.93 4.24 4.24"></path>
            <path d="m14.83 9.17 4.24-4.24"></path>
            <path d="m14.83 14.83 4.24 4.24"></path>
            <path d="m9.17 14.83-4.24 4.24"></path>
          </svg>
        ),
        title: "Partner Time Reclaimed",
        desc: "Senior partners freed up strictly to close",
        bgClass: "feat-box--teal",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        ),
        title: "Calendar Influx",
        desc: "Steady stream of qualified appointments on executive calendars",
        bgClass: "feat-box--blue",
      },
    ],
    linkText: "Explore Keystone Expansion",
    mockupTitle: "AFA Engine • Pipeline Operations • Keystone Advisory Pod",
    mockupBanner: "✓ 4 New Verticals Booked • Senior Partners 100% Focused on Closing • Zero Hiring Risk",
    columns: [
      { name: "TARGETED", count: 64 },
      { name: "MEETINGS", count: 18 },
      { name: "ENGAGED", count: 8 },
    ],
    leads: [
      {
        initials: "AK",
        avatarBg: "#b45309",
        name: "Arthur Kensington",
        role: "Managing Director & Founder",
        tag: "Private Equity",
        statusBadge: "Score 97",
        statusType: "score",
      },
      {
        initials: "PL",
        avatarBg: "#92400e",
        name: "Patricia Lee",
        role: "Chief Operating Officer",
        tag: "Healthcare Tech",
        statusBadge: "Tomorrow 2:00 PM",
        statusType: "active",
      },
      {
        initials: "RS",
        avatarBg: "#065f46",
        name: "Robert Sterling",
        role: "VP Corporate Strategy",
        tag: "Renewable Energy",
        statusBadge: "Partner Intro ✓",
        statusType: "success",
      },
      {
        initials: "CN",
        avatarBg: "#1e293b",
        name: "Claire Newman",
        role: "Head of Global Expansion",
        tag: "B2B Logistics",
        statusBadge: "Score 95",
        statusType: "score",
      },
    ],
    stats: [
      { val: "4 Verticals", label: "New Market Verticals" },
      { val: "60%", label: "Partner Time Reclaimed" },
      { val: "100%", label: "Executive Closing Focus" },
    ],
  },
  {
    id: "accelerec",
    name: "Accelerec",
    pillLabel: "ATS Recruitment",
    dotColor: "#10b981",
    tintBg: "rgba(16, 185, 129, 0.08)",
    tintBorder: "rgba(16, 185, 129, 0.22)",
    eyebrow: "ATS Module",
    headlineMain: "Hire the right people, ",
    headlineAccent: "faster with AI.",
    story:
      "From your first job post to the final offer letter Accelerec's AI handles the slow, repetitive parts so your team focuses on great conversations not spreadsheets.",
    features: [
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        ),
        title: "AI Screening",
        desc: "Auto-rank every applicant",
        bgClass: "feat-box--purple",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        ),
        title: "AI Interview",
        desc: "Auto-screen every applicant",
        bgClass: "feat-box--green",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="17" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="17" y1="18" x2="3" y2="18"></line>
          </svg>
        ),
        title: "TextConnect",
        desc: "SMS with 98% open rate",
        bgClass: "feat-box--teal",
      },
      {
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        ),
        title: "Analytics",
        desc: "Time to hire & pipeline data",
        bgClass: "feat-box--blue",
      },
    ],
    linkText: "see all ATS features",
    mockupTitle: "Accelerec- Candidate Pipeline • Senior Designer",
    mockupBanner: "✓ AI screened 94 applications • Top 6 matched • 4 Interviews scheduled",
    columns: [
      { name: "APPLIED", count: 94 },
      { name: "INTERVIEW", count: 4 },
      { name: "OFFER", count: 1 },
    ],
    leads: [
      {
        initials: "SA",
        avatarBg: "#065f46",
        name: "Sara Ahmed",
        role: "Senior Designer",
        tag: "Figma 5 yr",
        statusBadge: "Score 96",
        statusType: "score",
      },
      {
        initials: "NR",
        avatarBg: "#4338ca",
        name: "Nadia Rao",
        role: "Brand Designer",
        tag: "Global Brand",
        statusBadge: "Today 2:00 PM",
        statusType: "active",
      },
      {
        initials: "JT",
        avatarBg: "#064e3b",
        name: "James Tan",
        role: "Lead Designer",
        tag: "Design System",
        statusBadge: "Accepted ✓",
        statusType: "success",
      },
      {
        initials: "MK",
        avatarBg: "#0f766e",
        name: "Mark Karim",
        role: "Marketing Manager",
        tag: "Marketing 4 yr",
        statusBadge: "Score 91",
        statusType: "score",
      },
    ],
    stats: [
      { val: "70 %", label: "Faster Hiring" },
      { val: "85%", label: "Less Screening" },
      { val: "94", label: "Apps Today" },
    ],
  },
];

export default function ClientImpact() {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      nextIndex = (index + 1) % casesData.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      nextIndex = (index - 1 + casesData.length) % casesData.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = casesData.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveTab(nextIndex);
  };

  return (
    <section className="section section--mist" id="client-impact">
      <div className="wrap">
        {/* Section Header */}
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

        {/* Accelerec-Style Top Horizontal Pill Tabs */}
        <div className="accel-tablist-wrap reveal">
          <div className="accel-tablist" role="tablist" aria-label="Client case studies">
            {casesData.map((c, i) => (
              <button
                key={c.id}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={activeTab === i}
                aria-controls={`panel-${c.id}`}
                tabIndex={activeTab === i ? 0 : -1}
                onClick={() => setActiveTab(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={`accel-tab-pill accel-tab-pill--${c.id} ${
                  activeTab === i ? "is-active" : ""
                }`}
              >
                <span
                  className="tab-pill-dot"
                  style={{ backgroundColor: c.dotColor }}
                />
                <span className="tab-pill-label">{c.pillLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Showcase Container */}
        <div className="accel-showcase-container reveal">
          {casesData.map((c, i) => (
            <article
              key={c.id}
              className={`accel-case-panel accel-case-panel--${c.id}`}
              role="tabpanel"
              id={`panel-${c.id}`}
              aria-labelledby={`tab-${c.id}`}
              hidden={activeTab !== i}
            >
              {/* LEFT COLUMN: Story & 2x2 Feature Grid */}
              <div className="accel-col-content">
                <div
                  className="accel-module-badge"
                  style={{ color: c.dotColor, backgroundColor: c.tintBg }}
                >
                  <span
                    className="module-badge-dot"
                    style={{ backgroundColor: c.dotColor }}
                  />
                  <span>{c.eyebrow}</span>
                </div>

                <h3 className="accel-headline">
                  {c.headlineMain}
                  <span
                    className="accel-headline-highlight"
                    style={{ color: c.dotColor }}
                  >
                    {c.headlineAccent}
                  </span>
                </h3>

                <p className="accel-story-p">{c.story}</p>

                <div className="accel-features-section">
                  <span className="accel-features-title">EXPLORE ALL FEATURES</span>
                  <div className="accel-features-grid">
                    {c.features.map((feat, fIdx) => (
                      <div key={fIdx} className={`accel-feat-box ${feat.bgClass}`}>
                        <div className="feat-box-icon">{feat.icon}</div>
                        <div className="feat-box-text">
                          <b className="feat-box-title">{feat.title}</b>
                          <span className="feat-box-desc">{feat.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="accel-explore-link"
                  style={{ color: c.dotColor }}
                >
                  <span>{c.linkText}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>

              {/* RIGHT COLUMN: SaaS Live Pipeline Mockup Window */}
              <div className="accel-col-mockup">
                <div className={`accel-mockup-window accel-mockup-window--${c.id}`}>
                  {/* Window Header */}
                  <div className="mockup-window-header">
                    <div className="window-dots" aria-hidden="true">
                      <span className="dot dot--red" />
                      <span className="dot dot--yellow" />
                      <span className="dot dot--green" />
                    </div>
                    <div className="mockup-window-title">{c.mockupTitle}</div>
                  </div>

                  {/* Mockup Body */}
                  <div className="mockup-window-body">
                    {/* Status Banner */}
                    <div
                      className="mockup-status-banner"
                      style={{
                        backgroundColor: c.tintBg,
                        borderColor: c.tintBorder,
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={c.dotColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{c.mockupBanner}</span>
                    </div>

                    {/* Kanban Pipeline Deck */}
                    <div className="mockup-kanban-deck">
                      <div className="mockup-kanban-headers">
                        {c.columns.map((col, colIdx) => (
                          <div key={colIdx} className="kanban-col-head">
                            <span className="col-name">{col.name}</span>
                            <span className="col-count">{col.count}</span>
                          </div>
                        ))}
                      </div>

                      {/* Candidate / Lead Cards Grid */}
                      <div className="mockup-leads-grid">
                        {c.leads.map((lead, leadIdx) => (
                          <div key={leadIdx} className="mockup-lead-card">
                            <div className="lead-card-left">
                              <div
                                className="lead-avatar"
                                style={{ backgroundColor: lead.avatarBg }}
                              >
                                {lead.initials}
                              </div>
                              <div className="lead-meta">
                                <strong className="lead-name">{lead.name}</strong>
                                <span className="lead-role">{lead.role}</span>
                              </div>
                            </div>
                            <div className="lead-card-right">
                              <span className="lead-tag">{lead.tag}</span>
                              <span
                                className={`lead-status-pill lead-status-pill--${lead.statusType}`}
                              >
                                {lead.statusBadge}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Window Metric Footer */}
                    <div
                      className="mockup-window-footer"
                      style={{ backgroundColor: c.tintBg }}
                    >
                      {c.stats.map((st, stIdx) => (
                        <div key={stIdx} className="mockup-stat-cell">
                          <strong
                            className="mockup-stat-val"
                            style={{ color: c.dotColor }}
                          >
                            {st.val}
                          </strong>
                          <span className="mockup-stat-label">{st.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="cases-cta reveal">
          <p>Want verified outbound results like these?</p>
          <a className="btn btn--navy" href="#contact">
            Book a growth strategy consultation
          </a>
        </div>
      </div>
    </section>
  );
}
