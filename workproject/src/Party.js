import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import React, { useState } from "react";

function App() {

  const [activity, setActivity] = useState("");

  const getParty = () => {
    Axios.get("http://www.boredapi.com/api/activity/").then((response) => {
      console.log(response);
      setActivity("Activity: "   + response.data.activity +  ", Type: "  + response.data.type  + ", Participants: " + response.data.participants);
      
    })
  }

  return (
    <div class="random">
      <button onClick={getRandomActivity}>Get Activity</button><br></br>
      {activity}
    </div>
  );
}

export default App;