import React from 'react';
import {Add, Remove, Close} from "@material-ui/icons";
import {fade, withStyles} from "@material-ui/core/styles";
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
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`
    }
  }))((props) => <TreeItem {...props} />);

const HierarchyView = ({data}) => {
  const {designation, name, id, childNodes} = data;
    return (
        <div className="tree-block">
            <TreeView
                defaultExpanded={["CEO_0"]}
                defaultCollapseIcon={<Remove className="remove" />}
                defaultExpandIcon={<Add className="add" />}
                defaultEndIcon={<Close className="close" />}
            >
                <StyledTreeItem nodeId={id} label={`${name} - ${designation}`}>
                    {childNodes.length > 0 &&
                      childNodes.map(hod => (
                        <StyledTreeItem key={hod.id} nodeId={hod.id} label={`${hod.name} - ${hod.designation}`}>
                          {hod.childNodes.length > 0 &&
                            hod.childNodes.map(team => (
                              <StyledTreeItem key={team.id} nodeId={team.id} label={team.name}>
                                {team.childNodes.length > 0 &&
                                  team.childNodes.map(member => (
                                    <StyledTreeItem key={member.id} nodeId={member.id} label={member.name} />
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
