import React from 'react';
import logo from './logo.svg';
import { motion } from "framer-motion"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <motion.circle
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}

export default App;
