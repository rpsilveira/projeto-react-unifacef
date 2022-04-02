import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const showMessage = () => {
    alert('Teste');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vamos aprender React
        </p>
        <button onClick={showMessage}>Break the world</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React é legal
        </a>
      </header>
    </div>
  );
}

export default App;
