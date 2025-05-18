var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (_0x5bd00d) {
    var _0x14d821 = _0x5bd00d['split']('\x20')['map'](Number);
    var _0x526290 = Math['max'](_0x14d821[0x0], _0x14d821[0x1]);
    var _0x445907 = Math['min'](_0x14d821[0x0], _0x14d821[0x1]);
    while (_0x445907 != 0x0) {
        var _0x29b097 = _0x445907;
        _0x445907 = _0x526290 % _0x445907;
        _0x526290 = _0x29b097;
    }
    console['log'](_0x526290);
});