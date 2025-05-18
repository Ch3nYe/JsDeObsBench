const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const numbers = input['split']('\x20');
let sum = 0x0;
numbers['forEach'](function (_0x37c76b) {
    sum += Number(_0x37c76b);
});
console['log'](Math['ceil'](sum / numbers['length']));