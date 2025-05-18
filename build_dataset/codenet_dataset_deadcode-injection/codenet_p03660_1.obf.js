function a0_0x5bcd() {
    var _0x152be2 = [
        'fill',
        'split',
        'QpPsI',
        'DldfY',
        'ShNSv',
        'Fennec',
        'Snuke',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x5bcd = function () {
        return _0x152be2;
    };
    return a0_0x5bcd();
}
var a0_0x3b99d8 = a0_0x5c8e;
function a0_0x5c8e(jlXbBI, key) {
    var stringArray = a0_0x5bcd();
    a0_0x5c8e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c8e(jlXbBI, key);
}
function Main(input) {
    var _0x1f13c4 = a0_0x5c8e;
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]);
    a = new Array(n - 0x1)[_0x1f13c4(0x0)](0x0);
    b = new Array(n - 0x1)[_0x1f13c4(0x0)](0x0);
    for (i = 0x0; i < n - 0x1; i++) {
        tmp = input[i + 0x1][_0x1f13c4(0x1)]('\x20');
        a[i] = parseInt(tmp[0x0]) - 0x1;
        b[i] = parseInt(tmp[0x1]) - 0x1;
    }
    d1 = new Array(n)[_0x1f13c4(0x0)](n);
    d1[0x0] = 0x0;
    d2 = new Array(n)[_0x1f13c4(0x0)](n);
    d2[n - 0x1] = 0x0;
    function f(x, d) {
        var _0x20d663 = a0_0x5c8e;
        for (i = 0x0; i < n - 0x1; i++) {
            if (a[i] == x && d[b[i]] > d[a[i]]) {
                if (_0x20d663(0x2) === _0x20d663(0x2)) {
                    d[b[i]] = d[a[i]] + 0x1;
                    var j = i;
                    f(b[i], d);
                    i = j;
                } else {
                    if (i != 0x0 && i != n - 0x1) {
                        if (d1[i] <= d2[i]) {
                            x++;
                        }
                    }
                }
            }
            if (b[i] == x && d[a[i]] > d[b[i]]) {
                d[a[i]] = d[b[i]] + 0x1;
                var j = i;
                f(a[i], d);
                i = j;
            }
        }
        return d;
    }
    d1 = f(0x0, d1);
    d2 = f(n - 0x1, d2);
    var x = 0x0;
    for (i = 0x0; i < n; i++) {
        if (i != 0x0 && i != n - 0x1) {
            if (_0x1f13c4(0x3) === _0x1f13c4(0x4)) {
                if (a[i] == x && d[b[i]] > d[a[i]]) {
                    d[b[i]] = d[a[i]] + 0x1;
                    var j = i;
                    f(b[i], d);
                    i = j;
                }
                if (b[i] == x && d[a[i]] > d[b[i]]) {
                    d[a[i]] = d[b[i]] + 0x1;
                    var j = i;
                    f(a[i], d);
                    i = j;
                }
            } else {
                if (d1[i] <= d2[i]) {
                    x++;
                }
            }
        }
    }
    var ans = _0x1f13c4(0x5);
    if (x <= n - 0x2 - x) {
        ans = _0x1f13c4(0x6);
    }
    console[_0x1f13c4(0x7)]('%s', ans);
}
Main(require('fs')[a0_0x3b99d8(0x8)](a0_0x3b99d8(0x9), 'utf8'));