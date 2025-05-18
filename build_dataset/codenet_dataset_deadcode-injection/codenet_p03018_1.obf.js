'use strict';
const a0_0x4b794c = a0_0x29de;
function a0_0x29de(mkvRWD, key) {
    const stringArray = a0_0x18df();
    a0_0x29de = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x29de(mkvRWD, key);
}
function Main(input) {
    const _0x428318 = a0_0x29de;
    let s = input;
    let tmp = s[_0x428318(0x0)](_0x428318(0x1));
    let result = tmp[_0x428318(0x2)] - 0x1;
    while (tmp['length'] !== 0x1) {
        s = tmp[_0x428318(0x3)]('BCA');
        tmp = s['split']('ABC');
        result += tmp[_0x428318(0x2)] - 0x1;
    }
    console[_0x428318(0x4)](result);
}
Main(require('fs')[a0_0x4b794c(0x5)]('/dev/stdin', a0_0x4b794c(0x6)));
function a0_0x18df() {
    const _0x134cbf = [
        'split',
        'ABC',
        'length',
        'join',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x18df = function () {
        return _0x134cbf;
    };
    return a0_0x18df();
}