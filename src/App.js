import React from "react";
import './App.css';
import demoData from './constants/data.json';
import HierarchyView from './components/HierarcyView';

function App() {
  return (
    <div className="container">
      <h2 className="header">Organisation Hierarchy</h2>
      <HierarchyView data={demoData} />
      <div className="employee-details">
        On click details should be populated.
      </div>
    </div>
  );
}

export default App;
