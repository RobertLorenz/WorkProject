import './App.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";
import ByKey from './ByKey';
import Party from './Party';
import NavBar from './NavBar';
import { Route, Link } from 'react-router-dom';

function App() {

  const [activity, setActivity] = useState("");
  const [input,setInput] = useState("");
  const [activities,setActivities] = useState("");
  const [key, setKey] = useState("");

  const getRandomActivity = () => {
    Axios.get("http://www.boredapi.com/api/activity/").then(response => {
      setActivity("Activity: "   + response.data.activity +  ", Type: "  + response.data.type  + ", Participants: " + response.data.participants);
    })
  }

 /* const getInput = (event) => {
    Axios.get("http://www.boredapi.com/api/activity?participants="+ event.target.value).then(response =>{
      if(response.data.participants === undefined){
        setActivity("No activites with given participants.");
      } else {
      //console.log(event);
      setActivity("Activity: "   + response.data.activity +  ", Type: "  + response.data.type  + ", Participants: " + response.data.participants);
      }
    })
  }

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

*/
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
    <div>
      <NavBar />
      <Route exact path="/ByKey" component={ByKey} />
      <Route exact path="/Party" component={Party} />
    </div>
    <div className="random">
      {activity}
    </div>
    </>
  );
}

export default App;
