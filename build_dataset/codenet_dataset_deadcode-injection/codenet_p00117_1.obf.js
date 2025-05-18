var a0_0x5988c4 = a0_0x3369;
function warshall() {
    var _0x1af8d0 = a0_0x3369;
    for (var k = 0x0; k < n; k++) {
        if (_0x1af8d0(0x0) !== _0x1af8d0(0x1)) {
            for (var i = 0x0; i < n; i++) {
                if (_0x1af8d0(0x2) === 'LEVzB') {
                    C[i][j] = Math['min'](C[i][j], C[i][k] + C[k][j]);
                } else {
                    for (var j = 0x0; j < n; j++) {
                        C[i][j] = Math[_0x1af8d0(0x3)](C[i][j], C[i][k] + C[k][j]);
                    }
                }
            }
        } else {
            for (var j = 0x0; j < n; j++) {
                C[i][j] = Math['min'](C[i][j], C[i][k] + C[k][j]);
            }
        }
    }
}
var input = require('fs')['readFileSync'](a0_0x5988c4(0x4), 'utf8');
var Arr = input[a0_0x5988c4(0x5)]()[a0_0x5988c4(0x6)]('\x0a');
function a0_0x3369(ZTujZJ, key) {
    var stringArray = a0_0x210e();
    a0_0x3369 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3369(ZTujZJ, key);
}
var n = Arr['shift']() - 0x0;
var m = Arr[a0_0x5988c4(0x7)]() - 0x0;
var C = [];
for (var i = 0x0; i < n; i++) {
    C[i] = [];
    for (var j = 0x0; j < n; j++) {
        C[i][j] = i === j ? 0x0 : Infinity;
    }
}
for (var i = 0x0; i < m; i++) {
    var A = Arr[a0_0x5988c4(0x7)]()[a0_0x5988c4(0x6)](',')[a0_0x5988c4(0x8)](Number);
    C[A[0x0] - 0x1][A[0x1] - 0x1] = A[0x2];
    C[A[0x1] - 0x1][A[0x0] - 0x1] = A[0x3];
}
warshall();
var last = Arr[a0_0x5988c4(0x7)]()['split'](',')[a0_0x5988c4(0x8)](Number);
var cost = C[last[0x0] - 0x1][last[0x1] - 0x1] + C[last[0x1] - 0x1][last[0x0] - 0x1] + last[0x3];
console['log'](last[0x2] - cost);
function a0_0x210e() {
    var _0x442a93 = [
        'KnjnY',
        'AJahB',
        'uQDbQ',
        'min',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'map'
    ];
    a0_0x210e = function () {
        return _0x442a93;
    };
    return a0_0x210e();
}