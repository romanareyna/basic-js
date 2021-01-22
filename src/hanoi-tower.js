const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let numberOfSteps = 2 ** disksNumber - 1;
    let speedInSeconds = (60 * 60) / turnsSpeed;
    let timeRequired = Math.floor(speedInSeconds * numberOfSteps);

    return { turns: numberOfSteps, seconds: timeRequired };
};
