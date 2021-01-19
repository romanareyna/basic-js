const CustomError = require('../extensions/custom-error');

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value === undefined) value = '';
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (
            position == null ||
            position == undefined ||
            typeof position != 'number' ||
            (position * 10) % 10 > 0 ||
            position < 1 ||
            position > this.chain.length - 1
        ) {
            this.chain = [];
            throw new Error('Wrong position argument!');
        }

        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        if (this.chain != []) this.chain.reverse();
        return this;
    },
    finishChain() {
        let chain = '( ' + this.chain.map(e => String(e)).join(' )~~( ') + ' )';

        this.chain = [];

        return chain;
    },
};

module.exports = chainMaker;
