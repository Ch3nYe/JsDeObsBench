var a0_0x2c413a = a0_0x5830;
function a0_0x5830(qnwFRt, key) {
    var stringArray = a0_0x3137();
    a0_0x5830 = function (index, key) {
        index = index - 0xbd;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5830(qnwFRt, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x50c9c4 = a0_0x5830;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x50c9c4(0xc7)) / 0x1 * (-parseInt(_0x50c9c4(0xbe)) / 0x2) + parseInt(_0x50c9c4(0xd0)) / 0x3 + parseInt(_0x50c9c4(0xc2)) / 0x4 + -parseInt(_0x50c9c4(0xcd)) / 0x5 + -parseInt(_0x50c9c4(0xcc)) / 0x6 + -parseInt(_0x50c9c4(0xc6)) / 0x7 * (-parseInt(_0x50c9c4(0xbd)) / 0x8) + parseInt(_0x50c9c4(0xca)) / 0x9 * (-parseInt(_0x50c9c4(0xbf)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3137, 0x2f1e3));
function Main(s) {
    var _0x3a7025 = a0_0x5830;
    s = s['split']('\x0a');
    var n = s[0x0]['split']('\x20')[_0x3a7025(0xcb)](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var b = Array(n)[_0x3a7025(0xc8)](0x0)['map'](a => Array(n)['fill'](0x0));
    for (var i = 0x0; i < m; i++) {
        var a = s[i + 0x1][_0x3a7025(0xc3)]('\x20')[_0x3a7025(0xcb)](a => a - 0x1);
        b[a[0x0]][a[0x1]] = b[a[0x1]][a[0x0]] = 0x1;
    }
    var k = 0x218711a00;
    var x;
    for (i = 0x0; i < n; i++) {
        var t = b[i][_0x3a7025(0xcf)]((a, b) => a + b);
        if (k > t) {
            k = t;
            x = i;
        }
    }
    var y = [], z = [];
    for (i = 0x0; i < n; i++) {
        if (i === x)
            continue;
        if (b[x][i])
            y[_0x3a7025(0xc1)](i);
        else
            z[_0x3a7025(0xc1)](i);
    }
    for (i = 0x0; i < y[_0x3a7025(0xc9)]; i++)
        for (var j = i + 0x1; j < y[_0x3a7025(0xc9)]; j++) {
            if (!b[y[i]][y[j]]) {
                console[_0x3a7025(0xc4)](-0x1);
                return;
            }
        }
    for (i = 0x0; i < z[_0x3a7025(0xc9)]; i++)
        for (j = i + 0x1; j < z[_0x3a7025(0xc9)]; j++) {
            if (!b[z[i]][z[j]]) {
                console[_0x3a7025(0xc4)](-0x1);
                return;
            }
        }
    console[_0x3a7025(0xc4)](k * (k + 0x1) / 0x2 + (n - k - 0x1) * (n - k - 0x2) / 0x2);
}
Main(require('fs')[a0_0x2c413a(0xc0)](a0_0x2c413a(0xc5), a0_0x2c413a(0xce)));
function a0_0x3137() {
    var _0x7431a7 = [
        'utf8',
        'reduce',
        '932580jgXxVX',
        '8iVpoNP',
        '2AsNHjF',
        '4310WNZQBM',
        'readFileSync',
        'push',
        '1103200lKPKmz',
        'split',
        'log',
        '/dev/stdin',
        '795599JnYBhL',
        '17762ojQjNW',
        'fill',
        'length',
        '3573BSdtko',
        'map',
        '1822104hEfRUe',
        '73845canuKE'
    ];
    a0_0x3137 = function () {
        return _0x7431a7;
    };
    return a0_0x3137();
}