import React from "react";
import Image from "next/image";

export default function Process() {
  return (
    <section className="section section-process-cyber" id="process">
      <div className="wrap">
        {/* Section Head with Eyebrow Badge */}
        <div className="section-head text-center reveal">
          <div className="eyebrow-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>14-Day Rapid Deployment SLA</span>
          </div>
          <h2>From kickoff to qualified meetings in 14 days.</h2>
          <p>
            A proven three-step deployment sprint. No long hiring cycles, no ramp-up guesswork.
          </p>
        </div>

        {/* Futuristic Cyber Timeline Track & Bento Step Cards */}
        <div className="process-timeline-wrap reveal reveal-stagger">
          {/* Connecting Track Rail */}
          <div className="process-timeline-track" aria-hidden="true">
            <div className="process-track-base" />
          </div>

          <ol className="process-steps-grid" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {/* Step 1 */}
            <li className="process-step-item">
              <div className="process-node" aria-hidden="true">
                <span className="process-node-ripple" />
                <span className="process-node-core">01</span>
              </div>
              <div className="process-bento-card">
                <div className="process-card-top">
                  <span className="process-phase-tag process-phase-tag--blue">
                    Phase 01 • Calibration
                  </span>
                  <div className="process-icon-wrap process-icon-wrap--blue">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <line x1="12" y1="2" x2="12" y2="6"></line>
                      <line x1="12" y1="18" x2="12" y2="22"></line>
                      <line x1="2" y1="12" x2="6" y2="12"></line>
                      <line x1="18" y1="12" x2="22" y2="12"></line>
                    </svg>
                  </div>
                </div>

                <div className="process-card-timing">
                  <span className="timing-bullet" />
                  <strong>Days 1 to 4</strong>
                </div>

                <h3 className="process-card-title">GTM audit and ICP calibration</h3>
                <p className="process-card-desc">
                  We dissect your value proposition, map your highest-converting buyer personas, build verified prospect lists, and configure your CRM and outbound domains.
                </p>

                <div className="process-deliverables">
                  <span className="deliv-chip">🎯 Persona &amp; ICP Mapping</span>
                  <span className="deliv-chip">📋 Verified C-Suite Contacts</span>
                  <span className="deliv-chip">⚙️ Domain &amp; CRM Setup</span>
                </div>

                <div className="process-progress-indicator">
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill progress-bar-fill--step1" />
                  </div>
                  <span className="progress-label">Milestone 1 • Foundation Ready</span>
                </div>
              </div>
            </li>

            {/* Step 2 */}
            <li className="process-step-item">
              <div className="process-node process-node--active" aria-hidden="true">
                <span className="process-node-ripple" />
                <span className="process-node-core">02</span>
              </div>
              <div className="process-bento-card process-bento-card--featured">
                <div className="process-card-top">
                  <span className="process-phase-tag process-phase-tag--indigo">
                    Phase 02 • Pod Activation
                  </span>
                  <div className="process-icon-wrap process-icon-wrap--indigo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </div>
                </div>

                <div className="process-card-timing">
                  <span className="timing-bullet" />
                  <strong>Days 5 to 10</strong>
                </div>

                <h3 className="process-card-title">Playbook and pod launch</h3>
                <p className="process-card-desc">
                  Your dedicated AFA Technologies pod is trained on your product, objection-handling scripts and messaging frameworks before multi-channel outreach goes live.
                </p>

                <div className="process-deliverables">
                  <span className="deliv-chip">🚀 Embedded Pod Training</span>
                  <span className="deliv-chip">💬 Multi-Touch Sequences</span>
                  <span className="deliv-chip">🛡️ Zero-Trust Brand Protection</span>
                </div>

                <div className="process-progress-indicator">
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill progress-bar-fill--step2" />
                  </div>
                  <span className="progress-label">Milestone 2 • Outreach Live</span>
                </div>
              </div>
            </li>

            {/* Step 3 */}
            <li className="process-step-item">
              <div className="process-node process-node--glow" aria-hidden="true">
                <span className="process-node-ripple process-node-ripple--cyan" />
                <span className="process-node-core">03</span>
              </div>
              <div className="process-bento-card process-bento-card--launch">
                <div className="process-card-top">
                  <span className="process-phase-tag process-phase-tag--cyan">
                    Phase 03 • Velocity SLA
                  </span>
                  <div className="process-icon-wrap process-icon-wrap--cyan">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="process-card-timing">
                  <span className="timing-bullet timing-bullet--live" />
                  <strong>Day 14 and beyond</strong>
                </div>

                <h3 className="process-card-title">Pipeline velocity and weekly optimization</h3>
                <p className="process-card-desc">
                  Qualified meetings land on your calendar. We review conversion metrics every week, A/B test messaging and double down on the segments that win.
                </p>

                <div className="process-deliverables">
                  <span className="deliv-chip">📅 Calendar Meetings Booked</span>
                  <span className="deliv-chip">📊 Weekly Conversion Reviews</span>
                  <span className="deliv-chip">⚡ Compounding Enterprise Pipeline</span>
                </div>

                <div className="process-progress-indicator">
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill progress-bar-fill--step3" />
                  </div>
                  <span className="progress-label">Milestone 3 • 100% Pipeline SLA</span>
                </div>
              </div>
            </li>
          </ol>
        </div>

        {/* High-Impact CTA Block */}
        <div className="process-cta-wrap reveal">
          <div className="process-cta-box">
            <div className="process-cta-text">
              <h4>Ready to skip months of sales recruitment?</h4>
              <p>Deploy your dedicated AFA commercial sales pod in under two weeks.</p>
            </div>
            <div className="process-cta-action">
              <a className="btn btn--cyber-launch" href="#contact">
                <span>Start your 14-day launch</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div className="process-guarantee-ribbon">
            <span className="guarantee-item">⚡ 14-Day SLA Guarantee</span>
            <span className="guarantee-sep">•</span>
            <span className="guarantee-item">🛡️ Zero-Trust Enterprise Security</span>
            <span className="guarantee-sep">•</span>
            <span className="guarantee-item">🤝 Pre-Qualified Enterprise Meetings</span>
          </div>
        </div>

        {/* Process Visual Banner with Glass Status Card */}
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
                <div className="pvc-live-pill">
                  <span className="pvc-live-dot" />
                  <span>SLACK &amp; CRM SYNCHRONIZED POD</span>
                </div>
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
