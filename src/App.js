import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'SaiDei',
    persons: [
      { name: 'Sai', age: 29 },
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // Set does show To opposite of current state
    this.setState({ showPersons: !doesShow });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 29 },
        { name: 'Max', age: 28 },
        { name: 'Stephanie', age: 26 },
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null

    if (this.state.showPersons) {
      persons = (
        < div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          })}
        </div >
      );
    }

    return (
      <div className="App" >
        <br></br>

        <UserInput
          changed={this.usernameChangedHandler} currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='Sai' />

        <br></br>
        <hr></hr>
        <br></br>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle List
        </button>

        {/* If show Persons == true, show the list */}
        {persons}
        {/* If show Persons == false, remain hidden */}
      </div>
    );
  }
}

export default App;