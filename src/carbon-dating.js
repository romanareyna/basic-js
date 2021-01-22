const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (
        sampleActivity === 'undefined' ||
        sampleActivity === null ||
        isNaN(sampleActivity) ||
        typeof sampleActivity !== 'string' ||
        sampleActivity <= 0 ||
        sampleActivity > MODERN_ACTIVITY
    ) {
        return false;
    }
    let t =
        Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
        (Math.LN2.toFixed(3) / HALF_LIFE_PERIOD);

    return Math.ceil(t);
};
