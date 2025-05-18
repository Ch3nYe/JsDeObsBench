var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (_0x6fdde5) {
    var _0x262bb9 = _0x6fdde5['split']('\x20')[0x0] - 0x0;
    var _0x5b2032 = _0x6fdde5['split']('\x20')[0x1] - 0x0;
    console['log'](_0x262bb9 + _0x5b2032);
});