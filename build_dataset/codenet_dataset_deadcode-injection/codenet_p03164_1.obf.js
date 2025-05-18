var a0_0xc27086 = a0_0xa10b;
var MAX_VALUE = 0x3e8;
var inputRaw = require('fs')[a0_0xc27086(0x0)]('/dev/stdin', a0_0xc27086(0x1));
var rows = inputRaw[a0_0xc27086(0x2)]()['split']('\x0a');
var row1 = rows[0x0][a0_0xc27086(0x3)]('\x20')[a0_0xc27086(0x4)](Number);
function a0_0x4047() {
    var _0xf5cc5d = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'slice',
        'from',
        'fill',
        'min',
        'log'
    ];
    a0_0x4047 = function () {
        return _0xf5cc5d;
    };
    return a0_0x4047();
}
var N = row1[0x0];
function a0_0xa10b(eZrCLc, key) {
    var stringArray = a0_0x4047();
    a0_0xa10b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa10b(eZrCLc, key);
}
var W = row1[0x1];
var list = rows[a0_0xc27086(0x5)](0x1)[a0_0xc27086(0x4)](r => r['split']('\x20')[a0_0xc27086(0x4)](Number));
var dp = Array[a0_0xc27086(0x6)]({ 'length': N + 0x1 }, _ => Array(N * MAX_VALUE + 0x1)[a0_0xc27086(0x7)](0x0));
dp[0x0] = Array(N * MAX_VALUE + 0x1)[a0_0xc27086(0x7)](Infinity);
dp[0x0][0x0] = 0x0;
function solve() {
    var _0xd88ceb = a0_0xa10b;
    for (var i = 0x0; i < N; i++) {
        for (var j = 0x0; j <= N * MAX_VALUE; j++) {
            if (list[i][0x1] <= j) {
                var a = dp[i][j - list[i][0x1]] + list[i][0x0];
                var b = dp[i][j];
                dp[i + 0x1][j] = Math[_0xd88ceb(0x8)](a, b);
            } else {
                dp[i + 0x1][j] = dp[i][j];
            }
        }
    }
    var result = 0x0;
    for (var i = 0x0; i <= N * MAX_VALUE; i++)
        if (dp[N][i] <= W)
            result = i;
    return result;
}
console[a0_0xc27086(0x9)](solve());