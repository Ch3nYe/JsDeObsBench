var a0_0x58c6e1 = a0_0x4eda;
(function (stringArrayFunction, comparisonValue) {
    var _0x38bcc8 = a0_0x4eda;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x38bcc8(0x163)) / 0x1 + parseInt(_0x38bcc8(0x15f)) / 0x2 * (parseInt(_0x38bcc8(0x167)) / 0x3) + -parseInt(_0x38bcc8(0x168)) / 0x4 + -parseInt(_0x38bcc8(0x16a)) / 0x5 * (parseInt(_0x38bcc8(0x160)) / 0x6) + parseInt(_0x38bcc8(0x15d)) / 0x7 + -parseInt(_0x38bcc8(0x15e)) / 0x8 + parseInt(_0x38bcc8(0x161)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x40d0, 0xec790));
function Main(input) {
    var _0x17e6e6 = a0_0x4eda;
    const S = parseInt(input);
    const MOD = 0x3b9aca00 + 0x7;
    var upr = 0x0, i = 0x1;
    do {
        if (S <= Math[_0x17e6e6(0x165)](0xa, i - 0x1) * 0x9 * i)
            upr = i;
        i++;
    } while (!upr);
    i = Math['floor'](S / upr);
    var ans = 0x0;
    var l = Math[_0x17e6e6(0x165)](0xa, upr - 0x1), r = l + i - 0x1;
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
    console[_0x17e6e6(0x169)]((ans + MOD) % MOD);
}
function a0_0x40d0() {
    var _0x3e4f90 = [
        'utf8',
        'pow',
        '/dev/stdin',
        '459NtEEHL',
        '5383804xUgTfN',
        'log',
        '41915vrcKYQ',
        '8455279RBXKXR',
        '14990856WFvrXP',
        '6334dkcymG',
        '426ldUofP',
        '32172903oNwZRG',
        'floor',
        '483622opWxZu'
    ];
    a0_0x40d0 = function () {
        return _0x3e4f90;
    };
    return a0_0x40d0();
}
function a0_0x4eda(otukRJ, key) {
    var stringArray = a0_0x40d0();
    a0_0x4eda = function (index, key) {
        index = index - 0x15d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4eda(otukRJ, key);
}
function powmod(a, b, c) {
    var _0x385782 = a0_0x4eda;
    const N = 0x2710;
    var rt = 0x1;
    while (b) {
        if (b & 0x1)
            rt = (Math[_0x385782(0x162)](a / N) * rt % c * N + a % N * rt) % c;
        a = (Math[_0x385782(0x162)](a / N) * a % c * N + a % N * a) % c;
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
Main(require('fs')['readFileSync'](a0_0x58c6e1(0x166), a0_0x58c6e1(0x164)));