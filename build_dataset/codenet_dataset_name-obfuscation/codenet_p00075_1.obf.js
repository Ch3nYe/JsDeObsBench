var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var ret = lines['filter'](function (_0x630c32) {
    var _0x2351bf = _0x630c32['split'](',');
    var _0x192c52 = +_0x2351bf[0x1];
    var _0xf4349d = +_0x2351bf[0x2];
    return _0x192c52 / (_0xf4349d * _0xf4349d) >= 0x19;
});
ret['forEach'](function (_0x5226b1) {
    console['log'](_0x5226b1['split'](',')[0x0]);
});