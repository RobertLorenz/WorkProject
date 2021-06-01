import './App.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";



function Party() {

  const [activity, setActivity] = useState("");
  const [input,setInput] = useState("");
 

  const getInput = (event) => {
    Axios.get("http://www.boredapi.com/api/activity?participants="+ event.target.value).then(response =>{
      if(response.data.participants === undefined){
        setActivity("No activites with given participants.");
      } else {
      //console.log(event);
      setActivity("Activity: "   + response.data.activity +  ", Type: "  + response.data.type  + ", Participants: " + response.data.participants);
      }
    })
  }

  return (
    <>
    <div className="random">
      {activity}
    </div>
    <br/> <form className="input">
    <label>Activity Search By Participants</label><br/>
      <input value={input} type="text" onChange={getInput}/>
      <input value="Send" type="submit"/>
    </form><br/> 
    </>
  );
}

export default Party;
