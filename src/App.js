import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: '',
    username: 'SaiDei',
    persons: [
      { id: '1', name: 'Sai', age: 29 },
      { id: '2', name: 'Max', age: 28 },
      { id: '3', name: 'Stephanie', age: 26 }
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  // Assignment Two Method

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');

    this.setState({ userInput: updatedText });
  }


  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '5px',
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
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div >
      );

      style.backgroundColor = 'red';
    }

    // Assignment Two
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    });

    // Styling lecture
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App" >
        <br></br>

        <p className={classes.join(' ')}>I'm a React App!</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle List
        </button>

        {/* If show Persons == true, show the list */}
        {persons}
        {/* If show Persons == false, remain hidden */}
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>

        {/* Assignment */}

        <input type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />

        <p>{this.state.userInput}</p>

        <Validation
          inputLength={this.state.userInput.length} />

        {charList}

        <br></br>
        <hr></hr>
        <br></br>
      </div>
    );
  }
}

export default App;