import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function App() {

  const [activity, setActivity] = useState("");
  const [input,setInput] = useState("");
  const [activities,setActivities] = useState("");

  const getRandomActivity = () => {
    Axios.get("http://www.boredapi.com/api/activity/").then(response => {
      setActivity("Activity: "   + response.data.activity +  ", Type: "  + response.data.type  + ", Participants: " + response.data.participants);
    })
  }

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

  const getInput = (event) => {
    Axios.get("http://www.boredapi.com/api/activity?key="+ event.target.value).then(response =>{
      if(response.data.key === undefined){
        setActivity("No activites with given key");
      } else {
      //console.log(event);
      setActivity("Activity: "   + response.data.activity +  ", Type: "  + response.data.type  + ", Participants: " + response.data.participants);
      }
    })
  }



  const getActivities = () => {
    Axios.get("http://www.boredapi.com/api/activity?minaccessibility=0&maxaccessibility=0.5").then(response =>{
        setActivities("Activity: " + response.data.activity);
    })
  }


  useEffect(() => {
    //console.log("asd");
    getRandomActivity();
  },[]);

  useEffect(() => {
    getActivities();
  },[])

  return (
    <>
    <div className="random">
      {activity}
    </div>
    <form className="input">
    <label>Activity Search</label><br/>
      <input value={input} type="text" onChange={getInput}/>
      <input value="Send" type="submit"/>
    </form>
    <div className="list">
      {activities}
    </div>
    </>
  );
}

export default App;
