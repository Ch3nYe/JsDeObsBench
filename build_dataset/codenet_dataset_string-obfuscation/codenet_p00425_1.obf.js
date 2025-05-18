function a0_0x1a13(sSimUf, key) {
    var stringArray = a0_0x40e5();
    a0_0x1a13 = function (index, key) {
        index = index - 0x88;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a13(sSimUf, key);
}
function a0_0x40e5() {
    var _0x1151d0 = [
        'trim',
        'utf8',
        'split',
        '51738SmQiNi',
        'length',
        '3839301ZEfhnW',
        '1193142feTmBH',
        'readFileSync',
        'charAt',
        '8AQdaiV',
        '7581784sbThHA',
        '283594eSXfok',
        '4264584wGhAwi',
        '465GhzXSb',
        '766305WaXxeD',
        'log'
    ];
    a0_0x40e5 = function () {
        return _0x1151d0;
    };
    return a0_0x40e5();
}
var a0_0x13181d = a0_0x1a13;
(function (stringArrayFunction, comparisonValue) {
    var _0x1d32b1 = a0_0x1a13;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1d32b1(0x94)) / 0x1 + -parseInt(_0x1d32b1(0x8f)) / 0x2 + -parseInt(_0x1d32b1(0x8e)) / 0x3 + parseInt(_0x1d32b1(0x95)) / 0x4 + parseInt(_0x1d32b1(0x96)) / 0x5 * (parseInt(_0x1d32b1(0x8c)) / 0x6) + parseInt(_0x1d32b1(0x93)) / 0x7 + parseInt(_0x1d32b1(0x92)) / 0x8 * (-parseInt(_0x1d32b1(0x97)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x40e5, 0xac648));
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
var input = require('fs')[a0_0x13181d(0x90)]('/dev/stdin', a0_0x13181d(0x8a));
var Arr = input[a0_0x13181d(0x89)]()[a0_0x13181d(0x8b)]('\x0a');
var dice;
var sum;
for (var i = 0x0; i < Arr[a0_0x13181d(0x8d)]; i++) {
    var v = Arr[i][a0_0x13181d(0x91)](0x0);
    if (v['match'](/[NSEWRL]/)) {
        dice = move(v, dice);
        sum += dice[0x0];
    } else {
        if (i != 0x0)
            console[a0_0x13181d(0x88)](sum);
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