'use strict';
const a0_0x325ec4 = a0_0x35a8;
function a0_0x35a8(LSszbL, key) {
    const stringArray = a0_0x2341();
    a0_0x35a8 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x35a8(LSszbL, key);
}
function a0_0x2341() {
    const _0x54be49 = [
        'trim',
        'ceil',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2341 = function () {
        return _0x54be49;
    };
    return a0_0x2341();
}
const Main = input => {
    const _0x514364 = a0_0x35a8;
    const tmp = input[_0x514364(0x0)]()['split']('\x20');
    const H = parseInt(tmp[0x0]);
    const W = parseInt(tmp[0x1]);
    let result = 0x0;
    if (H % 0x2 != 0x0 && W % 0x2 != 0x0) {
        result = Math[_0x514364(0x1)](H * W / 0x2);
    } else {
        result = H * W / 0x2;
    }
    console[_0x514364(0x2)](result);
    return result;
};
Main(require('fs')[a0_0x325ec4(0x3)](a0_0x325ec4(0x4), a0_0x325ec4(0x5)));