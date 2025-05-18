function a0_0x507f(cUMekW, key) {
    var stringArray = a0_0x16f9();
    a0_0x507f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x507f(cUMekW, key);
}
var a0_0x2da8d6 = a0_0x507f;
function a0_0x16f9() {
    var _0x41fe6a = [
        'split',
        'map',
        'log',
        'readFileSync'
    ];
    a0_0x16f9 = function () {
        return _0x41fe6a;
    };
    return a0_0x16f9();
}
function Main(s) {
    var _0x42836f = a0_0x507f;
    s = s[_0x42836f(0x0)]('\x0a');
    var n = +s[0x0];
    for (var i = 0x0; i < n; i++) {
        s[i] = s[i + 0x1][_0x42836f(0x0)]('\x20')[_0x42836f(0x1)](a => +a);
    }
    var ans = 0x0;
    for (i = n - 0x1; i >= 0x0; i--) {
        var x = (s[i][0x0] + ans) % s[i][0x1];
        if (x)
            ans += s[i][0x1] - x;
    }
    console[_0x42836f(0x2)](ans);
}
Main(require('fs')[a0_0x2da8d6(0x3)]('/dev/stdin', 'utf8'));