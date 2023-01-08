import React, {useState} from "react";


// display hello world when routed to the landing page
export default function Landing() {
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  function getData(val)
  {
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
  }
  return (
    // add textbox
    <div className="App">
      {/* {
        print?
        :null
      } */}
      <h1>Enter a prompt</h1>
      <input type="text" onChange={getData}/>
      <button onClick={()=>setPrint(true)} >Analyze</button>
    </div>
  );
}



