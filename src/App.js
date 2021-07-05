import React from "react";
import './App.css';
import HierarchyView from './components/HierarcyView';

function App() {
  return (
    <div className="container">
      <h2 className="header">Organisation Hierarchy</h2>
      <HierarchyView />
      <div className="employee-details">
        On click details should be populated.
      </div>
    </div>
  );
}

export default App;
