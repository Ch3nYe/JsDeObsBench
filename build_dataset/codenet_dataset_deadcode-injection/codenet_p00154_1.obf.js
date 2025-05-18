var a0_0x4f8a30 = a0_0x404f;
function bomb(start, sum) {
    var _0x4cdebc = a0_0x404f;
    dp[start][sum]++;
    if (start == card[_0x4cdebc(0x0)])
        return;
    var v = card[start][0x0];
    var k = card[start][0x1];
    for (var i = 0x0; i <= k; i++) {
        bomb(start + 0x1, sum + v * i);
    }
}
function a0_0x404f(yVHzeX, key) {
    var stringArray = a0_0x3d27();
    a0_0x404f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x404f(yVHzeX, key);
}
function a0_0x3d27() {
    var _0x50717b = [
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'push',
        'map',
        'log'
    ];
    a0_0x3d27 = function () {
        return _0x50717b;
    };
    return a0_0x3d27();
}
var input = require('fs')[a0_0x4f8a30(0x1)](a0_0x4f8a30(0x2), a0_0x4f8a30(0x3));
var arr = input[a0_0x4f8a30(0x4)]()['split']('\x0a');
while (!![]) {
    var m = arr[a0_0x4f8a30(0x5)]() - 0x0;
    if (m == 0x0)
        break;
    var card = [];
    while (m--)
        card[a0_0x4f8a30(0x6)](arr['shift']()['split']('\x20')[a0_0x4f8a30(0x7)](Number));
    var g = arr['shift']() - 0x0;
    var dp = [];
    for (var i = 0x0; i <= card['length']; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= 0x3e8; j++) {
            dp[i][j] = 0x0;
        }
    }
    bomb(0x0, 0x0);
    while (g--)
        console[a0_0x4f8a30(0x8)](dp[card[a0_0x4f8a30(0x0)]][arr[a0_0x4f8a30(0x5)]() - 0x0]);
}