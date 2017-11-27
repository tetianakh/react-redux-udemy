import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';


const A = 1;
const B = 0;

class App extends Component {

  persons_A = [
    {pic: '💃🏽', age: 25},
    {pic: '🤔', age: 31}
  ]
  persons_B = [
    {pic: '👻', age: 28},
    {pic: '💁🏽‍♂️', age: 26}
  ]

  state = {
    persons: this.persons_A,
    phase: A
  }



  switchNameHandler = (phase) => {
    if (phase === A) {
      this.setState({
        persons: this.persons_B,
        phase: B
      })
    } else {
      this.setState({
        persons: this.persons_A,
        phase: A
      })
    }
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {pic: '👻', age: 28},
        {pic: event.target.value, age: 26}
      ]
    })
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
        <h1>Hi, I'm a react app</h1>
        <button style={style}
          onClick={this.switchNameHandler.bind(this, A)}>Switch Name</button>
        <Person
          pic={this.state.persons[0].pic}
          age={this.state.persons[0].age} />
        <Person
          pic={this.state.persons[1].pic}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler(B)}
          changed={this.nameChangedHandler} >My hobbies: reading</Person>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!!!'));
  }
}

export default App;
