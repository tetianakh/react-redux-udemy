import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People.jsx';
import Cockpit from '../components/Cockpit/Cockpit.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props)
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount')
  }

  componentWillUnmount() {
    console.log('[App.js] inside componentWillUnount')
  }

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
    console.log('[App.js] inside render')
    let people = null;

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPeople={this.state.showPeople}
          peopleLength={this.state.people.length}
          clicked={this.showPeopleHandler}
          appTitle={this.props.title}
          />
        {people}
      </div>
    );

  }
}

export default App;
