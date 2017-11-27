import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
  <div className="UserOutput" style={props.style}>
    <p>You're doing well, {props.username}.</p>
    <p>Keep on going.</p>
  </div>
  );
}

export default userOutput;
