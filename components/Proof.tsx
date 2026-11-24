import React from "react";
import Image from "next/image";

export default function Proof() {
  const partners = [
    {
      id: "fortanixor",
      name: "Fortanixor",
      render: (
        <span className="marquee-logo marquee-logo--fortanixor">
          <svg
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              height: "28px",
              width: "auto",
              aspectRatio: "5 / 6",
              display: "block",
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
          <span className="marquee-brand-text">Fortanixor</span>
        </span>
      ),
    },
    {
      id: "najoomi",
      name: "Najoomi",
      render: (
        <span className="marquee-logo marquee-logo--najoomi">
          <Image
            src="/logos/najoomi-logo.png"
            alt="Najoomi Official Logo"
            width={130}
            height={36}
            style={{
              height: "28px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </span>
      ),
    },
    {
      id: "keystone",
      name: "Keystone",
      render: (
        <span className="marquee-logo marquee-logo--keystone">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ height: "26px", width: "auto", display: "block" }}
          >
            <path
              d="M22 80V45C22 29.5 34.5 17 50 17C65.5 17 78 29.5 78 45V80H64V45C64 37.3 57.7 31 50 31C42.3 31 36 37.3 36 45V80H22Z"
              fill="#D97706"
              opacity="0.45"
            />
            <polygon points="38 15 62 15 57 40 43 40" fill="#D97706" />
            <rect x="22" y="76" width="56" height="8" rx="2" fill="#D97706" />
          </svg>
          <span className="marquee-brand-text keystone-text">KEYSTONE</span>
        </span>
      ),
    },
    {
      id: "accelerec",
      name: "Accelerec",
      render: (
        <span className="marquee-logo marquee-logo--accelerec">
          <Image
            src="/logos/accelerec-logo.png"
            alt="Accelerec Official Logo"
            width={140}
            height={36}
            style={{
              height: "28px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </span>
      ),
    },
  ];

  return (
    <>
      {/* 1. Distinct Partner Logos Marquee Bar */}
      <section className="partners-bar" id="partners" aria-label="Featured partner companies">
        <div className="wrap">
          <p className="partners-bar-title reveal">
            Trusted by high-growth technology and innovation leaders
          </p>

        {/* Infinite Smooth Logo Marquee */}
        <div
          className="logos-marquee-wrapper"
          aria-label="Featured partner companies"
        >
          <ul className="logos-marquee-track">
            {/* Set 1 */}
            {partners.map((p, idx) => (
              <li key={`p1-${idx}`} className="marquee-item">
                {p.render}
              </li>
            ))}
            {/* Set 2 */}
            {partners.map((p, idx) => (
              <li key={`p2-${idx}`} className="marquee-item" aria-hidden="true">
                {p.render}
              </li>
            ))}
            {/* Set 3 */}
            {partners.map((p, idx) => (
              <li key={`p3-${idx}`} className="marquee-item" aria-hidden="true">
                {p.render}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* 2. Key Metrics Bento Deck Section */}
    <section className="proof-metrics-section" id="metrics" aria-label="Key delivery metrics and SLA">
      <div className="wrap">
        {/* Modern Bento Metric Cards Layout */}
        <div className="metrics-deck reveal reveal-stagger">
          {/* Card 1 */}
          <div className="metric-bento-card">
            <div className="metric-bento-header">
              <span className="metric-pill metric-pill--blue">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>Velocity SLA</span>
              </span>
            </div>
            <div className="metric-bento-body">
              <strong className="metric-bento-val">14 days</strong>
              <p className="metric-bento-desc">
                From initial kickoff to your first qualified executive discovery meetings booked.
              </p>
            </div>
            <div className="metric-bento-footer">
              <span className="metric-footer-tag">⚡ Fast-Track Pipeline Ramp</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="metric-bento-card">
            <div className="metric-bento-header">
              <span className="metric-pill metric-pill--green">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>Cost Efficiency</span>
              </span>
            </div>
            <div className="metric-bento-body">
              <strong className="metric-bento-val">Up to 60%</strong>
              <p className="metric-bento-desc">
                Lower customer acquisition cost compared to traditional in-house sales recruitment.
              </p>
            </div>
            <div className="metric-bento-footer">
              <span className="metric-footer-tag">📉 Zero Fixed Headcount Overhead</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="metric-bento-card">
            <div className="metric-bento-header">
              <span className="metric-pill metric-pill--cyan">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>Global Coverage</span>
              </span>
            </div>
            <div className="metric-bento-body">
              <strong className="metric-bento-val">3 regions</strong>
              <p className="metric-bento-desc">
                EMEA, APAC and North America covered simultaneously across target commercial time zones.
              </p>
            </div>
            <div className="metric-bento-footer">
              <span className="metric-footer-tag">🌐 24/5 Cross-Border Motion</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="metric-bento-card">
            <div className="metric-bento-header">
              <span className="metric-pill metric-pill--amber">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Scale-Up Trust</span>
              </span>
            </div>
            <div className="metric-bento-body">
              <strong className="metric-bento-val">4 partners</strong>
              <p className="metric-bento-desc">
                High-growth tech category leaders backed by our dedicated embedded sales pods.
              </p>
            </div>
            <div className="metric-bento-footer">
              <span className="metric-footer-tag">🤝 100% Embedded Pod SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
