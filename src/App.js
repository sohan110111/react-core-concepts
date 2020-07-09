import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var person = {
  //   name : "Dr. Mafuzar Rahman",
  //   profession : "Professor"
  // } 
  // var person2 = {
  //   name : "Eva Rahman",
  //   job : "Singer"
  // }
  // var style = {
  //   color : 'red',
  //   backgroundColor : "yellow"
  // }
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className = "" style = {style}>Hello : {person.name + "\n" + person.profession} </h1>
        <h3 style = {{backgroundColor: 'cyan'}}>Another Person : {person2.name + " " + person2.job}</h3>
        <p>My first react Paragraph</p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
