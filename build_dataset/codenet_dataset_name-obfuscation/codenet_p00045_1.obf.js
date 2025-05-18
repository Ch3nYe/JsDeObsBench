var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var sum = 0x0;
var cnt = 0x0;
Arr['forEach'](function (_0x4f92f1) {
    var _0x547dbe = _0x4f92f1['split'](',')['map'](Number);
    sum += _0x547dbe[0x0] * _0x547dbe[0x1];
    cnt += _0x547dbe[0x1];
});
console['log'](sum);
console['log'](Math['round'](cnt / Arr['length']));