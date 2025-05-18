function a0_0x3a1d() {
    var _0x5178c5 = [
        '323428uOtCZQ',
        '4076250FIsVWi',
        '301677vsPfGr',
        'log',
        '2137045LuQNQA',
        '4wrPtPk',
        'utf8',
        '6DkqAGO',
        'sort',
        '32123wLzFVI',
        '12jmOOJG',
        'split',
        '9uYBSVO',
        'readFileSync',
        'length',
        'indexOf',
        '170258yAuGpt',
        '348DiixnI',
        '3449440lSMutV'
    ];
    a0_0x3a1d = function () {
        return _0x5178c5;
    };
    return a0_0x3a1d();
}
var a0_0x124c09 = a0_0x371c;
(function (stringArrayFunction, comparisonValue) {
    var _0x12b154 = a0_0x371c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x12b154(0xc2)) / 0x1 * (-parseInt(_0x12b154(0xc3)) / 0x2) + -parseInt(_0x12b154(0xce)) / 0x3 * (-parseInt(_0x12b154(0xbe)) / 0x4) + -parseInt(_0x12b154(0xd0)) / 0x5 * (parseInt(_0x12b154(0xc0)) / 0x6) + -parseInt(_0x12b154(0xcc)) / 0x7 + parseInt(_0x12b154(0xcb)) / 0x8 + parseInt(_0x12b154(0xc5)) / 0x9 * (-parseInt(_0x12b154(0xcd)) / 0xa) + parseInt(_0x12b154(0xc9)) / 0xb * (parseInt(_0x12b154(0xca)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3a1d, 0x47505));
function a0_0x371c(iCftsB, key) {
    var stringArray = a0_0x3a1d();
    a0_0x371c = function (index, key) {
        index = index - 0xbe;
        var value = stringArray[index];
        return value;
    };
    return a0_0x371c(iCftsB, key);
}
function Main(input) {
    var _0x515f30 = a0_0x371c;
    var len = input[_0x515f30(0xc4)]('\x0a')[0x0];
    var list = input[_0x515f30(0xc4)]('\x0a')[0x1][_0x515f30(0xc4)]('\x20');
    list[_0x515f30(0xc1)](function (a, b) {
        return parseInt(a) - parseInt(b);
    });
    var b = list['filter'](function (x, i, self) {
        var _0x569e1a = _0x515f30;
        return self[_0x569e1a(0xc8)](x) === i;
    });
    if (b[_0x515f30(0xc7)] % 0x2 == 0x1) {
        console[_0x515f30(0xcf)](b['length']);
    } else {
        console['log'](b[_0x515f30(0xc7)] - 0x1);
    }
}
Main(require('fs')[a0_0x124c09(0xc6)]('/dev/stdin', a0_0x124c09(0xbf)));