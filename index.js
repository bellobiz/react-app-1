import React from "react";
import ReactDOM from "react-dom";
import Myapp from './Person/Person';
import App from './App';
import "./index.css";

const Person = (prop) => {
  return (
    <div className="person">
      <App />
      <h2>Name: {prop.name}</h2>
      <p>Age: {prop.age}</p>
      <Myapp />
    </div>
  );
};

var display = (
  <div>
    <Person name='Max' age='28' />
    <Person name='Manu' age='29' />
    <Person name='Bello' age='26' />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(display, rootElement);
