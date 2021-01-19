const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
    if (members == null || members.length < 1 || !Array.isArray(members))
        return false;

    let teamName = members
        .filter(member => typeof member === 'string' && member != '')
        .map(member => member.trim().charAt(0).toUpperCase())
        .sort()
        .join('');

    return teamName;
};
