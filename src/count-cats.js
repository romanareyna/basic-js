const CustomError = require('../extensions/custom-error');

module.exports = function countCats(backyard) {
    let counter = 0;
    const cat = '^^';

    backyard.forEach(row =>
        row.forEach(item => (item === cat ? counter++ : item))
    );

    return counter;
};
