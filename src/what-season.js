const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (!(date instanceof Date) || isNaN(date)) throw new Error();

    const month = date.getMonth();
    let season;

    if (month == 0 || month == 1 || month == 11) {
        season = 'winter';
    } else if (month > 1 && month < 5) {
        season = 'spring';
    } else if (month > 4 && month < 8) {
        season = 'summer';
    } else if (month > 7 && month < 11) {
        season = 'autumn';
    }

    return season;
};
