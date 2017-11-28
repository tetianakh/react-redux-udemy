import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux.jsx';


const cockpit = (props) => {

  let buttonClass = classes.Button;

  if (props.showPeople){
    buttonClass = [buttonClass, classes.Red].join(' ');
  }

  const assignedClasses = []
  if (props.peopleLength <= 2){
    assignedClasses.push( classes.red );
  }
  if (props.peopleLength <= 1){
    assignedClasses.push( classes.bold );
  }

  return (
    <Aux>
      <h1>Section 7: Components</h1>
      <h2>{props.appTitle}</h2>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={buttonClass}
        onClick={props.clicked}>{props.showPeople ? "Hide" : "Show"} People</button>
    </Aux>
  );

};



export default cockpit;
