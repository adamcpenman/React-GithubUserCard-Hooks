import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./userCard";
import { tsPropertySignature } from "@babel/types";

function User() {
  const [userList, setUserList] = useState([]);
  const [userPic, setuserPic] = useState();
  const [userLogin, setUserLogin] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  const [userBio, setUserBio] = useState([]);
  const [userFollowers, setUserFollowers] = useState([]);

  useEffect(() => {
    // const axiosUser = () => {
    axios
      .get("https://api.github.com/users/adamcpenman")
      .then(response => {
        setUserList(response.data.name);
        setuserPic(response.data.avatar_url);
        setUserLogin(response.data.login);
        setUserLocation(response.data.location);
        setUserBio(response.data.bio);
        setUserFollowers(response.data.followers);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error, "error");
      });
    // };
    // axiosUser();
  }, []);

  return (
    <div>
      <h1> UserCard</h1>
      {/* {userList.map((user, index) => { 
        return 
        <UserCard
          key={user.id}
          user={user}
          name={user.name}
          avatar_url={user.avatar_url}
          UserName={user.login}
        />
      })} */}

      <UserCard
        name={userList}
        avatar_url={userPic}
        login={userLogin}
        location={userLocation}
        bio={userBio}
        followers={userFollowers}
      />
    </div>
  );
}

export default User;
