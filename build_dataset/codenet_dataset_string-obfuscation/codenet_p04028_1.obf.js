function a0_0x5ce5(CoMYqW, key) {
    var stringArray = a0_0x3a2c();
    a0_0x5ce5 = function (index, key) {
        index = index - 0x71;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5ce5(CoMYqW, key);
}
function a0_0x3a2c() {
    var _0x39c70d = [
        '867650MRQcxu',
        '10572zuBZfL',
        '753764AyMvzh',
        '5787SzIKxI',
        'utf8',
        'split',
        '676323xwghwb',
        '25iWMBPm',
        'log',
        '206pxefLu',
        'readFileSync',
        '656fHDwlI',
        '2282840NJUpKS',
        '2519ftlcMU',
        'length',
        'fill'
    ];
    a0_0x3a2c = function () {
        return _0x39c70d;
    };
    return a0_0x3a2c();
}
var a0_0x2a248e = a0_0x5ce5;
(function (stringArrayFunction, comparisonValue) {
    var _0x44a5f8 = a0_0x5ce5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x44a5f8(0x7d)) / 0x1 * (-parseInt(_0x44a5f8(0x79)) / 0x2) + -parseInt(_0x44a5f8(0x76)) / 0x3 + -parseInt(_0x44a5f8(0x72)) / 0x4 + -parseInt(_0x44a5f8(0x77)) / 0x5 * (parseInt(_0x44a5f8(0x71)) / 0x6) + parseInt(_0x44a5f8(0x80)) / 0x7 + -parseInt(_0x44a5f8(0x7b)) / 0x8 * (parseInt(_0x44a5f8(0x73)) / 0x9) + parseInt(_0x44a5f8(0x7c)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3a2c, 0x21451));
var mod = 0x3b9aca00 + 0x7;
function Main(s) {
    var _0x11d4ff = a0_0x5ce5;
    var n = parseInt(s[0x0]);
    var sl = s[0x1][_0x11d4ff(0x7e)];
    var a = Array(n + 0x1)[_0x11d4ff(0x7f)](0x0)['map'](a => Array(n + 0x2)[_0x11d4ff(0x7f)](0x0));
    a[0x0][0x0] = 0x1;
    for (var i = 0x1; i <= n; i++) {
        a[i][0x0] = a[i - 0x1][0x0] + a[i - 0x1][0x1];
        a[i][0x0] %= mod;
        for (var j = 0x1; j <= i; j++) {
            a[i][j] = a[i - 0x1][j - 0x1] * 0x2 + a[i - 0x1][j + 0x1];
            a[i][j] %= mod;
        }
    }
    console[_0x11d4ff(0x78)](permod(a[n][sl], powmod(0x2, sl)));
}
function abmod() {
    var _0x2ab34c = a0_0x5ce5;
    var rt = arguments[0x0];
    for (var i = 0x1; i < arguments[_0x2ab34c(0x7e)]; i++) {
        rt = (rt >>> 0x10) * arguments[i] % mod * 0x10000 + (rt & 0xffff) * arguments[i];
        rt %= mod;
    }
    return rt;
}
function powmod(a, n) {
    var rt = 0x1;
    while (n) {
        if (n & 0x1)
            rt = abmod(a, rt);
        a = abmod(a, a);
        n >>>= 0x1;
    }
    return rt;
}
function permod(a, n) {
    var rt = powmod(n, mod - 0x2);
    rt = abmod(rt, a);
    return rt;
}
Main(require('fs')[a0_0x2a248e(0x7a)]('/dev/stdin', a0_0x2a248e(0x74))[a0_0x2a248e(0x75)]('\x0a'));