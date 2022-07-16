import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContactUs } from './components/ContractUs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactUs name="yaya" email="marzoukyahia@gmail.com" age={2.8}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
