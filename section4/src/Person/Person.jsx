import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p>{ props.name } is {props.age} years old.</p>
    </div>

  );
}


export default person;
