class VigenereCipheringMachine {
    constructor(isNotReverse) {
        if (isNotReverse === undefined) isNotReverse = true;
        this.isNotReverse = isNotReverse;
    }
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error('Something is missing!');
        }

        let encryptedMessage = [];
        let keyStr = createKeyStr(key, message.length).toUpperCase();
        let mesStr = message.toUpperCase();
        const A = 65;
        const Z = 90;

        for (let i = 0; i < mesStr.length; i++) {
            let encryptedChar = '';

            if (mesStr.charCodeAt(i) >= A && mesStr.charCodeAt(i) <= Z) {
                let code = mesStr.charCodeAt(i) + keyStr.charCodeAt(i) - A;
                code = code > Z ? code - Z + 64 : code;
                encryptedChar = String.fromCharCode(code);
            } else {
                encryptedChar = mesStr[i];
                keyStr = ' ' + keyStr;
            }

            encryptedMessage.push(encryptedChar);
        }
        return this.isNotReverse === true
            ? encryptedMessage.join('')
            : encryptedMessage.reverse().join('');
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error('Something is missing!');
        }

        let decryptedMessage = [];
        let keyStr = createKeyStr(key, message.length).toUpperCase();
        let mesStr = message.toUpperCase();
        const A = 65;
        const Z = 90;

        for (let i = 0; i < mesStr.length; i++) {
            let decryptedChar = '';

            if (mesStr.charCodeAt(i) >= A && mesStr.charCodeAt(i) <= Z) {
                let code = mesStr.charCodeAt(i) - keyStr.charCodeAt(i) + A;
                code = code < A ? code + Z - 64 : code;
                decryptedChar = String.fromCharCode(code);
            } else {
                decryptedChar = mesStr[i];
                keyStr = ' ' + keyStr;
            }

            decryptedMessage.push(decryptedChar);
        }
        return this.isNotReverse === true
            ? decryptedMessage.join('')
            : decryptedMessage.reverse().join('');
    }
}

function createKeyStr(key, strLength) {
    let result = '';

    for (let i = 0; i < Math.ceil(strLength / key.length); i++) {
        result += key;
    }

    result = result.substring(0, strLength);

    return result;
}

module.exports = VigenereCipheringMachine;
