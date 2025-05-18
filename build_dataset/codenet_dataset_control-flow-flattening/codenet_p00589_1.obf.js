var a = [''];
a[0x1] = '\x27,.,!?'['split']('');
a[0x2] = 'abcABC'['split']('');
a[0x3] = 'defDEF'['split']('');
a[0x4] = 'ghiGHI'['split']('');
a[0x5] = 'jklJKL'['split']('');
a[0x6] = 'mnoMNO'['split']('');
a[0x7] = 'pqrsPQRS'['split']('');
a[0x8] = 'tuvTUV'['split']('');
a[0x9] = 'wxyzWXYZ'['split']('');
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['forEach'](function (v) {
    var qYGkKC = {
        'Hokno': function (x, y) {
            return x == y;
        },
        'BUGsJ': function (x, y) {
            return x - y;
        }
    };
    v = v['replace'](/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (x) {
        if (qYGkKC['Hokno'](x[0x0], '0'))
            return x['slice'](0x1)['replace'](/0/g, '\x20');
        else
            return a[x[0x0] - 0x0][qYGkKC['BUGsJ'](x['length'], 0x1)];
    });
    console['log'](v);
});