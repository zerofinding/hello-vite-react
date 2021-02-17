import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import logo from './logo.svg'
// import './App.css'

import "./assets/style.css";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
