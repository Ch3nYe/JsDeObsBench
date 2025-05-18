'use strict';
function a0_0x1fe7(ozcGSf, key) {
    var stringArray = a0_0x1a72();
    a0_0x1fe7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1fe7(ozcGSf, key);
}
var a0_0x140176 = a0_0x1fe7;
function a0_0x1a72() {
    var _0x5b63c6 = [
        'map',
        'fill',
        'max',
        'min',
        'reduce',
        'split',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1a72 = function () {
        return _0x5b63c6;
    };
    return a0_0x1a72();
}
function solve(N, A) {
    var _0x2672f4 = a0_0x1fe7;
    var dp = new Array(N + 0x1)['fill'](0x0)[_0x2672f4(0x0)](e => new Array(N + 0x1)[_0x2672f4(0x1)](0x0));
    var row = 0x1;
    var col = 0x1;
    while (col <= N) {
        var c = col;
        for (var r = row; r <= N; r++) {
            if (c > N) {
                break;
            }
            if (c === r) {
                dp[r][c] = A[r - 0x1];
            } else if (c === r + 0x1) {
                dp[r][c] = Math['max'](A[r - 0x1], A[c - 0x1]);
            } else {
                dp[r][c] = Math[_0x2672f4(0x2)](A[r - 0x1] + Math[_0x2672f4(0x3)](dp[r + 0x1][c - 0x1], dp[r + 0x2][c]), A[c - 0x1] + Math[_0x2672f4(0x3)](dp[r + 0x1][c - 0x1], dp[r][c - 0x2]));
            }
            c++;
        }
        col++;
    }
    var taro = dp[0x1][N];
    var sum = A[_0x2672f4(0x4)]((acc, current) => acc + current);
    return taro - (sum - taro);
}
function main(input) {
    var _0x17041b = a0_0x1fe7;
    var lines = input[_0x17041b(0x5)]('\x0a');
    var N = parseInt(lines[0x0]);
    var A = lines[0x1]['split']('\x20')[_0x17041b(0x0)](l => parseInt(l));
    var ans = solve(N, A);
    console['log'](ans);
}
main(require('fs')[a0_0x140176(0x6)](a0_0x140176(0x7), a0_0x140176(0x8)));