import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading heading-3">
          easy-to-use semantics analysis tool
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper"></div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Tone Teller
              <i class="fas fa-sms" />
            </Link>
          </div>
          <small class="website-rights">
            Hacked by Christina, Aniket, Ray, Julia, Trinity, Yui
          </small>
          <small class="website-rights">HackED © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
