import React, { Component } from 'react';
import './App.css';
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid grey',
      padding: '8px',
      cursor: 'pointer',
    };

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
    }

    return (
      <div className="App">
        <h1>Section 4: lists</h1>
        <button style={style}
          // cannot use block statements inside jsx code, only one-liners
          onClick={this.showPeopleHandler}>{this.state.showPeople ? "Hide" : "Show"} People</button>
        {people}
      </div>
    );
  }
}

export default App;
