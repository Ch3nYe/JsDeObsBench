function warshall() {
    for (var _0xa78527 = 0x0; _0xa78527 < n; _0xa78527++) {
        for (var _0x13b34f = 0x0; _0x13b34f < n; _0x13b34f++) {
            for (var _0x527454 = 0x0; _0x527454 < n; _0x527454++) {
                C[_0x13b34f][_0x527454] = Math['min'](C[_0x13b34f][_0x527454], C[_0x13b34f][_0xa78527] + C[_0xa78527][_0x527454]);
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = 0xa;
    var m = Arr['shift']() - 0x0;
    if (m == 0x0)
        break;
    var C = [];
    for (var i = 0x0; i < n; i++) {
        C[i] = [];
        for (var j = 0x0; j < n; j++) {
            C[i][j] = i === j ? 0x0 : Infinity;
        }
    }
    var max = 0x0;
    for (var i = 0x0; i < m; i++) {
        var A = Arr['shift']()['split']('\x20')['map'](Number);
        max = Math['max'](max, A[0x0], A[0x1]);
        C[A[0x0]][A[0x1]] = A[0x2];
        C[A[0x1]][A[0x0]] = A[0x2];
    }
    warshall();
    var min = [
        '',
        Infinity
    ];
    for (var i = max; i >= 0x0; i--) {
        var arr = C[i]['slice'](0x0, max + 0x1);
        var sum = arr['reduce'](function (_0x5ea9cb, _0x5797df) {
            return _0x5ea9cb + _0x5797df;
        });
        min[0x1] = Math['min'](min[0x1], sum);
        if (min[0x1] == sum)
            min = [
                i,
                sum
            ];
    }
    console['log'](min['join']('\x20'));
}