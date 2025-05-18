function Main(s) {
    const rcXgDz = {
        'BkZHG': function (x, y) {
            return x === y;
        },
        'vAjps': function (x, y) {
            return x + y;
        },
        'dOEnc': function (x, y) {
            return x < y;
        },
        'EuVaM': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'RkzzE': function (x, y) {
            return x - y;
        },
        'QPLBD': function (x, y) {
            return x - y;
        },
        'gVrEV': function (x, y) {
            return x > y;
        },
        'SDWzs': function (x, y) {
            return x / y;
        },
        'pgMkh': function (x, y) {
            return x - y;
        }
    };
    s = s['split']('\x0a')['map'](a => parseInt(a));
    const n = s[0x0];
    s = s[0x1];
    const sn = Math['ceil'](Math['sqrt'](n));
    if (rcXgDz['BkZHG'](s, n)) {
        console['log'](rcXgDz['vAjps'](n, 0x1));
        return;
    }
    for (var b = 0x2; rcXgDz['dOEnc'](b, sn); b++) {
        if (rcXgDz['BkZHG'](s, rcXgDz['EuVaM'](f, b, n))) {
            console['log'](b);
            return;
        }
    }
    var p = Math['floor'](rcXgDz['RkzzE'](n, s) / rcXgDz['QPLBD'](sn, 0x1));
    for (; rcXgDz['gVrEV'](p, 0x0); p--) {
        b = Math['floor'](rcXgDz['vAjps'](rcXgDz['SDWzs'](rcXgDz['pgMkh'](n, s), p), 0x1));
        if (rcXgDz['BkZHG'](s, f(b, n))) {
            console['log'](b);
            return;
        }
    }
    console['log'](-0x1);
}
function f(b, n) {
    const byWvtf = {
        'mxxai': function (x, y) {
            return x < y;
        },
        'YCajk': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'dZfnr': function (x, y) {
            return x % y;
        }
    };
    if (byWvtf['mxxai'](n, b))
        return n;
    return byWvtf['YCajk'](f, b, Math['floor'](n / b)) + byWvtf['dZfnr'](n, b);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());