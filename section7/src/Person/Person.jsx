import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>{ props.name } is {props.age} years old.</p>
      <input onChange={props.changed} defaultValue={props.name}></input>
    </div>

  );
}


export default person;
