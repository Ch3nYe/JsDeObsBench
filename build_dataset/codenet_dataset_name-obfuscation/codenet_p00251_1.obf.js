var plus = function (_0x4f44ba, _0x80d409) {
    return _0x4f44ba + _0x80d409;
};
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var sum = 0x0;
console['log'](Arr['reduce'](plus));