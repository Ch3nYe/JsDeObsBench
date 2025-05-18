var a0_0x5a363f = a0_0x47ab;
(function (stringArrayFunction, comparisonValue) {
    var _0x10924e = a0_0x47ab;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x10924e(0xe1)) / 0x1 * (-parseInt(_0x10924e(0xe3)) / 0x2) + -parseInt(_0x10924e(0xe7)) / 0x3 + -parseInt(_0x10924e(0xee)) / 0x4 + -parseInt(_0x10924e(0xdf)) / 0x5 * (parseInt(_0x10924e(0xe4)) / 0x6) + -parseInt(_0x10924e(0xe9)) / 0x7 + -parseInt(_0x10924e(0xe2)) / 0x8 * (-parseInt(_0x10924e(0xec)) / 0x9) + parseInt(_0x10924e(0xed)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x11da, 0x994f6));
var input = require('fs')[a0_0x5a363f(0xeb)]('/dev/stdin', 'utf8');
var arr = input[a0_0x5a363f(0xe6)]()[a0_0x5a363f(0xe8)]('\x0a');
var n = arr[a0_0x5a363f(0xe5)]() - 0x0;
var p = arr[a0_0x5a363f(0xe5)]()[a0_0x5a363f(0xe8)]('\x20')[a0_0x5a363f(0xea)](Number);
var t = arr[a0_0x5a363f(0xe5)]()['split']('\x20')['map'](Number);
var s = [];
for (var i = 0x0; i <= 0xc8; i++)
    s[i] = Infinity;
s[0x0] = 0x0;
for (var i = 0x0; i <= 0x64; i++) {
    if (s[i] == Infinity)
        continue;
    s[i + t[0x0]] = Math[a0_0x5a363f(0xe0)](s[i] + p[0x0], s[i + t[0x0]]);
    s[i + t[0x1]] = Math['min'](s[i] + p[0x1], s[i + t[0x1]]);
    s[i + t[0x2]] = Math[a0_0x5a363f(0xe0)](s[i] + p[0x2], s[i + t[0x2]]);
    s[i + t[0x3]] = Math[a0_0x5a363f(0xe0)](s[i] + p[0x3], s[i + t[0x3]]);
}
var min = Infinity;
for (var i = n; i <= 0xc8; i++)
    min = Math['min'](min, s[i]);
console[a0_0x5a363f(0xef)](min);
function a0_0x47ab(usuSlV, key) {
    var stringArray = a0_0x11da();
    a0_0x47ab = function (index, key) {
        index = index - 0xdf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x47ab(usuSlV, key);
}
function a0_0x11da() {
    var _0x556c76 = [
        'log',
        '15GUoKXP',
        'min',
        '2rugsqS',
        '5760sgFSLI',
        '1168862RtiShD',
        '402726xaFoky',
        'shift',
        'trim',
        '2267997mqTivF',
        'split',
        '8037064gPRdIj',
        'map',
        'readFileSync',
        '1359RyQwgS',
        '25193830ljjgOz',
        '4253972cgdFfR'
    ];
    a0_0x11da = function () {
        return _0x556c76;
    };
    return a0_0x11da();
}