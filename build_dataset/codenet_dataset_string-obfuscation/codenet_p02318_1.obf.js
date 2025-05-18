var a0_0x3c3206 = a0_0x20d3;
(function (stringArrayFunction, comparisonValue) {
    var _0x3778d3 = a0_0x20d3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3778d3(0x149)) / 0x1 * (-parseInt(_0x3778d3(0x13e)) / 0x2) + -parseInt(_0x3778d3(0x14a)) / 0x3 + -parseInt(_0x3778d3(0x141)) / 0x4 + parseInt(_0x3778d3(0x14c)) / 0x5 * (-parseInt(_0x3778d3(0x13b)) / 0x6) + parseInt(_0x3778d3(0x13f)) / 0x7 * (-parseInt(_0x3778d3(0x146)) / 0x8) + parseInt(_0x3778d3(0x13d)) / 0x9 * (parseInt(_0x3778d3(0x142)) / 0xa) + parseInt(_0x3778d3(0x147)) / 0xb * (parseInt(_0x3778d3(0x140)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4520, 0xede9d));
function LD(a, b) {
    var _0x4ed4cf = a0_0x20d3;
    var ar = new Array();
    for (var i = 0x0; i < a[_0x4ed4cf(0x144)] + 0x1; i++) {
        var subar = new Array();
        for (var j = 0x0; j < b[_0x4ed4cf(0x144)] + 0x1; j++) {
            subar[_0x4ed4cf(0x13c)](0x0);
        }
        ar[_0x4ed4cf(0x13c)](subar);
    }
    for (var i = 0x0; i < a['length'] + 0x1; i++) {
        ar[i][0x0] = i;
    }
    for (var i = 0x0; i < b[_0x4ed4cf(0x144)] + 0x1; i++) {
        ar[0x0][i] = i;
    }
    for (var i = 0x1; i < a['length'] + 0x1; i++) {
        for (var j = 0x1; j < b[_0x4ed4cf(0x144)] + 0x1; j++) {
            if (a['charAt'](i - 0x1) == b[_0x4ed4cf(0x14b)](j - 0x1)) {
                ar[i][j] = Math[_0x4ed4cf(0x148)](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1]);
            } else {
                ar[i][j] = Math['min'](ar[i - 0x1][j] + 0x1, ar[i][j - 0x1] + 0x1, ar[i - 0x1][j - 0x1] + 0x1);
            }
        }
    }
    return ar[a[_0x4ed4cf(0x144)]][b['length']];
}
var input = require('fs')['readFileSync'](a0_0x3c3206(0x143), a0_0x3c3206(0x13a));
function a0_0x20d3(xakfaT, key) {
    var stringArray = a0_0x4520();
    a0_0x20d3 = function (index, key) {
        index = index - 0x13a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x20d3(xakfaT, key);
}
var strings = input['split']('\x0a');
function a0_0x4520() {
    var _0x24bdaf = [
        '6369RuYtvw',
        'min',
        '183qupjSx',
        '2472975tZlOBd',
        'charAt',
        '65nmyVYD',
        'utf8',
        '124116XIKYlH',
        'push',
        '666kEAjPF',
        '2026ATUTyq',
        '7TuzMHF',
        '36804nvURWl',
        '1211404elkFYF',
        '211210nLakqC',
        '/dev/stdin',
        'length',
        'log',
        '9228312fyRomv'
    ];
    a0_0x4520 = function () {
        return _0x24bdaf;
    };
    return a0_0x4520();
}
console[a0_0x3c3206(0x145)](LD(strings[0x0], strings[0x1]));