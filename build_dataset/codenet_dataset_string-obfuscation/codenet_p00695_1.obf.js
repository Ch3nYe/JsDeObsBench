var a0_0x2dbfe0 = a0_0x5d51;
function a0_0x5d51(ZxQsoT, key) {
    var stringArray = a0_0x5d57();
    a0_0x5d51 = function (index, key) {
        index = index - 0x180;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5d51(ZxQsoT, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1f4405 = a0_0x5d51;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1f4405(0x18f)) / 0x1 + parseInt(_0x1f4405(0x18d)) / 0x2 + parseInt(_0x1f4405(0x185)) / 0x3 * (parseInt(_0x1f4405(0x191)) / 0x4) + parseInt(_0x1f4405(0x18a)) / 0x5 * (-parseInt(_0x1f4405(0x182)) / 0x6) + parseInt(_0x1f4405(0x183)) / 0x7 * (parseInt(_0x1f4405(0x184)) / 0x8) + -parseInt(_0x1f4405(0x181)) / 0x9 + -parseInt(_0x1f4405(0x192)) / 0xa * (-parseInt(_0x1f4405(0x180)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5d57, 0xdc7c3));
var input = require('fs')['readFileSync'](a0_0x2dbfe0(0x188), a0_0x2dbfe0(0x187));
var Arr = input['trim']()[a0_0x2dbfe0(0x18b)]('\x0a');
function a0_0x5d57() {
    var _0x1a75a7 = [
        '278470xPPgKC',
        '176MFXtLZ',
        '3162564nBLEJM',
        '1089186IfrMCe',
        '637fVnVmZ',
        '54512qdBRZI',
        '24651bQBkrD',
        'min',
        'utf8',
        '/dev/stdin',
        'shift',
        '20bTPbRm',
        'split',
        'push',
        '3184530Ambtvx',
        'map',
        '1794776lUiFtE',
        'max',
        '544VOgftj'
    ];
    a0_0x5d57 = function () {
        return _0x1a75a7;
    };
    return a0_0x5d57();
}
Arr[a0_0x2dbfe0(0x18c)]('');
var n = Arr[a0_0x2dbfe0(0x189)]() - 0x0;
for (var I = 0x0; I < n; I++) {
    var yx = [];
    var dp = [];
    for (var i = 0x0; i < 0x5; i++) {
        var v = Arr[a0_0x2dbfe0(0x189)]()[a0_0x2dbfe0(0x18b)]('\x20')[a0_0x2dbfe0(0x18e)](Number);
        yx['push'](v);
        dp[a0_0x2dbfe0(0x18c)]([]);
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
                    min = Math[a0_0x2dbfe0(0x186)](min, dp[y][k]);
                max = Math[a0_0x2dbfe0(0x190)](max, min * (j - i + 0x1));
            }
        }
    }
    console['log'](max);
    Arr[a0_0x2dbfe0(0x189)]();
}