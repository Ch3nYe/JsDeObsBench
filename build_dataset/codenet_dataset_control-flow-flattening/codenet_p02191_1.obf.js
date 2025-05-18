var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [n, q] = arr['shift']()['split']('\x20')['map'](Number);
var ary = arr['shift']()['split']('\x20')['map'](Number);
ary['sort']((a, b) => a - b);
var tansaku = function (x, str) {
    var CeTywt = {
        'EkNtW': function (x, y) {
            return x > y;
        },
        'tQKjm': function (x, y) {
            return x - y;
        },
        'NRhnf': function (x, y) {
            return x + y;
        },
        'eZfJl': function (x, y) {
            return x / y;
        },
        'rhAKZ': function (x, y) {
            return x < y;
        },
        'thUWo': function (x, y) {
            return x == y;
        },
        'CcKEP': 'ookii',
        'GzGAX': function (x, y) {
            return x == y;
        }
    };
    var first = -0x1;
    var last = ary['length'];
    while (CeTywt['EkNtW'](CeTywt['tQKjm'](last, first), 0x1)) {
        var mid = CeTywt['NRhnf'](first, Math['floor'](CeTywt['eZfJl'](last - first, 0x2)));
        if (CeTywt['rhAKZ'](ary[mid], x))
            first = mid;
        else if (CeTywt['thUWo'](str, CeTywt['CcKEP']) && CeTywt['GzGAX'](ary[mid], x))
            first = mid;
        else
            last = mid;
    }
    return last;
};
var ans = [];
arr['forEach'](v => {
    var RjGmjU = {
        'kBZxu': function (x, y) {
            return x - y;
        },
        'xnuub': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'cqLHP': 'ookii',
        'KZxKM': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var [l, r] = v['split']('\x20')['map'](Number);
    ans['push'](RjGmjU['kBZxu'](RjGmjU['xnuub'](tansaku, r, RjGmjU['cqLHP']), RjGmjU['KZxKM'](tansaku, l, 'izyou')));
});
console['log'](ans['join']('\x0a'));