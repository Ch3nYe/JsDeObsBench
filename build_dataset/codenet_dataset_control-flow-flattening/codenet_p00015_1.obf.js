function pad(n) {
    var BggiNZ = {
        'whYQe': function (x, y) {
            return x < y;
        }
    };
    while (BggiNZ['whYQe'](n['length'], 0x7)) {
        n = '0' + n;
    }
    return n;
}
function divide(s) {
    var sJaFiX = {
        'hBfDn': function (x, y) {
            return x > y;
        },
        'DIifT': function (x, y) {
            return x * y;
        },
        'jlBuA': function (x, y) {
            return x + y;
        }
    };
    var a = [], i = 0x0, l = s['length'], d = 0x7;
    for (; sJaFiX['hBfDn']((a[i] = s['slice'](sJaFiX['DIifT'](sJaFiX['jlBuA'](i, 0x1), -d), sJaFiX['jlBuA'](l, sJaFiX['DIifT'](i, -d))))['length'], d - 0x1); i++);
    return a;
}
function unite(a) {
    return a['concat']()['reverse']()['join']('')['replace'](/^0*/, '');
}
function largeSum(n, m) {
    var lciWnK = {
        'Jeyhz': function (x, y) {
            return x < y;
        },
        'mkrmP': function (x, y) {
            return x != y;
        },
        'KrrRD': function (x, y) {
            return x + y;
        },
        'bJgWU': function (x, y) {
            return x > y;
        },
        'WitWZ': function (callee, param1) {
            return callee(param1);
        }
    };
    for (var h = 0x0, o = [], i = 0x0, l = Math['max'](n['length'], m['length']); lciWnK['Jeyhz'](i, l) || lciWnK['mkrmP'](h, 0x0); i++) {
        var a = lciWnK['KrrRD']((parseInt(n[i], 0xa) || 0x0) + (parseInt(m[i], 0xa) || 0x0), +h)['toString'](0xa);
        o[i] = lciWnK['bJgWU'](a['length'], 0x7) ? (h = a['slice'](0x0, 0x1), a['slice'](0x1)) : (h = 0x0, lciWnK['WitWZ'](pad, a));
    }
    return o;
}
process['stdin']['on']('data', function (c) {
    var fTALsi = {
        'TMXec': function (x, y) {
            return x * y;
        },
        'EGUnm': function (x, y) {
            return x < y;
        },
        'YKXgA': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'GawOR': function (x, y) {
            return x == y;
        }
    };
    var a = (c + '')['trim']()['split']('\x0a');
    for (var i = 0x0, l = fTALsi['TMXec'](+a['shift'](), 0x2); fTALsi['EGUnm'](i, l); i += 0x2) {
        var s = unite(fTALsi['YKXgA'](largeSum, divide(a[i]), divide(a[i + 0x1])));
        console['log'](fTALsi['GawOR'](s, '') ? 0x0 : s['length'] > 0x50 ? 'overflow' : s);
    }
})['resume']();