var a0_0x3380a3 = a0_0x2a0a;
(function (stringArrayFunction, comparisonValue) {
    var _0x1a522a = a0_0x2a0a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1a522a(0x17f)) / 0x1 + parseInt(_0x1a522a(0x188)) / 0x2 * (parseInt(_0x1a522a(0x18b)) / 0x3) + -parseInt(_0x1a522a(0x187)) / 0x4 + parseInt(_0x1a522a(0x184)) / 0x5 * (parseInt(_0x1a522a(0x191)) / 0x6) + parseInt(_0x1a522a(0x185)) / 0x7 + -parseInt(_0x1a522a(0x18e)) / 0x8 + -parseInt(_0x1a522a(0x183)) / 0x9 * (-parseInt(_0x1a522a(0x186)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x30b4, 0x69568));
var input = require('fs')[a0_0x3380a3(0x18d)]('/dev/stdin', a0_0x3380a3(0x180));
function a0_0x30b4() {
    var _0x18fa76 = [
        'utf8',
        'indexOf',
        'split',
        '3123DUklhG',
        '4885hMgTMz',
        '3084074AFMiRF',
        '6630HzDNhE',
        '195444ezATeT',
        '4634hOLudF',
        'every',
        'log',
        '717FFohMx',
        'trim',
        'readFileSync',
        '1068392JvvIHl',
        'Yes',
        'shift',
        '882yARvbn',
        'push',
        '754151qmdlRm'
    ];
    a0_0x30b4 = function () {
        return _0x18fa76;
    };
    return a0_0x30b4();
}
var Arr = input[a0_0x3380a3(0x18c)]()[a0_0x3380a3(0x182)]('\x0a');
function a0_0x2a0a(clPSQl, key) {
    var stringArray = a0_0x30b4();
    a0_0x2a0a = function (index, key) {
        index = index - 0x17e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a0a(clPSQl, key);
}
while (!![]) {
    var a = Arr[a0_0x3380a3(0x190)]();
    if (a == '0')
        break;
    var xy = [];
    for (var i = 0x0; i < a; i++)
        xy['push'](Arr[a0_0x3380a3(0x190)]());
    var b = Arr[a0_0x3380a3(0x190)]();
    var news = [];
    for (var i = 0x0; i < b; i++)
        news[a0_0x3380a3(0x17e)](Arr['shift']());
    var X = 0xa;
    var Y = 0xa;
    var XY = [];
    news['forEach'](function (v) {
        var _0x232067 = a0_0x3380a3;
        var arr = v[_0x232067(0x182)]('\x20');
        for (var i = 0x0; i < arr[0x1] - 0x0; i++) {
            if (arr[0x0] == 'N')
                Y++;
            if (arr[0x0] == 'E')
                X++;
            if (arr[0x0] == 'W')
                X--;
            if (arr[0x0] == 'S')
                Y--;
            XY[_0x232067(0x17e)](X + '\x20' + Y);
        }
    });
    var flag = xy[a0_0x3380a3(0x189)](function (v) {
        var _0x21b818 = a0_0x3380a3;
        return XY[_0x21b818(0x181)](v) != -0x1;
    });
    console[a0_0x3380a3(0x18a)](flag ? a0_0x3380a3(0x18f) : 'No');
}