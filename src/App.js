import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'SaiDei'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {

    return (
      <div className="App">
        <br></br>
        <UserInput
          changed={this.usernameChangedHandler} currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='Sai' />
      </div>
    );
  }
}

export default App;