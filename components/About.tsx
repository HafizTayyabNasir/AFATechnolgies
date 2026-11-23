import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="section section--mist" id="about">
      <div className="wrap about">
        <div className="reveal">
          <h2>Your outsourced revenue engine, built to scale with you.</h2>
          <p className="body">
            AFA Technologies is a B2B Sales-as-a-Service company that builds,
            manages and scales predictable sales pipelines for global technology
            companies. We are not a call center and we are not a recruiter. We
            are a revenue partner: SDRs, Account Executives and RevOps
            specialists working as a seamless extension of your team, accountable
            to the same pipeline and revenue targets you are.
          </p>
          <p className="promise">
            Fewer hiring headaches. Faster pipeline. Measurable growth.
          </p>

          <div className="about-office-card reveal-scale">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Modern technology corporate office headquarters and commercial workspace"
              width={600}
              height={260}
              loading="lazy"
            />
            <div className="about-office-badge">
              <b>AFA Technologies Commercial Delivery Center</b>
              <span>
                Built for international market scale &middot; High-tech enterprise
                infrastructure
              </span>
            </div>
          </div>
        </div>

        <ul className="principles reveal reveal-stagger">
          <li>
            <b>Pipeline over activity</b>
            <span>
              We measure success in qualified meetings and closed revenue, not
              emails sent.
            </span>
          </li>
          <li>
            <b>Radical transparency</b>
            <span>Live CRM visibility and weekly performance reviews, always.</span>
          </li>
          <li>
            <b>Built around you</b>
            <span>
              Your ICP, your messaging, your stack. We adapt to your business, not
              the other way around.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
