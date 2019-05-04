import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './components/Input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div style={{ margin: 10 }}>
          <Input label="Email" />
        </div>

        <div style={{ margin: 10 }}>
          <Input 
            label="Password" 
            type="password" 
            variant="outlined"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
