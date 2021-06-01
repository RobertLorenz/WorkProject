import './App.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";


function Act() {

  const [activities,setActivities] = useState(null);
 
 const getActivities = () => {
   let activityArray = [];
  for(let i = 0; i < 10; i++){
    Axios.get("http://www.boredapi.com/api/activity?minaccessibility=0&maxaccessibility=0.5").then(response =>{
      activityArray.push(response.data);
    })
  }
  setActivities(activityArray);
  }

 useEffect(() => {
    getActivities();
  },[])

  return (
      <div>
      {activities && activities.map((element,id)=><div key={id}>
          {"Activity: " + element.activity + ", Accessibility: " + element.accessibility + ", Type: " + element.type + ", Price: " + element.price + ", Participants: " + element.participants}
      </div>)}
      </div>
  );
}

export default Act;
