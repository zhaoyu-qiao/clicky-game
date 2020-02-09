import React from "react";
import "./style.css";

// if non of them is clicked, on click, score +1, shuffle, change isclicked to true
// if the one that's clicked has isclicked to true, reset score, reset game, css shake
// there should be an event listener, if a friend card is clicked,
// change something that's displayed on nav using a method.
function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Movie:</strong> {props.movie}
          </li>
        </ul>
      </div>
      <span className="remove">
      
      </span>
    </div>
  );
}

export default FriendCard;
