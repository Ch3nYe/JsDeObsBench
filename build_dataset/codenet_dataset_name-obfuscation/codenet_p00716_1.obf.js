function F1(_0x5c8c6f, _0xa12010, _0x5c04b9) {
    var _0x4b7dc4 = 0x0;
    for (var _0x2e5cac = 0x0; _0x2e5cac < Y; _0x2e5cac++) {
        _0x4b7dc4 += Math['floor'](_0x5c8c6f * _0xa12010);
        _0x5c8c6f -= _0x5c04b9;
    }
    return _0x5c8c6f + _0x4b7dc4;
}
function F2(_0x689a32, _0x768d14, _0x326506) {
    for (var _0x343148 = 0x0; _0x343148 < Y; _0x343148++) {
        _0x689a32 += Math['floor'](_0x689a32 * _0x768d14) - _0x326506;
    }
    return _0x689a32;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var M = Arr['shift']() - 0x0;
for (var i = 0x0; i < M; i++) {
    var money = Arr['shift']() - 0x0;
    var Y = Arr['shift']() - 0x0;
    var N = Arr['shift']() - 0x0;
    var arr = [];
    for (var j = 0x0; j < N; j++) {
        var D = Arr['shift']()['split']('\x20')['map'](Number);
        if (D[0x0] == 0x0)
            arr['push'](F1(money, D[0x1], D[0x2]));
        if (D[0x0] == 0x1)
            arr['push'](F2(money, D[0x1], D[0x2]));
    }
    console['log'](Math['max']['apply'](null, arr));
}