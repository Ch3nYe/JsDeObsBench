'use strict';
const a0_0x3cdc87 = a0_0x20c4;
let input = require('fs')[a0_0x3cdc87(0x0)](a0_0x3cdc87(0x1), a0_0x3cdc87(0x2));
input = input[a0_0x3cdc87(0x3)]('\x0a');
let info = input[a0_0x3cdc87(0x4)]();
let N = info[a0_0x3cdc87(0x3)]('\x20')[0x0] * 0x1;
let X = info[a0_0x3cdc87(0x3)]('\x20')[0x1];
function a0_0x20c4(AQssFg, key) {
    const stringArray = a0_0x1001();
    a0_0x20c4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x20c4(AQssFg, key);
}
let arr = input[a0_0x3cdc87(0x5)](x => x * 0x1);
let min = Math['min'](...arr);
let sum = arr['reduce']((x, a) => {
    return a + x;
});
let ans = N + Math[a0_0x3cdc87(0x6)]((X - sum) / min);
console[a0_0x3cdc87(0x7)](ans);
function a0_0x1001() {
    const _0x2aea48 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'map',
        'floor',
        'log'
    ];
    a0_0x1001 = function () {
        return _0x2aea48;
    };
    return a0_0x1001();
}