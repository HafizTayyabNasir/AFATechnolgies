import React from "react";
import Image from "next/image";

export default function WhyAFA() {
  return (
    <section className="section section--navy" id="why-afa">
      <div className="wrap why">
        <div className="reveal-slide-left">
          <div className="section-head">
            <h2 style={{ color: "#fff" }}>
              Global standards. Unmatched capital efficiency.
            </h2>
            <p>
              Headquartered in Pakistan and built for international markets, AFA
              Technologies combines university-educated, English-fluent
              commercial talent with Western enterprise sales discipline. Our
              teams work inside your Slack, CRM and calendar, giving you the
              responsiveness of an internal team with the unit economics of a
              global delivery center.
            </p>
          </div>
          <ul className="adv reveal reveal-stagger">
            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12l12-6 12 6-12 6z" />
                <path d="M9 15.5V21c0 2 3.5 4 7 4s7-2 7-4v-5.5" />
              </svg>
              <div>
                <b>English-fluent, university-educated talent</b>
                <span>
                  Commercial professionals trained to sell to Western
                  enterprise buyers.
                </span>
              </div>
            </li>
            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="16" cy="16" r="11" />
                <path d="M16 9v7l5 3" />
              </svg>
              <div>
                <b>Time-zone overlap</b>
                <span>
                  Live coverage synchronized to your target client business hours.
                </span>
              </div>
            </li>
            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4l10 4v8c0 6-4.5 10.5-10 12-5.5-1.5-10-6-10-12V8z" />
                <path d="M11.5 16l3.5 3.5 6-7" />
              </svg>
              <div>
                <b>Enterprise-grade stack and compliance</b>
                <span>
                  HubSpot, Salesforce, secure workflows and proper email
                  deliverability (SPF, DKIM, DMARC).
                </span>
              </div>
            </li>
            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 24l7-8 5 4 10-12" />
                <path d="M20 8h7v7" />
              </svg>
              <div>
                <b>Capital efficiency</b>
                <span>
                  Predictable monthly pod pricing instead of six-figure hires.
                </span>
              </div>
            </li>
          </ul>
        </div>

        <aside className="cover reveal-slide-right" aria-label="Time-zone coverage">
          <h3>One team, three business days covered</h3>
          <p>
            Regional business hours (9 to 6) shown against a 24-hour day in
            Pakistan time.
          </p>
          <div className="cover-grid">
            <div className="cover-row">
              <span>APAC</span>
              <div className="track">
                <div
                  className="bar b-apac"
                  style={{ left: "25%", width: "37.5%" }}
                ></div>
              </div>
            </div>
            <div className="cover-row">
              <span>EMEA</span>
              <div className="track">
                <div className="bar" style={{ left: "54.17%", width: "37.5%" }}></div>
              </div>
            </div>
            <div className="cover-row">
              <span>US East</span>
              <div className="track">
                <div
                  className="bar b-us"
                  style={{ left: "79.17%", width: "20.83%" }}
                ></div>
                <div
                  className="bar b-us"
                  style={{ left: 0, width: "16.67%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="axis">
            <span></span>
            <div>
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
          </div>
          <small>
            Approximate, based on standard time. Pods can be scheduled around the
            hours your buyers are online.
          </small>
          <div className="why-media-card">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="International sales team working collaboratively on laptops in modern corporate workspace"
              width={400}
              height={180}
              loading="lazy"
            />
            <div className="why-media-badge">
              <b>Global Delivery Center</b>
              <span>Western Enterprise Discipline</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
