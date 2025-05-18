var a0_0x568526 = a0_0x2a8c;
var input = require('fs')[a0_0x568526(0x0)](a0_0x568526(0x1), a0_0x568526(0x2));
var arr = input[a0_0x568526(0x3)]()['split']('\x0a')[a0_0x568526(0x4)](Number);
while (!![]) {
    var n = arr[a0_0x568526(0x5)]();
    if (n == 0x0)
        break;
    var coin = [''];
    for (var i = 0x1; i <= 0x11; i++)
        coin[a0_0x568526(0x6)](i * i);
    var dp = [];
    for (var i = 0x0; i <= 0x11; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= n; j++) {
            dp[i][j] = 0x0;
        }
    }
    dp[0x0][0x0] = 0x1;
    for (var i = 0x1; i <= 0x11; i++) {
        for (var j = 0x0; j <= n; j++) {
            var k = 0x0;
            while (coin[i] * k + j <= n) {
                dp[i][coin[i] * k + j] += dp[i - 0x1][j];
                k++;
            }
        }
    }
    console[a0_0x568526(0x7)](dp[0x11][n]);
}
function a0_0x2a8c(MBwJUh, key) {
    var stringArray = a0_0x5904();
    a0_0x2a8c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a8c(MBwJUh, key);
}
function a0_0x5904() {
    var _0x71fd2d = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'map',
        'shift',
        'push',
        'log'
    ];
    a0_0x5904 = function () {
        return _0x71fd2d;
    };
    return a0_0x5904();
}