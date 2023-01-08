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
      <nav className="navheader">
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
              <a className="nav-links"  target="_blank" href="https://github.com/Hackathon-Hacked2023/DivineInspiration/releases/tag/v1">Chrome Extension</a>
            </li>


            <li>
              <Link
                to="/toneteller"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Try Tone Teller!
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Try Tone Teller</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavHeader;
