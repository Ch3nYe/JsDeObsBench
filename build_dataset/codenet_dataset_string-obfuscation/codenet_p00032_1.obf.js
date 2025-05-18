var a0_0x4a550e = a0_0x3da6;
(function (stringArrayFunction, comparisonValue) {
    var _0x362218 = a0_0x3da6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x362218(0xa6)) / 0x1 * (-parseInt(_0x362218(0x9d)) / 0x2) + parseInt(_0x362218(0xa8)) / 0x3 + -parseInt(_0x362218(0xa3)) / 0x4 + -parseInt(_0x362218(0x9a)) / 0x5 * (-parseInt(_0x362218(0xa7)) / 0x6) + -parseInt(_0x362218(0xa4)) / 0x7 + -parseInt(_0x362218(0x9f)) / 0x8 * (-parseInt(_0x362218(0x9c)) / 0x9) + -parseInt(_0x362218(0xa1)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x30d2, 0xebe49));
var input = require('fs')[a0_0x4a550e(0xa5)](a0_0x4a550e(0x9b), 'utf8');
var lines = input[a0_0x4a550e(0xa2)]()['split']('\x0a');
var line;
var rectangles = 0x0;
var lozenges = 0x0;
while (line = lines['shift']()) {
    var l = line['split'](',')[a0_0x4a550e(0xa0)](function (n) {
        return +n;
    });
    var a = l[0x0];
    var b = l[0x1];
    var c = l[0x2];
    if (a * a + b * b == c * c)
        rectangles++;
    else if (a == b)
        lozenges++;
}
function a0_0x30d2() {
    var _0x3a01fd = [
        '5018697TyJJoA',
        '793075pHhsvK',
        '/dev/stdin',
        '704493Lsmmxp',
        '2gmHmna',
        'log',
        '8LZusRG',
        'map',
        '6974880kromLF',
        'trim',
        '6052228SMXAOn',
        '8992844DGexnH',
        'readFileSync',
        '1917203WFUbxc',
        '30LDuhcL'
    ];
    a0_0x30d2 = function () {
        return _0x3a01fd;
    };
    return a0_0x30d2();
}
console[a0_0x4a550e(0x9e)](rectangles);
function a0_0x3da6(huRkHs, key) {
    var stringArray = a0_0x30d2();
    a0_0x3da6 = function (index, key) {
        index = index - 0x9a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3da6(huRkHs, key);
}
console[a0_0x4a550e(0x9e)](lozenges);