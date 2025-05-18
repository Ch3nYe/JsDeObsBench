var a0_0x414fae = a0_0x1c62;
function Main(s) {
    var _0xd783af = a0_0x1c62;
    s = s[_0xd783af(0x0)]('\x0a');
    const q = +s[0x0];
    for (var i = 0x0; i < q; i++) {
        var a = s[i + 0x1][_0xd783af(0x0)]('\x20')[_0xd783af(0x1)](a => +a);
        var b = Math[_0xd783af(0x2)](a[0x0], a[0x1]);
        a = Math[_0xd783af(0x3)](a[0x0], a[0x1]);
        var c = Math[_0xd783af(0x4)](Math[_0xd783af(0x5)](a * b));
        var ans = (a - 0x1) * 0x2;
        if (a < b - 0x1)
            ans++;
        for (var j = a + 0x1; j < c; j++) {
            if (Math[_0xd783af(0x6)](a / j * b) === j)
                ans++;
            else
                ans += 0x2;
        }
        console[_0xd783af(0x7)](ans);
    }
}
function a0_0x1c62(WnRgkD, key) {
    var stringArray = a0_0x4b8b();
    a0_0x1c62 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c62(WnRgkD, key);
}
Main(require('fs')[a0_0x414fae(0x8)](a0_0x414fae(0x9), a0_0x414fae(0xa)));
function a0_0x4b8b() {
    var _0x242830 = [
        'split',
        'map',
        'max',
        'min',
        'ceil',
        'sqrt',
        'floor',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4b8b = function () {
        return _0x242830;
    };
    return a0_0x4b8b();
}