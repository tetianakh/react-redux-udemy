import React, { Component } from 'react';
import classes from './Person.css';

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
      <div className={classes.Person}>
        <p onClick={this.props.click}>{ this.props.name } is {this.props.age} years old.</p>
        <input onChange={this.props.changed} defaultValue={this.props.name}></input>
      </div>

    );
  }
}



export default Person;
