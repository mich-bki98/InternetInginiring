import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonGet from'./Components/PersonGet';
import PersonList from'./Components/PersonList';
import PersonInput from './Components/PersonInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PersonInput/>
      <PersonList/>
      <PersonGet/>
    </div>
  );
}

export default App;
