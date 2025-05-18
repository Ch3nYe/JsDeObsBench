var a0_0x5e69a7 = a0_0x28fa;
(function (stringArrayFunction, comparisonValue) {
    var _0x4310c0 = a0_0x28fa;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4310c0(0x13b)) / 0x1 * (-parseInt(_0x4310c0(0x138)) / 0x2) + -parseInt(_0x4310c0(0x140)) / 0x3 + -parseInt(_0x4310c0(0x137)) / 0x4 * (-parseInt(_0x4310c0(0x139)) / 0x5) + parseInt(_0x4310c0(0x135)) / 0x6 * (parseInt(_0x4310c0(0x144)) / 0x7) + parseInt(_0x4310c0(0x13c)) / 0x8 * (parseInt(_0x4310c0(0x13a)) / 0x9) + -parseInt(_0x4310c0(0x143)) / 0xa + -parseInt(_0x4310c0(0x141)) / 0xb * (-parseInt(_0x4310c0(0x13f)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5648, 0x47036));
function a0_0x28fa(tJkato, key) {
    var stringArray = a0_0x5648();
    a0_0x28fa = function (index, key) {
        index = index - 0x135;
        var value = stringArray[index];
        return value;
    };
    return a0_0x28fa(tJkato, key);
}
function Main(input) {
    var _0x485e58 = a0_0x28fa;
    input = input['trim']()[_0x485e58(0x145)]('\x0a')[_0x485e58(0x13d)](function (x) {
        var _0x2262b8 = _0x485e58;
        return x[_0x2262b8(0x145)]('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var RGBWithoutOrder = [
        0x1,
        0x0,
        0x0
    ];
    var tmp1, tmp2, flag;
    var ans = 0x3;
    for (var i = 0x1; i < N; i++) {
        tmp2 = 0x0;
        tmp1 = parseInt(input[0x1][i], 0xa);
        for (var x of RGBWithoutOrder) {
            if (x === tmp1)
                tmp2++;
        }
        ans *= tmp2;
        ans %= 0x3b9aca00 + 0x7;
        for (var j = 0x0; j < 0x3; j++) {
            if (RGBWithoutOrder[j] === tmp1) {
                RGBWithoutOrder[j]++;
                break;
            }
        }
    }
    console['log'](ans);
}
function a0_0x5648() {
    var _0x22f6ad = [
        '25ZgPeOF',
        '6543tCYdMB',
        '9753ltyNQN',
        '1016MMizoL',
        'map',
        'readFileSync',
        '5350452NQWGmf',
        '1400886XiKgMs',
        '22gJpyHZ',
        'utf8',
        '558180uMvddg',
        '719873hYvysQ',
        'split',
        '12SnPTzF',
        '/dev/stdin',
        '34624VSAmiA',
        '86lDhUhH'
    ];
    a0_0x5648 = function () {
        return _0x22f6ad;
    };
    return a0_0x5648();
}
Main(require('fs')[a0_0x5e69a7(0x13e)](a0_0x5e69a7(0x136), a0_0x5e69a7(0x142)));