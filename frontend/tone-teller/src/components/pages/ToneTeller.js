import '../../App.css';
import React, {useState} from "react";
import axios from "axios";

export default function ToneTeller() {
  const [data,setData]=useState(null)
  function getData(val)
  {
    setData(val.target.value)
  }
  async function getDataBackend()
  {
    // axios call to backend async and await and print to console else print error
    await axios.post("https://tone-teller-ezen7qibyq-nn.a.run.app/tonetelling", {
      input : data
    }).then(res => {
      console.log(res.data)}
    )
    .catch(err => {
      console.log(err)
    })

  }
  return (
    <div className="ToneTeller">
      <input type="text" onChange={getData}/>
      <button onClick={()=>getDataBackend()} >Analyze</button>
    </div>
  );
}