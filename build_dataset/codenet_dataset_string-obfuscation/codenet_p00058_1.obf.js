var a0_0x1bde4e = a0_0x41d4;
(function (stringArrayFunction, comparisonValue) {
    var _0x1223b4 = a0_0x41d4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1223b4(0xc8)) / 0x1 + parseInt(_0x1223b4(0xca)) / 0x2 + parseInt(_0x1223b4(0xc3)) / 0x3 * (-parseInt(_0x1223b4(0xcf)) / 0x4) + parseInt(_0x1223b4(0xd0)) / 0x5 * (-parseInt(_0x1223b4(0xce)) / 0x6) + -parseInt(_0x1223b4(0xd2)) / 0x7 * (parseInt(_0x1223b4(0xcb)) / 0x8) + parseInt(_0x1223b4(0xcd)) / 0x9 * (parseInt(_0x1223b4(0xc6)) / 0xa) + parseInt(_0x1223b4(0xd4)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5938, 0xd050c));
var input = require('fs')[a0_0x1bde4e(0xc5)]('/dev/stdin', a0_0x1bde4e(0xd3));
var Arr = input[a0_0x1bde4e(0xc9)]()['split']('\x0a');
function a0_0x41d4(IPzmtx, key) {
    var stringArray = a0_0x5938();
    a0_0x41d4 = function (index, key) {
        index = index - 0xc3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x41d4(IPzmtx, key);
}
function a0_0x5938() {
    var _0xf6d7a1 = [
        '9957420WAHClq',
        'toFixed',
        'length',
        '1023lRlqcY',
        'split',
        'readFileSync',
        '1460gcMwIK',
        'map',
        '663977InNEAt',
        'trim',
        '2144874shLskR',
        '328hEKpjb',
        'YES',
        '16434piftcP',
        '138ORFtRa',
        '572izDKue',
        '127705Yyahtk',
        'log',
        '242228ThUNHP',
        'utf8'
    ];
    a0_0x5938 = function () {
        return _0xf6d7a1;
    };
    return a0_0x5938();
}
for (i = 0x0; i < Arr[a0_0x1bde4e(0xd6)]; i++) {
    var arr = Arr[i][a0_0x1bde4e(0xc4)]('\x20')[a0_0x1bde4e(0xc7)](Number);
    (function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var _0x1c521d = a0_0x1bde4e;
        var k1;
        var k2;
        if (x2 - x1 !== 0x0)
            k1 = ((y2 - y1) / (x2 - x1))[_0x1c521d(0xd5)](0xb);
        else
            k1 = Infinity;
        if (x4 - x3 !== 0x0)
            k2 = (y4 - y3) / (x4 - x3)[_0x1c521d(0xd5)](0xb);
        else
            k2 = Infinity;
        var ans = 'NO';
        if (k1 == 0x0 && k2 == Infinity)
            ans = _0x1c521d(0xcc);
        if (k2 == 0x0 && k1 == Infinity)
            ans = _0x1c521d(0xcc);
        if (k1 == -0x1 * k2 && (k1 != 0x0 && k2 != 0x0))
            ans = _0x1c521d(0xcc);
        console[_0x1c521d(0xd1)](ans);
    }['apply'](null, arr));
}