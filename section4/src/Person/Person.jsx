import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>{ props.name } is {props.age} years old.</p>
      <input onChange={props.changed} defaultValue={props.name}></input>
    </div>

  );
}


export default person;
