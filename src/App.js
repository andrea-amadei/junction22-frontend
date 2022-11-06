import './App.scss';
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import AppBar from './components/AppBar'
import JournalPage from "./pages/JournalPage";
import SummaryPage from "./pages/SummaryPage";
import {requestHeader, userId} from "./index";

function App() {
  const [response, setResponse] = useState({question: '', id: '', userId: -1});
  const [answers, setAnswers] = useState([]);
  const [oldAnswers, setOldAnswers] = useState([]);
  
  useEffect(() => {
    fetch('/question', {method: 'GET', headers: requestHeader})
      .then(result => result.json())
      .then(result => setResponse(result.data));
    
    fetch('/messages?userId=' + userId, {method: 'GET', headers: requestHeader})
      .then(result => result.json())
      .then(result => setOldAnswers(result.data.map((x) =>
        {return {question: x.question, timestamp: x.date, answers: [{answer: x.message}]}}
      )))
  }, [])
  
  return (
    <div className="app">
      <Router>
        <AppBar tabs={[
          {name: "Today", path: "/"},
          {name: "Journal", path: "/journal"},
          {name: "Summary", path: "/summary/topics"}
        ]}/>
        
        <Routes>
          <Route exact path='/' element={
            <HomePage question={response.question} id={response.id} answers={answers} setAnswers={setAnswers} />
          } />
          
          <Route exact path='/journal' element={
            <JournalPage oldAnswers={oldAnswers} />
          } />
          
          <Route exact path='/summary/topics' element={
            <SummaryPage tab="topics" />
          } />
          
          <Route exact path='/summary/emotions' element={
            <SummaryPage tab="emotions" />
          } />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
