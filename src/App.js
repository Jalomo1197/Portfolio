import React from 'react';
import logo from './logo.svg';
import name from './Name.gif'
import { motion } from "framer-motion"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <img src={name} className="logo" alt="Logo Image" />
        <div className="navigation-sub">
          <a href="" className="item">Projects</a>
          <a href="" className="item">Articles</a>
          <a href="" className="item">About</a>
        </div>
      </div>
    </div>
  );
}

export default App;
