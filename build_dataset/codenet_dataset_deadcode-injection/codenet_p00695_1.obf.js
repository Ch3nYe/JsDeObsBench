var a0_0x4c5285 = a0_0x6ead;
var input = require('fs')[a0_0x4c5285(0x0)](a0_0x4c5285(0x1), a0_0x4c5285(0x2));
var Arr = input[a0_0x4c5285(0x3)]()['split']('\x0a');
function a0_0x6ead(XANvSQ, key) {
    var stringArray = a0_0x2583();
    a0_0x6ead = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6ead(XANvSQ, key);
}
Arr[a0_0x4c5285(0x4)]('');
var n = Arr[a0_0x4c5285(0x5)]() - 0x0;
for (var I = 0x0; I < n; I++) {
    var yx = [];
    var dp = [];
    for (var i = 0x0; i < 0x5; i++) {
        var v = Arr[a0_0x4c5285(0x5)]()[a0_0x4c5285(0x6)]('\x20')[a0_0x4c5285(0x7)](Number);
        yx['push'](v);
        dp[a0_0x4c5285(0x4)]([]);
    }
    for (var y = 0x0; y < 0x5; y++) {
        for (var x = 0x0; x < 0x5; x++) {
            if (y == 0x0)
                dp[y][x] = yx[y][x] == 0x1 ? 0x1 : 0x0;
            else
                dp[y][x] = yx[y][x] == 0x1 ? dp[y - 0x1][x] + 0x1 : 0x0;
        }
    }
    var max = 0x0;
    for (var y = 0x0; y < 0x5; y++) {
        for (var i = 0x0; i < 0x5; i++) {
            for (var j = i; j < 0x5; j++) {
                var min = Infinity;
                for (var k = i; k <= j; k++)
                    min = Math[a0_0x4c5285(0x8)](min, dp[y][k]);
                max = Math[a0_0x4c5285(0x9)](max, min * (j - i + 0x1));
            }
        }
    }
    console[a0_0x4c5285(0xa)](max);
    Arr[a0_0x4c5285(0x5)]();
}
function a0_0x2583() {
    var _0x258db8 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'push',
        'shift',
        'split',
        'map',
        'min',
        'max',
        'log'
    ];
    a0_0x2583 = function () {
        return _0x258db8;
    };
    return a0_0x2583();
}