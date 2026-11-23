import React from "react";

export default function Proof() {
  return (
    <section className="proof" aria-label="Partners and key metrics">
      <div className="wrap">
        <p className="proof-title reveal">
          Trusted by high-growth technology and innovation leaders
        </p>
        
        {/* Infinite Smooth Logo Marquee */}
        <div className="logos-marquee-wrapper" aria-label="Featured partner companies">
          <ul className="logos-marquee-track">
            <li className="wm-1">Fortanixor</li>
            <li className="wm-2">Najoomi</li>
            <li className="wm-3">Keystone</li>
            <li className="wm-4">ACCELEREC</li>
            <li className="wm-1">Fortanixor</li>
            <li className="wm-2">Najoomi</li>
            <li className="wm-3">Keystone</li>
            <li className="wm-4">ACCELEREC</li>
          </ul>
        </div>

        <div className="metrics reveal reveal-stagger">
          <div className="metric">
            <strong>14 days</strong>
            <span>From kickoff to your first qualified meetings</span>
          </div>
          <div className="metric">
            <strong>Up to 60%</strong>
            <span>Lower customer acquisition cost than in-house hiring</span>
          </div>
          <div className="metric">
            <strong>3 regions</strong>
            <span>EMEA, APAC and North America covered across time zones</span>
          </div>
          <div className="metric">
            <strong>4 partners</strong>
            <span>Global scale-ups backed by our embedded pods</span>
          </div>
        </div>
      </div>
    </section>
  );
}
