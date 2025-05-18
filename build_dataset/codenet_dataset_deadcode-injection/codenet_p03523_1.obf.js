'use strict';
const a0_0x5cd168 = a0_0x24f6;
let input = require('fs')[a0_0x5cd168(0x0)]('/dev/stdin', a0_0x5cd168(0x1));
input = input[a0_0x5cd168(0x2)]();
let ans = a0_0x5cd168(0x3);
if (input[0x0] == 'A') {
    input = input[a0_0x5cd168(0x4)](0x1);
}
if (input[0x0] == 'K') {
    input = input[a0_0x5cd168(0x4)](0x1);
}
if (input[0x0] == 'I') {
    input = input['slice'](0x1);
}
if (input[0x0] == 'H') {
    input = input[a0_0x5cd168(0x4)](0x1);
}
if (input[0x0] == 'A') {
    input = input['slice'](0x1);
}
if (input[0x0] == 'B') {
    input = input[a0_0x5cd168(0x4)](0x1);
}
if (input[0x0] == 'A') {
    input = input['slice'](0x1);
}
if (input[0x0] == 'R') {
    input = input[a0_0x5cd168(0x4)](0x1);
}
function a0_0x24f6(sTkjfM, key) {
    const stringArray = a0_0x3712();
    a0_0x24f6 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x24f6(sTkjfM, key);
}
if (input[0x0] == 'A') {
    input = input[a0_0x5cd168(0x4)](0x1);
}
function a0_0x3712() {
    const _0xe5c5d5 = [
        'readFileSync',
        'utf8',
        'trim',
        'YES',
        'slice',
        'log'
    ];
    a0_0x3712 = function () {
        return _0xe5c5d5;
    };
    return a0_0x3712();
}
input == '' ? ans = a0_0x5cd168(0x3) : ans = 'NO';
console[a0_0x5cd168(0x5)](ans);