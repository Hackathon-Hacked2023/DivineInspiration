import "./style/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="landing-hero">
      <div class="hero-img">
        <img class="hero-img" src="/images/landing_image.png"></img>
      </div>

      <div className="hero-heading-and-text">
        <p className="heading-1">
          Know what they <span className="highlighted heading-1">really </span>
          mean
        </p>
        <p className="heading-7">
          Tired of trying to decipher the tone of an email or text message? Do
          you want to communicate with greater empathy and understanding?
        </p>

        <button className="heading-6 primary-button">
          Try Toneteller today
        </button>
      </div>
    </div>
  );
}
