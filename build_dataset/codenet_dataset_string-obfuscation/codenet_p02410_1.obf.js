var a0_0x29fe51 = a0_0x5b89;
(function (stringArrayFunction, comparisonValue) {
    var _0x4de23a = a0_0x5b89;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4de23a(0x112)) / 0x1 * (-parseInt(_0x4de23a(0x104)) / 0x2) + parseInt(_0x4de23a(0x114)) / 0x3 + parseInt(_0x4de23a(0x10f)) / 0x4 + -parseInt(_0x4de23a(0x10e)) / 0x5 * (parseInt(_0x4de23a(0x10b)) / 0x6) + parseInt(_0x4de23a(0x105)) / 0x7 * (parseInt(_0x4de23a(0x106)) / 0x8) + parseInt(_0x4de23a(0x111)) / 0x9 * (-parseInt(_0x4de23a(0x10a)) / 0xa) + parseInt(_0x4de23a(0x10d)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4b78, 0xc72ee));
var input = require('fs')[a0_0x29fe51(0x109)](a0_0x29fe51(0x113), a0_0x29fe51(0x115));
var lines = input[a0_0x29fe51(0x10c)]()['split'](/\n/g);
var n = +lines[0x0]['split']('\x20')[0x0];
function a0_0x4b78() {
    var _0x50c523 = [
        '158920yFbMYA',
        'split',
        'log',
        'readFileSync',
        '10583230hGeKOo',
        '214572ZdNNAZ',
        'trim',
        '12039786UnJpjy',
        '215hTeRMJ',
        '2074784XpUBeZ',
        'slice',
        '9TjlVgy',
        '59531PrJOsr',
        '/dev/stdin',
        '1584963dibnsy',
        'utf8',
        '30pOYOeG',
        '133lBVYfb'
    ];
    a0_0x4b78 = function () {
        return _0x50c523;
    };
    return a0_0x4b78();
}
var m = +lines[0x0][a0_0x29fe51(0x107)]('\x20')[0x1];
var A = lines[a0_0x29fe51(0x110)](0x1, m);
function a0_0x5b89(psbqDV, key) {
    var stringArray = a0_0x4b78();
    a0_0x5b89 = function (index, key) {
        index = index - 0x104;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b89(psbqDV, key);
}
var b = lines[a0_0x29fe51(0x110)](m, m + m);
var ans;
for (var i = 0x0; i < n; i++) {
    ans = 0x0;
    for (var j = 0x0; j < m; j++) {
        ans += A[i][a0_0x29fe51(0x107)]('\x20')[j] * b[j];
    }
    console[a0_0x29fe51(0x108)](ans);
}