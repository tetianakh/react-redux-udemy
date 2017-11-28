import React, { PureComponent } from 'react';
import classes from './App.css';
import People from '../components/People/People.jsx';
import Cockpit from '../components/Cockpit/Cockpit.jsx';
import withClass from '../hoc/withClass.jsx';
import Aux from '../hoc/Aux.jsx';

class App extends PureComponent {
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

  // Using PureComponent is the same as checking if each of the props attributes changed
  // or if any of the state attributes changed (analogous to the code below).
  // caution: only does shallow comparison (reference).
  //
  // shouldComponentUpdate (nextProps, nextState) {
  //   // DO: decide whether to continue or not
  //   // DON'T: cause side effects
  //   return nextState.people !== this.state.people ||
  //   nextState.showPeople !== this.state.showPeople;
  // }

  componentWillUpdate (nextProps, nextState) {
    // DO: Sync state to props
    // DON'T: cause side effects
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate () {
    // DO: Cause side effects
    // DON'T: update state (triggers re-render)
    console.log('[UPDATE App.js] inside componentDidUpdate')
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
      <Aux>
        <Cockpit
          showPeople={this.state.showPeople}
          peopleLength={this.state.people.length}
          clicked={this.showPeopleHandler}
          appTitle={this.props.title}
          />
        {people}
      </Aux>
    );

  }
}

export default withClass(App, classes.App);
