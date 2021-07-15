import React, {useState, useEffect} from "react";
import {isEmpty} from 'lodash';
import './App.css';
import demoData from './constants/data.json';
import HierarchyView from './components/HierarcyView';
import NodeDetails from './components/NodeDetails';
import NodeActions from './components/NodeActions';
import { getOptionsFromData } from "./helpers/patterns";

function App() {
  const [data, setData] = useState({...demoData});
  const [options, setOptions] = useState({});
  const [toggleDetails, toggler] = useState(false);
  const [nodeDetails, setNodeDetails] = useState({});
  useEffect(() => {
    if (!isEmpty(data)) {
      setOptions({...getOptionsFromData(data)});
    }
  }, [data]);

  const onNodeClick = (e, node) => {
    e.stopPropagation();
    const {name, id, type} = node;
    if (type === 'employee') {
      setNodeDetails({...node});
    } else {
      setNodeDetails({name, id, type});
    }
    toggler(true);
  };

  return (
    <div className="container">
      <h2 className="header">Organisation Hierarchy</h2>
      {toggleDetails &&
        <NodeDetails nodeDetailsObj={nodeDetails} open={toggleDetails} handleClose={() => {toggler(false);}} />
      }
      <HierarchyView data={data} getNodeDetails={onNodeClick} />
      <div className="node-details-action">
        <NodeActions options={options} />
      </div>
    </div>
  );
}

export default App;
