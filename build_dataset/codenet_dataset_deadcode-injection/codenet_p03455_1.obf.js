'use strict';
const a0_0x2c7c43 = a0_0x6b27;
function a0_0xc223() {
    const _0x494296 = [
        'split',
        'Even',
        'Odd',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xc223 = function () {
        return _0x494296;
    };
    return a0_0xc223();
}
function a0_0x6b27(vjrkWm, key) {
    const stringArray = a0_0xc223();
    a0_0x6b27 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x6b27(vjrkWm, key);
}
function main(input) {
    const _0x28fb66 = a0_0x6b27;
    input = input['trim']()[_0x28fb66(0x0)]('\x20')['map'](Number);
    const A = input[0x0];
    const B = input[0x1];
    const ans = A % 0x2 ^ B % 0x2 ? _0x28fb66(0x1) : _0x28fb66(0x2);
    console[_0x28fb66(0x3)](ans);
}
main(require('fs')[a0_0x2c7c43(0x4)](a0_0x2c7c43(0x5), a0_0x2c7c43(0x6)));