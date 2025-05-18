var a0_0x2547da = a0_0x3a5e;
(function (stringArrayFunction, comparisonValue) {
    var _0x6ede12 = a0_0x3a5e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x6ede12(0xf1)) / 0x1 + -parseInt(_0x6ede12(0xe8)) / 0x2 + -parseInt(_0x6ede12(0xee)) / 0x3 + parseInt(_0x6ede12(0xf9)) / 0x4 + -parseInt(_0x6ede12(0xf6)) / 0x5 + parseInt(_0x6ede12(0xf7)) / 0x6 * (parseInt(_0x6ede12(0xf4)) / 0x7) + parseInt(_0x6ede12(0xea)) / 0x8 * (parseInt(_0x6ede12(0xfa)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xe75c, 0x78426));
var input = require('fs')[a0_0x2547da(0xe9)]('/dev/stdin', a0_0x2547da(0xf2));
var Arr = input[a0_0x2547da(0xeb)]()[a0_0x2547da(0xec)]('\x0a');
function a0_0xe75c() {
    var _0x4713ba = [
        'reverse',
        '654668mmoShV',
        'utf8',
        'forEach',
        '6458739mciOJK',
        'shift',
        '4597235jZydnx',
        '6ujDGsR',
        'length',
        '2933264ICkyYO',
        '441747nfdYbZ',
        'replace',
        '1854174NjTeCv',
        'readFileSync',
        '24xbRKpr',
        'trim',
        'split',
        'log',
        '356382OvwJsw',
        'slice'
    ];
    a0_0xe75c = function () {
        return _0x4713ba;
    };
    return a0_0xe75c();
}
function a0_0x3a5e(UDccwN, key) {
    var stringArray = a0_0xe75c();
    a0_0x3a5e = function (index, key) {
        index = index - 0xe8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3a5e(UDccwN, key);
}
var n = Arr[a0_0x2547da(0xf5)]() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr[a0_0x2547da(0xf5)]()['split']('')[a0_0x2547da(0xf0)]();
    var str = Arr[a0_0x2547da(0xf5)]();
    var x = str[a0_0x2547da(0xf8)];
    arr[a0_0x2547da(0xf3)](function (v) {
        var _0x13bea9 = a0_0x2547da;
        if (v == 'J')
            str = str['slice'](-0x1) + str[_0x13bea9(0xef)](0x0, -0x1);
        else if (v == 'C')
            str = str['slice'](0x1) + str['slice'](0x0, 0x1);
        else if (v == 'E' && x % 0x2 == 0x0)
            str = str[_0x13bea9(0xef)](x / 0x2, x) + str[_0x13bea9(0xef)](0x0, x / 0x2);
        else if (v == 'E' && x % 0x2 == 0x1)
            str = str[_0x13bea9(0xef)](~~(x / 0x2) + 0x1, x) + str[~~(x / 0x2)] + str['slice'](0x0, ~~(x / 0x2));
        else if (v == 'A')
            str = str['split']('')[_0x13bea9(0xf0)]()['join']('');
        else if (v == 'P')
            str = str[_0x13bea9(0xfb)](/\d/g, function (s) {
                return s == '0' ? '9' : s - 0x0 - 0x1;
            });
        else if (v == 'M')
            str = str[_0x13bea9(0xfb)](/\d/g, function (s) {
                return s == '9' ? '0' : s - 0x0 + 0x1;
            });
    });
    console[a0_0x2547da(0xed)](str);
}