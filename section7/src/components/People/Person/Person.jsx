import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    if (this.props.position === 0){
      this.inputElement.focus()
    }
  }

  componentWillUnmount() {
    console.log('[Person.js] inside componentWillUnount')
  }

  render = () => {
    console.log('[Person.js] inside render')
    return (
      <Aux>
        <p onClick={this.props.click}>{ this.props.name } is {this.props.age} years old.</p>
        <input
          // ref is a special React property
          // dont use it for styling etc, only for stuff like focusing, media playback etc
          // this will create a new property when render() is executed
          ref = {(inp) => { this.inputElement = inp}}
          type="text" // type should have been here before, I forgot it
          onChange={this.props.changed}
          defaultValue={this.props.name} />
      </Aux>
    );
  }
}

// will log a warning if types don't match
// doesn't work with functional components
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, classes.Person);
