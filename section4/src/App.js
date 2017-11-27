import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';


class App extends Component {

  state = {
    people: [
      {name: 'Max', age: 26},
      {name: 'Ann', age: 27},
    ],
    showPeople: false
  }

  showPeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
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
        <div>
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age} />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age} />
        </div>);
    }

    return (
      <div className="App">
        <h1>Section 4: conditionals</h1>
        <button style={style}
          // cannot use block statements inside jsx code, only one-liners
          onClick={this.showPeopleHandler}>{this.state.showPeople ? "Hide" : "Show"} People</button>
        {people}
      </div>
    );
  }
}

export default App;
