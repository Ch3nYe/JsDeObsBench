var a0_0xf7be3e = a0_0x18c6;
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
var input = require('fs')[a0_0xf7be3e(0x0)]('/dev/stdin', 'utf8');
var Arr = input[a0_0xf7be3e(0x1)]()[a0_0xf7be3e(0x2)]('\x0a');
var diceA = Arr[0x0][a0_0xf7be3e(0x2)]('\x20')['map'](Number);
function a0_0xb0f5() {
    var _0x3118b5 = [
        'readFileSync',
        'trim',
        'split',
        'map',
        'random',
        'every',
        'log',
        'Yes'
    ];
    a0_0xb0f5 = function () {
        return _0x3118b5;
    };
    return a0_0xb0f5();
}
var diceB = Arr[0x1][a0_0xf7be3e(0x2)]('\x20')[a0_0xf7be3e(0x3)](Number);
function a0_0x18c6(NuFUIo, key) {
    var stringArray = a0_0xb0f5();
    a0_0x18c6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x18c6(NuFUIo, key);
}
var NSEW = 'NSEW'['split']('');
for (var i = 0x0; i < 0x64; i++) {
    var r = Math['floor'](Math[a0_0xf7be3e(0x4)]() * 0x4);
    diceA = move(NSEW[r], diceA);
    var flag = diceA[a0_0xf7be3e(0x5)](function (v, i) {
        return v == diceB[i];
    });
    if (flag)
        break;
}
console[a0_0xf7be3e(0x6)](flag ? a0_0xf7be3e(0x7) : 'No');