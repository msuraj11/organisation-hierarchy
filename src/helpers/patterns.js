export const getDefaultPatternForNode = (nodeDetails, teamNode = false) => {
    const {name, designation, level, phoneNumber} = nodeDetails;
    return teamNode ? {
            id: `${designation}_${level}`,
            name,
            childNodes: []
        } :
        {
            designation,
            name,
            level,
            id: `${designation}_${level}`,
            phoneNumber,
            emailId: `${name}@organisation.com`,
            childNodes: []
        }
};
