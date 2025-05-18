function a0_0x30a7(ilIqnX, key) {
    var stringArray = a0_0x9465();
    a0_0x30a7 = function (index, key) {
        index = index - 0x125;
        var value = stringArray[index];
        return value;
    };
    return a0_0x30a7(ilIqnX, key);
}
var a0_0x21e70d = a0_0x30a7;
(function (stringArrayFunction, comparisonValue) {
    var _0x2e86c9 = a0_0x30a7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2e86c9(0x125)) / 0x1 + parseInt(_0x2e86c9(0x127)) / 0x2 + -parseInt(_0x2e86c9(0x12d)) / 0x3 + -parseInt(_0x2e86c9(0x130)) / 0x4 + parseInt(_0x2e86c9(0x12f)) / 0x5 + -parseInt(_0x2e86c9(0x135)) / 0x6 * (parseInt(_0x2e86c9(0x12a)) / 0x7) + parseInt(_0x2e86c9(0x131)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x9465, 0x950d4));
function Main(input) {
    var _0x3a7dc8 = a0_0x30a7;
    input = input['split']('\x20')[_0x3a7dc8(0x12b)](a => ~~a);
    var H = input[0x0];
    var W = input[0x1];
    var K = input[0x2];
    var mod = 0xa ** 0x9 + 0x7;
    if (W == 0x1)
        return 0x1;
    var validAmidaList = Array(0x2 ** (W - 0x1))['fill'](0x0)['map']((a, b) => b)['map'](a => a['toString'](0x2))['filter'](a => !/11/[_0x3a7dc8(0x129)](a))[_0x3a7dc8(0x12b)](a => _0x3a7dc8(0x12e) + a)[_0x3a7dc8(0x12b)](a => a['slice'](0x1 - W))[_0x3a7dc8(0x12b)](a => '0' + a + '0');
    var dp = Array(H + 0x1);
    for (var i = 0x0; i <= H; i++) {
        dp[i] = Array(W)[_0x3a7dc8(0x126)](0x0);
    }
    dp[0x0][0x0] = 0x1;
    for (var i = 0x1; i <= H; i++) {
        validAmidaList[_0x3a7dc8(0x133)](function (elem) {
            for (var j = 0x0; j < W; j++) {
                ({
                    '10': a => dp[i][j] += dp[i - 0x1][j - 0x1],
                    '01': a => dp[i][j] += dp[i - 0x1][j + 0x1],
                    '00': a => dp[i][j] += dp[i - 0x1][j]
                }[elem[j] + elem[j + 0x1]]());
                dp[i][j] %= mod;
            }
        });
    }
    return dp[H][K - 0x1];
}
if (typeof require !== 'undefined')
    console[a0_0x21e70d(0x128)](Main(require('fs')[a0_0x21e70d(0x132)](a0_0x21e70d(0x134), a0_0x21e70d(0x12c))));
function a0_0x9465() {
    var _0x5648a5 = [
        'fill',
        '1658960KJJbXm',
        'log',
        'test',
        '85827jiQfqf',
        'map',
        'utf8',
        '1288449DlVrKb',
        '000000',
        '2766725TYDsCX',
        '4348460rWTGvo',
        '6723832thHDIS',
        'readFileSync',
        'forEach',
        '/dev/stdin',
        '30AAFqWC',
        '34885zckhbX'
    ];
    a0_0x9465 = function () {
        return _0x5648a5;
    };
    return a0_0x9465();
}