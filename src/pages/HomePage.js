import './HomePage.scss'
import React, {useState} from 'react';
import ChatComponent from "../components/ChatComponent";

export default function HomePage() {
  
  const [inputText, setInputText] = useState("")
  
  // TODO: replace this with a query
  const chat = [
    {
      question: "How do you feel today?",
      answers: [
        {
          answer: "I'm very happy"
        },
        {
          answer: "I'm feeling good but sometimes I'm very tired"
        },
      ]
    },
    {
      question: "How did you feel yesterday?",
      answers: [
        {
          answer: "I don't know"
        },
      ]
    },
  ]
  
  const sendMessage = () => {
    console.log(inputText);
    setInputText("");
  }
  
  return (
    <div className="home-grid">
      <ChatComponent chat={chat} reverse={true} showTimespan={false} />
      <div className="input">
        <input className="input-box" type="text" value={inputText} onChange={(event) => setInputText(event.target.value)}/>
        <input className="input-send" type="button" value="&#8593;" onClick={sendMessage}/>
      </div>
    </div>
  );
}