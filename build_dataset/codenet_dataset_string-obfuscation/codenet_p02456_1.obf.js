function a0_0x52ab() {
    var _0x33f515 = [
        '137125VyQatY',
        '452187lJExOR',
        '9wqSPsu',
        '1056172racPrH',
        '53fCZFAL',
        'has',
        '7946clyvwF',
        '2501280ilexBy',
        'set',
        'split',
        'utf8',
        'shift',
        '707cBVrlc',
        'trim',
        '/dev/stdin',
        'size',
        '2548220zpNCzg',
        '13308nLqFMG'
    ];
    a0_0x52ab = function () {
        return _0x33f515;
    };
    return a0_0x52ab();
}
var a0_0x23fe5a = a0_0x218b;
(function (stringArrayFunction, comparisonValue) {
    var _0x231461 = a0_0x218b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x231461(0x103)) / 0x1 * (-parseInt(_0x231461(0x105)) / 0x2) + -parseInt(_0x231461(0x100)) / 0x3 + parseInt(_0x231461(0x102)) / 0x4 + parseInt(_0x231461(0xff)) / 0x5 + -parseInt(_0x231461(0xfe)) / 0x6 * (parseInt(_0x231461(0xf9)) / 0x7) + parseInt(_0x231461(0x106)) / 0x8 + parseInt(_0x231461(0x101)) / 0x9 * (-parseInt(_0x231461(0xfd)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x52ab, 0x2d328));
var input = require('fs')['readFileSync'](a0_0x23fe5a(0xfb), a0_0x23fe5a(0xf7));
function a0_0x218b(HUnpdR, key) {
    var stringArray = a0_0x52ab();
    a0_0x218b = function (index, key) {
        index = index - 0xf6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x218b(HUnpdR, key);
}
var arr = input[a0_0x23fe5a(0xfa)]()[a0_0x23fe5a(0xf6)]('\x0a');
var q = arr[a0_0x23fe5a(0xf8)]() - 0x0;
var str = '';
var set = new Map();
for (var i = 0x0; i < q; i++) {
    var [a, b] = arr[i][a0_0x23fe5a(0xf6)]('\x20');
    if (a == '0') {
        set[a0_0x23fe5a(0x107)](b, 0x0);
        str += set[a0_0x23fe5a(0xfc)] + '\x0a';
    } else if (a == '1') {
        str += (set[a0_0x23fe5a(0x104)](b) ? 0x1 : 0x0) + '\x0a';
    } else {
        set['delete'](b);
    }
}
console['log'](str['trim']());