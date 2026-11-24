"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer footer--afa-theme">
      <div className="wrap">
        <div className="footer-main-grid">
          {/* Column 1: Brand & Strategic Positioning */}
          <div className="footer-col-brand">
            <a className="footer-brand-logo" href="#home" aria-label="AFA Technologies">
              <Image
                src="/images/logo.webp"
                alt="AFA Technologies"
                width={60}
                height={60}
                className="footer-logo-img"
              />
            </a>
            <p className="footer-brand-desc">
              AFA Technologies accelerates enterprise software &amp; B2B pipeline. We connect high-growth products with qualified enterprise buyers without the overhead of in-house sales hiring.
            </p>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="footer-col-nav">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#solutions">Solutions &amp; Pods</a></li>
              <li><a href="#client-impact">Client Impact</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#why-afa">Why AFA</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Worldwide Connect & Social Icons */}
          <div className="footer-col-connect">
            <h4 className="footer-col-title">Connect With Us Worldwide</h4>
            <div className="footer-contact-details">
              <p className="footer-contact-line">
                <span className="footer-contact-label">Phone:</span>{" "}
                <a href="tel:+442087983517" className="footer-contact-val">+44 20 8798 3517</a>
              </p>
              <p className="footer-contact-line">
                <span className="footer-contact-label">Email:</span>{" "}
                <a href="mailto:hello@afatechnologies.online" className="footer-contact-val">hello@afatechnologies.online</a>
              </p>
            </div>

            {/* Social Media Links Row */}
            <div className="footer-social-row" aria-label="Social media links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--facebook"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--instagram"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--youtube"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--linkedin"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--x"
                aria-label="X (formerly Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links Bar */}
        <div className="footer-accelero-bottom">
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span className="footer-legal-divider">|</span>
            <a href="#">Cookie Policy</a>
            <span className="footer-legal-divider">|</span>
            <a href="#">Terms and Conditions</a>
            <span className="footer-legal-divider">|</span>
            <a href="#">Consent Preferences</a>
          </div>
          <div className="footer-copy-text">
            &copy; <span>{year}</span> AFA Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
