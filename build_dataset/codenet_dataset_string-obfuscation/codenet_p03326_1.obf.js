var a0_0x4203bc = a0_0x5711;
(function (stringArrayFunction, comparisonValue) {
    var _0x10854a = a0_0x5711;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x10854a(0x98)) / 0x1 + -parseInt(_0x10854a(0x91)) / 0x2 * (-parseInt(_0x10854a(0x99)) / 0x3) + parseInt(_0x10854a(0x96)) / 0x4 * (parseInt(_0x10854a(0x9e)) / 0x5) + -parseInt(_0x10854a(0x95)) / 0x6 * (-parseInt(_0x10854a(0x9c)) / 0x7) + -parseInt(_0x10854a(0x93)) / 0x8 + parseInt(_0x10854a(0x9a)) / 0x9 * (-parseInt(_0x10854a(0x90)) / 0xa) + -parseInt(_0x10854a(0x9b)) / 0xb * (-parseInt(_0x10854a(0x97)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x212a, 0x1b43f));
function a0_0x5711(UDvKwJ, key) {
    var stringArray = a0_0x212a();
    a0_0x5711 = function (index, key) {
        index = index - 0x8c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5711(UDvKwJ, key);
}
function Main(s) {
    var _0x1bedbc = a0_0x5711;
    s = s['split']('\x0a');
    var n = s[0x0][_0x1bedbc(0x9d)]('\x20')[_0x1bedbc(0x9f)](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var x;
    var a = Array(0x4)['fill'](0x0)[_0x1bedbc(0x9f)](a => Array(n));
    for (var i = 0x0; i < n; i++) {
        x = s[i + 0x1][_0x1bedbc(0x9d)]('\x20')['map'](a => +a);
        a[0x0][i] = x[0x0] + x[0x1] + x[0x2];
        a[0x1][i] = x[0x0] + x[0x1] - x[0x2];
        a[0x2][i] = x[0x0] - x[0x1] + x[0x2];
        a[0x3][i] = -x[0x0] + x[0x1] + x[0x2];
    }
    var ans = 0x0;
    for (i = 0x0; i < 0x4; i++) {
        a[i][_0x1bedbc(0x94)]((a, b) => a - b);
        var t = 0x0;
        for (var j = 0x0; j < m; j++) {
            t += a[i][j];
        }
        ans = Math[_0x1bedbc(0x8f)](ans, Math[_0x1bedbc(0x8e)](t));
        t = 0x0;
        for (j = n; j > n - m;) {
            t += a[i][--j];
        }
        ans = Math['max'](ans, Math[_0x1bedbc(0x8e)](t));
    }
    console[_0x1bedbc(0x92)](ans);
}
function a0_0x212a() {
    var _0x37b2da = [
        '1960512oVnAKf',
        '168992oQiikc',
        '3DIbqWf',
        '9zkWnGz',
        '11CrlUFl',
        '111937rIdODo',
        'split',
        '15udITTj',
        'map',
        'readFileSync',
        '/dev/stdin',
        'abs',
        'max',
        '247300HsXGbN',
        '393186HAsAYK',
        'log',
        '1571680BkAzFZ',
        'sort',
        '6qXbRtO',
        '167868qrUtgD'
    ];
    a0_0x212a = function () {
        return _0x37b2da;
    };
    return a0_0x212a();
}
Main(require('fs')[a0_0x4203bc(0x8c)](a0_0x4203bc(0x8d), 'utf8'));