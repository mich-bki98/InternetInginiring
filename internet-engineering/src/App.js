import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

import PersonList from'./Components/PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. xD
        </p>
        <a
          className="App-link"
          href="https://www.pornhub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React xD
        </a>
      </header>
      <PersonList/>
    </div>
  );
}

export default App;
