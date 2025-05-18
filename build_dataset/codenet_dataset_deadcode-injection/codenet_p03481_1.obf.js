'use strict';
const a0_0x50f496 = a0_0x43a0;
function a0_0x1de9() {
    const _0x17fa68 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split'
    ];
    a0_0x1de9 = function () {
        return _0x17fa68;
    };
    return a0_0x1de9();
}
const input = require('fs')[a0_0x50f496(0x0)](a0_0x50f496(0x1), a0_0x50f496(0x2))[a0_0x50f496(0x3)]()[a0_0x50f496(0x4)]('\x20')['map'](x => x * 0x1);
function a0_0x43a0(fSNmgY, key) {
    const stringArray = a0_0x1de9();
    a0_0x43a0 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x43a0(fSNmgY, key);
}
let ans = 0x0;
let max = input[0x1];
let div = input[0x0];
let tmpNum = div;
while (tmpNum < max + 0x1) {
    tmpNum *= 0x2;
    ans++;
}
console['log'](ans);