var a0_0x33944d = a0_0x3c31;
(function (stringArrayFunction, comparisonValue) {
    var _0xc464ca = a0_0x3c31;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xc464ca(0x16b)) / 0x1 * (-parseInt(_0xc464ca(0x164)) / 0x2) + parseInt(_0xc464ca(0x16f)) / 0x3 * (parseInt(_0xc464ca(0x161)) / 0x4) + -parseInt(_0xc464ca(0x16c)) / 0x5 * (parseInt(_0xc464ca(0x166)) / 0x6) + parseInt(_0xc464ca(0x163)) / 0x7 + -parseInt(_0xc464ca(0x16e)) / 0x8 * (-parseInt(_0xc464ca(0x169)) / 0x9) + -parseInt(_0xc464ca(0x170)) / 0xa * (-parseInt(_0xc464ca(0x16d)) / 0xb) + -parseInt(_0xc464ca(0x167)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2ad9, 0x3259d));
function a0_0x2ad9() {
    var _0x494ba3 = [
        '822468UHikDP',
        '43360FRMnBT',
        '4eKhzDx',
        'map',
        '302169KlComf',
        '159812TaOFVq',
        'split',
        '238116FvwWow',
        '1114152UpEyUI',
        'utf8',
        '117OfHfel',
        'trim',
        '1onoChf',
        '20dDPmqz',
        '319FyNGEe',
        '58256YtYzFZ'
    ];
    a0_0x2ad9 = function () {
        return _0x494ba3;
    };
    return a0_0x2ad9();
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x33944d(0x168));
function a0_0x3c31(hmoaZx, key) {
    var stringArray = a0_0x2ad9();
    a0_0x3c31 = function (index, key) {
        index = index - 0x161;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c31(hmoaZx, key);
}
var [n, a, b, c] = input[a0_0x33944d(0x16a)]()[a0_0x33944d(0x165)]('\x20')[a0_0x33944d(0x162)](Number);
console['log'](n - a - b + c);