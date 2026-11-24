import React from "react";
import Image from "next/image";

export default function Process() {
  return (
    <section className="section section-process-clean" id="process">
      <div className="wrap">
        {/* Section Head */}
        <div className="section-head text-center reveal-slide-up">
          <div className="eyebrow-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>14-Day Deployment Sprint</span>
          </div>
          <h2>From kickoff to qualified meetings in 14 days.</h2>
          <p>
            A proven three-step deployment sprint. No long hiring cycles, no ramp-up guesswork.
          </p>
        </div>

        {/* Clean Process Timeline */}
        <div className="process-timeline-wrap">
          {/* Subtle Clean Rail */}
          <div className="process-timeline-track" aria-hidden="true">
            <div className="process-track-base" />
          </div>

          <ol className="process-steps-grid reveal-stagger" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {/* Step 1 */}
            <li className="process-step-item reveal-slide-left">
              <div className="process-node" aria-hidden="true">
                <span className="process-node-core">01</span>
              </div>
              <div className="process-step-card">
                <div className="process-card-top">
                  <span className="process-phase-badge">Phase 01</span>
                  <span className="process-card-timing">Days 1 to 4</span>
                </div>

                <h3 className="process-card-title">GTM audit and ICP calibration</h3>
                <p className="process-card-desc">
                  We dissect your value proposition, map your highest-converting buyer personas, build verified prospect lists, and configure your CRM and outbound domains.
                </p>

                <ul className="process-checklist">
                  <li><span className="check-icon">✓</span> Persona &amp; ICP mapping</li>
                  <li><span className="check-icon">✓</span> Verified C-suite contact lists</li>
                  <li><span className="check-icon">✓</span> Outbound domain &amp; CRM setup</li>
                </ul>

                <div className="process-card-status">
                  <span className="status-indicator-dot" />
                  <span>Milestone: Foundation Complete</span>
                </div>
              </div>
            </li>

            {/* Step 2 */}
            <li className="process-step-item reveal-slide-up">
              <div className="process-node" aria-hidden="true">
                <span className="process-node-core">02</span>
              </div>
              <div className="process-step-card">
                <div className="process-card-top">
                  <span className="process-phase-badge">Phase 02</span>
                  <span className="process-card-timing">Days 5 to 10</span>
                </div>

                <h3 className="process-card-title">Playbook and pod launch</h3>
                <p className="process-card-desc">
                  Your dedicated AFA Technologies pod is trained on your product, objection-handling scripts and messaging frameworks before multi-channel outreach goes live.
                </p>

                <ul className="process-checklist">
                  <li><span className="check-icon">✓</span> Dedicated pod trained on product</li>
                  <li><span className="check-icon">✓</span> Multi-touch sequencing live</li>
                  <li><span className="check-icon">✓</span> Zero-trust security compliance</li>
                </ul>

                <div className="process-card-status">
                  <span className="status-indicator-dot" />
                  <span>Milestone: Outreach Deployed</span>
                </div>
              </div>
            </li>

            {/* Step 3 */}
            <li className="process-step-item reveal-slide-right">
              <div className="process-node" aria-hidden="true">
                <span className="process-node-core">03</span>
              </div>
              <div className="process-step-card">
                <div className="process-card-top">
                  <span className="process-phase-badge">Phase 03</span>
                  <span className="process-card-timing">Day 14 and beyond</span>
                </div>

                <h3 className="process-card-title">Pipeline velocity and weekly optimization</h3>
                <p className="process-card-desc">
                  Qualified meetings land on your calendar. We review conversion metrics every week, A/B test messaging and double down on the segments that win.
                </p>

                <ul className="process-checklist">
                  <li><span className="check-icon">✓</span> Qualified meetings on calendar</li>
                  <li><span className="check-icon">✓</span> Weekly conversion &amp; CAC review</li>
                  <li><span className="check-icon">✓</span> Scaled multi-channel outreach</li>
                </ul>

                <div className="process-card-status">
                  <span className="status-indicator-dot status-indicator-dot--active" />
                  <span>Milestone: 100% Pipeline SLA</span>
                </div>
              </div>
            </li>
          </ol>
        </div>

        {/* Clean Professional CTA Box */}
        <div className="process-cta-wrap reveal-slide-up">
          <div className="process-cta-box">
            <div className="process-cta-text">
              <h4>Ready to skip months of sales recruitment?</h4>
              <p>Deploy your dedicated AFA commercial sales pod in under two weeks.</p>
            </div>
            <div className="process-cta-action">
              <a className="btn btn--navy" href="#contact">
                <span>Start your 14-day launch</span>
              </a>
            </div>
          </div>
          <div className="process-guarantee-ribbon">
            <span>⚡ 14-Day Rapid SLA</span>
            <span className="guarantee-sep">•</span>
            <span>🛡️ Zero-Trust Enterprise Security</span>
            <span className="guarantee-sep">•</span>
            <span>🤝 Pre-Qualified Enterprise Meetings</span>
          </div>
        </div>

        {/* Process Visual Banner */}
        <div className="process-visual-card reveal-scale">
          <div className="pvc-img-wrap">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="AFA Technologies commercial sales team collaborating with laptops in modern office"
              width={1180}
              height={320}
              loading="lazy"
            />
            <div className="pvc-overlay">
              <div className="pvc-content">
                <b>Turnkey Go-To-Market Execution</b>
                <p>
                  Your dedicated pod works directly inside your Slack, CRM and
                  calendar from day one &mdash; fully aligned on qualified
                  pipeline and revenue milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
