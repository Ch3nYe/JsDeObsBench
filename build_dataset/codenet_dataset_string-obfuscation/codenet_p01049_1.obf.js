var a0_0x340d03 = a0_0x1bac;
(function (stringArrayFunction, comparisonValue) {
    var _0x17f0da = a0_0x1bac;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x17f0da(0x106)) / 0x1 + -parseInt(_0x17f0da(0x10c)) / 0x2 * (parseInt(_0x17f0da(0x105)) / 0x3) + parseInt(_0x17f0da(0x112)) / 0x4 * (parseInt(_0x17f0da(0x110)) / 0x5) + parseInt(_0x17f0da(0x104)) / 0x6 + -parseInt(_0x17f0da(0x10e)) / 0x7 * (parseInt(_0x17f0da(0x10a)) / 0x8) + parseInt(_0x17f0da(0x108)) / 0x9 * (-parseInt(_0x17f0da(0x109)) / 0xa) + parseInt(_0x17f0da(0x10f)) / 0xb * (parseInt(_0x17f0da(0x102)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x42e6, 0x4ec3f));
function a0_0x1bac(njGhlS, key) {
    var stringArray = a0_0x42e6();
    a0_0x1bac = function (index, key) {
        index = index - 0x100;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1bac(njGhlS, key);
}
var input = require('fs')[a0_0x340d03(0x111)](a0_0x340d03(0x107), 'utf8');
var arr = input[a0_0x340d03(0x10d)]()[a0_0x340d03(0x103)]('\x0a');
var n = arr[a0_0x340d03(0x100)]() - 0x0;
function a0_0x42e6() {
    var _0x44ff94 = [
        '171288ajcaOO',
        'push',
        '4308ImCnUV',
        'trim',
        '175umzNVR',
        '11fvzXQb',
        '70sWEPWZ',
        'readFileSync',
        '20028mOcWKy',
        'shift',
        'map',
        '24458808HXbDcV',
        'split',
        '402324RInfsY',
        '654QIFQJn',
        '567818mgFEII',
        '/dev/stdin',
        '132678xUBglM',
        '190LXiBFZ'
    ];
    a0_0x42e6 = function () {
        return _0x44ff94;
    };
    return a0_0x42e6();
}
var [a, d] = arr[a0_0x340d03(0x100)]()[a0_0x340d03(0x103)]('\x20')[a0_0x340d03(0x101)](Number);
var retu = [];
for (var i = 0x0; i < n; i++) {
    retu[a0_0x340d03(0x10b)](a + i * d);
}
var m = arr['shift']() - 0x0;
for (var i = 0x0; i < m; i++) {
    var [x, y, z] = arr[a0_0x340d03(0x100)]()[a0_0x340d03(0x103)]('\x20')['map'](Number);
    if (x == 0x0)
        [retu[y - 0x1], retu[z - 0x1]] = [
            retu[z - 0x1],
            retu[y - 0x1]
        ];
    else
        retu[y - 0x1] = retu[z - 0x1];
}
var k = arr[a0_0x340d03(0x100)]() - 0x0;
console['log'](retu[k - 0x1]);