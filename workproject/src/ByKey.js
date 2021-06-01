import './App.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";


function ByKey({key, setActivity}) {

 
    const getKey = (event) => {
      Axios.get("http://www.boredapi.com/api/activity?key="+ event.target.value).then(response =>{
        if(response.data.key === undefined){
          setActivity("No activites with given key.");
        } else {
        setActivity("Activity: "   + response.data.activity +  ", Type: "  + response.data.type  + ", Participants: " + response.data.participants);
        }
      })
    }
  
  
    return (
      <>
      <br/><form className="input">
      <label>Activity Search By Key</label><br/>
        <input value={key} type="text" onChange={getKey}/>
      </form>
      </>
    );
  }
  
  export default ByKey;
  
