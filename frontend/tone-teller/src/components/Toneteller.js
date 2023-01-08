import React, { useState } from "react";
import "./style/Toneteller.css";

// display header and textbox when routed to the landing page
export default function Toneteller() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
    setPrint(false);
    console.warn(val.target.value);
  }
  return (
    // add textbox
    <div className="toneteller-div">
      <div className="toneteller-text">
        {print ? (
          <div className="heading-3">Analyzing sentiment...</div>
        ) : (
          <div className="heading-3">Welcome to Toneteller!</div>
        )}
        {print ? (
          <div className="body-title">Analyzing sentiment for prompt</div>
        ) : (
          <div className="body-text">{null}</div>
        )}
        {print ? (
          <div className="body-text">
            <i>{data}</i>
          </div>
        ) : (
          <div className="body-text">
            Tired of trying to decipher the tone of an email or text message? Do
            you want to communicate with greater empathy and understanding?
            Enter a prompt below and decipher the tone and sentiment of its
            writer.
          </div>
        )}
      </div>

      <div className="enter-prompt-div">
        <div className="enter-prompt-input-text body-title">Enter a prompt</div>
        <div className="toneteller-input-div">
          <input type="text" onChange={getData} />
          <button
            className="primary-button button-sm body-title"
            onClick={() => setPrint(true)}
          >
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
}
