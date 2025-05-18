'use strict';
function a0_0x1e34(AnAtpH, key) {
    const stringArray = a0_0xd3ce();
    a0_0x1e34 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1e34(AnAtpH, key);
}
const a0_0x2c8ce6 = a0_0x1e34;
let input = require('fs')[a0_0x2c8ce6(0x0)]('/dev/stdin', a0_0x2c8ce6(0x1));
const info = input[a0_0x2c8ce6(0x2)]()[a0_0x2c8ce6(0x3)]('\x0a');
const nums = info[0x1][a0_0x2c8ce6(0x3)]('\x20')[a0_0x2c8ce6(0x4)](x => x * 0x1);
function a0_0xd3ce() {
    const _0xee050a = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'round',
        'reduce',
        'pow'
    ];
    a0_0xd3ce = function () {
        return _0xee050a;
    };
    return a0_0xd3ce();
}
const ave = Math[a0_0x2c8ce6(0x5)](nums[a0_0x2c8ce6(0x6)]((x, a) => {
    return a += x;
}) / info[0x0]);
let sum = 0x0;
for (let i = 0x0; i < info[0x0]; i++) {
    sum += Math[a0_0x2c8ce6(0x7)](nums[i] - ave, 0x2);
}
console['log'](sum);