var a0_0xbe3166 = a0_0x454d;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b93a7 = a0_0x454d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5b93a7(0x140)) / 0x1 * (parseInt(_0x5b93a7(0x142)) / 0x2) + parseInt(_0x5b93a7(0x145)) / 0x3 + -parseInt(_0x5b93a7(0x13c)) / 0x4 * (parseInt(_0x5b93a7(0x139)) / 0x5) + -parseInt(_0x5b93a7(0x144)) / 0x6 + parseInt(_0x5b93a7(0x148)) / 0x7 * (-parseInt(_0x5b93a7(0x14a)) / 0x8) + parseInt(_0x5b93a7(0x135)) / 0x9 * (parseInt(_0x5b93a7(0x143)) / 0xa) + parseInt(_0x5b93a7(0x137)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1dfe, 0x1ff4b));
function move(x, arr) {
    var d1 = arr[0x0];
    var d2 = arr[0x1];
    var d3 = arr[0x2];
    var d4 = arr[0x3];
    var d5 = arr[0x4];
    var d6 = arr[0x5];
    var after = [];
    if (x == 'N')
        after = [
            d2,
            d6,
            d3,
            d4,
            d1,
            d5
        ];
    if (x == 'S')
        after = [
            d5,
            d1,
            d3,
            d4,
            d6,
            d2
        ];
    if (x == 'E')
        after = [
            d4,
            d2,
            d1,
            d6,
            d5,
            d3
        ];
    if (x == 'W')
        after = [
            d3,
            d2,
            d6,
            d1,
            d5,
            d4
        ];
    return after;
}
var input = require('fs')[a0_0xbe3166(0x149)](a0_0xbe3166(0x147), 'utf8');
function a0_0x454d(icIoBX, key) {
    var stringArray = a0_0x1dfe();
    a0_0x454d = function (index, key) {
        index = index - 0x135;
        var value = stringArray[index];
        return value;
    };
    return a0_0x454d(icIoBX, key);
}
var Arr = input[a0_0xbe3166(0x141)]()[a0_0xbe3166(0x13d)]('\x0a');
var diceA = Arr[0x0][a0_0xbe3166(0x13d)]('\x20')['map'](Number);
var diceB = Arr[0x1][a0_0xbe3166(0x13d)]('\x20')[a0_0xbe3166(0x136)](Number);
var NSEW = a0_0xbe3166(0x13a)['split']('');
for (var i = 0x0; i < 0x64; i++) {
    var r = Math[a0_0xbe3166(0x13b)](Math[a0_0xbe3166(0x146)]() * 0x4);
    diceA = move(NSEW[r], diceA);
    var flag = diceA[a0_0xbe3166(0x13f)](function (v, i) {
        return v == diceB[i];
    });
    if (flag)
        break;
}
console[a0_0xbe3166(0x138)](flag ? a0_0xbe3166(0x13e) : 'No');
function a0_0x1dfe() {
    var _0x407537 = [
        '2286009OgEOXE',
        'log',
        '310sqpZGL',
        'NSEW',
        'floor',
        '11244CSWqRK',
        'split',
        'Yes',
        'every',
        '5517cIAoTB',
        'trim',
        '14FPzXZA',
        '20iMjMPv',
        '86286pxuFmC',
        '98715pFEJpu',
        'random',
        '/dev/stdin',
        '7PtcZBf',
        'readFileSync',
        '833624OCQXoR',
        '997434HAVuCz',
        'map'
    ];
    a0_0x1dfe = function () {
        return _0x407537;
    };
    return a0_0x1dfe();
}