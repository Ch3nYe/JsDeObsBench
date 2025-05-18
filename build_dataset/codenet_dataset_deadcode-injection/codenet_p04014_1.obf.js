const a0_0x21eeb4 = a0_0x358c;
function Main(s) {
    const _0x4eac50 = a0_0x358c;
    s = s[_0x4eac50(0x0)]('\x0a')['map'](a => parseInt(a));
    const n = s[0x0];
    s = s[0x1];
    const sn = Math['ceil'](Math[_0x4eac50(0x1)](n));
    if (s === n) {
        console[_0x4eac50(0x2)](n + 0x1);
        return;
    }
    for (var b = 0x2; b < sn; b++) {
        if (s === f(b, n)) {
            console[_0x4eac50(0x2)](b);
            return;
        }
    }
    var p = Math[_0x4eac50(0x3)]((n - s) / (sn - 0x1));
    for (; p > 0x0; p--) {
        b = Math[_0x4eac50(0x3)]((n - s) / p + 0x1);
        if (s === f(b, n)) {
            console[_0x4eac50(0x2)](b);
            return;
        }
    }
    console['log'](-0x1);
}
function a0_0x4ef0() {
    const _0x6fe25a = [
        'split',
        'sqrt',
        'log',
        'floor',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x4ef0 = function () {
        return _0x6fe25a;
    };
    return a0_0x4ef0();
}
function a0_0x358c(nWxUAr, key) {
    const stringArray = a0_0x4ef0();
    a0_0x358c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x358c(nWxUAr, key);
}
function f(b, n) {
    const _0x4edd59 = a0_0x358c;
    if (n < b)
        return n;
    return f(b, Math[_0x4edd59(0x3)](n / b)) + n % b;
}
Main(require('fs')[a0_0x21eeb4(0x4)](a0_0x21eeb4(0x5), a0_0x21eeb4(0x6))[a0_0x21eeb4(0x7)]());