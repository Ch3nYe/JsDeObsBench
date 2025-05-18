const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const arr = input['split'](/\n/);
const numbers = arr[0x1]['split']('\x20')['map'](Number);
let min = numbers[0x0];
let max = numbers[0x0];
let sum = 0x0;
numbers['forEach'](_0x1c8c67 => {
    if (min > _0x1c8c67)
        min = _0x1c8c67;
    if (max < _0x1c8c67)
        max = _0x1c8c67;
    sum += _0x1c8c67;
});
console['log'](min + '\x20' + max + '\x20' + sum);