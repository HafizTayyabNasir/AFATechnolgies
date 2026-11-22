import React from "react";

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <h2>Questions? We&apos;ve got answers.</h2>
        </div>
        <div className="faq">
          <details open>
            <summary>How fast can we get started?</summary>
            <p>
              Most engagements move from kickoff to qualified meetings in about
              14 days: audit and ICP calibration, playbook training, then pod
              launch.
            </p>
          </details>
          <details>
            <summary>Do we need to change our CRM or tools?</summary>
            <p>
              No. Our team works inside your existing HubSpot or Salesforce,
              Slack and calendar. If you don&apos;t have a CRM set up yet, our RevOps
              pod builds it for you.
            </p>
          </details>
          <details>
            <summary>Who owns the data, sequences and CRM setup?</summary>
            <p>
              You do. Everything we build, from lists to workflows to reporting,
              stays with your business.
            </p>
          </details>
          <details>
            <summary>
              Can we start with just SDRs and add Account Executives later?
            </summary>
            <p>
              Yes. Our pods are modular. Start with outbound pipeline
              generation, then add full-cycle closing or RevOps as you grow.
            </p>
          </details>
          <details>
            <summary>Which markets do you cover?</summary>
            <p>
              EMEA, APAC and North America, with team overlap across European,
              Asian and US East business hours.
            </p>
          </details>
          <details>
            <summary>How do we track performance?</summary>
            <p>
              Through live CRM reporting and a weekly review of meetings booked,
              conversion metrics and messaging tests.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
