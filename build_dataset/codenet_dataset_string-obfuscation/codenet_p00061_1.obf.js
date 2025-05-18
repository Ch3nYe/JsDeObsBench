var a0_0x349d19 = a0_0x2fb2;
(function (stringArrayFunction, comparisonValue) {
    var _0x5275c6 = a0_0x2fb2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5275c6(0xea)) / 0x1 * (parseInt(_0x5275c6(0xfa)) / 0x2) + -parseInt(_0x5275c6(0xf1)) / 0x3 + -parseInt(_0x5275c6(0xeb)) / 0x4 * (-parseInt(_0x5275c6(0xf2)) / 0x5) + parseInt(_0x5275c6(0xf9)) / 0x6 * (-parseInt(_0x5275c6(0xef)) / 0x7) + -parseInt(_0x5275c6(0xf3)) / 0x8 * (parseInt(_0x5275c6(0xf0)) / 0x9) + parseInt(_0x5275c6(0xfb)) / 0xa + parseInt(_0x5275c6(0xed)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3af0, 0x6a730));
var input = require('fs')[a0_0x349d19(0xf4)](a0_0x349d19(0xec), a0_0x349d19(0xee));
var Arr = input['trim']()[a0_0x349d19(0xf8)]('\x0a0,0\x0a');
var inputA = Arr[0x0][a0_0x349d19(0xf8)]('\x0a');
var inputB = Arr[0x1][a0_0x349d19(0xf8)]('\x0a')[a0_0x349d19(0xf5)](Number);
var obj = {};
var s = [];
inputA['forEach'](function (v) {
    var _0x18f8c3 = a0_0x349d19;
    var arr = v[_0x18f8c3(0xf8)](',')[_0x18f8c3(0xf5)](Number);
    obj[arr[0x0]] = arr[0x1];
    s[_0x18f8c3(0xf6)](arr[0x1]);
});
s['sort'](function (a, b) {
    return b - a;
});
var s0 = s[0x0];
var t = [s0];
function a0_0x3af0() {
    var _0x1937d6 = [
        'utf8',
        '7UzjTog',
        '4550949UaPrwh',
        '2431965qBEENV',
        '525205KFnRMU',
        '8VwvTzy',
        'readFileSync',
        'map',
        'push',
        'length',
        'split',
        '661812ForYkG',
        '2yUsBQs',
        '904360bXtbRi',
        'log',
        'forEach',
        'indexOf',
        '765663ePbiCI',
        '16QjLVYh',
        '/dev/stdin',
        '6450081OerOOk'
    ];
    a0_0x3af0 = function () {
        return _0x1937d6;
    };
    return a0_0x3af0();
}
function a0_0x2fb2(ZyrdDl, key) {
    var stringArray = a0_0x3af0();
    a0_0x2fb2 = function (index, key) {
        index = index - 0xe7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fb2(ZyrdDl, key);
}
for (var i = 0x1; i < s[a0_0x349d19(0xf7)]; i++) {
    if (s0 == s[i])
        continue;
    s0 = s[i];
    t['push'](s[i]);
}
inputB[a0_0x349d19(0xe8)](function (v) {
    var _0x3ec217 = a0_0x349d19;
    console[_0x3ec217(0xe7)](t[_0x3ec217(0xe9)](obj[v]) + 0x1);
});