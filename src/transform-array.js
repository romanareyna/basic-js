const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
    if (arr.length < 1) return [];
    if (arr == null || !Array.isArray(arr)) throw new Error();

    let result = [];
    let discardNext = false;
    let discardedNextAt = -1;

    for (let i = 0; i < arr.length; i++) {
        if (discardNext === true) {
            discardNext = false;
            discardedNextAt = i;
        } else if (arr[i] === '--double-next') {
            if (arr.length - 1 > i) {
                result.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i > 0 && i > discardedNextAt + 1) {
                result.push(arr[i - 1]);
            }
        } else if (arr[i] === '--discard-next') {
            discardNext = true;
        } else if (arr[i] === '--discard-prev') {
            if (result.length > 0 && i > discardedNextAt + 1) {
                result.pop();
            }
        } else {
            result.push(arr[i]);
        }
    }

    return result;
};
