import React, { useState, useEffect } from "react";
import axios from "axios";

function FollowerCard(props) {
  return (
    <div>
      <div>
        <div onClick={props.onClick}>
          <img src={props.follower.avatar_url} alt="avatar" />
          {props.follower.login}
        </div>
      </div>
    </div>
  );
}

export default FollowerCard;
