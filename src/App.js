import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Sai', age: 29 },
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    console.log('was clicked');
    this.setState({
      persons: [
        { name: 'Simas', age: 29 },
        { name: 'Max', age: 28 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I am a React App!</h1>
        <p>Working as Intended</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}>
          Hobbies: Sports
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;