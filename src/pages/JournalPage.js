import './JournalPage.scss'
import React from 'react';
import ChatComponent from "../components/ChatComponent";

export default function JournalPage({ oldAnswers }) {
  
  return (
    <div className="journal">
      <ChatComponent chat={oldAnswers} reverse={false} />
    </div>
  );
}