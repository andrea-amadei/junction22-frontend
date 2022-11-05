import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/Home';
import AppBar from './Components/AppBar'

import Image from './Components/images/back.jpg';

const backStyles = {
    paperContainer: {
        height: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'right-bottom',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(250, 245, 235)',
        color: 'rgb(39,39,39',
        backgroundRepeat: 'repeat',
        bottom: '0px',
        right: '0px',
        margin: '0px',
        alignItems: 'center',
    }
};

function App() {
  return (
    <div className="App" style={backStyles.paperContainer}>
      
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
