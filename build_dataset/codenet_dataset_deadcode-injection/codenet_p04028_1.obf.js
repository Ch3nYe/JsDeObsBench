function a0_0x49f7(GnSDhw, key) {
    var stringArray = a0_0x3e0a();
    a0_0x49f7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x49f7(GnSDhw, key);
}
var a0_0x3807bc = a0_0x49f7;
var mod = 0x3b9aca00 + 0x7;
function a0_0x3e0a() {
    var _0x2e7243 = [
        'length',
        'fill',
        'map',
        'ICIBk',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split'
    ];
    a0_0x3e0a = function () {
        return _0x2e7243;
    };
    return a0_0x3e0a();
}
function Main(s) {
    var _0xa252d0 = a0_0x49f7;
    var n = parseInt(s[0x0]);
    var sl = s[0x1][_0xa252d0(0x0)];
    var a = Array(n + 0x1)[_0xa252d0(0x1)](0x0)[_0xa252d0(0x2)](a => Array(n + 0x2)[_0xa252d0(0x1)](0x0));
    a[0x0][0x0] = 0x1;
    for (var i = 0x1; i <= n; i++) {
        a[i][0x0] = a[i - 0x1][0x0] + a[i - 0x1][0x1];
        a[i][0x0] %= mod;
        for (var j = 0x1; j <= i; j++) {
            if (_0xa252d0(0x3) !== 'ICIBk') {
                a[i][j] = a[i - 0x1][j - 0x1] * 0x2 + a[i - 0x1][j + 0x1];
                a[i][j] %= mod;
            } else {
                a[i][j] = a[i - 0x1][j - 0x1] * 0x2 + a[i - 0x1][j + 0x1];
                a[i][j] %= mod;
            }
        }
    }
    console[_0xa252d0(0x4)](permod(a[n][sl], powmod(0x2, sl)));
}
function abmod() {
    var _0x522840 = a0_0x49f7;
    var rt = arguments[0x0];
    for (var i = 0x1; i < arguments[_0x522840(0x0)]; i++) {
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
Main(require('fs')[a0_0x3807bc(0x5)](a0_0x3807bc(0x6), a0_0x3807bc(0x7))[a0_0x3807bc(0x8)]('\x0a'));