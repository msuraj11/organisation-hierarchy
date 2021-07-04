import React from "react";
import './App.css';
import HierarchyView from './components/HierarcyView';

function App() {
  return (
    <div className="container">
      <HierarchyView />
      <div className="employee-details">
        On click details should be populated.
      </div>
    </div>
  );
}

export default App;
