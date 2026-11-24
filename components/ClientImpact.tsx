"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FeatureBox {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bgClass: string;
}

interface EnterpriseDeal {
  accountName: string;
  buyerRole: string;
  dealValue: string;
  stageName: string;
  stageType: "won" | "active" | "review";
}

interface StatItem {
  val: string;
  label: string;
}

interface ClientCaseData {
  id: string;
  name: string;
  domainBadge: string;
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
  columns: { name: string; count: string }[];
  deals: EnterpriseDeal[];
  stats: StatItem[];
}

export default function ClientImpact() {
  const [activeTab, setActiveTab] = useState(0);

  const casesData: ClientCaseData[] = [
    {
      id: "fortanixor",
      name: "Fortanixor",
      domainBadge: "Cybersecurity & Identity",
      dotColor: "#00BCD4",
      tintBg: "rgba(0, 188, 212, 0.08)",
      tintBorder: "rgba(0, 188, 212, 0.22)",
      eyebrow: "Zero-Trust & Enterprise Security Pod",
      headlineMain: "Accelerating enterprise pipeline ",
      headlineAccent: "for next-gen security solutions.",
      story:
        "Fortanixor needed to engage Fortune 500 CISOs and security leaders without burning capital on slow, expensive in-house sales hiring. AFA deployed an embedded commercial sales pod with deep technical messaging, securing high-intent enterprise evaluations and executive meetings.",
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
          desc: "Targeted Fortune 500 CISOs and VP Security leaders",
          bgClass: "feat-box--purple",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          ),
          title: "Multi-Touch Outreach",
          desc: "Tailored executive LinkedIn & technical email briefs",
          bgClass: "feat-box--green",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          ),
          title: "Zero-Trust Verification",
          desc: "100% technical compliance & criteria pre-screening",
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
          title: "High-Intent Discovery",
          desc: "Only decision-makers with active budget booked",
          bgClass: "feat-box--blue",
        },
      ],
      linkText: "Explore Fortanixor Case Study",
      mockupTitle: "AFA Commercial Engine • Enterprise Pipeline • Fortanixor Security",
      mockupBanner: "✓ 48 Enterprise Accounts Engaged • $2.4M Qualified Pipeline • 100% CISO Verification",
      columns: [
        { name: "ACCOUNTS", count: "48" },
        { name: "DISCOVERY", count: "16" },
        { name: "PIPELINE", count: "$2.4M" },
      ],
      deals: [
        {
          accountName: "Global FinTech Banking Corp",
          buyerRole: "Chief Information Security Officer (CISO)",
          dealValue: "$180,000 ACV",
          stageName: "Security Audit Passed ✓",
          stageType: "won",
        },
        {
          accountName: "Enterprise CloudScale Tech",
          buyerRole: "VP Global Cyber Defense & Infra",
          dealValue: "$120,000 ACV",
          stageName: "Technical POV Won",
          stageType: "won",
        },
        {
          accountName: "Tier-1 Supply Chain Logistics",
          buyerRole: "Head of Information Security",
          dealValue: "$240,000 ACV",
          stageName: "Procurement Review",
          stageType: "review",
        },
        {
          accountName: "HealthData Global Network",
          buyerRole: "Director Identity & Auth",
          dealValue: "$95,000 ACV",
          stageName: "Discovery Confirmed",
          stageType: "active",
        },
      ],
      stats: [
        { val: "$2.4M+", label: "Enterprise Pipeline Generated" },
        { val: "38", label: "Executive Demos Delivered" },
        { val: "3.2x", label: "Average Deal Size Increase" },
      ],
    },
    {
      id: "najoomi",
      name: "Najoomi",
      domainBadge: "Platform & Conversational AI",
      dotColor: "#a855f7",
      tintBg: "rgba(168, 85, 247, 0.08)",
      tintBorder: "rgba(168, 85, 247, 0.22)",
      eyebrow: "Digital Platform & AI Commercialization",
      headlineMain: "Turning conversational AI velocity ",
      headlineAccent: "into predictable B2B revenue.",
      story:
        "Najoomi built an advanced conversational AI platform and needed rapid, multi-region commercial pipeline. AFA engineered ICP segmentation, deployed dedicated GTM outbound specialists, and established a steady stream of enterprise pilot opportunities.",
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
          desc: "Targeted digital platform & enterprise customer operations",
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
          desc: "Full pipeline visibility from initial touch to demo close",
          bgClass: "feat-box--green",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 14 14"></polyline>
            </svg>
          ),
          title: "Demo Acceleration",
          desc: "Rapid qualification workflows for high-intent accounts",
          bgClass: "feat-box--teal",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          ),
          title: "Multi-Region GTM",
          desc: "Active outreach across Middle East, UK, and European buyers",
          bgClass: "feat-box--blue",
        },
      ],
      linkText: "Explore Najoomi Case Study",
      mockupTitle: "AFA Commercial Engine • Enterprise Pipeline • Najoomi AI Platform",
      mockupBanner: "✓ 64 Enterprise Accounts Reached • 24 Qualified Commercial Proposals • $2.1M GTM Pipeline",
      columns: [
        { name: "ENGAGED", count: "64" },
        { name: "QUALIFIED", count: "24" },
        { name: "PIPELINE", count: "$2.1M" },
      ],
      deals: [
        {
          accountName: "OmniRetail Group (UK & ME)",
          buyerRole: "Head of Digital Customer Experience",
          dealValue: "$145,000 ACV",
          stageName: "Proposal Delivered ✓",
          stageType: "won",
        },
        {
          accountName: "Apex Telecom International",
          buyerRole: "Chief Technology Officer (CTO)",
          dealValue: "$210,000 ACV",
          stageName: "Executive Workshop Done",
          stageType: "won",
        },
        {
          accountName: "FinCorp Digital Banking",
          buyerRole: "VP Customer Support Operations",
          dealValue: "$160,000 ACV",
          stageName: "Live Pilot Scheduled",
          stageType: "review",
        },
        {
          accountName: "AeroLogistics Global Group",
          buyerRole: "Director Enterprise Solutions",
          dealValue: "$85,000 ACV",
          stageName: "Discovery Completed",
          stageType: "active",
        },
      ],
      stats: [
        { val: "$2.1M", label: "Qualified Sales Pipeline" },
        { val: "44", label: "Executive Demos Booked" },
        { val: "28%", label: "Lead-to-Opportunity Conversion" },
      ],
    },
    {
      id: "keystone",
      name: "Keystone",
      domainBadge: "Advisory & Capital Scale",
      dotColor: "#f59e0b",
      tintBg: "rgba(245, 158, 11, 0.08)",
      tintBorder: "rgba(245, 158, 11, 0.22)",
      eyebrow: "Enterprise Advisory & Strategic Vertical Scale",
      headlineMain: "Penetrating new market verticals ",
      headlineAccent: "while freeing partners to close.",
      story:
        "Keystone's senior partners were spending critical billable hours on cold prospecting instead of advising clients and closing large mandates. AFA took over top-of-funnel account mapping, booking senior executive advisory appointments across four new industry verticals.",
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
          desc: "Successfully penetrated 4 new enterprise market verticals",
          bgClass: "feat-box--purple",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          ),
          title: "Executive Briefs",
          desc: "High-touch C-suite strategic advisory introductions",
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
          title: "Time Reclaimed",
          desc: "Senior partners freed 100% to focus on advisory closing",
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
          title: "Calendar Cadence",
          desc: "Predictable stream of qualified appointments every month",
          bgClass: "feat-box--blue",
        },
      ],
      linkText: "Explore Keystone Case Study",
      mockupTitle: "AFA Commercial Engine • Enterprise Pipeline • Keystone Advisory",
      mockupBanner: "✓ 4 New Vertical Markets Opened • 18 Retained Partner Deals • Senior Partners 100% Closing",
      columns: [
        { name: "TARGETED", count: "52" },
        { name: "ADVISORY", count: "18" },
        { name: "PIPELINE", count: "$3.8M" },
      ],
      deals: [
        {
          accountName: "Apex Capital Partners",
          buyerRole: "Managing Director & General Partner",
          dealValue: "$320,000 Advisory",
          stageName: "Closing Session ✓",
          stageType: "won",
        },
        {
          accountName: "BioPharma Solutions Holdings",
          buyerRole: "Chief Operating Officer (COO)",
          dealValue: "$190,000 Advisory",
          stageName: "Scope Finalized",
          stageType: "won",
        },
        {
          accountName: "Nordic CleanTech Group",
          buyerRole: "VP Corporate Strategy",
          dealValue: "$240,000 Advisory",
          stageName: "Brief Delivered",
          stageType: "review",
        },
        {
          accountName: "Horizon Global Logistics",
          buyerRole: "Head of Strategic Expansion",
          dealValue: "$150,000 Advisory",
          stageName: "Retainer Agreed",
          stageType: "active",
        },
      ],
      stats: [
        { val: "4", label: "New Market Verticals Opened" },
        { val: "$3.8M", label: "Total Advisory Pipeline" },
        { val: "65%", label: "Partner Billable Time Reclaimed" },
      ],
    },
    {
      id: "accelerec",
      name: "Accelerec",
      domainBadge: "Recruitment Tech & HR Platform",
      dotColor: "#10b981",
      tintBg: "rgba(16, 185, 129, 0.08)",
      tintBorder: "rgba(16, 185, 129, 0.22)",
      eyebrow: "HR Tech Commercial Engine & Software Sales",
      headlineMain: "Scaling enterprise software adoption ",
      headlineAccent: "across corporate HR leaders.",
      story:
        "Accelerec developed a smart HRMS & ATS software suite. AFA acted as their external commercial sales arm, prospecting corporate employers, booking high-converting platform demonstrations with People Officers, and scaling monthly software ARR.",
      features: [
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          ),
          title: "HR Executive Targeting",
          desc: "Targeted Heads of Talent, VP People, and CPOs in 500+ employee firms",
          bgClass: "feat-box--purple",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
          ),
          title: "Live Product Demos",
          desc: "Booked qualified software walk-throughs with key budget holders",
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
          title: "CAC Optimization",
          desc: "Slashed client acquisition cost by 55% compared to internal hiring",
          bgClass: "feat-box--teal",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          ),
          title: "Predictable ARR Engine",
          desc: "Built a growing multi-million dollar annual software sales pipeline",
          bgClass: "feat-box--blue",
        },
      ],
      linkText: "Explore Accelerec Case Study",
      mockupTitle: "AFA Commercial Engine • Enterprise Pipeline • Accelerec Platform",
      mockupBanner: "✓ 72 Mid-Market & Enterprise Accounts Engaged • 32 Qualified Product Demos • 92% Show-Up Rate",
      columns: [
        { name: "ACCOUNTS", count: "72" },
        { name: "DEMOS", count: "32" },
        { name: "PIPELINE", count: "$1.4M" },
      ],
      deals: [
        {
          accountName: "Global Tech Consulting (12k Staff)",
          buyerRole: "Global Head of Talent Acquisition",
          dealValue: "$84,000 ARR",
          stageName: "Contract Review ✓",
          stageType: "won",
        },
        {
          accountName: "FinTech Unicorn Scale-Up",
          buyerRole: "VP People & Culture",
          dealValue: "$52,000 ARR",
          stageName: "Platform Demo Won",
          stageType: "won",
        },
        {
          accountName: "Enterprise Retail Network",
          buyerRole: "Chief People Officer (CPO)",
          dealValue: "$110,000 ARR",
          stageName: "Executive Buy-in",
          stageType: "review",
        },
        {
          accountName: "B2B Cloud Solutions",
          buyerRole: "Director Talent & Ops",
          dealValue: "$45,000 ARR",
          stageName: "Demo Delivered",
          stageType: "active",
        },
      ],
      stats: [
        { val: "$1.4M", label: "Software ARR Pipeline" },
        { val: "32", label: "Enterprise Product Demos" },
        { val: "55%", label: "Lower Acquisition Cost (CAC)" },
      ],
    },
  ];

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

  const renderPartnerLogo = (id: string, isLight: boolean = false) => {
    switch (id) {
      case "fortanixor":
        return (
          <div className="partner-logo-pill">
            <svg
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="partner-logo-svg"
              aria-hidden="true"
            >
              <path d="M50 115C50 115 10 95 10 50V15L50 5L90 15V50C90 95 50 115 50 115Z" fill="#4D79FF" />
              <path d="M50 105C50 105 18 88 18 50V22L50 14L82 22V50C82 88 50 105 50 105Z" fill="#0a0814" />
              <circle cx="50" cy="52" r="22" fill="#00BCD4" />
            </svg>
            <span className="partner-logo-text fortanixor-text">Fortanixor</span>
          </div>
        );
      case "najoomi":
        return (
          <div className="partner-logo-pill">
            <Image
              src="/logos/najoomi-logo.png"
              alt="Najoomi Logo"
              width={124}
              height={30}
              className="partner-logo-img"
              style={{ objectFit: "contain", height: "26px", width: "auto" }}
            />
          </div>
        );
      case "keystone":
        return (
          <div className="partner-logo-pill">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="partner-logo-svg"
              aria-hidden="true"
            >
              <path
                d="M22 80V45C22 29.5 34.5 17 50 17C65.5 17 78 29.5 78 45V80H64V45C64 37.3 57.7 31 50 31C42.3 31 36 37.3 36 45V80H22Z"
                fill="#F59E0B"
                opacity="0.45"
              />
              <polygon points="38 15 62 15 57 40 43 40" fill="#F59E0B" />
              <rect x="22" y="76" width="56" height="8" rx="2" fill="#F59E0B" />
            </svg>
            <span className="partner-logo-text keystone-text">KEYSTONE</span>
          </div>
        );
      case "accelerec":
        return (
          <div className="partner-logo-pill">
            <Image
              src="/logos/accelerec-logo.png"
              alt="Accelerec Logo"
              width={130}
              height={30}
              className="partner-logo-img"
              style={{ objectFit: "contain", height: "26px", width: "auto" }}
            />
          </div>
        );
      default:
        return null;
    }
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
            See how AFA Technologies sells technology products and services to enterprise buyers across global markets.
          </p>
        </div>

        {/* Prominent Partner Logo Navigation Tabs */}
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
                title={`View ${c.name} pipeline case study`}
              >
                {renderPartnerLogo(c.id, activeTab === i)}
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
              {/* LEFT COLUMN: Story & Features */}
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
                  <span className="accel-features-title">WHAT AFA TECHNOLOGIES DEPLOYED</span>
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

              {/* RIGHT COLUMN: Authentic B2B Enterprise Pipeline Window */}
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

                    {/* Pipeline Stage Columns */}
                    <div className="mockup-kanban-deck">
                      <div className="mockup-kanban-headers">
                        {c.columns.map((col, colIdx) => (
                          <div key={colIdx} className="kanban-col-head">
                            <span className="col-name">{col.name}</span>
                            <span className="col-count">{col.count}</span>
                          </div>
                        ))}
                      </div>

                      {/* Real Target Enterprise Accounts Grid */}
                      <div className="mockup-deals-grid">
                        {c.deals.map((deal, dIdx) => (
                          <div key={dIdx} className="mockup-deal-card">
                            <div className="deal-card-left">
                              <div
                                className="deal-account-icon"
                                style={{ backgroundColor: c.tintBg, color: c.dotColor }}
                              >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                              </div>
                              <div className="deal-meta">
                                <strong className="deal-account-name">{deal.accountName}</strong>
                                <span className="deal-buyer-role">{deal.buyerRole}</span>
                              </div>
                            </div>
                            <div className="deal-card-right">
                              <span className="deal-value-badge">{deal.dealValue}</span>
                              <span className={`deal-stage-pill deal-stage-pill--${deal.stageType}`}>
                                {deal.stageName}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Unique Partner Metric Footer */}
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
          <p>Want verified enterprise pipeline results like these?</p>
          <a className="btn btn--navy" href="#contact">
            Book a growth strategy consultation
          </a>
        </div>
      </div>
    </section>
  );
}
