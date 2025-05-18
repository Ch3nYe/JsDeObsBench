function move(_0x90f59d, _0x5b7dc6) {
    var _0x2f3bc5 = _0x5b7dc6[0x0];
    var _0x9c276d = _0x5b7dc6[0x1];
    var _0xf77ec5 = _0x5b7dc6[0x2];
    var _0x2b6ea2 = _0x5b7dc6[0x3];
    var _0x381aeb = _0x5b7dc6[0x4];
    var _0x269c03 = _0x5b7dc6[0x5];
    var _0x5872a6 = [];
    if (_0x90f59d == 'N')
        _0x5872a6 = [
            _0x9c276d,
            _0x269c03,
            _0xf77ec5,
            _0x2b6ea2,
            _0x2f3bc5,
            _0x381aeb
        ];
    if (_0x90f59d == 'S')
        _0x5872a6 = [
            _0x381aeb,
            _0x2f3bc5,
            _0xf77ec5,
            _0x2b6ea2,
            _0x269c03,
            _0x9c276d
        ];
    if (_0x90f59d == 'E')
        _0x5872a6 = [
            _0x2b6ea2,
            _0x9c276d,
            _0x2f3bc5,
            _0x269c03,
            _0x381aeb,
            _0xf77ec5
        ];
    if (_0x90f59d == 'W')
        _0x5872a6 = [
            _0xf77ec5,
            _0x9c276d,
            _0x269c03,
            _0x2f3bc5,
            _0x381aeb,
            _0x2b6ea2
        ];
    return _0x5872a6;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var diceA = Arr[0x0]['split']('\x20')['map'](Number);
var diceB = Arr[0x1]['split']('\x20')['map'](Number);
var NSEW = 'NSEW'['split']('');
for (var i = 0x0; i < 0x64; i++) {
    var r = Math['floor'](Math['random']() * 0x4);
    diceA = move(NSEW[r], diceA);
    var flag = diceA['every'](function (_0x535ed0, _0x3bdeae) {
        return _0x535ed0 == diceB[_0x3bdeae];
    });
    if (flag)
        break;
}
console['log'](flag ? 'Yes' : 'No');