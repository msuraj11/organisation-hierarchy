import React from 'react';
import {omit} from 'lodash';
import {Add, Remove, Close, InfoOutlined, AddComment} from "@material-ui/icons";
import {fade, withStyles} from "@material-ui/core/styles";
import {Typography, Box, IconButton} from '@material-ui/core';
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

const StyledTreeItem = withStyles((theme) => ({
    iconContainer: {
      "& .close": {
        opacity: 0.3,
        border: "0.2px solid",
        borderRadius: "5px"
      },
      "& .remove, .add": {
        border: "0.2px solid",
        borderRadius: "5px"
      }
    },
    label: {
      lineHeight: 1.7
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`
    }
  }))(props => {
    const {labelText, onInfoClick, onAddClick, nodeData, ...other} = props;
    return (<TreeItem
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
            <Typography variant="overline" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
              {labelText}
            </Typography>
            <IconButton size="small" onClick={(e) => onInfoClick(e, nodeData)}><InfoOutlined fontSize="small" /></IconButton>
            <IconButton size="small" onClick={onAddClick}><AddComment color="primary" fontSize="small" /></IconButton>
          </Box>
        }
        {...other}
      />)
    });

const HierarchyView = ({data, getNodeDetails, handleAddClick, dynamicClassName}) => {
  const {designation, name, id, childNodes} = data;

  const onAddClick = (nodeData) => {
    handleAddClick(nodeData);
  };

  return (
    <div className={`tree-block ${dynamicClassName}`}>
      <TreeView
        defaultExpanded={["CEO_0"]}
        defaultCollapseIcon={<Remove className="remove" />}
        defaultExpandIcon={<Add className="add" />}
        defaultEndIcon={<Close className="close" />}
      >
        <StyledTreeItem
          nodeId={id}
          nodeData={omit(data, ['childNodes'])}
          labelText={`${name} - ${designation}`}
          onInfoClick={getNodeDetails}
          onAddClick={(e) => onAddClick(e, data)}
        >
          {childNodes.length > 0 &&
            childNodes.map(hod => (
              <StyledTreeItem
                key={hod.id}
                nodeId={hod.id}
                nodeData={omit(hod, ['childNodes'])}
                labelText={`${hod.name} - ${hod.designation}`}
                onInfoClick={getNodeDetails}
                onAddClick={(e) => onAddClick(e, hod)}
              >
                {hod.childNodes.length > 0 &&
                  hod.childNodes.map(team => (
                    <StyledTreeItem
                      key={team.id}
                      nodeId={team.id}
                      nodeData={omit(team, ['childNodes'])}
                      labelText={team.name}
                      onInfoClick={getNodeDetails}
                      onAddClick={(e) => onAddClick(e, team)}
                    >
                      {team.childNodes.length > 0 &&
                        team.childNodes.map(member => (
                          <StyledTreeItem
                            key={member.id}
                            nodeId={member.id}
                            nodeData={omit(member, ['childNodes'])}
                            labelText={member.name}
                            onInfoClick={getNodeDetails}
                            onAddClick={(e) => onAddClick(e, member)}
                          />
                        ))
                      }
                    </StyledTreeItem>
                  ))
                }
              </StyledTreeItem>
            ))
          }
        </StyledTreeItem>
      </TreeView>
    </div>
  );
};

export default HierarchyView;
