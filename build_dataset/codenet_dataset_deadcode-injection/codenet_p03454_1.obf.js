function a0_0x3bea() {
    var _0x4378a3 = [
        'pow',
        'floor',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3bea = function () {
        return _0x4378a3;
    };
    return a0_0x3bea();
}
var a0_0x2302b3 = a0_0x5f6c;
function Main(input) {
    var _0xa75c75 = a0_0x5f6c;
    const S = parseInt(input);
    const MOD = 0x3b9aca00 + 0x7;
    var upr = 0x0, i = 0x1;
    do {
        if (S <= Math[_0xa75c75(0x0)](0xa, i - 0x1) * 0x9 * i)
            upr = i;
        i++;
    } while (!upr);
    i = Math[_0xa75c75(0x1)](S / upr);
    var ans = 0x0;
    var l = Math[_0xa75c75(0x0)](0xa, upr - 0x1), r = l + i - 0x1;
    var flr = i * f(l);
    do {
        if (S % i)
            ans++;
        else
            ans += powmod(0xa, S / i - 0x1, MOD) * 0x9 - i + 0x1;
    } while (--i);
    while (--l) {
        flr += f(l);
        if (flr > S)
            flr -= f(r--);
        if (flr === S)
            ans++;
    }
    console['log']((ans + MOD) % MOD);
}
function a0_0x5f6c(PoiCsR, key) {
    var stringArray = a0_0x3bea();
    a0_0x5f6c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5f6c(PoiCsR, key);
}
function powmod(a, b, c) {
    var _0x22ff56 = a0_0x5f6c;
    const N = 0x2710;
    var rt = 0x1;
    while (b) {
        if (b & 0x1)
            rt = (Math[_0x22ff56(0x1)](a / N) * rt % c * N + a % N * rt) % c;
        a = (Math[_0x22ff56(0x1)](a / N) * a % c * N + a % N * a) % c;
        b >>>= 0x1;
    }
    return rt;
}
function f(n) {
    if (n < 0xa)
        return 0x1;
    if (n < 0x64)
        return 0x2;
    if (n < 0x3e8)
        return 0x3;
    if (n < 0x2710)
        return 0x4;
    if (n < 0x186a0)
        return 0x5;
    if (n < 0xf4240)
        return 0x6;
    if (n < 0x989680)
        return 0x7;
    return 0x8;
}
Main(require('fs')[a0_0x2302b3(0x2)](a0_0x2302b3(0x3), 'utf8'));