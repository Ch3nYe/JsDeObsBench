var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var string = input['trim']();
console['log'](reverse(string));
function reverse(s) {
    return string['split']('')['reverse']()['join']('');
}