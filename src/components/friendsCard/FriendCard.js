import React from 'react';
import "./friendCard.css";

function FriendCard({friend}) {
  return (
    <div className="friendCard">
        <div className="cartTop">
            <h3 className="cardUserName">{friend.name}</h3>
            <p className="cardDate">{friend.Date}</p>
        </div>
        <p className="courseEnrolledTitle">Course Enrolled(6)</p>
        <div className="coursesList">
            {friend.courses.map((course)=>(
              <div className="course"><p>{course}</p></div>
            ))}
        </div>
        <div className="refralAmountContainer">
            <p>Referall Amount </p>
            <h4 className="refralAmount">${friend.amount}</h4>
        </div>
    </div>
  )
}

export default FriendCard
