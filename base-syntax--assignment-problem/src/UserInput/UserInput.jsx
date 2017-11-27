import React from 'react';

const userInput = (props) => {
  return (
  <div style={props.style}>
    <input type="text" onChange={props.handler} defaultValue={props.username}/>
  </div>
  );
}

export default userInput;
