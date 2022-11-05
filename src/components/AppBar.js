import './AppBar.scss'
import * as React from 'react';
import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function AppBar({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  
  const onClickHandler = (tabId, path) => {
    setActiveTab(tabId);
    navigate(path);
  }
  
  return (
    <div className="app-bar">
      {
        tabs.map((x, id) =>
          <div
            className={
              "app-bar-tab " +
              (id === 0 ? "first " : "") +
              (id === tabs.length - 1 ? "last " : "") +
              (id === activeTab ? "selected" : "")
            }
            key={id}
            onClick={() => onClickHandler(id, x.path)}
          >
            {x.name}
          </div>
        )
      }
    </div>
  );
}
