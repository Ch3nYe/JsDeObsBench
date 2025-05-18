var a0_0x21ef7e = a0_0x157f;
(function (stringArrayFunction, comparisonValue) {
    var _0x31e061 = a0_0x157f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x31e061(0x96)) / 0x1 * (parseInt(_0x31e061(0x8b)) / 0x2) + -parseInt(_0x31e061(0x88)) / 0x3 * (-parseInt(_0x31e061(0x87)) / 0x4) + parseInt(_0x31e061(0x8e)) / 0x5 + -parseInt(_0x31e061(0x90)) / 0x6 + parseInt(_0x31e061(0x99)) / 0x7 + parseInt(_0x31e061(0x85)) / 0x8 * (-parseInt(_0x31e061(0x98)) / 0x9) + -parseInt(_0x31e061(0x86)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x494f, 0xf31a9));
var input = require('fs')[a0_0x21ef7e(0x8d)](a0_0x21ef7e(0x8c), 'utf8');
var Arr = input[a0_0x21ef7e(0x91)]()[a0_0x21ef7e(0x92)]('\x0a');
var AL = Arr[a0_0x21ef7e(0x94)]();
var abc = [
    '',
    a0_0x21ef7e(0x97),
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    a0_0x21ef7e(0x95),
    'tuv',
    a0_0x21ef7e(0x93)
];
abc = abc[a0_0x21ef7e(0x8f)](function (v) {
    return v['split']('');
});
function a0_0x157f(xQbqYr, key) {
    var stringArray = a0_0x494f();
    a0_0x157f = function (index, key) {
        index = index - 0x85;
        var value = stringArray[index];
        return value;
    };
    return a0_0x157f(xQbqYr, key);
}
for (var i = 0x0; i < AL; i++) {
    var arr = Arr[i][a0_0x21ef7e(0x92)]('')['map'](Number);
    var str = '';
    var a = '';
    var n = -0x1;
    arr[a0_0x21ef7e(0x8a)](function (v) {
        var _0x36ec9b = a0_0x21ef7e;
        if (v > 0x0) {
            n++;
            a = abc[v][n % abc[v][_0x36ec9b(0x89)]];
        } else {
            str += a;
            n = -0x1;
            a = '';
        }
    });
    console[a0_0x21ef7e(0x9a)](str);
}
function a0_0x494f() {
    var _0x2712c2 = [
        '8nANJcS',
        '2397540YtlrbS',
        '4bbRYhX',
        '1716807mdTjxz',
        'length',
        'forEach',
        '8732avegui',
        '/dev/stdin',
        'readFileSync',
        '8644420BSklMC',
        'map',
        '8575248pRdwHA',
        'trim',
        'split',
        'wxyz',
        'shift',
        'pqrs',
        '103DPgeJq',
        '.,!?\x20',
        '13085001TbGonT',
        '9574271HQQPGW',
        'log'
    ];
    a0_0x494f = function () {
        return _0x2712c2;
    };
    return a0_0x494f();
}