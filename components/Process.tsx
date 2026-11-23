import React from "react";
import Image from "next/image";

export default function Process() {
  return (
    <section className="section section--mist" id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>From kickoff to qualified meetings in 14 days.</h2>
          <p>
            A proven three-step deployment. No long hiring cycles, no ramp-up
            guesswork.
          </p>
        </div>
        <ol className="steps reveal reveal-stagger" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li className="step">
            <small>Days 1 to 4</small>
            <h3>GTM audit and ICP calibration</h3>
            <p>
              We dissect your value proposition, map your highest-converting
              buyer personas, build verified prospect lists, and configure your
              CRM and outbound domains.
            </p>
          </li>
          <li className="step">
            <small>Days 5 to 10</small>
            <h3>Playbook and pod launch</h3>
            <p>
              Your dedicated AFA Technologies pod is trained on your product,
              objection-handling scripts and messaging frameworks before
              multi-channel outreach goes live.
            </p>
          </li>
          <li className="step">
            <small>Day 14 and beyond</small>
            <h3>Pipeline velocity and weekly optimization</h3>
            <p>
              Qualified meetings land on your calendar. We review conversion
              metrics every week, A/B test messaging and double down on the
              segments that win.
            </p>
          </li>
        </ol>
        <div className="process-cta reveal">
          <a className="btn btn--navy" href="#contact">
            Start your 14-day launch
          </a>
        </div>

        <div className="process-visual-card">
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
