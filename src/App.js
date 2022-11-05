import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/home';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
