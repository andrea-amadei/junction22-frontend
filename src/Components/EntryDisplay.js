import React from "react";
// import "./EntryDisplay.css";


const EntryDisplay = ({ date, text, mood, title }) => {
  return (
    <div className="entryDisplayy">
      <div className="ui huge message">
        <h2 className="ui left floated header ">{title}</h2>
        <h2 className="ui right aligned header">{date}</h2>
        <h2>{mood}</h2>

        <p>{text}</p>
      </div>
    </div>
  );
};

export default EntryDisplay;