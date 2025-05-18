'use strict';
const a0_0x3393e8 = a0_0x5327;
function a0_0x5327(EXxeQZ, key) {
    const stringArray = a0_0x3b0f();
    a0_0x5327 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5327(EXxeQZ, key);
}
function a0_0x3b0f() {
    const _0x4b8608 = [
        'readFileSync',
        'utf8',
        'split',
        'log',
        'slice',
        'add',
        'Yes'
    ];
    a0_0x3b0f = function () {
        return _0x4b8608;
    };
    return a0_0x3b0f();
}
const input = require('fs')[a0_0x3393e8(0x0)]('/dev/stdin', a0_0x3393e8(0x1))[a0_0x3393e8(0x2)]('\x0a');
let ws = new Set();
let prev = null;
console[a0_0x3393e8(0x3)](((() => {
    const _0x5aad7c = a0_0x5327;
    for (const w of input[_0x5aad7c(0x4)](0x1, parseInt(input[0x0]) + 0x1)) {
        if (prev && prev != w[0x0]) {
            return 'No';
        }
        if (ws['has'](w)) {
            return 'No';
        }
        ws[_0x5aad7c(0x5)](w);
        prev = w['substr'](-0x1);
    }
    return _0x5aad7c(0x6);
})()));