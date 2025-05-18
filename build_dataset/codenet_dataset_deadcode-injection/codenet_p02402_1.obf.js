const a0_0x422c69 = a0_0x2016;
const input = require('fs')[a0_0x422c69(0x0)](a0_0x422c69(0x1), a0_0x422c69(0x2));
const arr = input[a0_0x422c69(0x3)](/\n/);
const numbers = arr[0x1][a0_0x422c69(0x3)]('\x20')[a0_0x422c69(0x4)](Number);
let min = numbers[0x0];
let max = numbers[0x0];
let sum = 0x0;
function a0_0x2016(czQZbV, key) {
    const stringArray = a0_0x9308();
    a0_0x2016 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2016(czQZbV, key);
}
numbers[a0_0x422c69(0x5)](number => {
    if (min > number)
        min = number;
    if (max < number)
        max = number;
    sum += number;
});
function a0_0x9308() {
    const _0x186ad3 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'forEach',
        'log'
    ];
    a0_0x9308 = function () {
        return _0x186ad3;
    };
    return a0_0x9308();
}
console[a0_0x422c69(0x6)](min + '\x20' + max + '\x20' + sum);