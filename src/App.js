import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">Employee Directory
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <Route exact path="/search" component={Search} />
        </Router>
      </header>
    </div>
    </Router>
  );
}

export default App;
