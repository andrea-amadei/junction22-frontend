import './QuestionComponent.scss'
import React from 'react';

export default function QuestionComponent({ text, timestamp, showTimestamp=true }) {
  return (
    <div className="question-container">
      {
        (showTimestamp ? <div className="question-timestamp">{timestamp}</div> : "")
      }
      <h1 className="question">{text}</h1>
    </div>
  );
}