'use strict';
function a0_0x85c4(HFDLMw, key) {
    const stringArray = a0_0x55ac();
    a0_0x85c4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x85c4(HFDLMw, key);
}
const a0_0xdb84f3 = a0_0x85c4;
function a0_0x55ac() {
    const _0x593e83 = [
        'trim',
        'split',
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x55ac = function () {
        return _0x593e83;
    };
    return a0_0x55ac();
}
const main = input => {
    const _0x4df3dd = a0_0x85c4;
    const args = input[_0x4df3dd(0x0)]()[_0x4df3dd(0x1)]('\x20');
    const a = parseInt(args[0x0], 0xa);
    const b = parseInt(args[0x1], 0xa);
    const c = parseInt(args[0x2], 0xa);
    if (c >= a && c <= b)
        console[_0x4df3dd(0x2)](_0x4df3dd(0x3));
    else
        console[_0x4df3dd(0x2)]('No');
};
main(require('fs')[a0_0xdb84f3(0x4)](a0_0xdb84f3(0x5), a0_0xdb84f3(0x6)));