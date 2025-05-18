function a0_0x32cd() {
    var _0x35482b = [
        'utf8',
        '10QlXlUt',
        '4233492dynAQo',
        '2286762xigDwU',
        '136386BkotvU',
        '3983XhKIgT',
        'readFileSync',
        '4bkLSWY',
        'push',
        '332hbvhhn',
        'max',
        'log',
        'shift',
        '11443641xrgWnu',
        '13962YnDxVY',
        '48dnQxBD',
        'trim',
        '6603770OZzMGL',
        'split',
        'Case\x20',
        '/dev/stdin',
        'map',
        '2411TPDfnL'
    ];
    a0_0x32cd = function () {
        return _0x35482b;
    };
    return a0_0x32cd();
}
var a0_0x3701c8 = a0_0x14b1;
(function (stringArrayFunction, comparisonValue) {
    var _0x40f30a = a0_0x14b1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x40f30a(0x163)) / 0x1 * (-parseInt(_0x40f30a(0x16d)) / 0x2) + -parseInt(_0x40f30a(0x167)) / 0x3 + -parseInt(_0x40f30a(0x16b)) / 0x4 * (parseInt(_0x40f30a(0x175)) / 0x5) + parseInt(_0x40f30a(0x172)) / 0x6 * (parseInt(_0x40f30a(0x169)) / 0x7) + parseInt(_0x40f30a(0x173)) / 0x8 * (-parseInt(_0x40f30a(0x168)) / 0x9) + parseInt(_0x40f30a(0x165)) / 0xa * (parseInt(_0x40f30a(0x171)) / 0xb) + parseInt(_0x40f30a(0x166)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x32cd, 0xe6577));
var input = require('fs')[a0_0x3701c8(0x16a)](a0_0x3701c8(0x178), a0_0x3701c8(0x164));
function a0_0x14b1(RYrzNH, key) {
    var stringArray = a0_0x32cd();
    a0_0x14b1 = function (index, key) {
        index = index - 0x162;
        var value = stringArray[index];
        return value;
    };
    return a0_0x14b1(RYrzNH, key);
}
var Arr = input[a0_0x3701c8(0x174)]()[a0_0x3701c8(0x176)]('\x0a');
var cnt = 0x1;
while (!![]) {
    var W = Arr[a0_0x3701c8(0x170)]() - 0x0;
    if (W == 0x0)
        break;
    var N = Arr[a0_0x3701c8(0x170)]() - 0x0;
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
        var arr = Arr['shift']()[a0_0x3701c8(0x176)](',')[a0_0x3701c8(0x162)](Number);
        v['push'](arr[0x0]);
        w[a0_0x3701c8(0x16c)](arr[0x1]);
    }
    for (var y = 0x0; y < N; y++) {
        for (var x = 0x0; x <= W; x++) {
            if (x - w[y] >= 0x0)
                dp[y + 0x1][x] = Math[a0_0x3701c8(0x16e)](dp[y][x], dp[y][x - w[y]] + v[y]);
            else
                dp[y + 0x1][x] = dp[y][x];
        }
    }
    console['log'](a0_0x3701c8(0x177) + cnt + ':');
    cnt++;
    console[a0_0x3701c8(0x16f)](dp[N][W]);
    var maxValue = dp[N][W];
    while (maxValue == dp[N][W - 0x1])
        W--;
    console[a0_0x3701c8(0x16f)](W);
}