import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./style/NavHeader.css";

function NavHeader() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navigation-div">
        <div
          className={
            click
              ? "navigation-content background-yellow"
              : "navigation-content"
          }
        >
          <div className="navigation-img">
            <img src="/images/toneteller_logo_48.png"></img>
          </div>
          <div className="navigation-right-column">
            <div className="navigation-links"></div>
            <div
              onClick={handleClick}
              className={click ? "navigation-close" : "navigation-menu"}
            ></div>
          </div>
        </div>
        <div className={click ? "navigation-mobile" : "display-none"}>
          <div className="navigation-mobile-links">
            <Link to="/" className="heading-4" onClick={closeMobileMenu}>
              Home
            </Link>

            <a
              className="heading-4"
              target="_blank"
              href="https://github.com/Hackathon-Hacked2023/DivineInspiration/releases/tag/v1"
            >
              Download
            </a>

            <a
              className="heading-4"
              target="_blank"
              href="https://devpost.com/software/toneteller"
            >
              Devpost
            </a>

            <a
              className="heading-4"
              target="_blank"
              href="https://github.com/Hackathon-Hacked2023/DivineInspiration"
            >
              Github
            </a>

            <Link
              to="/toneteller"
              className="heading-4"
              onClick={closeMobileMenu}
            >
              Try Toneteller!
            </Link>
          </div>

          <div className="navigation-mobile-information">
            <div className="body-text">
              Hacked with ❤️ by Christina, Aniket, Ray, Julia, Trinity, and Yui
            </div>

            <div className="caption-text">HackED © 2023</div>
          </div>
        </div>
      </nav>

      {/* <nav className="navheader">
        <div className="navheader-container">
          <Link to="/" className="navheader-logo" onClick={closeMobileMenu}>
            Toneteller
            <i class="fas fa-sms" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                className="nav-links"
                target="_blank"
                href="https://github.com/Hackathon-Hacked2023/DivineInspiration/releases/tag/v1"
              >
                Chrome Extension
              </a>
            </li>

            <li>
              <Link
                to="/toneteller"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Try Toneteller!
              </Link>
            </li>
          </ul>
          {button && (
            <button className="primary-button body-title">
              Try Toneteller today
            </button>
          )}
        </div>
      </nav> */}
    </>
  );
}

export default NavHeader;
