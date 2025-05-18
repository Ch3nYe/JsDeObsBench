function warshall() {
    for (var _0x1a838f = 0x0; _0x1a838f < n; _0x1a838f++) {
        for (var _0x55a0f1 = 0x0; _0x55a0f1 < n; _0x55a0f1++) {
            for (var _0xec139b = 0x0; _0xec139b < n; _0xec139b++) {
                C[_0x55a0f1][_0xec139b] = Math['min'](C[_0x55a0f1][_0xec139b], C[_0x55a0f1][_0x1a838f] + C[_0x1a838f][_0xec139b]);
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