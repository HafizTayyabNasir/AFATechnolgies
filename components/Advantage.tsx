import React from "react";

export default function Advantage() {
  return (
    <section className="section section--mist" id="advantage">
      <div className="wrap">
        <div className="section-head">
          <h2>Scaling B2B sales shouldn&apos;t take six months and seven figures.</h2>
          <p>
            Hiring, training and managing an in-house sales team in Western
            markets is slow, expensive and high-risk. We replace guesswork with
            a plug-and-play revenue pod.
          </p>
        </div>
        <table className="compare">
          <thead>
            <tr>
              <th scope="col">The in-house struggle</th>
              <th scope="col">The AFA Technologies model</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>3 to 6 months</strong>to recruit, onboard and ramp a
                single rep
              </td>
              <td>
                <strong>14-day deployment</strong>with trained, battle-tested
                sales talent
              </td>
            </tr>
            <tr>
              <td>
                <strong>$150K+ per rep</strong>in base salary, benefits and
                tools
              </td>
              <td>
                <strong>Up to 60% lower CAC</strong>with predictable monthly
                pod pricing
              </td>
            </tr>
            <tr>
              <td>
                <strong>Siloed prospecting</strong>with inconsistent CRM hygiene
              </td>
              <td>
                <strong>Full-stack RevOps</strong>with enriched data,
                multi-channel sequences and live reporting
              </td>
            </tr>
            <tr>
              <td>
                <strong>Single time zone</strong>limiting global outreach
              </td>
              <td>
                <strong>Cross-timezone agility</strong>covering EMEA, APAC and
                US East hours
              </td>
            </tr>
          </tbody>
        </table>
        <p className="compare-foot">
          Stop waiting on recruiters. Start filling your calendar.
        </p>
      </div>
    </section>
  );
}
