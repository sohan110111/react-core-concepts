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
  const nayoks = ["Anower", "Salman", "Faruk", "Dilshan"];
  const nayika = ["Mousumi", "Purnima", "Emma", "Amily"];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person nayok={nayoks[0]} nayika={nayika[0]}></Person>
        <Person nayok={nayoks[1]} nayika={nayika[1]}></Person>
        <Person nayok={nayoks[2]} nayika={nayika[2]}></Person>
        <Person nayok={nayoks[3]} nayika={nayika[3]}></Person>
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
function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props);
  return (
  <div style = {personStyle}> 
  {/* {border: '2px solid yellow', margin: "10px"} */}
  <h1>Nayok : {props.nayok}</h1>
    <h3>Hero of {props.nayika}.</h3>
  </div>
  )
}

export default App;
