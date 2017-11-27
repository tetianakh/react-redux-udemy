import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.jsx'
import UserOutput from './UserOutput/UserOutput.jsx'

class App extends Component {
  state = {
    username: 'Max'
  }
  changeUsernameHandler = (event) => {
    this.setState(this.state = {username: event.target.value});
  }

  render() {
    const textStyle = {
      color: '#606060'
    }

    const inputStyle = {
      textAlign: 'center',
      width: '40%',
      margin: '16px auto',

    }

    return (
      <div className="App">
        <div style={{width: '40%', margin: '16px auto'}}>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        </div>
        <UserInput handler={this.changeUsernameHandler} username={this.state.username} style={inputStyle}/>
        <UserOutput username={this.state.username} style={textStyle}/>
        <UserOutput username={this.state.username} />

      </div>
    );
  }
}

export default App;
