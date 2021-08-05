import React, {useState} from 'react';
import {map, isEmpty, omit} from 'lodash';
import {TextField, MenuItem} from '@material-ui/core';
import { getDefaultPatternForNode } from '../helpers/patterns';

const NodeActions = ({options}) => {
  const [position, setPostion] = useState('');
  const [nodeData, setNodeData] = useState({
    name: '',
    designation: '',
    level: '',
    type: 'employee',
    phoneNumber: null
  });
  const teamNodeData = omit(nodeData, ['phoneNumber']);
  const nodeType = !isEmpty(position) ? options[position]['type'] : '';

  const onNodeInputsChange = e => {
    setNodeData({...nodeData, [e.target.name]: e.target.value});
  };

  const handleChange = e => {
    setPostion(e.target.value);
  };

  return (
    <div className="actions">
      <TextField
        id="standard-select-position-native"
        select
        label="Select"
        defaultValue=""
        size="small"
        value={position}
        onChange={handleChange}
        helperText="Select the position where you want to add new Team/employee"
        variant="standard"
        >
        {map(options, (option, key) => (
            <MenuItem key={key} value={key}>
              {option.designation}
            </MenuItem>
        ))}
      </TextField>
      <div>
        {!isEmpty(position) &&
          map({...getDefaultPatternForNode(nodeType === 'employee' ? nodeData : teamNodeData, nodeType)}, (node, key) => {
            return (
              <TextField
                id={key}
                label={key}
                variant="standard"
                name={key}
                size="small"
                value={nodeData[`${node}`]}
                onChange={onNodeInputsChange}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default NodeActions;