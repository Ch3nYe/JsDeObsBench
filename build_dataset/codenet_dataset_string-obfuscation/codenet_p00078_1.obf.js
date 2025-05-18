function a0_0x238d() {
    var _0x2bc971 = [
        '27056TovxFL',
        'map',
        'length',
        '7RPaNRK',
        'readFileSync',
        '\x20\x20\x20',
        '10FgQaao',
        '1478872IHlZQR',
        'trim',
        '403551QwzlCe',
        'join',
        '9918whDGnm',
        '633jZqKHj',
        '22300mIXeRs',
        '1779206Fjvsik',
        'utf8',
        'replace',
        '/dev/stdin',
        '1830NjmmXT',
        'log',
        'floor',
        '65HEafhO'
    ];
    a0_0x238d = function () {
        return _0x2bc971;
    };
    return a0_0x238d();
}
var a0_0x52f294 = a0_0x8a28;
(function (stringArrayFunction, comparisonValue) {
    var _0xff4fe5 = a0_0x8a28;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xff4fe5(0x153)) / 0x1 + parseInt(_0xff4fe5(0x14f)) / 0x2 * (parseInt(_0xff4fe5(0x149)) / 0x3) + -parseInt(_0xff4fe5(0x14a)) / 0x4 + -parseInt(_0xff4fe5(0x152)) / 0x5 * (-parseInt(_0xff4fe5(0x148)) / 0x6) + -parseInt(_0xff4fe5(0x156)) / 0x7 * (parseInt(_0xff4fe5(0x15a)) / 0x8) + parseInt(_0xff4fe5(0x15c)) / 0x9 * (-parseInt(_0xff4fe5(0x159)) / 0xa) + parseInt(_0xff4fe5(0x14b)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x238d, 0x1bd33));
function bomb(y, x) {
    var _0x3bfe96 = a0_0x8a28;
    if (N == max)
        return;
    if (x < 0x0)
        x = n - 0x1;
    if (y < 0x0)
        y = n - 0x1;
    if (x >= n)
        x = 0x0;
    if (y >= n)
        y = 0x0;
    if (yx[y][x] != -0x1) {
        bomb(y + 0x1, x - 0x1);
    } else {
        yx[y][x] = (_0x3bfe96(0x158) + N)['slice'](-0x4);
        N++;
        bomb(y + 0x1, x + 0x1);
    }
}
var input = require('fs')[a0_0x52f294(0x157)](a0_0x52f294(0x14e), a0_0x52f294(0x14c));
function a0_0x8a28(UjlJvQ, key) {
    var stringArray = a0_0x238d();
    a0_0x8a28 = function (index, key) {
        index = index - 0x148;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8a28(UjlJvQ, key);
}
var Arr = input[a0_0x52f294(0x15b)]()['split']('\x0a')[a0_0x52f294(0x154)](Number);
for (var i = 0x0; i < Arr[a0_0x52f294(0x155)]; i++) {
    var n = Arr[i];
    var max = n * n + 0x1;
    if (n == 0x0)
        break;
    var yx = [];
    for (var j = 0x0; j < n; j++) {
        yx[j] = [];
        for (var k = 0x0; k < n; k++) {
            yx[j][k] = -0x1;
        }
    }
    var N = 0x1;
    bomb(Math['floor'](n / 0x2) + 0x1, Math[a0_0x52f294(0x151)](n / 0x2));
    console[a0_0x52f294(0x150)](yx[a0_0x52f294(0x15d)]('\x0a')[a0_0x52f294(0x14d)](/\,/g, ''));
}