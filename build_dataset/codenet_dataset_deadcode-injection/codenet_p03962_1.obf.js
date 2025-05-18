'use strict';
const a0_0x199217 = a0_0xd852;
const lines = require('fs')['readFileSync'](a0_0x199217(0x0), a0_0x199217(0x1))[a0_0x199217(0x2)]()[a0_0x199217(0x3)]('');
function a0_0x2def() {
    const _0x504759 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'log'
    ];
    a0_0x2def = function () {
        return _0x504759;
    };
    return a0_0x2def();
}
if (lines[0x0] === lines[0x1] && lines[0x1] === lines[0x2]) {
    console[a0_0x199217(0x4)](0x1);
}
if (lines[0x0] === lines[0x1] && lines[0x1] !== lines[0x2]) {
    console[a0_0x199217(0x4)](0x2);
}
if (lines[0x0] === lines[0x2] && lines[0x0] !== lines[0x1]) {
    console[a0_0x199217(0x4)](0x2);
}
function a0_0xd852(gISXBQ, key) {
    const stringArray = a0_0x2def();
    a0_0xd852 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xd852(gISXBQ, key);
}
if (lines[0x1] === lines[0x2] && lines[0x0] !== lines[0x1]) {
    console[a0_0x199217(0x4)](0x2);
}
if (lines[0x0] !== lines[0x1] && lines[0x1] !== lines[0x2] && lines[0x2] !== lines[0x0]) {
    console[a0_0x199217(0x4)](0x3);
}