function prime(_0x96dfb0) {
    var _0x454842 = [];
    for (var _0x33a4e8 = 0x0; _0x33a4e8 <= _0x96dfb0; _0x33a4e8++)
        _0x454842[_0x33a4e8] = _0x33a4e8;
    _0x454842[0x0] = ![];
    _0x454842[0x1] = ![];
    var _0x51ba0e = Math['floor'](Math['sqrt'](_0x96dfb0));
    for (var _0x33a4e8 = 0x2; _0x33a4e8 <= _0x51ba0e; _0x33a4e8++) {
        if (_0x454842[_0x33a4e8] == ![])
            continue;
        for (var _0x18438b = _0x33a4e8 + _0x33a4e8; _0x18438b <= _0x96dfb0; _0x18438b += _0x33a4e8) {
            _0x454842[_0x18438b] = ![];
        }
    }
    var _0x215e9e = {};
    for (var _0x33a4e8 = 0x0; _0x33a4e8 <= _0x96dfb0; _0x33a4e8++) {
        if (_0x454842[_0x33a4e8] !== ![])
            _0x215e9e[_0x454842[_0x33a4e8]] = !![];
    }
    return _0x215e9e;
}
var p = prime(0x2710);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    var a = Arr[i];
    var A = [];
    var B = [];
    for (var j = 0x1; j <= a; j++)
        A['push'](j);
    for (var j = a; j >= 0x1; j--)
        B['push'](j);
    var pair = 0x0;
    for (var j = 0x0; j < a; j++) {
        if (p['hasOwnProperty'](A[j]) && p['hasOwnProperty'](B[j]))
            pair++;
    }
    console['log'](pair);
}