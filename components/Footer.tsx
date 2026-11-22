"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a className="plate" href="#home" aria-label="AFA Technologies">
              <Image
                src="/images/logo-footer.webp"
                alt="AFA Technologies"
                width={80}
                height={84}
                loading="lazy"
              />
            </a>
            <p className="footer-blurb">
              B2B Sales-as-a-Service for high-growth technology companies. SDR
              pods, full-cycle Account Executives and RevOps, delivered from
              Pakistan to the world.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#process">How it works</a>
              </li>
              <li>
                <a href="#client-impact">Client impact</a>
              </li>
              <li>
                <a href="#why-afa">Why AFA Technologies</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="#solutions">Outbound SDR pods</a>
              </li>
              <li>
                <a href="#solutions">Full-cycle Account Executives</a>
              </li>
              <li>
                <a href="#solutions">RevOps and GTM infrastructure</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:hello@afatechnologies.online">
                  hello@afatechnologies.online
                </a>
              </li>
              <li>Pakistan</li>
              <li>
                <a href="#" aria-label="AFA Technologies on LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-cta">
          <p>Ready to build your pipeline?</p>
          <a className="btn btn--cyan" href="#contact">
            Book a growth strategy call
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; <span>{year}</span> AFA Technologies. All rights reserved.
          </span>
          <nav aria-label="Legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
