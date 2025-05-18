function warshall() {
    var RUvvOw = {
        'zJttH': function (x, y) {
            return x < y;
        },
        'dqdiq': function (x, y) {
            return x + y;
        }
    };
    for (var k = 0x0; RUvvOw['zJttH'](k, n); k++) {
        for (var i = 0x0; RUvvOw['zJttH'](i, n); i++) {
            for (var j = 0x0; RUvvOw['zJttH'](j, n); j++) {
                C[i][j] = Math['min'](C[i][j], RUvvOw['dqdiq'](C[i][k], C[k][j]));
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
var m = Arr['shift']() - 0x0;
var C = [];
for (var i = 0x0; i < n; i++) {
    C[i] = [];
    for (var j = 0x0; j < n; j++) {
        C[i][j] = i === j ? 0x0 : Infinity;
    }
}
for (var i = 0x0; i < m; i++) {
    var A = Arr['shift']()['split'](',')['map'](Number);
    C[A[0x0] - 0x1][A[0x1] - 0x1] = A[0x2];
    C[A[0x1] - 0x1][A[0x0] - 0x1] = A[0x3];
}
warshall();
var last = Arr['shift']()['split'](',')['map'](Number);
var cost = C[last[0x0] - 0x1][last[0x1] - 0x1] + C[last[0x1] - 0x1][last[0x0] - 0x1] + last[0x3];
console['log'](last[0x2] - cost);