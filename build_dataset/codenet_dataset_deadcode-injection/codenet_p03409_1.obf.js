var a0_0x49e4b0 = a0_0x2848;
function Main(s) {
    var _0x52c8e8 = a0_0x2848;
    s = s[_0x52c8e8(0x0)]('\x0a');
    var n = parseInt(s[0x0]);
    var a = Array(n);
    var c = Array(n);
    for (var i = 0x0; i < n; i++) {
        a[i] = s[i + 0x1][_0x52c8e8(0x0)]('\x20')[_0x52c8e8(0x1)](a => parseInt(a));
    }
    for (var i = 0x0; i < n; i++) {
        c[i] = s[i + n + 0x1][_0x52c8e8(0x0)]('\x20')[_0x52c8e8(0x1)](a => parseInt(a));
    }
    a = a['sort']((a, b) => a[0x1] - b[0x1]);
    a = a[_0x52c8e8(0x2)]((a, b) => a[0x0] - b[0x0]);
    c = c[_0x52c8e8(0x2)]((a, b) => a[0x0] - b[0x0]);
    c = c[_0x52c8e8(0x2)]((a, b) => b[0x1] - a[0x1]);
    var ans = 0x0;
    for (i = n - 0x1; i >= 0x0; i--) {
        for (var j = c[_0x52c8e8(0x3)] - 0x1; j >= 0x0; j--) {
            if (a[i][0x0] < c[j][0x0] && a[i][0x1] < c[j][0x1]) {
                ans++;
                c['splice'](j, 0x1);
                break;
            }
        }
    }
    console['log'](ans);
}
function a0_0x2848(DRDWZc, key) {
    var stringArray = a0_0x5ce5();
    a0_0x2848 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2848(DRDWZc, key);
}
Main(require('fs')[a0_0x49e4b0(0x4)](a0_0x49e4b0(0x5), a0_0x49e4b0(0x6))[a0_0x49e4b0(0x7)]());
function a0_0x5ce5() {
    var _0x17f1e6 = [
        'split',
        'map',
        'sort',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x5ce5 = function () {
        return _0x17f1e6;
    };
    return a0_0x5ce5();
}