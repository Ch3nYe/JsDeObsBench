var mod = 0x3b9aca00 + 0x7;
function Main(s) {
    var QinquZ = {
        'bwVPW': function (callee, param1) {
            return callee(param1);
        },
        'ppUfQ': function (callee, param1) {
            return callee(param1);
        },
        'sCFMC': function (x, y) {
            return x + y;
        },
        'ercyc': function (x, y) {
            return x <= y;
        },
        'kSvvn': function (x, y) {
            return x - y;
        },
        'iOyGz': function (x, y) {
            return x - y;
        },
        'qFLAw': function (x, y) {
            return x <= y;
        },
        'nFFJa': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'FwFuG': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var n = QinquZ['bwVPW'](parseInt, s[0x0]);
    var sl = s[0x1]['length'];
    var a = QinquZ['ppUfQ'](Array, QinquZ['sCFMC'](n, 0x1))['fill'](0x0)['map'](a => Array(n + 0x2)['fill'](0x0));
    a[0x0][0x0] = 0x1;
    for (var i = 0x1; QinquZ['ercyc'](i, n); i++) {
        a[i][0x0] = a[QinquZ['kSvvn'](i, 0x1)][0x0] + a[QinquZ['iOyGz'](i, 0x1)][0x1];
        a[i][0x0] %= mod;
        for (var j = 0x1; QinquZ['qFLAw'](j, i); j++) {
            a[i][j] = QinquZ['sCFMC'](a[i - 0x1][QinquZ['kSvvn'](j, 0x1)] * 0x2, a[i - 0x1][j + 0x1]);
            a[i][j] %= mod;
        }
    }
    console['log'](QinquZ['nFFJa'](permod, a[n][sl], QinquZ['FwFuG'](powmod, 0x2, sl)));
}
function abmod() {
    var zFBwdZ = {
        'eHJzZ': function (x, y) {
            return x < y;
        },
        'jqkdQ': function (x, y) {
            return x + y;
        },
        'qigJO': function (x, y) {
            return x >>> y;
        },
        'TNkXR': function (x, y) {
            return x * y;
        },
        'yiOLy': function (x, y) {
            return x & y;
        }
    };
    var rt = arguments[0x0];
    for (var i = 0x1; zFBwdZ['eHJzZ'](i, arguments['length']); i++) {
        rt = zFBwdZ['jqkdQ'](zFBwdZ['qigJO'](rt, 0x10) * arguments[i] % mod * 0x10000, zFBwdZ['TNkXR'](zFBwdZ['yiOLy'](rt, 0xffff), arguments[i]));
        rt %= mod;
    }
    return rt;
}
function powmod(a, n) {
    var gZxLYi = {
        'lvCtK': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'VTZcB': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var rt = 0x1;
    while (n) {
        if (n & 0x1)
            rt = gZxLYi['lvCtK'](abmod, a, rt);
        a = gZxLYi['VTZcB'](abmod, a, a);
        n >>>= 0x1;
    }
    return rt;
}
function permod(a, n) {
    var aCCYTA = {
        'ZtQSp': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'figGg': function (x, y) {
            return x - y;
        }
    };
    var rt = aCCYTA['ZtQSp'](powmod, n, aCCYTA['figGg'](mod, 0x2));
    rt = abmod(rt, a);
    return rt;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));