function a0_0x3391() {
    var _0x2b736a = [
        '1500433kqkMHT',
        'keys',
        '350152QETgHb',
        '6KomUub',
        'test',
        'max',
        'log',
        '9bFziOd',
        'utf8',
        '5QOSQhX',
        'split',
        '139727LPEBhq',
        'length',
        '4014832ExdxrP',
        'forEach',
        '4493550NVCPbV',
        '768020BDIbMI',
        'slice',
        '77466oeEJNw',
        '48cGsWKL',
        'shift'
    ];
    a0_0x3391 = function () {
        return _0x2b736a;
    };
    return a0_0x3391();
}
var a0_0x4a14a6 = a0_0x5803;
(function (stringArrayFunction, comparisonValue) {
    var _0xbfa988 = a0_0x5803;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xbfa988(0x14a)) / 0x1 + parseInt(_0xbfa988(0x145)) / 0x2 * (-parseInt(_0xbfa988(0x146)) / 0x3) + parseInt(_0xbfa988(0x143)) / 0x4 * (parseInt(_0xbfa988(0x13c)) / 0x5) + parseInt(_0xbfa988(0x14b)) / 0x6 * (parseInt(_0xbfa988(0x13e)) / 0x7) + -parseInt(_0xbfa988(0x140)) / 0x8 * (-parseInt(_0xbfa988(0x14f)) / 0x9) + parseInt(_0xbfa988(0x142)) / 0xa + parseInt(_0xbfa988(0x148)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3391, 0x507e2));
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x4a14a6(0x13b));
var arr = input['trim']()[a0_0x4a14a6(0x13d)]('\x0a');
function a0_0x5803(liQwSr, key) {
    var stringArray = a0_0x3391();
    a0_0x5803 = function (index, key) {
        index = index - 0x13b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5803(liQwSr, key);
}
while (!![]) {
    var n = arr[a0_0x4a14a6(0x147)]() - 0x0;
    if (n == 0x0)
        break;
    var Arr = arr['splice'](0x0, n);
    var obj = {};
    var max = 0x0;
    Arr[a0_0x4a14a6(0x141)](function (v) {
        var _0x54fd54 = a0_0x4a14a6;
        var str = v;
        var s = str[0x0];
        var flag = ![];
        for (var i = 0x0; i < str[_0x54fd54(0x13f)]; i++) {
            if (flag)
                s += str[i];
            flag = /[aiueo]/[_0x54fd54(0x14c)](str[i]) ? !![] : ![];
        }
        obj[s] = !![];
        max = Math[_0x54fd54(0x14d)](max, s[_0x54fd54(0x13f)]);
    });
    for (var i = 0x1; i <= max; i++) {
        var Obj = {};
        for (var key in obj) {
            Obj[key[a0_0x4a14a6(0x144)](0x0, i)] = !![];
        }
        if (Object[a0_0x4a14a6(0x149)](Obj)[a0_0x4a14a6(0x13f)] == n) {
            console[a0_0x4a14a6(0x14e)](i);
            break;
        }
        if (i == max)
            console[a0_0x4a14a6(0x14e)](-0x1);
    }
}