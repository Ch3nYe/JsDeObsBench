function heron(_0x4f5d29, _0x1698a2, _0x527050) {
    var _0x30a10d = (_0x4f5d29 + _0x1698a2 + _0x527050) / 0x2;
    var _0x52225c = Math['sqrt'](_0x30a10d * (_0x30a10d - _0x4f5d29) * (_0x30a10d - _0x1698a2) * (_0x30a10d - _0x527050));
    return _0x52225c;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var ALX = Arr[i]['split']('\x20')['map'](Number);
    var A = ALX[0x0];
    var L = ALX[0x1];
    var X = ALX[0x2];
    var sum = 0x0;
    sum += heron(A, L, L);
    sum += heron(L, (L + X) / 0x2, (L + X) / 0x2) * 0x2;
    console['log'](sum['toFixed'](0xa));
}