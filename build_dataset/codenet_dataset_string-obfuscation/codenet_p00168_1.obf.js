var a0_0x4bf0ff = a0_0x576c;
(function (stringArrayFunction, comparisonValue) {
    var _0xee797d = a0_0x576c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xee797d(0x1a5)) / 0x1 + -parseInt(_0xee797d(0x1a6)) / 0x2 * (parseInt(_0xee797d(0x1a4)) / 0x3) + parseInt(_0xee797d(0x1ae)) / 0x4 * (-parseInt(_0xee797d(0x1ab)) / 0x5) + parseInt(_0xee797d(0x1a2)) / 0x6 * (parseInt(_0xee797d(0x1a9)) / 0x7) + -parseInt(_0xee797d(0x1ac)) / 0x8 * (parseInt(_0xee797d(0x1b2)) / 0x9) + -parseInt(_0xee797d(0x1a8)) / 0xa + parseInt(_0xee797d(0x1af)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2880, 0xa3b2d));
var input = require('fs')[a0_0x4bf0ff(0x1b0)]('/dev/stdin', a0_0x4bf0ff(0x1a7));
var Arr = input[a0_0x4bf0ff(0x1b1)]()[a0_0x4bf0ff(0x1aa)]('\x0a');
var dp = [
    0x1,
    0x2,
    0x4
];
function a0_0x576c(PRfNGg, key) {
    var stringArray = a0_0x2880();
    a0_0x576c = function (index, key) {
        index = index - 0x1a2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x576c(PRfNGg, key);
}
for (var i = 0x3; i <= 0x1f; i++) {
    dp[i] = dp[i - 0x1] + dp[i - 0x2] + dp[i - 0x3];
}
while (!![]) {
    var n = Arr[a0_0x4bf0ff(0x1ad)]() - 0x0;
    if (n == 0x0)
        break;
    console[a0_0x4bf0ff(0x1a3)](Math['ceil'](dp[n - 0x1] / 0xe42));
}
function a0_0x2880() {
    var _0x3637b1 = [
        'utf8',
        '4403150giBAVi',
        '583681ZbZJHN',
        'split',
        '17285FpbZbB',
        '3360152ZJLlUm',
        'shift',
        '508UYBizM',
        '8637310LUePaH',
        'readFileSync',
        'trim',
        '9BYaces',
        '84vyMrsX',
        'log',
        '3lytgpy',
        '963621mbKpAd',
        '1892622ArqATV'
    ];
    a0_0x2880 = function () {
        return _0x3637b1;
    };
    return a0_0x2880();
}