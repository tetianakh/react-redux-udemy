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
    console.log('[UPDATE People.js] inside shouldComponentUpdate', nextProps, nextState)
    return nextProps.people !== this.props.people;
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('[UPDATE People.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate () {
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
