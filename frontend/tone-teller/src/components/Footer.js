import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-img">
        <img src="/images/toneteller-logo-and-text.png"></img>
      </div>

      <div className="heading-6">A sentiment analysis tool</div>

      <div className="body-text">
        Hacked with ❤️ by Christina, Aniket, Ray, Julia, Trinity, and Yui
      </div>

      <div className="caption-text">HackED © 2023</div>
    </div>

    // <div className="footer-container">
    //   <section className="footer-subscription">
    //     <p className="footer-subscription-heading heading-3">
    //       easy-to-use semantics analysis tool
    //     </p>
    //   </section>
    //   <div class="footer-links">
    //     <div className="footer-link-wrapper"></div>
    //   </div>
    //   <section class="social-media">
    //     <div class="social-media-wrap">
    //       <div class="footer-logo">
    //         <Link to="/" className="social-logo">
    //           Tone Teller
    //           <i class="fas fa-sms" />
    //         </Link>
    //       </div>
    //       <div class="website-rights body-text">
    //         Hacked by Christina, Aniket, Ray, Julia, Trinity, Yui
    //       </div>
    //       <div class="website-rights caption-text">HackED © 2023</div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Footer;
