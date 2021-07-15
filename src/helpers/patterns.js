export const getDefaultPatternForNode = (nodeDetails, teamNode = false) => {
    const {name, designation, level, phoneNumber, type} = nodeDetails;
    return teamNode ? {
            id: `${designation}_${level}`,
            name,
            type,
            childNodes: []
        } :
        {
            designation,
            name,
            level,
            type,
            id: `${designation}_${level}`,
            phoneNumber,
            emailId: `${name}@organisation.com`,
            childNodes: []
        }
};

export const getOptionsFromData = data => {
    const optionsObj = {};
    const iteratatble = [data];
    iteratatble.forEach(node_0 => {
      optionsObj[`${node_0['id']}`] = {designation: node_0['designation'], type: node_0['type']};
      if (node_0.childNodes.length > 0) {
        node_0.childNodes.forEach(node_1 => {
          optionsObj[`${node_1['id']}`] = {designation: node_1['designation'], type: node_1['type']};
          if (node_1.childNodes.length > 0) {
            node_1.childNodes.forEach(node_2 => {
              optionsObj[`${node_2['id']}`] = {designation: node_2['designation'] || node_2['name'], type: node_2['type']};
              if (node_2.childNodes.length > 0) {
                node_2.childNodes.forEach(node_3 => {
                  optionsObj[`${node_3['id']}`] = {designation: `${node_3['name']}_${node_3['id']}`, type: node_3['type']};
                });
              }
            });
          }
        });
      }
    });
    console.log(optionsObj);
    return optionsObj;
  };
