function a0_0x4980(gcrQJu, key) {
    var stringArray = a0_0x19a6();
    a0_0x4980 = function (index, key) {
        index = index - 0xe3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4980(gcrQJu, key);
}
var a0_0x17199e = a0_0x4980;
(function (stringArrayFunction, comparisonValue) {
    var _0x14fd29 = a0_0x4980;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x14fd29(0xee)) / 0x1 * (parseInt(_0x14fd29(0xf3)) / 0x2) + parseInt(_0x14fd29(0xef)) / 0x3 + -parseInt(_0x14fd29(0xe4)) / 0x4 + parseInt(_0x14fd29(0xf0)) / 0x5 * (parseInt(_0x14fd29(0xe9)) / 0x6) + -parseInt(_0x14fd29(0xe5)) / 0x7 * (parseInt(_0x14fd29(0xea)) / 0x8) + -parseInt(_0x14fd29(0xe8)) / 0x9 * (parseInt(_0x14fd29(0xf4)) / 0xa) + parseInt(_0x14fd29(0xe6)) / 0xb * (parseInt(_0x14fd29(0xf5)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x19a6, 0x800ca));
function a0_0x19a6() {
    var _0x3740b0 = [
        'shift',
        'log',
        '48306sACeeL',
        '130yVIafm',
        '622884NLdxia',
        'readFileSync',
        'trim',
        '955056IqmKWi',
        '2251690RMfCEp',
        '77MEQSIO',
        '/dev/stdin',
        '513027igObTO',
        '1905522TeGKbp',
        '8dkMvAt',
        'utf8',
        'reduce',
        'split',
        '30LnaVAg',
        '308550BWQMXw',
        '10sIzyPJ'
    ];
    a0_0x19a6 = function () {
        return _0x3740b0;
    };
    return a0_0x19a6();
}
var input = require('fs')[a0_0x17199e(0xf6)](a0_0x17199e(0xe7), a0_0x17199e(0xeb));
var Arr = input[a0_0x17199e(0xe3)]()[a0_0x17199e(0xed)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x17199e(0xf1)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        var v = Arr['shift']() - 0x0;
        arr['push'](v);
    }
    arr['sort'](function (a, b) {
        return a - b;
    });
    var wait = [];
    var time = 0x0;
    for (var i = 0x0; i < n; i++) {
        wait['push'](time);
        time += arr[i];
    }
    var sum = wait[a0_0x17199e(0xec)](function (a, b) {
        return a + b;
    });
    console[a0_0x17199e(0xf2)](sum);
}