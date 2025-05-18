function a0_0x270d(dheDRk, key) {
    const stringArray = a0_0x51c7();
    a0_0x270d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x270d(dheDRk, key);
}
const a0_0x3c5eb8 = a0_0x270d;
function a0_0x51c7() {
    const _0x55f809 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'forEach',
        'log',
        'ceil',
        'length'
    ];
    a0_0x51c7 = function () {
        return _0x55f809;
    };
    return a0_0x51c7();
}
const input = require('fs')[a0_0x3c5eb8(0x0)](a0_0x3c5eb8(0x1), a0_0x3c5eb8(0x2));
const numbers = input[a0_0x3c5eb8(0x3)]('\x20');
let sum = 0x0;
numbers[a0_0x3c5eb8(0x4)](function (number) {
    sum += Number(number);
});
console[a0_0x3c5eb8(0x5)](Math[a0_0x3c5eb8(0x6)](sum / numbers[a0_0x3c5eb8(0x7)]));