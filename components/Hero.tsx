"use client";

import React, { useState, useEffect } from "react";

const typewriterWords = [
  "To Enterprise Buyers",
  "Across Global Markets",
  "To C-Suite Decision-Makers",
  "Without In-House Hiring",
];

export default function Hero() {
  // Typewriter effect state
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(typewriterWords[0].length);
  const [isDeleting, setIsDeleting] = useState(true);

  useEffect(() => {
    const currentWord = typewriterWords[wordIdx];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((prev) => prev - 1), 35);
      } else {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % typewriterWords.length);
        timeout = setTimeout(() => {}, 400);
      }
    } else {
      if (charIdx < currentWord.length) {
        timeout = setTimeout(() => setCharIdx((prev) => prev + 1), 75);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, wordIdx]);

  // Lead Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    market: "",
    pod: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = true;
    }
    if (!formData.company.trim()) newErrors.company = true;
    if (!formData.market) newErrors.market = true;
    if (!formData.pod) newErrors.pod = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg-accent"></div>

      <div className="wrap">
        <div className="hero-copy">
          <div className="hero-pill">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>B2B Commercial Sales Partner &bull; The Bridge Between Tech &amp; Enterprise Buyers</span>
          </div>

          <h1>
            We Sell Your Tech Products &amp; Services
            <br />
            <span className="hero-highlight">
              <span>{typewriterWords[wordIdx].substring(0, charIdx)}</span>
              <span className="cursor-blink"></span>
            </span>
          </h1>

          <p className="lead">
            <strong>You build the technology &mdash; we generate the revenue.</strong> AFA Technologies does not build software; we are the commercial sales bridge between your B2B products or services and qualified enterprise buyers. Our dedicated outbound pods represent your brand, book high-intent meetings, and close deals across EMEA, APAC, and North America.
          </p>

          <div className="hero-cta">
            <a className="btn-talk" href="#hero-lead-form">
              Get Sales Team Blueprint <span>&rarr;</span>
            </a>
            <a className="btn-explore" href="#solutions">
              How We Sell For You
            </a>
          </div>

          <ul className="proof-list">
            <li>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 10.5l4 4 8-9" />
              </svg>
              We sell your products for you (Dedicated Sales Pods)
            </li>
            <li>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 10.5l4 4 8-9" />
              </svg>
              Direct C-suite buyer access across EMEA, APAC &amp; US
            </li>
            <li>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 10.5l4 4 8-9" />
              </svg>
              Live in 14 days &bull; Zero in-house hiring overhead
            </li>
          </ul>
        </div>

        {/* Right Side: Consultation Booking Form */}
        <div className="hero-form-card" aria-label="Get a Dedicated Sales Team for Your Product">
          {!isSubmitted ? (
            <form id="hero-lead-form" noValidate onSubmit={handleSubmit}>
              <div className="hero-form-badge">
                <span className="hfb-dot"></span> 14-Day Sales Pod Deployment
              </div>
              <h3>Get a Dedicated Sales Team for Your Product</h3>
              <p className="hero-form-desc">
                Tell us what tech product or service you want sold &mdash; our commercial leadership will deliver a buyer acquisition roadmap within 24 hours.
              </p>

              <div className="row2">
                <div className={`field ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="hf-name">Full name</label>
                  <input
                    id="hf-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <span className="err">Enter your full name.</span>
                </div>
                <div className={`field ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="hf-email">Work email</label>
                  <input
                    id="hf-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className="err">Enter your work email.</span>
                </div>
              </div>

              <div className="row2">
                <div className={`field ${errors.company ? "has-error" : ""}`}>
                  <label htmlFor="hf-company">Company name</label>
                  <input
                    id="hf-company"
                    name="company"
                    type="text"
                    placeholder="Acme Technologies"
                    autoComplete="organization"
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <span className="err">Enter your company.</span>
                </div>
                <div className={`field ${errors.market ? "has-error" : ""}`}>
                  <label htmlFor="hf-market">Target market</label>
                  <select
                    id="hf-market"
                    name="market"
                    required
                    value={formData.market}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select buyer market
                    </option>
                    <option value="North America">North America (US &amp; Canada)</option>
                    <option value="EMEA (UK & Europe)">EMEA (UK &amp; Europe)</option>
                    <option value="APAC">APAC (Asia-Pacific)</option>
                    <option value="Global Coverage">Global Multi-Region</option>
                  </select>
                  <span className="err">Select a target market.</span>
                </div>
              </div>

              <div className={`field ${errors.pod ? "has-error" : ""}`}>
                <label htmlFor="hf-pod">Product / service you want sold</label>
                <select
                  id="hf-pod"
                  name="pod"
                  required
                  value={formData.pod}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select product or service category
                  </option>
                  <option value="B2B SaaS & Software Platform">
                    B2B SaaS &amp; Software Platform
                  </option>
                  <option value="Cybersecurity & Infrastructure Auth">
                    Cybersecurity &amp; Infrastructure Auth
                  </option>
                  <option value="AI & Digital Platform Technology">
                    AI &amp; Digital Platform Technology
                  </option>
                  <option value="Enterprise Advisory & Professional Services">
                    Enterprise Advisory &amp; Professional Services
                  </option>
                  <option value="Custom Tech Solution / Other">
                    Custom Tech Solution / Other
                  </option>
                </select>
                <span className="err">Select your product or service type.</span>
              </div>

              <button className="btn-hero-submit" type="submit">
                Get Sales Team Blueprint &rarr;
              </button>

              <div className="hero-form-trust">
                <span>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  14-Day Deployment
                </span>
                <span>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  100% Confidential
                </span>
                <span>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  24h Response SLA
                </span>
              </div>
            </form>
          ) : (
            <div className="hero-form-done is-shown" role="status" aria-live="polite">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="24" cy="24" r="20" />
                <path d="M15 25l6 6 12-14" />
              </svg>
              <h3>Blueprint Request Received!</h3>
              <p>
                Our commercial leadership team will review your product and reach out within 24 hours with a custom enterprise buyer acquisition roadmap.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
