function a0_0x37ba(iQpVHc, key) {
    var stringArray = a0_0x5edc();
    a0_0x37ba = function (index, key) {
        index = index - 0x140;
        var value = stringArray[index];
        return value;
    };
    return a0_0x37ba(iQpVHc, key);
}
function a0_0x5edc() {
    var _0x3edeed = [
        '3392664gjwrxM',
        '1058934bYEvKd',
        '20koqBFg',
        '22292982aVOGzo',
        'trim',
        'readFileSync',
        'add',
        'log',
        'size',
        '2466778WWyosE',
        '/dev/stdin',
        '2331350pRmaDn',
        '12PlhYAY',
        'map',
        'shift',
        'split',
        '669042MjOssp',
        '3642290lGcMFc'
    ];
    a0_0x5edc = function () {
        return _0x3edeed;
    };
    return a0_0x5edc();
}
var a0_0x54f225 = a0_0x37ba;
(function (stringArrayFunction, comparisonValue) {
    var _0x3a41bd = a0_0x37ba;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3a41bd(0x151)) / 0x1 + -parseInt(_0x3a41bd(0x14a)) / 0x2 + -parseInt(_0x3a41bd(0x142)) / 0x3 * (-parseInt(_0x3a41bd(0x143)) / 0x4) + parseInt(_0x3a41bd(0x140)) / 0x5 * (parseInt(_0x3a41bd(0x14d)) / 0x6) + parseInt(_0x3a41bd(0x14c)) / 0x7 + parseInt(_0x3a41bd(0x141)) / 0x8 + -parseInt(_0x3a41bd(0x144)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5edc, 0xe4e7a));
var input = require('fs')[a0_0x54f225(0x146)](a0_0x54f225(0x14b), 'utf8');
var arr = input[a0_0x54f225(0x145)]()[a0_0x54f225(0x150)]('\x0a');
var n = arr['shift']() - 0x0;
var a = arr[a0_0x54f225(0x14f)]()[a0_0x54f225(0x150)]('\x20')[a0_0x54f225(0x14e)](Number);
var s = new Set();
a['forEach'](v => s[a0_0x54f225(0x147)](v));
console[a0_0x54f225(0x148)](s[a0_0x54f225(0x149)]);