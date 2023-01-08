import React, { useState } from "react";

// display header and textbox when routed to the landing page
export default function Landing() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
    setPrint(false);
    console.warn(val.target.value);
  }
  return (
    // add textbox
    <div className="App">
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Analyze</button>
    </div>
  );
}
