import React from 'react';
import classes from './Cockpit.css'


const cockpit = (props) => {

  let buttonClass = '';

  if (props.showPeople){
    buttonClass = classes.Red;
  }

  const assignedClasses = []
  if (props.peopleLength <= 2){
    assignedClasses.push( classes.red );
  }
  if (props.peopleLength <= 1){
    assignedClasses.push( classes.bold );
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Section 7: Components</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={buttonClass}
        onClick={props.clicked}>{props.showPeople ? "Hide" : "Show"} People</button>
    </div>
  );

};



export default cockpit;
