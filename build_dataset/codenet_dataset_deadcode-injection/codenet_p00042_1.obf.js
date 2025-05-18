function a0_0x49cc() {
    var _0x5d1f5c = [
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'push',
        'log'
    ];
    a0_0x49cc = function () {
        return _0x5d1f5c;
    };
    return a0_0x49cc();
}
var a0_0x8c5f0e = a0_0x163d;
function a0_0x163d(uZSApT, key) {
    var stringArray = a0_0x49cc();
    a0_0x163d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x163d(uZSApT, key);
}
var input = require('fs')['readFileSync'](a0_0x8c5f0e(0x0), 'utf8');
var Arr = input[a0_0x8c5f0e(0x1)]()[a0_0x8c5f0e(0x2)]('\x0a');
var cnt = 0x1;
while (!![]) {
    var W = Arr[a0_0x8c5f0e(0x3)]() - 0x0;
    if (W == 0x0)
        break;
    var N = Arr['shift']() - 0x0;
    var dp = [];
    for (var y = 0x0; y < N + 0x1; y++) {
        dp[y] = [];
        for (var x = 0x0; x <= W; x++) {
            dp[y][x] = 0x0;
        }
    }
    var v = [];
    var w = [];
    for (var i = 0x0; i < N; i++) {
        var arr = Arr['shift']()['split'](',')['map'](Number);
        v[a0_0x8c5f0e(0x4)](arr[0x0]);
        w[a0_0x8c5f0e(0x4)](arr[0x1]);
    }
    for (var y = 0x0; y < N; y++) {
        for (var x = 0x0; x <= W; x++) {
            if (x - w[y] >= 0x0)
                dp[y + 0x1][x] = Math['max'](dp[y][x], dp[y][x - w[y]] + v[y]);
            else
                dp[y + 0x1][x] = dp[y][x];
        }
    }
    console[a0_0x8c5f0e(0x5)]('Case\x20' + cnt + ':');
    cnt++;
    console['log'](dp[N][W]);
    var maxValue = dp[N][W];
    while (maxValue == dp[N][W - 0x1])
        W--;
    console[a0_0x8c5f0e(0x5)](W);
}