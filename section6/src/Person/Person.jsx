import React from 'react';
import classes from './Person.css';

const person = (props) => {
  if (Math.random() > 0.7) {
    throw new Error ('Something went wrong. Oops!')
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>{ props.name } is {props.age} years old.</p>
      <input onChange={props.changed} defaultValue={props.name}></input>
    </div>

  );
}


export default person;
