import React from "react";

export default function Advantage() {
  return (
    <section className="section" id="advantage">
      <div className="wrap">
        <div className="section-head text-center reveal">
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
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>Model Comparison</span>
          </div>
          <h2>Scaling B2B sales shouldn&apos;t take six months and seven figures.</h2>
          <p>
            Hiring, training and managing an in-house sales team in Western
            markets is slow, expensive and high-risk. We replace guesswork with
            a plug-and-play revenue pod.
          </p>
        </div>

        <div className="battle-container reveal reveal-stagger">
          <div className="battle-vs-badge" aria-hidden="true">VS</div>

          {/* Traditional In-House Card */}
          <div className="battle-card battle-card--traditional">
            <div className="battle-card__header">
              <span className="battle-tag battle-tag--warning">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                The Traditional Path
              </span>
              <h3 className="battle-card__title">The In-House Struggle</h3>
              <p className="battle-card__desc">
                High friction, heavy fixed overhead, and months of recruitment delays with zero pipeline guarantee.
              </p>
            </div>

            <div className="battle-card__list">
              <div className="battle-item">
                <div className="battle-item__icon battle-item__icon--cross">
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
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div className="battle-item__content">
                  <div className="battle-item__label">3 to 6 Months Ramp Time</div>
                  <p className="battle-item__detail">
                    Protracted recruiting, endless interview rounds, tool onboarding, and extended SDR ramp before seeing first demos.
                  </p>
                </div>
              </div>

              <div className="battle-item">
                <div className="battle-item__icon battle-item__icon--cross">
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
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div className="battle-item__content">
                  <div className="battle-item__label">$150K+ Cost per Rep</div>
                  <p className="battle-item__detail">
                    Steep fixed base salaries, healthcare benefits, enterprise tech seat licenses, plus 20%+ recruiter placement commissions.
                  </p>
                </div>
              </div>

              <div className="battle-item">
                <div className="battle-item__icon battle-item__icon--cross">
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
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div className="battle-item__content">
                  <div className="battle-item__label">Siloed Prospecting &amp; Data Churn</div>
                  <p className="battle-item__detail">
                    Inconsistent CRM hygiene, unverified email lists, burnt domain reputations, and high sales rep turnover.
                  </p>
                </div>
              </div>

              <div className="battle-item">
                <div className="battle-item__icon battle-item__icon--cross">
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
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div className="battle-item__content">
                  <div className="battle-item__label">Single Time-Zone Limitation</div>
                  <p className="battle-item__detail">
                    Outreach strictly restricted to local office hours, missing high-value enterprise accounts in international territories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AFA Revenue Pod Card */}
          <div className="battle-card battle-card--afa">
            <div className="battle-highlight-glow" aria-hidden="true"></div>
            <div className="battle-card__header">
              <span className="battle-tag battle-tag--recommended">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                The Turnkey Solution
              </span>
              <h3 className="battle-card__title">The AFA Revenue Pod</h3>
              <p className="battle-card__desc">
                Embedded, university-educated commercial sales talent with enterprise RevOps infrastructure ready from Day 1.
              </p>
            </div>

            <div className="battle-card__list">
              <div className="battle-item">
                <div className="battle-item__icon battle-item__icon--check">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="battle-item__content">
                  <div className="battle-item__label">14-Day Deployment Velocity</div>
                  <p className="battle-item__detail">
                    Fully assembled, trained, and battle-tested commercial sales pod integrated directly into your Slack and CRM.
                  </p>
                </div>
              </div>

              <div className="battle-item">
                <div className="battle-item__icon battle-item__icon--check">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="battle-item__content">
                  <div className="battle-item__label">Up to 60% Lower CAC</div>
                  <p className="battle-item__detail">
                    Predictable, modular monthly pod fee including talent, full tech stack, and zero long-term severance liabilities.
                  </p>
                </div>
              </div>

              <div className="battle-item">
                <div className="battle-item__icon battle-item__icon--check">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="battle-item__content">
                  <div className="battle-item__label">Full-Stack RevOps Engine</div>
                  <p className="battle-item__detail">
                    Clean, verified ICP data, multi-channel cadences (Email, LinkedIn, Phone), domain protection, and live dashboards.
                  </p>
                </div>
              </div>

              <div className="battle-item">
                <div className="battle-item__icon battle-item__icon--check">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="battle-item__content">
                  <div className="battle-item__label">Cross-Timezone Global Agility</div>
                  <p className="battle-item__detail">
                    Synchronized, real-time coverage across EMEA, APAC, and US East business hours without paying overtime rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="battle-banner reveal">
          <div className="battle-banner__info">
            <h4 className="battle-banner__title">
              Stop waiting on recruiters. Start filling your calendar.
            </h4>
            <div className="battle-banner__perks">
              <span className="battle-banner__perk">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                14-day kick-off
              </span>
              <span className="battle-banner__perk">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Zero recruiter fees
              </span>
              <span className="battle-banner__perk">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Live CRM transparency
              </span>
            </div>
          </div>
          <div className="battle-banner__action">
            <a href="#contact" className="btn btn-primary">
              Book a Consultation
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
