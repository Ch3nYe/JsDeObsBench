function a0_0x37bf(qNpiGK, key) {
    const stringArray = a0_0x156a();
    a0_0x37bf = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x37bf(qNpiGK, key);
}
const a0_0x380ea3 = a0_0x37bf;
function a0_0x156a() {
    const _0x235703 = [
        'split',
        'pZprL',
        'log',
        'dvytl',
        'AArLa',
        'kdmLV',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x156a = function () {
        return _0x235703;
    };
    return a0_0x156a();
}
function Main(input) {
    'use strict';
    const _0x5e36a5 = a0_0x37bf;
    const elements = input[_0x5e36a5(0x0)]('\x0a');
    let blackFlag = ![];
    let numBlack = 0x0;
    let numWhiteAfterBlack = 0x0;
    for (let i = 0x0; i < elements[0x0]; i++) {
        if (blackFlag === ![] && elements[0x1][i] === '#') {
            blackFlag = !![];
        }
        if (blackFlag === !![] && elements[0x1][i] === '.') {
            if (_0x5e36a5(0x1) !== 'yeHGO') {
                numWhiteAfterBlack++;
            } else {
                console[_0x5e36a5(0x2)](numWhiteAfterBlack);
            }
        }
        if (elements[0x1][i] === '#') {
            if ('dvytl' === _0x5e36a5(0x3)) {
                numBlack++;
            } else {
                blackFlag = !![];
            }
        }
    }
    if (numWhiteAfterBlack === 0x0 && blackFlag === ![]) {
        console[_0x5e36a5(0x2)]('0');
    } else if (numWhiteAfterBlack === 0x0 && blackFlag === !![]) {
        if (_0x5e36a5(0x4) === _0x5e36a5(0x4)) {
            console[_0x5e36a5(0x2)](numBlack);
        } else {
            console[_0x5e36a5(0x2)]('0');
        }
    } else if (numBlack <= numWhiteAfterBlack) {
        console[_0x5e36a5(0x2)](numBlack);
    } else {
        if (_0x5e36a5(0x5) !== _0x5e36a5(0x5)) {
            numWhiteAfterBlack++;
        } else {
            console['log'](numWhiteAfterBlack);
        }
    }
}
Main(require('fs')[a0_0x380ea3(0x6)](a0_0x380ea3(0x7), 'utf-8'));