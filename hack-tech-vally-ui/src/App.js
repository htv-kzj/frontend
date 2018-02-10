import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppView from './Containers/AppView/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppView />
      </div>
    );
  }
}

export default App;
