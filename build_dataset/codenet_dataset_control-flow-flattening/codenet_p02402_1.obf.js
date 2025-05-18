const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const arr = input['split'](/\n/);
const numbers = arr[0x1]['split']('\x20')['map'](Number);
let min = numbers[0x0];
let max = numbers[0x0];
let sum = 0x0;
numbers['forEach'](number => {
    const ULhBQz = {
        'GEoPD': function (x, y) {
            return x > y;
        },
        'kdkLP': function (x, y) {
            return x < y;
        }
    };
    if (ULhBQz['GEoPD'](min, number))
        min = number;
    if (ULhBQz['kdkLP'](max, number))
        max = number;
    sum += number;
});
console['log'](min + '\x20' + max + '\x20' + sum);