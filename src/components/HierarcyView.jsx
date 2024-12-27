import React from 'react';
import {omit} from 'lodash';
import {
  Add,
  Remove,
  Close,
  InfoOutlined,
  AddComment
} from '@mui/icons-material';
import {withStyles} from 'tss-react/mui';
import {Typography, Box, IconButton} from '@mui/material';
import {SimpleTreeView, TreeItem} from '@mui/x-tree-view';

const TreeItemTweak = (props) => {
  const {labelText, onInfoClick, onAddClick, nodeData, ...other} = props;
  return (
    <TreeItem
      label={
        <Box sx={{display: 'flex', alignItems: 'center', p: 0.5, pr: 0}}>
          <Typography
            variant="overline"
            sx={{fontWeight: 'inherit', flexGrow: 1}}
          >
            {labelText}
          </Typography>
          <IconButton size="small" onClick={(e) => onInfoClick(e, nodeData)}>
            <InfoOutlined fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={onAddClick}>
            <AddComment color="primary" fontSize="small" />
          </IconButton>
        </Box>
      }
      {...other}
    />
  );
};

const StyledTreeItem = withStyles(TreeItemTweak, (theme) => ({
  iconContainer: {
    '& .close': {
      opacity: 0.3,
      border: '0.2px solid',
      borderRadius: '5px'
    },
    '& .remove, .add': {
      border: '0.2px solid',
      borderRadius: '5px'
    }
  },
  label: {
    lineHeight: 1.7
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${theme.palette.text.primary}`
  }
}));

const HierarchyView = ({
  data,
  getNodeDetails,
  handleAddClick,
  dynamicClassName
}) => {
  const {designation, name, id, childNodes} = data;

  const onAddClick = (nodeData) => {
    handleAddClick(nodeData);
  };

  return (
    <div className={`tree-block ${dynamicClassName}`}>
      <SimpleTreeView
        defaultExpanded={['CEO_0']}
        defaultCollapseIcon={<Remove className="remove" />}
        slots={{expandIcon: Add}}
        defaultEndIcon={<Close className="close" />}
      >
        <StyledTreeItem
          itemId={id}
          nodeData={omit(data, ['childNodes'])}
          labelText={`${name} - ${designation}`}
          onInfoClick={getNodeDetails}
          onAddClick={(e) => onAddClick(e, data)}
        >
          {childNodes.length > 0 &&
            childNodes.map((hod) => (
              <StyledTreeItem
                key={hod.id}
                itemId={hod.id}
                nodeData={omit(hod, ['childNodes'])}
                labelText={`${hod.name} - ${hod.designation}`}
                onInfoClick={getNodeDetails}
                onAddClick={(e) => onAddClick(e, hod)}
              >
                {hod.childNodes.length > 0 &&
                  hod.childNodes.map((team) => (
                    <StyledTreeItem
                      key={team.id}
                      itemId={team.id}
                      nodeData={omit(team, ['childNodes'])}
                      labelText={team.name}
                      onInfoClick={getNodeDetails}
                      onAddClick={(e) => onAddClick(e, team)}
                    >
                      {team.childNodes.length > 0 &&
                        team.childNodes.map((member) => (
                          <StyledTreeItem
                            key={member.id}
                            itemId={member.id}
                            nodeData={omit(member, ['childNodes'])}
                            labelText={member.name}
                            onInfoClick={getNodeDetails}
                            onAddClick={(e) => onAddClick(e, member)}
                          />
                        ))}
                    </StyledTreeItem>
                  ))}
              </StyledTreeItem>
            ))}
        </StyledTreeItem>
      </SimpleTreeView>
    </div>
  );
};

export default HierarchyView;
