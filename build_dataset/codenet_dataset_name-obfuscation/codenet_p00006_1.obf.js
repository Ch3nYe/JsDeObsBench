var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var string = input['trim']();
console['log'](reverse(string));
function reverse(_0x2c51e8) {
    return string['split']('')['reverse']()['join']('');
}