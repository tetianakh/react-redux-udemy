import React, { Component } from 'react';
import Person from './Person/Person.jsx'


class People extends Component{

  constructor(props) {
    super(props);
    console.log('[People.js] inside constructor', props)
  }

  componentWillMount() {
    console.log('[People.js] inside componentWillMount')
  }

  componentDidMount() {
    console.log('[People.js] inside componentDidMount')
  }

  componentWillUnmount() {
    console.log('[People.js] inside componentWillUnount')
  }

  componentWillReceiveProps (nextProps) {
    console.log('[UPDATE People.js] inside componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // DO: decide whether to continue or not
    // DON'T: cause side effects
    console.log('[UPDATE People.js] inside shouldComponentUpdate', nextProps, nextState)
    return nextProps.people !== this.props.people;
  }

  componentWillUpdate (nextProps, nextState) {
    // DO: Sync state to props
    // DON'T: cause side effects
    console.log('[UPDATE People.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate () {
    // DO: Cause side effects
    // DON'T: update state (triggers re-render)
    console.log('[UPDATE People.js] inside componentDidUpdate')
  }

  render = () => {
    console.log('[People.js] inside render')
    return this.props.people.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
        click={() => this.props.clicked(index)} />
      }
  )}
}

export default People;
