var a0_0x384e31 = a0_0x4aa3;
function a0_0x4aa3(RqClkj, key) {
    var stringArray = a0_0x1af2();
    a0_0x4aa3 = function (index, key) {
        index = index - 0xfd;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4aa3(RqClkj, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2ca9a4 = a0_0x4aa3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2ca9a4(0x100)) / 0x1 * (parseInt(_0x2ca9a4(0x108)) / 0x2) + parseInt(_0x2ca9a4(0x104)) / 0x3 * (parseInt(_0x2ca9a4(0x110)) / 0x4) + parseInt(_0x2ca9a4(0x107)) / 0x5 * (parseInt(_0x2ca9a4(0xfd)) / 0x6) + parseInt(_0x2ca9a4(0xfe)) / 0x7 * (-parseInt(_0x2ca9a4(0x106)) / 0x8) + -parseInt(_0x2ca9a4(0x102)) / 0x9 * (parseInt(_0x2ca9a4(0x101)) / 0xa) + parseInt(_0x2ca9a4(0x10e)) / 0xb + parseInt(_0x2ca9a4(0x103)) / 0xc * (-parseInt(_0x2ca9a4(0xff)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1af2, 0x5eed7));
function Main(input) {
    var _0x28e8df = a0_0x4aa3;
    var data = input[_0x28e8df(0x10a)]('\x0a');
    var n = data[0x0];
    var a = data[_0x28e8df(0x10f)](0x1);
    for (var i = 0x0; i < n; ++i) {
        var b = [];
        for (var j = 0x0; j < a[_0x28e8df(0x10b)]; j += 0x2) {
            if (a[j] > a[j + 0x1]) {
                b[_0x28e8df(0x105)](a[j] - a[j + 0x1]);
            } else if (a[j] == a[j + 0x1]) {
                b[_0x28e8df(0x105)](a[j]);
            } else {
                b[_0x28e8df(0x105)](a[j + 0x1] - a[j]);
            }
        }
        a = b;
    }
    console[_0x28e8df(0x10d)](a[0x0]);
}
Main(require('fs')['readFileSync'](a0_0x384e31(0x109), a0_0x384e31(0x10c)));
function a0_0x1af2() {
    var _0x78d214 = [
        'push',
        '2472HhcAid',
        '3359435hCYkrG',
        '196jVJlqL',
        '/dev/stdin',
        'split',
        'length',
        'utf8',
        'log',
        '7897813CoBNLs',
        'slice',
        '4zilPah',
        '6FnJKyQ',
        '8813aTbSqP',
        '6377826CaHLmQ',
        '4652qQwjHb',
        '550KFtPPx',
        '84465qrrzXw',
        '24KAWsDs',
        '1288401VpzZXE'
    ];
    a0_0x1af2 = function () {
        return _0x78d214;
    };
    return a0_0x1af2();
}