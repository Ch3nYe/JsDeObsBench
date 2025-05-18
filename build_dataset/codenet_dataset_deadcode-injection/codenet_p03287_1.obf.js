var a0_0x4d8d2f = a0_0x19e0;
function Main(s) {
    var _0x3130ca = a0_0x19e0;
    s = s[_0x3130ca(0x0)]('\x0a');
    var n = s[0x0]['split']('\x20')[_0x3130ca(0x1)](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var a = s[0x1][_0x3130ca(0x0)]('\x20')[_0x3130ca(0x1)](a => +a);
    var ans = 0x0;
    var b = {};
    var t = 0x0;
    for (var i = 0x0; i < n; i++) {
        t = (t + a[i]) % m;
        if (b[t])
            b[t]++;
        else
            b[t] = 0x1;
    }
    for (i in b) {
        i = +i;
        if (i === 0x0)
            ans += b[i] * (b[i] + 0x1) / 0x2;
        else if (b[i] > 0x1)
            ans += b[i] * (b[i] - 0x1) / 0x2;
    }
    console['log'](ans);
}
function a0_0x19e0(gCBdGf, key) {
    var stringArray = a0_0x38f9();
    a0_0x19e0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19e0(gCBdGf, key);
}
Main(require('fs')[a0_0x4d8d2f(0x2)](a0_0x4d8d2f(0x3), a0_0x4d8d2f(0x4)));
function a0_0x38f9() {
    var _0x2a7155 = [
        'split',
        'map',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x38f9 = function () {
        return _0x2a7155;
    };
    return a0_0x38f9();
}