import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass.jsx';
import Aux from '../../../hoc/Aux.jsx';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount')
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount')
  }

  componentWillUnmount() {
    console.log('[Person.js] inside componentWillUnount')
  }

  render = () => {
    console.log('[Person.js] inside render')
    return (
      <Aux>
        <p onClick={this.props.click}>{ this.props.name } is {this.props.age} years old.</p>
        <input onChange={this.props.changed} defaultValue={this.props.name}></input>
      </Aux>
    );
  }
}



export default withClass(Person, classes.Person);
