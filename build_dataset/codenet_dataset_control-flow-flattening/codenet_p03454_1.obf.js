function Main(input) {
    var HvrsBQ = {
        'qTBIJ': function (callee, param1) {
            return callee(param1);
        },
        'NESHl': function (x, y) {
            return x + y;
        },
        'MoOSn': function (x, y) {
            return x <= y;
        },
        'OdQUb': function (x, y) {
            return x / y;
        },
        'DgETr': function (x, y) {
            return x - y;
        },
        'YkpIw': function (x, y) {
            return x * y;
        },
        'bKAnE': function (x, y) {
            return x / y;
        },
        'mOyLf': function (callee, param1) {
            return callee(param1);
        },
        'SZeny': function (x, y) {
            return x === y;
        }
    };
    const S = HvrsBQ['qTBIJ'](parseInt, input);
    const MOD = HvrsBQ['NESHl'](0x3b9aca00, 0x7);
    var upr = 0x0, i = 0x1;
    do {
        if (HvrsBQ['MoOSn'](S, Math['pow'](0xa, i - 0x1) * 0x9 * i))
            upr = i;
        i++;
    } while (!upr);
    i = Math['floor'](HvrsBQ['OdQUb'](S, upr));
    var ans = 0x0;
    var l = Math['pow'](0xa, HvrsBQ['DgETr'](upr, 0x1)), r = HvrsBQ['NESHl'](l, i) - 0x1;
    var flr = HvrsBQ['YkpIw'](i, f(l));
    do {
        if (S % i)
            ans++;
        else
            ans += HvrsBQ['NESHl'](HvrsBQ['DgETr'](HvrsBQ['YkpIw'](powmod(0xa, HvrsBQ['DgETr'](HvrsBQ['bKAnE'](S, i), 0x1), MOD), 0x9), i), 0x1);
    } while (--i);
    while (--l) {
        flr += HvrsBQ['qTBIJ'](f, l);
        if (flr > S)
            flr -= HvrsBQ['mOyLf'](f, r--);
        if (HvrsBQ['SZeny'](flr, S))
            ans++;
    }
    console['log'](HvrsBQ['NESHl'](ans, MOD) % MOD);
}
function powmod(a, b, c) {
    var YPxFgX = {
        'ppDZx': function (x, y) {
            return x & y;
        },
        'zVYEr': function (x, y) {
            return x % y;
        },
        'yLleH': function (x, y) {
            return x + y;
        },
        'UlLzl': function (x, y) {
            return x * y;
        },
        'zPRYd': function (x, y) {
            return x % y;
        },
        'IngyU': function (x, y) {
            return x % y;
        },
        'LXwrn': function (x, y) {
            return x % y;
        },
        'xZZGo': function (x, y) {
            return x * y;
        },
        'ANkAQ': function (x, y) {
            return x % y;
        },
        'wbsNF': function (x, y) {
            return x / y;
        }
    };
    const N = 0x2710;
    var rt = 0x1;
    while (b) {
        if (YPxFgX['ppDZx'](b, 0x1))
            rt = YPxFgX['zVYEr'](YPxFgX['yLleH'](YPxFgX['UlLzl'](YPxFgX['zPRYd'](YPxFgX['UlLzl'](Math['floor'](a / N), rt), c), N), YPxFgX['UlLzl'](YPxFgX['IngyU'](a, N), rt)), c);
        a = YPxFgX['LXwrn'](YPxFgX['yLleH'](YPxFgX['xZZGo'](YPxFgX['ANkAQ'](YPxFgX['xZZGo'](Math['floor'](YPxFgX['wbsNF'](a, N)), a), c), N), a % N * a), c);
        b >>>= 0x1;
    }
    return rt;
}
function f(n) {
    var lXXkzC = {
        'VxCLQ': function (x, y) {
            return x < y;
        },
        'SJFUL': function (x, y) {
            return x < y;
        },
        'scCaF': function (x, y) {
            return x < y;
        }
    };
    if (n < 0xa)
        return 0x1;
    if (n < 0x64)
        return 0x2;
    if (lXXkzC['VxCLQ'](n, 0x3e8))
        return 0x3;
    if (lXXkzC['VxCLQ'](n, 0x2710))
        return 0x4;
    if (lXXkzC['SJFUL'](n, 0x186a0))
        return 0x5;
    if (lXXkzC['scCaF'](n, 0xf4240))
        return 0x6;
    if (lXXkzC['scCaF'](n, 0x989680))
        return 0x7;
    return 0x8;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));