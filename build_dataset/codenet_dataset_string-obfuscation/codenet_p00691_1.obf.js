var a0_0x372bac = a0_0x13e4;
function a0_0x13e4(UJxvxK, key) {
    var stringArray = a0_0x21fa();
    a0_0x13e4 = function (index, key) {
        index = index - 0x9d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x13e4(UJxvxK, key);
}
function a0_0x21fa() {
    var _0x5911e8 = [
        '7368NZCARj',
        '7713KiOOnT',
        'push',
        'log',
        '8771sRRqai',
        'utf8',
        '1408332DkpfNz',
        '10503081Nhgoqh',
        'min',
        '6220oOFpRt',
        'trim',
        '13398BSONat',
        '876mqyTGM',
        '1567QjQMzX',
        'apply',
        '842gSwVxw',
        'readFileSync',
        '/dev/stdin',
        '3683130LZhWyW'
    ];
    a0_0x21fa = function () {
        return _0x5911e8;
    };
    return a0_0x21fa();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2494ae = a0_0x13e4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2494ae(0xa1)) / 0x1 * (parseInt(_0x2494ae(0xa3)) / 0x2) + parseInt(_0x2494ae(0xa8)) / 0x3 * (-parseInt(_0x2494ae(0xa0)) / 0x4) + -parseInt(_0x2494ae(0xa6)) / 0x5 + -parseInt(_0x2494ae(0xad)) / 0x6 + parseInt(_0x2494ae(0xab)) / 0x7 * (parseInt(_0x2494ae(0xa7)) / 0x8) + parseInt(_0x2494ae(0xae)) / 0x9 + parseInt(_0x2494ae(0x9d)) / 0xa * (-parseInt(_0x2494ae(0x9f)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x21fa, 0xa8260));
var input = require('fs')[a0_0x372bac(0xa4)](a0_0x372bac(0xa5), a0_0x372bac(0xac));
var arr = input[a0_0x372bac(0x9e)]()['split']('\x0a');
while (!![]) {
    var z = arr['shift']() - 0x0;
    if (z == 0x0)
        break;
    var zzz = z * z * z;
    var ary = [];
    for (var i = z - 0x1; i > 0x0; i--) {
        for (var j = i; j > 0x0; j--) {
            var x = zzz - i * i * i - j * j * j;
            if (x > 0x0)
                ary[a0_0x372bac(0xa9)](x);
        }
    }
    console[a0_0x372bac(0xaa)](Math[a0_0x372bac(0xaf)][a0_0x372bac(0xa2)](null, ary));
}