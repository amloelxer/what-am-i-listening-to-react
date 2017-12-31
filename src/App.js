import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

import './App.css';

class App extends Component {

  render() {
    axios.get('https://desolate-shore-97449.herokuapp.com/').then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
