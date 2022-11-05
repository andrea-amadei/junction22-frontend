import './JournalPage.scss'
import React from 'react';
import ChatComponent from "../components/ChatComponent";

export default function JournalPage() {
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
  
  return (
    <div className="journal">
      <ChatComponent chat={chat} reverse={false} />
    </div>
  );
}