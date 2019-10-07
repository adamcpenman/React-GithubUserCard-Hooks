import React from "react";

function UserCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.avatar_url} alt="avatar" />
      <p>UserName: {props.login} </p>
      <p>Location: {props.location}</p>
      <p>Bio: {props.bio} </p>
      <p>Followers: {props.followers}</p>
      <p>Following: {props.following}</p>
      {props.children}
    </div>
  );
}

export default UserCard;
