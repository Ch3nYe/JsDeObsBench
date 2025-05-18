function a0_0x196f() {
    var _0x2b672f = [
        'split',
        'map',
        'sort',
        'max',
        'abs',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x196f = function () {
        return _0x2b672f;
    };
    return a0_0x196f();
}
function a0_0x2f7f(MRtThM, key) {
    var stringArray = a0_0x196f();
    a0_0x2f7f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2f7f(MRtThM, key);
}
var a0_0xe63194 = a0_0x2f7f;
function Main(s) {
    var _0x1f7768 = a0_0x2f7f;
    s = s[_0x1f7768(0x0)]('\x0a');
    var n = s[0x0]['split']('\x20')[_0x1f7768(0x1)](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var x;
    var a = Array(0x4)['fill'](0x0)[_0x1f7768(0x1)](a => Array(n));
    for (var i = 0x0; i < n; i++) {
        x = s[i + 0x1][_0x1f7768(0x0)]('\x20')[_0x1f7768(0x1)](a => +a);
        a[0x0][i] = x[0x0] + x[0x1] + x[0x2];
        a[0x1][i] = x[0x0] + x[0x1] - x[0x2];
        a[0x2][i] = x[0x0] - x[0x1] + x[0x2];
        a[0x3][i] = -x[0x0] + x[0x1] + x[0x2];
    }
    var ans = 0x0;
    for (i = 0x0; i < 0x4; i++) {
        a[i][_0x1f7768(0x2)]((a, b) => a - b);
        var t = 0x0;
        for (var j = 0x0; j < m; j++) {
            t += a[i][j];
        }
        ans = Math[_0x1f7768(0x3)](ans, Math[_0x1f7768(0x4)](t));
        t = 0x0;
        for (j = n; j > n - m;) {
            t += a[i][--j];
        }
        ans = Math[_0x1f7768(0x3)](ans, Math[_0x1f7768(0x4)](t));
    }
    console['log'](ans);
}
Main(require('fs')[a0_0xe63194(0x5)](a0_0xe63194(0x6), a0_0xe63194(0x7)));