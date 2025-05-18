const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const numbers = input['split']('\x20');
let sum = 0x0;
numbers['forEach'](function (number) {
    const jjMYMT = {
        'STZgV': function (callee, param1) {
            return callee(param1);
        }
    };
    sum += jjMYMT['STZgV'](Number, number);
});
console['log'](Math['ceil'](sum / numbers['length']));