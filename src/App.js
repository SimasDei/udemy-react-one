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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Max', age: 28 },
        { name: 'Stephanie', age: 26 }
      ]
    })
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

    return (
      <div className="App">
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
        {
          this.state.showPersons === true ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'Jimbo Texas!')}
                changed={this.nameChangedHandler}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
              />
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
              />
              {/* If show Persons == false, remain hidden */}
            </div> : null
        }
      </div>
    );
  }
}

export default App;