import React from 'react';
import Person from './Person/Person.jsx'


const people = (props) => props.people.map((person, index) => {
  return <Person
    key={person.id}
    name={person.name}
    age={person.age}
    changed={(event) => props.changed(event, person.id)}
    click={() => props.clicked(index)} />
  }
)

export default people;
