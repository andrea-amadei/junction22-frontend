import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import AppBar from './components/AppBar'
import JournalPage from "./pages/JournalPage";

function App() {
  return (
    <div className="app">
      <Router>
        <AppBar tabs={[
          {name: "Today", path: "/"},
          {name: "Journal", path: "/journal"},
          {name: "Summary", path: "/summary"}
        ]}/>
        
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/journal' element={<JournalPage />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
