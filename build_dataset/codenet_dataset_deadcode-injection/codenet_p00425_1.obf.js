var a0_0x37c88a = a0_0x59a7;
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
    if (x == 'R')
        after = [
            d1,
            d3,
            d5,
            d2,
            d4,
            d6
        ];
    if (x == 'L')
        after = [
            d1,
            d4,
            d2,
            d5,
            d3,
            d6
        ];
    return after;
}
var input = require('fs')[a0_0x37c88a(0x0)](a0_0x37c88a(0x1), 'utf8');
var Arr = input[a0_0x37c88a(0x2)]()[a0_0x37c88a(0x3)]('\x0a');
function a0_0x59a7(eCiqfY, key) {
    var stringArray = a0_0x2afd();
    a0_0x59a7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59a7(eCiqfY, key);
}
var dice;
var sum;
function a0_0x2afd() {
    var _0x2c1bd6 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'length',
        'log'
    ];
    a0_0x2afd = function () {
        return _0x2c1bd6;
    };
    return a0_0x2afd();
}
for (var i = 0x0; i < Arr[a0_0x37c88a(0x4)]; i++) {
    var v = Arr[i]['charAt'](0x0);
    if (v['match'](/[NSEWRL]/)) {
        dice = move(v, dice);
        sum += dice[0x0];
    } else {
        if (i != 0x0)
            console[a0_0x37c88a(0x5)](sum);
        dice = [
            0x1,
            0x2,
            0x3,
            0x4,
            0x5,
            0x6
        ];
        sum = 0x1;
    }
    if (Arr[i] == '0')
        break;
}