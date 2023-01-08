import React, { useState } from "react";
import "./style/Toneteller.css";


let tones = {
  curiosity: "curiosity 🤔",
  joy: "Happy 🙂",
  love: "love 😍",
  admiration: "admiration 🏆",
  approval: "approval 👍",
  caring: "caring 💝",
  exitement: "exitement 😃",
  amusement: "amusement 😄",
  gratitude: "gratitude ❓",
  desire: "desire ❓",
  anger: "anger 😠",
  optimism: "optimism ❓",
  disapproval: "disapproval 👎",
  grief: "grief 😢",
  annoyance: "annoyance 😩",
  pride: "pride 😏",
  disgust: "disgust 🤮",
  disappointment: "disappointment 😬",
  realization: "realization ?",
  fear: "fear 😨",
  relief: "relief ?",
  confusion: "confusion 🤔",
  remorse: "remose ?",
  embarrassment: "embarrassment 😳",
  surprise: "surprise 😮",
  sadness: "sadness 😭",
  nervousness: "nervousness 😖",
  neutral: "neutral 😑"
}


// display header and textbox when routed to the landing page
export default function Toneteller() {
  const [tone, setTone] = useState(null);
  const [print, setPrint] = useState(false);



  const fetchData = () => {
    console.log("weee woo", document.getElementById("inputField").value)
    setPrint(true)
    fetch("https://tone-teller-ezen7qibyq-nn.a.run.app/tonetelling", {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      mode: 'cors',
      body: JSON.stringify(
        {
          "input": document.getElementById("inputField").value
        }
      )
    }).then((res) => {
      return res.json();
    }).then((data) => {
      data = data[0];
      setTone(tones[data[0]['label']]);
    })
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
          <div className="body-title">Sentiment for prompt: {tone}</div>
        ) : (
          <div className="body-text">{null}</div>
        )}
        {print ? (
          <div className="body-text">
            <i>{document.getElementById("inputField").value}</i>
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
          <input id="inputField" type="text" onChange={() => { setPrint(false) }}  onKeyUp={
              (e) => {
               console.log(e.key)
                if (e.key === 'Enter') {
                  fetchData()
                }
              }
            } />
          <button
            className="primary-button button-sm body-title"
            onClick={() => fetchData()}
          
          >
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
}
