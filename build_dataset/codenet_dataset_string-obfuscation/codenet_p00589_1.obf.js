var a0_0x1af3f4 = a0_0x8466;
(function (stringArrayFunction, comparisonValue) {
    var _0x2fac98 = a0_0x8466;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2fac98(0xa2)) / 0x1 * (-parseInt(_0x2fac98(0x9c)) / 0x2) + -parseInt(_0x2fac98(0x9a)) / 0x3 * (parseInt(_0x2fac98(0xa4)) / 0x4) + parseInt(_0x2fac98(0xa1)) / 0x5 * (parseInt(_0x2fac98(0xa0)) / 0x6) + -parseInt(_0x2fac98(0xa9)) / 0x7 + -parseInt(_0x2fac98(0xac)) / 0x8 + -parseInt(_0x2fac98(0x97)) / 0x9 + -parseInt(_0x2fac98(0xa7)) / 0xa * (-parseInt(_0x2fac98(0x99)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3424, 0xc2982));
var a = [''];
a[0x1] = '\x27,.,!?'[a0_0x1af3f4(0x9d)]('');
a[0x2] = a0_0x1af3f4(0x9e)[a0_0x1af3f4(0x9d)]('');
a[0x3] = a0_0x1af3f4(0xa3)[a0_0x1af3f4(0x9d)]('');
a[0x4] = a0_0x1af3f4(0xab)[a0_0x1af3f4(0x9d)]('');
a[0x5] = a0_0x1af3f4(0xa8)[a0_0x1af3f4(0x9d)]('');
function a0_0x3424() {
    var _0x13d8cd = [
        '69265muQwWp',
        '21yPDcVQ',
        'defDEF',
        '4cNujDQ',
        'utf8',
        'log',
        '3630PqIpYZ',
        'jklJKL',
        '8797453yqNDxB',
        'length',
        'ghiGHI',
        '254368YqqUqQ',
        '/dev/stdin',
        '11154690YpKPpF',
        'readFileSync',
        '87923jiHydk',
        '3008187NJRutE',
        'wxyzWXYZ',
        '90982nOtYHk',
        'split',
        'abcABC',
        'forEach',
        '204LBjHuZ'
    ];
    a0_0x3424 = function () {
        return _0x13d8cd;
    };
    return a0_0x3424();
}
a[0x6] = 'mnoMNO'[a0_0x1af3f4(0x9d)]('');
a[0x7] = 'pqrsPQRS'[a0_0x1af3f4(0x9d)]('');
a[0x8] = 'tuvTUV'[a0_0x1af3f4(0x9d)]('');
function a0_0x8466(DfiNjp, key) {
    var stringArray = a0_0x3424();
    a0_0x8466 = function (index, key) {
        index = index - 0x96;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8466(DfiNjp, key);
}
a[0x9] = a0_0x1af3f4(0x9b)[a0_0x1af3f4(0x9d)]('');
var input = require('fs')[a0_0x1af3f4(0x98)](a0_0x1af3f4(0x96), a0_0x1af3f4(0xa5));
var arr = input['trim']()[a0_0x1af3f4(0x9d)]('\x0a');
arr[a0_0x1af3f4(0x9f)](function (v) {
    var _0x54728d = a0_0x1af3f4;
    v = v['replace'](/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (x) {
        var _0x32dd7c = a0_0x8466;
        if (x[0x0] == '0')
            return x['slice'](0x1)['replace'](/0/g, '\x20');
        else
            return a[x[0x0] - 0x0][x[_0x32dd7c(0xaa)] - 0x1];
    });
    console[_0x54728d(0xa6)](v);
});