import './SummaryPage.scss'
import {PieChart} from "react-minimal-pie-chart";
import PieChartLabelComponent from "../components/PieChartLabelComponent";
import AppBar from "../components/AppBar";
import React from "react";

export default function SummaryPage({ tab }) {
  
  const topicPalette = {
    'god': '#FBF8CC',
    'work': '#FDE4CF',
    'friends': '#FFCFD2',
    'love': '#F1C0E8',
    'health': '#CFBAF0',
    'school': '#A3C4F3',
    'food': '#90DBF4',
    'recreation': '#8EECF5',
    'exercise': '#98F5E1',
    'family': '#B9FBC0',
    'sleep': '#94C899'
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
  
  return (
    <div className="summary">
  
      <div className="title">
        <h1>Summary</h1>
      </div>
      
      <AppBar tabs={[{name: "Topics", path: "/summary/topics"}, {name: "Emotions", path: "/summary/emotions"}]} />
  
      {
        (tab === "topics" ?
            <>
              <div className="pie-chart-container">
                <div className="labels">
                  {
                    Object.entries(topicPalette).map(x =>
                      <PieChartLabelComponent label={capitalizeFirstLetter(x[0])} color={x[1]} key={x[0]} />
                    )
                  }
                </div>
                <div className="pie-chart">
                  <PieChart
                    data={[
                      { title: 'One', value: 10, color: '#F1C0E8', label: 'One' },
                      { title: 'Two', value: 20, color: '#B9FBC0', label: 'Two' },
                    ]}
                    startAngle={-90}
                  />
                </div>
              </div>
            </>
          :
            <>
              <div className="pie-chart-container">
                <div className="labels">
                  {
                    Object.entries(emotionPalette).map(x =>
                      <PieChartLabelComponent label={capitalizeFirstLetter(x[0])} color={x[1]}/>
                    )
                  }
                </div>
                <div className="pie-chart">
                  <PieChart
                    data={[
                      { title: 'One', value: 10, color: '#6A4C93', label: 'One' },
                    ]}
                    startAngle={-90}
                  />
                </div>
              </div>
            </>
        )
      }
    </div>
  );
}