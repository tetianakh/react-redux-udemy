import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';


class App extends Component {

  state = {
    people: [
      {name: 'Max', age: 26},
      {name: 'Ann', age: 27},
    ]
  }

  switchNameHandler = (phase) => {
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid grey',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Section 4</h1>
        <button style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age} />
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age} />

      </div>
    );
  }
}

export default App;
