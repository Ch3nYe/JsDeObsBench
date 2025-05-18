'use strict';
const a0_0x1eb598 = a0_0xc30e;
const DELIMITER = '\x20';
const A_INDEX = 0x0;
const B_INDEX = 0x1;
const K_INDEX = 0x3;
function a0_0xc30e(yZyGBZ, key) {
    const stringArray = a0_0x56c7();
    a0_0xc30e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xc30e(yZyGBZ, key);
}
const LIMIT = Math[a0_0x1eb598(0x0)](0xa, 0x12);
const process = input => {
    const _0xbc6cd9 = a0_0xc30e;
    const indexArr = input[_0xbc6cd9(0x1)](DELIMITER);
    const ans = parseInt(indexArr[A_INDEX]) - parseInt(indexArr[B_INDEX]);
    const KString = indexArr[K_INDEX];
    const K = parseInt(KString[_0xbc6cd9(0x2)](KString['length'] - 0x1));
    if (Math[_0xbc6cd9(0x3)](ans) > LIMIT) {
        console[_0xbc6cd9(0x4)](_0xbc6cd9(0x5));
    } else {
        console['log'](K % 0x2 === 0x0 || ans === 0x0 ? ans : -ans);
    }
};
process(require('fs')[a0_0x1eb598(0x6)]('/dev/stdin', 'utf8')[a0_0x1eb598(0x7)]());
function a0_0x56c7() {
    const _0x1f3b38 = [
        'pow',
        'split',
        'charAt',
        'abs',
        'log',
        'Unfair',
        'readFileSync',
        'trim'
    ];
    a0_0x56c7 = function () {
        return _0x1f3b38;
    };
    return a0_0x56c7();
}