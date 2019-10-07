import React, { useState, useEffect } from "react";
import axios from "axios";

function Followers() {
  const [followersList, setFollowersList] = useState(["adamcpenman"]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${followersList}/followers`)
      .then(response => {
        setFollowersList(response.data.login);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error, "error");
      });
  }, []);
  return <div />;
}

export default Followers;
