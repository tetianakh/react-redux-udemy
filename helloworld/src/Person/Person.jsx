import React from 'react'
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
      <p>I'm { props.age } years old <span role="img" aria-label="Emoji">{ props.pic }</span></p>
      <p onClick={props.click}>{ props.children }</p>
      <input type="text" onChange={props.changed} defaultValue={props.pic}/>
    </div>

  );
}


export default person;
