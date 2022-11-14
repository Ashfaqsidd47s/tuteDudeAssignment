import React from 'react';
import FriendCard from '../friendsCard/FriendCard';
import "./friendsEnrolled.css";
import {friendsList} from "../../data/demoData";

function FriendsEnrolled() {
  return (
    <div className="friendsEnrolled">
        <h2 className="friendsEnrollTitle">Friends who enrolled(3)</h2>
        <div className="cardSlider">
            {friendsList.map((friend)=> <FriendCard friend={friend} />)}
        </div>
    </div>
  )
}

export default FriendsEnrolled
