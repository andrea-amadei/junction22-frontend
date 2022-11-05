import './AnswerComponent.scss'
import React from 'react';

export default function AnswerComponent({ text }) {
  return (
    <div className="answer-container">
      <p className="answer">{text}</p>
    </div>
  );
}