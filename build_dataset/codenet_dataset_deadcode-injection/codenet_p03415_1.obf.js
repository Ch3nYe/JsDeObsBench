'use strict';
const a0_0x267c3d = a0_0x560d;
function main(arg) {
    const _0x26a6e7 = a0_0x560d;
    const letters = arg['split']('\x0a')['map'](n => n[_0x26a6e7(0x0)](''));
    console['log'](letters[0x0][0x0] + letters[0x1][0x1] + letters[0x2][0x2]);
}
function a0_0x560d(zkzifm, key) {
    const stringArray = a0_0x3479();
    a0_0x560d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x560d(zkzifm, key);
}
function a0_0x3479() {
    const _0x546f02 = [
        'split',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3479 = function () {
        return _0x546f02;
    };
    return a0_0x3479();
}
main(require('fs')[a0_0x267c3d(0x1)](a0_0x267c3d(0x2), 'utf8'));