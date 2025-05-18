var plus = function (a, b) {
    var VsCbzJ = {
        'NCaIU': function (x, y) {
            return x + y;
        }
    };
    return VsCbzJ['NCaIU'](a, b);
};
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var sum = 0x0;
console['log'](Arr['reduce'](plus));