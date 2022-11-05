import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/Home';
import AppBar from './Components/AppBar'

function App() {
  return (
    <div className="App">
      
      <AppBar />
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
