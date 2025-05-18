var a0_0x5322d6 = a0_0x4c39;
(function (stringArrayFunction, comparisonValue) {
    var _0x783f0a = a0_0x4c39;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x783f0a(0x197)) / 0x1 * (parseInt(_0x783f0a(0x18d)) / 0x2) + parseInt(_0x783f0a(0x194)) / 0x3 + -parseInt(_0x783f0a(0x19e)) / 0x4 * (-parseInt(_0x783f0a(0x191)) / 0x5) + -parseInt(_0x783f0a(0x19c)) / 0x6 * (-parseInt(_0x783f0a(0x190)) / 0x7) + parseInt(_0x783f0a(0x19d)) / 0x8 + -parseInt(_0x783f0a(0x19b)) / 0x9 + -parseInt(_0x783f0a(0x18e)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x25a8, 0xc6140));
var input = require('fs')[a0_0x5322d6(0x195)](a0_0x5322d6(0x18f), a0_0x5322d6(0x18b));
function a0_0x25a8() {
    var _0x29c06b = [
        'max',
        '4539309eNGrhh',
        'readFileSync',
        'min',
        '7dgCnCV',
        'trim',
        'log',
        'split',
        '1902798PmmQpF',
        '12AMwuWD',
        '10959088EqLRxM',
        '68gVdWuZ',
        'utf8',
        'abs',
        '145502fztZId',
        '37602430fDOQxW',
        '/dev/stdin',
        '4828761RmXlBr',
        '3265AoUGmS',
        'shift'
    ];
    a0_0x25a8 = function () {
        return _0x29c06b;
    };
    return a0_0x25a8();
}
var Arr = input[a0_0x5322d6(0x198)]()['split']('\x0a');
var t = Arr[a0_0x5322d6(0x192)]() - 0x0;
function a0_0x4c39(tuURmE, key) {
    var stringArray = a0_0x25a8();
    a0_0x4c39 = function (index, key) {
        index = index - 0x18b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c39(tuURmE, key);
}
for (var i = 0x0; i < t; i++) {
    var n = Arr['shift']() - 0x0;
    var arr = Arr[a0_0x5322d6(0x192)]()[a0_0x5322d6(0x19a)]('\x20')['map'](Number);
    var max = 0x0;
    var min = 0x0;
    var m = arr[0x0];
    for (var j = 0x1; j < n; j++) {
        max = Math[a0_0x5322d6(0x193)](arr[j] - m, max);
        min = Math[a0_0x5322d6(0x196)](arr[j] - m, min);
        m = arr[j];
    }
    console[a0_0x5322d6(0x199)](max + '\x20' + Math[a0_0x5322d6(0x18c)](min));
}