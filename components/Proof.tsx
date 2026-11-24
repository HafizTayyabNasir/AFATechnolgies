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
            src="/logos/najoomi-logo-white.png"
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
              fill="#F59E0B"
              opacity="0.45"
            />
            <polygon points="38 15 62 15 57 40 43 40" fill="#F59E0B" />
            <rect x="22" y="76" width="56" height="8" rx="2" fill="#F59E0B" />
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
            src="/logos/accelerec-logo-white.png"
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
    <section className="proof" aria-label="Partners and key metrics">
      <div className="wrap">
        <p className="proof-title reveal">
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

        <div className="metrics reveal reveal-stagger">
          <div className="metric">
            <strong>14 days</strong>
            <span>From kickoff to your first qualified meetings</span>
          </div>
          <div className="metric">
            <strong>Up to 60%</strong>
            <span>Lower customer acquisition cost than in-house hiring</span>
          </div>
          <div className="metric">
            <strong>3 regions</strong>
            <span>EMEA, APAC and North America covered across time zones</span>
          </div>
          <div className="metric">
            <strong>4 partners</strong>
            <span>Global scale-ups backed by our embedded pods</span>
          </div>
        </div>
      </div>
    </section>
  );
}
