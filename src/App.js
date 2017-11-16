import React, { Component } from 'react';
import EBIA from './assets/img/ebia.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={EBIA} alt="EBIA" />
          <h1 className="App-title">
            @Webia1 - Simple Graphic App Example - Timeseries
          </h1>
        </header>
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
