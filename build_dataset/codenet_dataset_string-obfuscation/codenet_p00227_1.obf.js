var a0_0x151526 = a0_0x4db2;
function a0_0x4be8() {
    var _0x3233d6 = [
        '183939jbhkGb',
        '2518928sNXLFa',
        '5399397zzYTCT',
        'log',
        '13560kNVlrM',
        '287532pgzbiH',
        '1638770KOTzpy',
        'readFileSync',
        'utf8',
        'shift',
        '/dev/stdin',
        'length',
        'map',
        '852BjBMmA',
        '10GIZacW',
        'split',
        '586cbIHLx',
        '497DJMdGQ',
        'trim'
    ];
    a0_0x4be8 = function () {
        return _0x3233d6;
    };
    return a0_0x4be8();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x352e09 = a0_0x4db2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x352e09(0x1c0)) / 0x1 * (-parseInt(_0x352e09(0x1bd)) / 0x2) + parseInt(_0x352e09(0x1c3)) / 0x3 + -parseInt(_0x352e09(0x1c8)) / 0x4 + -parseInt(_0x352e09(0x1c9)) / 0x5 + parseInt(_0x352e09(0x1c7)) / 0x6 * (-parseInt(_0x352e09(0x1c1)) / 0x7) + parseInt(_0x352e09(0x1c4)) / 0x8 + -parseInt(_0x352e09(0x1c5)) / 0x9 * (-parseInt(_0x352e09(0x1be)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4be8, 0x289eb));
function a0_0x4db2(KLYVWr, key) {
    var stringArray = a0_0x4be8();
    a0_0x4db2 = function (index, key) {
        index = index - 0x1bc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4db2(KLYVWr, key);
}
var input = require('fs')[a0_0x151526(0x1ca)](a0_0x151526(0x1cd), a0_0x151526(0x1cb));
var Arr = input[a0_0x151526(0x1c2)]()['split']('\x0a');
while (!![]) {
    var NM = Arr[a0_0x151526(0x1cc)]();
    if (NM == '0\x200')
        break;
    var nm = NM[a0_0x151526(0x1bf)]('\x20')[a0_0x151526(0x1bc)](Number);
    var m = nm[0x1];
    var arr = Arr[a0_0x151526(0x1cc)]()[a0_0x151526(0x1bf)]('\x20')[a0_0x151526(0x1bc)](Number);
    arr['sort'](function (a, b) {
        return b - a;
    });
    var sum = 0x0;
    for (var i = 0x0; i < arr[a0_0x151526(0x1ce)]; i++) {
        if ((i + 0x1) % m != 0x0)
            sum += arr[i];
    }
    console[a0_0x151526(0x1c6)](sum);
}