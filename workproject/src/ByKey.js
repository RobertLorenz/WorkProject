import './App.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";


function ByKey() {

    const [activity, setActivity] = useState("");
    const [key, setKey] = useState("");
  
  
    const getKey = (event) => {
      Axios.get("http://www.boredapi.com/api/activity?key="+ event.target.value).then(response =>{
        if(response.data.key === undefined){
          setActivity("No activites with given key.");
        } else {
        //console.log(event);
        setActivity("Activity: "   + response.data.activity +  ", Type: "  + response.data.type  + ", Participants: " + response.data.participants);
        }
      })
    }
  
  
    return (
      <>
      <div className="random" onChange={getKey}>
      {activity}
    </div>
      <br/><form className="input">
      <label>Activity Search By Key</label><br/>
        <input value={key} type="text" onChange={getKey}/>
        <input value="Send" type="submit" />
      </form>
      </>
    );
  }
  
  export default ByKey;
  
