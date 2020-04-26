import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>

      <div className="App__container">
        <Route path="/home" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
      </div>
    </div>
  );
}

export default App;
