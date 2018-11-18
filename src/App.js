import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a React App!</h1>
        <p>Working as Intended</p>
        <Person />
      </div>
    );
  }
}

export default App;