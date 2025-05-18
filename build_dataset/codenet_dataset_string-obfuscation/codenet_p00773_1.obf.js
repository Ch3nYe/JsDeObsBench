var a0_0x537ee1 = a0_0x24f8;
function a0_0x24b4() {
    var _0x198901 = [
        '276SgSBkT',
        '/dev/stdin',
        '2UqJIIg',
        'utf8',
        'split',
        'shift',
        '3349626GeIleg',
        '1614840wYRTqp',
        'readFileSync',
        'log',
        'trim',
        '4093232BqrnAa',
        '24YZceEZ',
        '7620790FLGJoE',
        '206731aEratj',
        '8886123xYEcZr',
        'floor',
        'map',
        '78252udhhvh',
        '8phqVna',
        '14qWVrHh'
    ];
    a0_0x24b4 = function () {
        return _0x198901;
    };
    return a0_0x24b4();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1243c4 = a0_0x24f8;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1243c4(0x9c)) / 0x1 * (-parseInt(_0x1243c4(0xa5)) / 0x2) + parseInt(_0x1243c4(0xa0)) / 0x3 * (-parseInt(_0x1243c4(0xa3)) / 0x4) + parseInt(_0x1243c4(0x9b)) / 0x5 + -parseInt(_0x1243c4(0xa9)) / 0x6 * (-parseInt(_0x1243c4(0xa2)) / 0x7) + -parseInt(_0x1243c4(0xa1)) / 0x8 * (parseInt(_0x1243c4(0x9d)) / 0x9) + parseInt(_0x1243c4(0xaa)) / 0xa + -parseInt(_0x1243c4(0x99)) / 0xb * (-parseInt(_0x1243c4(0x9a)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x24b4, 0xebd6c));
var input = require('fs')[a0_0x537ee1(0xab)](a0_0x537ee1(0xa4), a0_0x537ee1(0xa6));
function a0_0x24f8(BLPsIS, key) {
    var stringArray = a0_0x24b4();
    a0_0x24f8 = function (index, key) {
        index = index - 0x97;
        var value = stringArray[index];
        return value;
    };
    return a0_0x24f8(BLPsIS, key);
}
var Arr = input[a0_0x537ee1(0x98)]()[a0_0x537ee1(0xa7)]('\x0a');
while (!![]) {
    var xys = Arr[a0_0x537ee1(0xa8)]()['split']('\x20')[a0_0x537ee1(0x9f)](Number);
    var x = xys[0x0];
    var y = xys[0x1];
    var s = xys[0x2];
    if (x == 0x0 && y == 0x0 && s == 0x0)
        break;
    var max = 0x0;
    for (var i = 0x1; i <= s - 0x1; i++) {
        for (var j = 0x1; j <= s - 0x1; j++) {
            var a = Math[a0_0x537ee1(0x9e)](i * (0x64 + x) / 0x64) + Math[a0_0x537ee1(0x9e)](j * (0x64 + x) / 0x64);
            if (a > s)
                break;
            if (a == s) {
                var b = Math[a0_0x537ee1(0x9e)](i * (0x64 + y) / 0x64) + Math[a0_0x537ee1(0x9e)](j * (0x64 + y) / 0x64);
                max = Math['max'](max, b);
                break;
            }
        }
    }
    console[a0_0x537ee1(0x97)](max);
}