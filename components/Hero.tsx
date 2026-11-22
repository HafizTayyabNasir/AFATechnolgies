"use client";

import React, { useState, useEffect } from "react";

const typewriterWords = [
  "Dedicated Sales Pods",
  "Full-Cycle AEs",
  "Predictable Pipeline",
  "RevOps Architecture",
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
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Trusted by businesses across EMEA, APAC &amp; North America</span>
          </div>

          <h1>
            Scale Your Pipeline With
            <br />
            <span className="hero-highlight">
              <span>{typewriterWords[wordIdx].substring(0, charIdx)}</span>
              <span className="cursor-blink"></span>
            </span>
          </h1>

          <p className="lead">
            AFA Technologies embeds dedicated SDRs, full-cycle Account
            Executives and RevOps infrastructure directly into your business,
            accelerating enterprise pipeline and closed revenue across EMEA,
            APAC and North America.
          </p>

          <div className="hero-cta">
            <a className="btn-talk" href="#hero-lead-form">
              Book Strategy Call <span>&rarr;</span>
            </a>
            <a className="btn-explore" href="#solutions">
              Explore Solutions
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
              >
                <path d="M4 10.5l4 4 8-9" />
              </svg>
              Live in 14 days
            </li>
            <li>
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
              EMEA, APAC and US East coverage
            </li>
            <li>
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
              Works inside your CRM, Slack &amp; calendar
            </li>
          </ul>
        </div>

        {/* Right Side: Consultation Booking Form */}
        <div className="hero-form-card" aria-label="Book a Growth Strategy Call">
          {!isSubmitted ? (
            <form id="hero-lead-form" noValidate onSubmit={handleSubmit}>
              <div className="hero-form-badge">
                <span className="hfb-dot"></span> 14-Day Fast Track Pod
              </div>
              <h3>Book a Growth Strategy Call</h3>
              <p className="hero-form-desc">
                Speak directly with our GTM leadership &mdash; receive a tailored
                sales pod blueprint within 24 hours.
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
                      Select region
                    </option>
                    <option value="North America">North America</option>
                    <option value="EMEA (UK & Europe)">EMEA (UK &amp; Europe)</option>
                    <option value="APAC">APAC</option>
                    <option value="Global Coverage">Global Coverage</option>
                  </select>
                  <span className="err">Select a market.</span>
                </div>
              </div>

              <div className={`field ${errors.pod ? "has-error" : ""}`}>
                <label htmlFor="hf-pod">Required capability</label>
                <select
                  id="hf-pod"
                  name="pod"
                  required
                  value={formData.pod}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select revenue pod type
                  </option>
                  <option value="Dedicated Outbound SDR Pod (Appointment Setting)">
                    Dedicated Outbound SDR Pod (Appointment Setting)
                  </option>
                  <option value="Full-Cycle Account Executives (Enterprise Closers)">
                    Full-Cycle Account Executives (Enterprise Closers)
                  </option>
                  <option value="Complete Growth Pod (SDRs + AEs)">
                    Complete Growth Pod (SDRs + AEs)
                  </option>
                  <option value="RevOps & CRM Infrastructure Architecture">
                    RevOps &amp; CRM Infrastructure Architecture
                  </option>
                </select>
                <span className="err">Select a capability.</span>
              </div>

              <button className="btn-hero-submit" type="submit">
                Book Strategy Call &rarr;
              </button>

              <div className="hero-form-trust">
                <span>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  14-Day Deployment
                </span>
                <span>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  100% Confidential
                </span>
                <span>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  24h Response
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
              >
                <circle cx="24" cy="24" r="20" />
                <path d="M15 25l6 6 12-14" />
              </svg>
              <h3>Thank You!</h3>
              <p>
                Your strategy request has been received. Our GTM leadership team
                will contact you within one business day to confirm your
                consultation session.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
