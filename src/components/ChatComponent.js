import './ChatComponent.scss'
import QuestionComponent from "./QuestionComponent";
import AnswerComponent from "./AnswerComponent";
import React from "react";

export default function ChatComponent({ chat, reverse=true, showTimespan=true}) {
  return (
    <div className="chat" style={{flexDirection: (reverse ? "column-reverse" : "column")}}>
      {
        chat.map((x, i) =>
          <div className="question-group" key={i}>
            <QuestionComponent text={x.question} timestamp={x.timestamp} showTimestamp={showTimespan} key={i} />
            {
              x.answers.map((y, j) =>
                <AnswerComponent text={y.answer} key={i + '-' + j} />
              )
            }
            {(reverse ? (i === 0 ? "" : <hr />) : (i === chat.length - 1 ? "" : <hr />))}
          </div>
        )
      }
    </div>
  );
}