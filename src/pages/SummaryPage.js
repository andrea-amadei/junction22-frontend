import './SummaryPage.scss'
import {PieChart} from "react-minimal-pie-chart";
import PieChartLabelComponent from "../components/PieChartLabelComponent";
import AppBar from "../components/AppBar";
import React, {useEffect, useState} from "react";
import {requestHeader, userId} from "../index";

export default function SummaryPage({ tab }) {
  
  const [topics, setTopics] = useState({});
  const [emotions, setEmotions] = useState({});
  
  useEffect(() => {
    fetch('/summary?userId=' + userId, {method: 'GET', headers: requestHeader})
      .then(result => result.json())
      .then(result => {
        setTopics(result.topics);
        setEmotions(result.emotions);
      });
  }, [])
  
  const topicPalette = {
    'god': '#f68288',
    'work': '#f94144',
    'friends': '#f3722c',
    'love': '#f8961e',
    'health': '#f9c74f',
    'school': '#90be6d',
    'food': '#43aa8b',
    'recreation': '#488691',
    'exercise': '#4d6197',
    'family': '#6A4C93',
    'sleep': '#a35fcb'
  }
  
  const emotionPalette = {
    'excited': '#FF595E',
    'happy': '#FFCA3A',
    'calm': '#8AC926',
    'satisfied': '#1982C4',
    'proud': '#6A4C93',
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function getData(rawData, palette) {
    return Object.entries(rawData).map(([key, value]) => {
      return {title: key, value: value, color: palette[key] }})
  }
  
  return (
    <div className="summary">
  
      <div className="title">
        <h1>Summary</h1>
      </div>
      
      <AppBar tabs={[{name: "Topics", path: "/summary/topics"}, {name: "Emotions", path: "/summary/emotions"}]} />
  
      <div className="pie-chart-container">
        <div className="labels">
          {
            Object.entries((tab === 'topics' ? topicPalette : emotionPalette)).map(x =>
              <PieChartLabelComponent label={capitalizeFirstLetter(x[0])} color={x[1]} key={x[0]} />
            )
          }
        </div>
        <div className="pie-chart">
          <PieChart
            data={(tab === 'topics' ? getData(topics, topicPalette) : getData(emotions, emotionPalette))}
            startAngle={-90}
          />
        </div>
      </div>
    </div>
  );
}