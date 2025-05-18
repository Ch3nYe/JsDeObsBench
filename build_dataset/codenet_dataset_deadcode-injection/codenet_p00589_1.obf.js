var a0_0x1bfc47 = a0_0x35f8;
var a = [''];
a[0x1] = a0_0x1bfc47(0x0)[a0_0x1bfc47(0x1)]('');
a[0x2] = a0_0x1bfc47(0x2)[a0_0x1bfc47(0x1)]('');
function a0_0x35f8(uYeGDK, key) {
    var stringArray = a0_0x5132();
    a0_0x35f8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x35f8(uYeGDK, key);
}
a[0x3] = a0_0x1bfc47(0x3)[a0_0x1bfc47(0x1)]('');
a[0x4] = a0_0x1bfc47(0x4)[a0_0x1bfc47(0x1)]('');
a[0x5] = a0_0x1bfc47(0x5)[a0_0x1bfc47(0x1)]('');
a[0x6] = a0_0x1bfc47(0x6)[a0_0x1bfc47(0x1)]('');
a[0x7] = a0_0x1bfc47(0x7)[a0_0x1bfc47(0x1)]('');
function a0_0x5132() {
    var _0x236b0f = [
        '\x27,.,!?',
        'split',
        'abcABC',
        'defDEF',
        'ghiGHI',
        'jklJKL',
        'mnoMNO',
        'pqrsPQRS',
        'tuvTUV',
        'readFileSync',
        'utf8',
        'trim',
        'forEach',
        'replace',
        'slice'
    ];
    a0_0x5132 = function () {
        return _0x236b0f;
    };
    return a0_0x5132();
}
a[0x8] = a0_0x1bfc47(0x8)['split']('');
a[0x9] = 'wxyzWXYZ'[a0_0x1bfc47(0x1)]('');
var input = require('fs')[a0_0x1bfc47(0x9)]('/dev/stdin', a0_0x1bfc47(0xa));
var arr = input[a0_0x1bfc47(0xb)]()[a0_0x1bfc47(0x1)]('\x0a');
arr[a0_0x1bfc47(0xc)](function (v) {
    var _0x211de2 = a0_0x35f8;
    v = v[_0x211de2(0xd)](/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (x) {
        var _0x29b63c = a0_0x35f8;
        if (x[0x0] == '0')
            return x[_0x29b63c(0xe)](0x1)[_0x29b63c(0xd)](/0/g, '\x20');
        else
            return a[x[0x0] - 0x0][x['length'] - 0x1];
    });
    console['log'](v);
});