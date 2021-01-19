const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
    str = String(str);
    const repeatTimes = options.repeatTimes || 1;
    const separator = options.separator || '+';
    const addition =
        options.addition != undefined || options.addition === null
            ? String(options.addition)
            : '';
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || '|';

    let result = '';

    for (let i = 0; i < repeatTimes - 1; i++) {
        result +=
            str +
            repeatAddition(addition, additionRepeatTimes, additionSeparator) +
            separator;
    }

    result +=
        str + repeatAddition(addition, additionRepeatTimes, additionSeparator);

    return result;
};

function repeatAddition(addition, additionRepeatTimes, additionSeparator) {
    let additionStr = '';

    for (let i = 0; i < additionRepeatTimes - 1; i++) {
        additionStr += addition + additionSeparator;
    }

    additionStr += addition;

    return additionStr;
}
