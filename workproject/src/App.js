import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import React, { useState } from "react";

function App() {

  const [activity, setActivity] = useState("");

  const getRandomActivity = () => {
    Axios.get("http://www.boredapi.com/api/activity/").then((response) => {
      console.log(response);
      setActivity("Activity:\n "  + response.data.activity + ", Type:\n " + response.data.type + ", Participants:\n " + response.data.participants);
    })
  }

  return (
    <div>
      <button onClick={getRandomActivity}>Nyomd meg</button><br></br>
      {activity}
    </div>
  );
}

export default App;
