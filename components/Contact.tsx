"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    market: "",
    team: "",
    goal: "",
    message: "",
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
    if (!formData.team) newErrors.team = true;
    if (!formData.goal) newErrors.goal = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  return (
    <section
      className="section section--mist"
      id="contact"
      style={{ paddingTop: "clamp(40px, 6vw, 80px)" }}
    >
      <div className="wrap">
        <div className="contact-panel">
          <div className="contact-copy">
            <h2>
              Ready to turn outbound into your most reliable growth channel?
            </h2>
            <p>
              Schedule a 25-minute GTM strategy session with our leadership team
              to map out a custom sales pod for your target market.
            </p>
            <ul className="agenda">
              <li>
                <svg
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 11.5l4.5 4.5L18 6" />
                </svg>
                A quick review of your current sales motion and goals
              </li>
              <li>
                <svg
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 11.5l4.5 4.5L18 6" />
                </svg>
                A recommended pod structure for your target market
              </li>
              <li>
                <svg
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 11.5l4.5 4.5L18 6" />
                </svg>
                A clear 14-day launch plan, with no obligation
              </li>
            </ul>

            <p className="contact-alt">
              Prefer email? Write to{" "}
              <a href="mailto:hello@afatechnologies.online">
                hello@afatechnologies.online
              </a>
            </p>

            <div className="contact-advisor">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                alt="AFA Technologies Senior GTM Sales Strategist"
                className="advisor-avatar"
                width={48}
                height={48}
                loading="lazy"
              />
              <div>
                <b>Direct GTM Leadership Access</b>
                <span>
                  Speak directly with our senior pipeline strategists &mdash; no
                  junior qualifiers.
                </span>
              </div>
            </div>
          </div>

          <div className="form-card">
            {!isSubmitted ? (
              <form id="lead-form" noValidate onSubmit={handleSubmit}>
                <h3>Tell us about your goals</h3>

                <div className="row2">
                  <div className={`field ${errors.name ? "has-error" : ""}`}>
                    <label htmlFor="f-name">Full name</label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <span className="err">Enter your full name.</span>
                  </div>
                  <div className={`field ${errors.email ? "has-error" : ""}`}>
                    <label htmlFor="f-email">Work email</label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <span className="err">
                      Enter a work email like name@company.com.
                    </span>
                  </div>
                </div>

                <div className={`field ${errors.company ? "has-error" : ""}`}>
                  <label htmlFor="f-company">Company name</label>
                  <input
                    id="f-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <span className="err">Enter your company name.</span>
                </div>

                <div className="row2">
                  <div className={`field ${errors.market ? "has-error" : ""}`}>
                    <label htmlFor="f-market">Target market</label>
                    <select
                      id="f-market"
                      name="market"
                      required
                      value={formData.market}
                      onChange={handleChange}
                    >
                      <option value="">Choose a market</option>
                      <option value="North America">North America</option>
                      <option value="EMEA">EMEA</option>
                      <option value="APAC">APAC</option>
                      <option value="Global">Global</option>
                    </select>
                    <span className="err">Choose a target market.</span>
                  </div>
                  <div className={`field ${errors.team ? "has-error" : ""}`}>
                    <label htmlFor="f-team">Current sales team size</label>
                    <select
                      id="f-team"
                      name="team"
                      required
                      value={formData.team}
                      onChange={handleChange}
                    >
                      <option value="">Choose a size</option>
                      <option value="No team yet">No team yet</option>
                      <option value="1 to 5">1 to 5</option>
                      <option value="6 to 20">6 to 20</option>
                      <option value="20+">20+</option>
                    </select>
                    <span className="err">Choose your team size.</span>
                  </div>
                </div>

                <div className={`field ${errors.goal ? "has-error" : ""}`}>
                  <label htmlFor="f-goal">Primary goal</label>
                  <select
                    id="f-goal"
                    name="goal"
                    required
                    value={formData.goal}
                    onChange={handleChange}
                  >
                    <option value="">Choose a goal</option>
                    <option value="Generate pipeline">Generate pipeline</option>
                    <option value="Close more deals">Close more deals</option>
                    <option value="Build RevOps and CRM">
                      Build RevOps and CRM
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="err">Choose a primary goal.</span>
                </div>

                <div className="field">
                  <label htmlFor="f-msg">
                    Anything else we should know? <small>(optional)</small>
                  </label>
                  <textarea
                    id="f-msg"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button className="btn btn--navy" type="submit">
                  Book my growth strategy call
                </button>
                <p className="form-note">
                  We reply within one business day. Your details are never
                  shared.
                </p>
              </form>
            ) : (
              <div className="form-done is-shown" role="status" aria-live="polite">
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
                <h3>Thank you. We have your request.</h3>
                <p>
                  Our team will be in touch shortly to confirm your strategy
                  session.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
