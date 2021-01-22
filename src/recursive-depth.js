const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return (
            1 +
            (Array.isArray(arr)
                ? arr.reduce((max, current) => Math.max(max, this.calculateDepth(current)), 0)
                : -1)
        );
    }
};
