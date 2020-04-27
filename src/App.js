import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <AlertState>
      <div className="App">
        <header className="header">
          <Navbar />
        </header>

        <div className="container">
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
        </div>
      </div>
    </AlertState>
  );
}

export default App;
