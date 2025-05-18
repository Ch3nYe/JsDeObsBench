var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var [a, b] = [
    0x0,
    0x1
];
arr['forEach'](_0x5dfdf4 => {
    var [_0x15d5b9, _0x379824] = _0x5dfdf4['split']('\x20')['map'](Number);
    if (_0x15d5b9 == 0x1) {
        b *= _0x379824;
        a *= _0x379824;
    } else if (_0x15d5b9 == 0x2)
        a -= _0x379824;
    else if (_0x15d5b9 == 0x3)
        a += _0x379824;
});
console['log'](a + '\x20' + b);