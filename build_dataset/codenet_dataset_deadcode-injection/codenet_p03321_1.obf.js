var a0_0x1fca6e = a0_0x2ccd;
function a0_0x3702() {
    var _0x1c04a5 = [
        'split',
        'map',
        'fill',
        'ydrvH',
        'HvCCa',
        'push',
        'length',
        'qPLyD',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x3702 = function () {
        return _0x1c04a5;
    };
    return a0_0x3702();
}
function a0_0x2ccd(cHYXim, key) {
    var stringArray = a0_0x3702();
    a0_0x2ccd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ccd(cHYXim, key);
}
function Main(s) {
    var _0x13f837 = a0_0x2ccd;
    s = s[_0x13f837(0x0)]('\x0a');
    var n = s[0x0]['split']('\x20')[_0x13f837(0x1)](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var b = Array(n)[_0x13f837(0x2)](0x0)[_0x13f837(0x1)](a => Array(n)[_0x13f837(0x2)](0x0));
    for (var i = 0x0; i < m; i++) {
        if (_0x13f837(0x3) !== _0x13f837(0x4)) {
            var a = s[i + 0x1][_0x13f837(0x0)]('\x20')[_0x13f837(0x1)](a => a - 0x1);
            b[a[0x0]][a[0x1]] = b[a[0x1]][a[0x0]] = 0x1;
        } else {
            k = t;
            x = i;
        }
    }
    var k = 0x218711a00;
    var x;
    for (i = 0x0; i < n; i++) {
        var t = b[i]['reduce']((a, b) => a + b);
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
            y[_0x13f837(0x5)](i);
        else
            z[_0x13f837(0x5)](i);
    }
    for (i = 0x0; i < y[_0x13f837(0x6)]; i++)
        for (var j = i + 0x1; j < y['length']; j++) {
            if (_0x13f837(0x7) !== _0x13f837(0x7)) {
                console[_0x13f837(0x8)](-0x1);
                return;
            } else {
                if (!b[y[i]][y[j]]) {
                    console[_0x13f837(0x8)](-0x1);
                    return;
                }
            }
        }
    for (i = 0x0; i < z['length']; i++)
        for (j = i + 0x1; j < z[_0x13f837(0x6)]; j++) {
            if (!b[z[i]][z[j]]) {
                console[_0x13f837(0x8)](-0x1);
                return;
            }
        }
    console[_0x13f837(0x8)](k * (k + 0x1) / 0x2 + (n - k - 0x1) * (n - k - 0x2) / 0x2);
}
Main(require('fs')[a0_0x1fca6e(0x9)]('/dev/stdin', a0_0x1fca6e(0xa)));