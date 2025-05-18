var a0_0x47df38 = a0_0x1e0c;
function a0_0x1e0c(rdKvTb, key) {
    var stringArray = a0_0x56e6();
    a0_0x1e0c = function (index, key) {
        index = index - 0x150;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1e0c(rdKvTb, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x59a1d1 = a0_0x1e0c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x59a1d1(0x157)) / 0x1 * (-parseInt(_0x59a1d1(0x152)) / 0x2) + parseInt(_0x59a1d1(0x150)) / 0x3 * (parseInt(_0x59a1d1(0x15f)) / 0x4) + parseInt(_0x59a1d1(0x160)) / 0x5 + -parseInt(_0x59a1d1(0x15d)) / 0x6 + parseInt(_0x59a1d1(0x15c)) / 0x7 * (-parseInt(_0x59a1d1(0x161)) / 0x8) + parseInt(_0x59a1d1(0x154)) / 0x9 + parseInt(_0x59a1d1(0x15a)) / 0xa * (-parseInt(_0x59a1d1(0x159)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x56e6, 0x83bd8));
function warshall() {
    var _0x3aecc8 = a0_0x1e0c;
    for (var k = 0x0; k < n; k++) {
        for (var i = 0x0; i < n; i++) {
            for (var j = 0x0; j < n; j++) {
                C[i][j] = Math[_0x3aecc8(0x155)](C[i][j], C[i][k] + C[k][j]);
            }
        }
    }
}
var input = require('fs')[a0_0x47df38(0x151)](a0_0x47df38(0x156), a0_0x47df38(0x153));
var Arr = input['trim']()[a0_0x47df38(0x158)]('\x0a');
var n = Arr[a0_0x47df38(0x15e)]() - 0x0;
var m = Arr[a0_0x47df38(0x15e)]() - 0x0;
function a0_0x56e6() {
    var _0x1f01c6 = [
        'min',
        '/dev/stdin',
        '22324AvHhqw',
        'split',
        '2563cbAthS',
        '52730JPsBcP',
        'map',
        '3986857gVHcJa',
        '4350732jzemoC',
        'shift',
        '12NxbMHb',
        '5136320SvYdIn',
        '8nKpWcr',
        'log',
        '1024689rWNUfV',
        'readFileSync',
        '2nxCjEH',
        'utf8',
        '8897517qgJQmS'
    ];
    a0_0x56e6 = function () {
        return _0x1f01c6;
    };
    return a0_0x56e6();
}
var C = [];
for (var i = 0x0; i < n; i++) {
    C[i] = [];
    for (var j = 0x0; j < n; j++) {
        C[i][j] = i === j ? 0x0 : Infinity;
    }
}
for (var i = 0x0; i < m; i++) {
    var A = Arr[a0_0x47df38(0x15e)]()[a0_0x47df38(0x158)](',')[a0_0x47df38(0x15b)](Number);
    C[A[0x0] - 0x1][A[0x1] - 0x1] = A[0x2];
    C[A[0x1] - 0x1][A[0x0] - 0x1] = A[0x3];
}
warshall();
var last = Arr[a0_0x47df38(0x15e)]()['split'](',')['map'](Number);
var cost = C[last[0x0] - 0x1][last[0x1] - 0x1] + C[last[0x1] - 0x1][last[0x0] - 0x1] + last[0x3];
console[a0_0x47df38(0x162)](last[0x2] - cost);