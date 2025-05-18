var a0_0x595acc = a0_0x4d66;
(function (stringArrayFunction, comparisonValue) {
    var _0xd1d4ae = a0_0x4d66;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xd1d4ae(0x17c)) / 0x1 + parseInt(_0xd1d4ae(0x17f)) / 0x2 * (-parseInt(_0xd1d4ae(0x17d)) / 0x3) + parseInt(_0xd1d4ae(0x174)) / 0x4 + -parseInt(_0xd1d4ae(0x17b)) / 0x5 + parseInt(_0xd1d4ae(0x17a)) / 0x6 * (parseInt(_0xd1d4ae(0x172)) / 0x7) + parseInt(_0xd1d4ae(0x176)) / 0x8 + -parseInt(_0xd1d4ae(0x179)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x20c1, 0x620d8));
var input = require('fs')['readFileSync'](a0_0x595acc(0x173), a0_0x595acc(0x175));
var arr = input[a0_0x595acc(0x178)]()[a0_0x595acc(0x177)]('\x0a')[a0_0x595acc(0x17e)](Number);
function a0_0x4d66(uqHfNo, key) {
    var stringArray = a0_0x20c1();
    a0_0x4d66 = function (index, key) {
        index = index - 0x171;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4d66(uqHfNo, key);
}
function a0_0x20c1() {
    var _0x45871a = [
        'utf8',
        '5294120lBpXOk',
        'split',
        'trim',
        '5942133QcFjZl',
        '3054AZntrt',
        '3087005XdJdPb',
        '639030NRgRbz',
        '45ZzNHmd',
        'map',
        '60010HwsOCw',
        'push',
        '7273zugyCE',
        '/dev/stdin',
        '1198764BcDWDx'
    ];
    a0_0x20c1 = function () {
        return _0x45871a;
    };
    return a0_0x20c1();
}
while (!![]) {
    var n = arr['shift']();
    if (n == 0x0)
        break;
    var coin = [''];
    for (var i = 0x1; i <= 0x11; i++)
        coin[a0_0x595acc(0x171)](i * i);
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
    console['log'](dp[0x11][n]);
}