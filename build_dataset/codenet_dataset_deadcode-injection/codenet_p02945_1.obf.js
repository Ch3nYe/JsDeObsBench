'use strict';
function a0_0x38ae(rbGOlL, key) {
    const stringArray = a0_0x39ee();
    a0_0x38ae = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x38ae(rbGOlL, key);
}
const a0_0x3a31a2 = a0_0x38ae;
const main = input => {
    const _0x115545 = a0_0x38ae;
    const args = input[_0x115545(0x0)]('\x0a')[_0x115545(0x1)](arg => arg[_0x115545(0x0)]('\x20'));
    const A = parseInt(args[0x0][0x0], 0xa);
    const B = parseInt(args[0x0][0x1], 0xa);
    console[_0x115545(0x2)](Math[_0x115545(0x3)](A + B, A - B, A * B) + 0x0);
};
function a0_0x39ee() {
    const _0x192c0a = [
        'split',
        'map',
        'log',
        'max',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x39ee = function () {
        return _0x192c0a;
    };
    return a0_0x39ee();
}
main(require('fs')[a0_0x3a31a2(0x4)](a0_0x3a31a2(0x5), a0_0x3a31a2(0x6)));