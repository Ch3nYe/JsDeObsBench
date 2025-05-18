function heron(_0x1fb0de, _0x42c846, _0x37de95) {
    var _0x5401b8 = (_0x1fb0de + _0x42c846 + _0x37de95) / 0x2;
    var _0x4f828e = Math['sqrt'](_0x5401b8 * (_0x5401b8 - _0x1fb0de) * (_0x5401b8 - _0x42c846) * (_0x5401b8 - _0x37de95));
    return _0x4f828e;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var xy1 = Arr['shift']()['split'](',')['map'](Number);
var xy2 = Arr['shift']()['split'](',')['map'](Number);
var x1 = xy1[0x0];
var y1 = xy1[0x1];
var x2 = xy2[0x0];
var y2 = xy2[0x1];
var sum = 0x0;
for (var I = 0x0; I < Arr['length']; I++) {
    var xy3 = Arr[I]['split'](',')['map'](Number);
    var x3 = xy3[0x0];
    var y3 = xy3[0x1];
    var d12 = Math['sqrt'](Math['pow'](x1 - x2, 0x2) + Math['pow'](y1 - y2, 0x2));
    var d13 = Math['sqrt'](Math['pow'](x1 - x3, 0x2) + Math['pow'](y1 - y3, 0x2));
    var d23 = Math['sqrt'](Math['pow'](x2 - x3, 0x2) + Math['pow'](y2 - y3, 0x2));
    sum += heron(d12, d13, d23);
    x2 = xy3[0x0];
    y2 = xy3[0x1];
}
console['log'](sum['toFixed'](0x6));