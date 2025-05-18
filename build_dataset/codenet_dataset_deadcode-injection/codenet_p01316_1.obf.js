function a0_0x458f() {
    var _0x3db21e = [
        'readFileSync',
        'trim',
        'split',
        'shift',
        'join',
        'push',
        'pow',
        'forEach',
        'min',
        'log'
    ];
    a0_0x458f = function () {
        return _0x3db21e;
    };
    return a0_0x458f();
}
var a0_0x97e5bb = a0_0x5b9d;
function a0_0x5b9d(lDPLiC, key) {
    var stringArray = a0_0x458f();
    a0_0x5b9d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b9d(lDPLiC, key);
}
var input = require('fs')[a0_0x97e5bb(0x0)]('/dev/stdin', 'utf8');
var arr = input[a0_0x97e5bb(0x1)]()[a0_0x97e5bb(0x2)]('\x0a');
while (!![]) {
    var nm = arr[a0_0x97e5bb(0x3)]()[a0_0x97e5bb(0x2)]('\x20');
    if (nm[a0_0x97e5bb(0x4)]('\x20') == '0\x200')
        break;
    var n = nm[0x0];
    var m = nm[0x1];
    var M = [];
    for (var i = 0x0; i < m; i++)
        M[a0_0x97e5bb(0x5)](arr['shift']() - 0x0);
    var N = [];
    for (var i = 0x0; i < n; i++)
        N['push'](arr['shift']() - 0x0);
    var dp = [];
    for (var i = 0x0; i <= n; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= 0xff; j++) {
            dp[i][j] = Infinity;
        }
    }
    dp[0x0][0x80] = 0x0;
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x0; j <= 0xff; j++) {
            if (dp[i - 0x1][j] != Infinity) {
                for (var k = 0x0; k < m; k++) {
                    var jm = j + M[k];
                    if (jm < 0x0)
                        jm = 0x0;
                    if (jm > 0xff)
                        jm = 0xff;
                    dp[i][jm] = Math['min'](dp[i][jm], dp[i - 0x1][j] + Math[a0_0x97e5bb(0x6)](N[i - 0x1] - jm, 0x2));
                }
            }
        }
    }
    var min = Infinity;
    dp[n][a0_0x97e5bb(0x7)](function (v) {
        var _0x3526a9 = a0_0x5b9d;
        min = Math[_0x3526a9(0x8)](min, v);
    });
    console[a0_0x97e5bb(0x9)](min);
}