'use strict';
function a0_0x2b13() {
    const _0x1955ae = [
        'split',
        'map',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x2b13 = function () {
        return _0x1955ae;
    };
    return a0_0x2b13();
}
const a0_0x316749 = a0_0x22f3;
function Main(input) {
    const _0x3dc5a9 = a0_0x22f3;
    input = input[_0x3dc5a9(0x0)]('\x0a')[0x0];
    const numbers = input[_0x3dc5a9(0x0)]('\x20')[_0x3dc5a9(0x1)](i => {
        return parseInt(i, 0xa);
    });
    const a = numbers[0x0];
    const b = numbers[0x1];
    let result = 0x0;
    if (a > b) {
        result = 0x2 * a - 0x1;
    } else if (b > a) {
        result = 0x2 * b - 0x1;
    } else {
        result = 0x2 * a;
    }
    console[_0x3dc5a9(0x2)](result);
}
function a0_0x22f3(cmcjuL, key) {
    const stringArray = a0_0x2b13();
    a0_0x22f3 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x22f3(cmcjuL, key);
}
Main(require('fs')[a0_0x316749(0x3)]('/dev/stdin', a0_0x316749(0x4)));