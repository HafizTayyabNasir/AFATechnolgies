import React from "react";
import Image from "next/image";

export default function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="wrap">
        <div className="section-head reveal-slide-up">
          <h2>Modular revenue pods built for your growth stage.</h2>
          <p>
            Whether you need top-of-funnel pipeline velocity or end-to-end deal
            closing, deploy the exact capability your revenue team lacks.
          </p>
        </div>
        <div className="pods reveal reveal-stagger">
          <article className="pod">
            <div>
              <h3>Outbound SDR and pipeline generation</h3>
              <span className="pod-role">Sales Development Representatives</span>
            </div>
            <div>
              <p>
                Dedicated SDRs run hyper-personalized cold email, LinkedIn
                social selling and targeted outbound calling against your exact
                Ideal Customer Profile.
              </p>
              <p className="pod-get">
                <b>You get:</b> calendar-booked discovery meetings with
                decision-makers who fit your ICP.
              </p>
            </div>
            <ul>
              <li>Prospecting and appointment setting</li>
              <li>Cold calling</li>
              <li>LinkedIn outreach</li>
              <li>Multi-channel sequences</li>
            </ul>
            <div className="pod-thumb">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Dedicated SDR conducting outbound sales prospecting and appointment setting on laptop"
                width={400}
                height={300}
                loading="lazy"
              />
            </div>
          </article>

          <article className="pod">
            <div>
              <h3>Full-cycle Account Executives</h3>
              <span className="pod-role">Enterprise closers</span>
            </div>
            <div>
              <p>
                Experienced AEs own the sales cycle from first discovery and
                product demo through proposal negotiation and contract
                signature.
              </p>
              <p className="pod-get">
                <b>You get:</b> faster deal velocity and closed-won recurring
                revenue, without founders stuck on every sales call.
              </p>
            </div>
            <ul>
              <li>Discovery calls</li>
              <li>Product demos</li>
              <li>Proposal and negotiation</li>
              <li>Deal closing</li>
            </ul>
            <div className="pod-thumb">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Enterprise Account Executive closing B2B software deals and presenting demos on laptop"
                width={400}
                height={300}
                loading="lazy"
              />
            </div>
          </article>

          <article className="pod">
            <div>
              <h3>RevOps and GTM infrastructure</h3>
              <span className="pod-role">The engine behind the pods</span>
            </div>
            <div>
              <p>
                We set up and manage your outbound tech stack, CRM workflows in
                Salesforce or HubSpot, ICP data enrichment and email domain
                deliverability.
              </p>
              <p className="pod-get">
                <b>You get:</b> a clean, measurable, repeatable go-to-market
                engine that you own completely.
              </p>
            </div>
            <ul>
              <li>CRM setup and hygiene</li>
              <li>Data enrichment</li>
              <li>Sequence automation</li>
              <li>Live reporting dashboards</li>
            </ul>
            <div className="pod-thumb">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="RevOps engineer analyzing CRM workflows, analytics and outbound deliverability on laptop"
                width={400}
                height={300}
                loading="lazy"
              />
            </div>
          </article>
        </div>
        <div className="pods-foot">
          <span>Not sure which pod fits your stage?</span>
          <a className="btn btn--navy btn--sm" href="#contact">
            Book a free 25-minute strategy session
          </a>
        </div>
      </div>
    </section>
  );
}
