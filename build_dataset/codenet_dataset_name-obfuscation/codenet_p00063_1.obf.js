var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var cnt = 0x0;
Arr['forEach'](function (_0x4e5e39) {
    var _0x33aa53 = _0x4e5e39['split']('')['reverse']()['join']('');
    if (_0x33aa53 == _0x4e5e39)
        cnt++;
});
console['log'](cnt);