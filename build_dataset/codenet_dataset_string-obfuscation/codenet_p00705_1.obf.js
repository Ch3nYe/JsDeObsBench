function a0_0x412f() {
    var _0x2858b6 = [
        '361492PnmpZw',
        'map',
        '11206971XGSxLv',
        '100BdLnKt',
        'max',
        '394513yooRUA',
        'readFileSync',
        'log',
        '546787LiWTaK',
        'utf8',
        '4471624GAuKXW',
        '2235575BeoLtL',
        'split',
        '139431DmyYIQ',
        'trim',
        '0\x200',
        '6sBxZai',
        'shift',
        '/dev/stdin',
        'length'
    ];
    a0_0x412f = function () {
        return _0x2858b6;
    };
    return a0_0x412f();
}
var a0_0x4db6d6 = a0_0x54c8;
(function (stringArrayFunction, comparisonValue) {
    var _0x5c113b = a0_0x54c8;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5c113b(0x103)) / 0x1 + -parseInt(_0x5c113b(0xfb)) / 0x2 + parseInt(_0x5c113b(0xf4)) / 0x3 * (parseInt(_0x5c113b(0xfe)) / 0x4) + -parseInt(_0x5c113b(0x106)) / 0x5 + parseInt(_0x5c113b(0xf7)) / 0x6 * (parseInt(_0x5c113b(0x100)) / 0x7) + -parseInt(_0x5c113b(0x105)) / 0x8 + parseInt(_0x5c113b(0xfd)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x412f, 0xb232e));
function a0_0x54c8(vFAidr, key) {
    var stringArray = a0_0x412f();
    a0_0x54c8 = function (index, key) {
        index = index - 0xf4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x54c8(vFAidr, key);
}
var input = require('fs')[a0_0x4db6d6(0x101)](a0_0x4db6d6(0xf9), a0_0x4db6d6(0x104));
var Arr = input[a0_0x4db6d6(0xf5)]()[a0_0x4db6d6(0x107)]('\x0a');
while (!![]) {
    var v = Arr[a0_0x4db6d6(0xf8)]();
    if (v == a0_0x4db6d6(0xf6))
        break;
    var NQ = v[a0_0x4db6d6(0x107)]('\x20')[a0_0x4db6d6(0xfc)](Number);
    var arr = [];
    for (var i = 0x0; i < 0x32; i++)
        arr[i] = 0x0;
    for (var i = 0x0; i < NQ[0x0]; i++) {
        var day = Arr['shift']()[a0_0x4db6d6(0x107)]('\x20')[a0_0x4db6d6(0xfc)](Number);
        var L = day[a0_0x4db6d6(0xf8)]();
        for (var j = 0x0; j < L; j++) {
            arr[day[j]]++;
        }
    }
    var result = 0x0;
    var max = Math[a0_0x4db6d6(0xff)]['apply'](null, arr);
    if (max >= NQ[0x1])
        NQ[0x1] = max;
    for (var i = 0x0; i < arr[a0_0x4db6d6(0xfa)]; i++) {
        if (arr[i] >= NQ[0x1]) {
            result = i;
            break;
        }
    }
    console[a0_0x4db6d6(0x102)](result);
}