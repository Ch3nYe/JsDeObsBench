function tobu(_0x36fc6b) {
    var _0x5eb097 = 0x0;
    for (var _0x2eabc9 = 0x0; _0x2eabc9 < _0x36fc6b['length'] - 0x1; _0x2eabc9++) {
        if (_0x2eabc9 > _0x5eb097)
            break;
        var _0x402b61 = Math['floor'](_0x36fc6b[_0x2eabc9] / 0xa);
        _0x5eb097 = Math['max'](_0x5eb097, _0x2eabc9 + _0x402b61);
    }
    return _0x5eb097 >= _0x36fc6b['length'] - 0x1;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
var n = arr['shift']();
if (tobu(arr) && tobu(arr['reverse']()))
    console['log']('yes');
else
    console['log']('no');