import './HomePage.scss'
import React, {useState} from 'react';
import ChatComponent from "../components/ChatComponent";
import {requestHeader, userId} from "../index";

export default function HomePage({ question, id, answers, setAnswers }) {
  
  const [inputText, setInputText] = useState("");
  
  const sendMessage = () => {
    setAnswers(answers.concat({answer: inputText}))
  
    const body = JSON.stringify({
      message: inputText,
      question: question,
      questionId: id,
      type: 'text'
    });
    
    fetch('/addMessage?userId=' + userId, {method: 'POST', headers: requestHeader, body})
      .then(result => result.json())
      .then(result => console.log(result));
    
    setInputText("");
  }
  
  return (
    <div className="home-grid">
      <ChatComponent chat={[{ question, answers: answers }]} reverse={true} showTimespan={false} />
      <div className="input">
        <input className="input-box" type="text" value={inputText} onChange={(event) => setInputText(event.target.value)}/>
        <input className="input-send" type="button" value="&#8593;" onClick={sendMessage}/>
      </div>
    </div>
  );
}