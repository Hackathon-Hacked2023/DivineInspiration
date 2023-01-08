import "./style/Hero.css";

export default function Hero() {
  return (
    <div className="landing-hero">
      <div class="hero-img">
        <img class="hero-img" src="/images/landing_image.png"></img>
        <img class="hero-text" src="/images/landing_text.svg"></img>
      </div>
      <p className="heading-7">
        Tired of trying to decipher the tone of an email or text message? Do you
        want to communicate with greater empathy and understanding?
      </p>

      <button className="heading-6 primary-button">Try Toneteller today</button>
    </div>
  );
}
