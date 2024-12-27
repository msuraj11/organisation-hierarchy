import React from 'react';
import {map, omit} from 'lodash';
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from '@mui/material';
import {
  Person,
  Work,
  Fingerprint,
  PhoneIphone,
  Email,
  ClearAll
} from '@mui/icons-material';

const iconMap = {
  designation: <Work />,
  name: <Person />,
  id: <Fingerprint />,
  phoneNumber: <PhoneIphone />,
  emailId: <Email />,
  level: <ClearAll />
};

const NodeDetails = ({nodeDetailsObj, handleClose, open}) => {
  const {type} = nodeDetailsObj;
  const isEmployee = type === 'employee';
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{`${isEmployee ? 'Employee' : 'Team'} Details`}</DialogTitle>
      <List sx={{pt: 0}}>
        {map(omit(nodeDetailsObj, ['type']), (item, key) => (
          <ListItem key={key}>
            <ListItemAvatar>
              <Avatar>{iconMap[key]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default NodeDetails;
