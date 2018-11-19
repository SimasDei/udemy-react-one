import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>My name is {props.name}. I am {props.age} years old</p>
      <p>{props.children}</p>
    </div>

  )
};

export default person;