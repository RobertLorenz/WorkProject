import './App.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";
import ByKey from './ByKey';
import Party from './Party';
import NavBar from './NavBar';
import Act from './Act';
import { Route, Link } from 'react-router-dom';

function App() {

  const [activity, setActivity] = useState("");
  const [key, setKey] = useState("");

  const getRandomActivity = () => {
    Axios.get("http://www.boredapi.com/api/activity/").then(response => {
      setActivity("Activity: "   + response.data.activity +  ", Type: "  + response.data.type  + ", Participants: " + response.data.participants);
    })
  }

  useEffect(() => {
    getRandomActivity();
  },[]);


  return (
    <>
    <div>
      <NavBar />
      <Route exact path="/ByKey" render={(props) => (
    <ByKey setActivity={ (obj) => setActivity(obj)} key={key}/>
    )} />

    <Route exact path="/Party" render={(props) => (
    <Party setActivity={ (obj) => setActivity(obj)} />
    )} />
    <Route exact path="/Act" component={Act} />
    </div>
    <div className="random">
      {activity}
    </div>
    </>
  );
}

export default App;
