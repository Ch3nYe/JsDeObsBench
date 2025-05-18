var a0_0x105626 = a0_0x254e;
(function (stringArrayFunction, comparisonValue) {
    var _0x1de236 = a0_0x254e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1de236(0xd8)) / 0x1 + -parseInt(_0x1de236(0xdd)) / 0x2 * (-parseInt(_0x1de236(0xcc)) / 0x3) + parseInt(_0x1de236(0xcd)) / 0x4 * (-parseInt(_0x1de236(0xda)) / 0x5) + parseInt(_0x1de236(0xcf)) / 0x6 * (parseInt(_0x1de236(0xd2)) / 0x7) + parseInt(_0x1de236(0xd4)) / 0x8 + -parseInt(_0x1de236(0xd3)) / 0x9 * (-parseInt(_0x1de236(0xce)) / 0xa) + -parseInt(_0x1de236(0xd9)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x334f, 0x2d532));
function main(input) {
    var _0x254fd4 = a0_0x254e;
    var n = input[0x0][_0x254fd4(0xcb)]('\x20')[0x0] - 0x0;
    var m = input[0x0][_0x254fd4(0xcb)]('\x20')[0x1] - 0x0;
    var nummap = [
        0x0,
        0x2,
        0x5,
        0x5,
        0x4,
        0x5,
        0x6,
        0x3,
        0x7,
        0x6
    ];
    var mattis = input[0x1][_0x254fd4(0xcb)]('\x20')['map'](v => {
        return {
            'val': v,
            'num': nummap[v - 0x0]
        };
    });
    var ans = '';
    var dp = [];
    dp[0x0] = '';
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x0; j < m; j++) {
            var matti = mattis[j];
            if (dp[i - matti['num']] !== undefined) {
                var tv = (dp[i - matti[_0x254fd4(0xd1)]] ? dp[i - matti[_0x254fd4(0xd1)]] : '') + matti[_0x254fd4(0xd0)];
                if (dp[i] === undefined || diff(tv, dp[i]) > 0x0) {
                    dp[i] = tv;
                }
            }
        }
    }
    console[_0x254fd4(0xd5)](dp[n]);
}
function a0_0x334f() {
    var _0x5bd979 = [
        'readFileSync',
        'trim',
        '240153sMAlSk',
        '8747079lcfHXO',
        '365BNULBY',
        'utf8',
        'length',
        '2awgTcw',
        'split',
        '914019YoEOZl',
        '5008zcrqRK',
        '3160wbnjQY',
        '1490106GtqVDY',
        'val',
        'num',
        '7BUQlRH',
        '5355WxtFXx',
        '728304DVMnuI',
        'log'
    ];
    a0_0x334f = function () {
        return _0x5bd979;
    };
    return a0_0x334f();
}
function a0_0x254e(wOZJIx, key) {
    var stringArray = a0_0x334f();
    a0_0x254e = function (index, key) {
        index = index - 0xcb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x254e(wOZJIx, key);
}
function diff(a, b) {
    var _0x280ad5 = a0_0x254e;
    if (a['length'] != b[_0x280ad5(0xdc)])
        return a[_0x280ad5(0xdc)] - b[_0x280ad5(0xdc)];
    for (var i = 0x0; i < a[_0x280ad5(0xdc)]; i++) {
        if (a[i] != b[i])
            return a[i] - b[i];
    }
    return 0x0;
}
main(require('fs')[a0_0x105626(0xd6)]('/dev/stdin', a0_0x105626(0xdb))[a0_0x105626(0xd7)]()[a0_0x105626(0xcb)]('\x0a'));