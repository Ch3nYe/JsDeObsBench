var a0_0x2f3b02 = a0_0x19ff;
(function (stringArrayFunction, comparisonValue) {
    var _0x1711ee = a0_0x19ff;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1711ee(0x1e9)) / 0x1 + -parseInt(_0x1711ee(0x1df)) / 0x2 + -parseInt(_0x1711ee(0x1eb)) / 0x3 + parseInt(_0x1711ee(0x1e8)) / 0x4 + -parseInt(_0x1711ee(0x1ec)) / 0x5 + -parseInt(_0x1711ee(0x1dd)) / 0x6 * (-parseInt(_0x1711ee(0x1e1)) / 0x7) + parseInt(_0x1711ee(0x1ee)) / 0x8 * (parseInt(_0x1711ee(0x1e3)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5b1a, 0xe0fcc));
var input = require('fs')[a0_0x2f3b02(0x1e4)](a0_0x2f3b02(0x1ed), a0_0x2f3b02(0x1e0));
function a0_0x5b1a() {
    var _0x33fc14 = [
        '29496xEDCoJ',
        'split',
        '3601774pAraHG',
        'utf8',
        '1533OrXPGU',
        'log',
        '9koegZk',
        'readFileSync',
        'shift',
        'max',
        'toString',
        '2069840eBfIuP',
        '696999GdAErT',
        'map',
        '2471853cKalgk',
        '3791305zKtTIY',
        '/dev/stdin',
        '16108672SNOtna'
    ];
    a0_0x5b1a = function () {
        return _0x33fc14;
    };
    return a0_0x5b1a();
}
var arr = input['trim']()[a0_0x2f3b02(0x1de)]('\x0a');
var n = arr[a0_0x2f3b02(0x1e5)]() - 0x0;
var max = 0x0;
for (var i = 0x1; i <= n; i++) {
    var s = (i[a0_0x2f3b02(0x1e7)](0x2) + '')[a0_0x2f3b02(0x1de)]('')[a0_0x2f3b02(0x1ea)](Number);
    var sum = s['reduce']((a, b) => a + b);
    max = Math[a0_0x2f3b02(0x1e6)](max, sum);
}
function a0_0x19ff(jwvGka, key) {
    var stringArray = a0_0x5b1a();
    a0_0x19ff = function (index, key) {
        index = index - 0x1dd;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19ff(jwvGka, key);
}
console[a0_0x2f3b02(0x1e2)](max);