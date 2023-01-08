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
      {print ? <h1>{data}</h1> : null}

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
  );
}
