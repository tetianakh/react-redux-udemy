import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.jsx';


class App extends Component {

  state = {
    people: [
      {name: 'Max', age: 26, id:'djfhfs'},
      {name: 'Ann', age: 27, id:'ljalda',},
      {name: 'Stephan', age: 35, id:'ldyqodw'},
      {name: 'Mary', age: 16, id:'oiwuqe'},
    ],
    showPeople: false
  }

  showPeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }


  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => p.id === id);
    const person = {...this.state.people[personIndex]};
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState({people: people})
  }

  render() {
    let buttonClass = '';
    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>{
            this.state.people.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)} />
            }
          )
        }</div>);
        buttonClass = classes.Red;
    }

    const assignedClasses = []
    if (this.state.people.length <= 2){
      assignedClasses.push( classes.red );
    }
    if (this.state.people.length <= 1){
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1>Section 7: Components</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={buttonClass}
          onClick={this.showPeopleHandler}>{this.state.showPeople ? "Hide" : "Show"} People</button>
        {people}
      </div>
    );
  }
}

export default App;
