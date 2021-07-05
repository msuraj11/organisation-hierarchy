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

const HierarchyView = () => {
    return (
        <div className="tree-block">
            <TreeView
                defaultExpanded={["1", "3"]}
                defaultCollapseIcon={<Remove className="remove" />}
                defaultExpandIcon={<Add className="add" />}
                defaultEndIcon={<Close className="close" />}
            >
                <StyledTreeItem nodeId="1" label="Main">
                    <StyledTreeItem nodeId="2" label="Hello" />
                    <StyledTreeItem nodeId="3" label="Subtree with children">
                        <StyledTreeItem nodeId="6" label="Hello" />
                        <StyledTreeItem nodeId="7" label="Sub-subtree with children">
                            <StyledTreeItem nodeId="9" label="Child 1" />
                            <StyledTreeItem nodeId="10" label="Child 2" />
                            <StyledTreeItem nodeId="11" label="Child 3" />
                        </StyledTreeItem>
                        <StyledTreeItem nodeId="8" label="Hello" />
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="4" label="World" />
                    <StyledTreeItem nodeId="5" label="Something something" />
                </StyledTreeItem>
            </TreeView>
        </div>
    );
};

export default HierarchyView;
