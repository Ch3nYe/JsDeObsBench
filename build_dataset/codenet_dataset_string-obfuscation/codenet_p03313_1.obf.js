var a0_0x429a4a = a0_0x37bc;
(function (stringArrayFunction, comparisonValue) {
    var _0xcd4035 = a0_0x37bc;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xcd4035(0x178)) / 0x1 * (parseInt(_0xcd4035(0x173)) / 0x2) + parseInt(_0xcd4035(0x172)) / 0x3 * (parseInt(_0xcd4035(0x168)) / 0x4) + parseInt(_0xcd4035(0x174)) / 0x5 * (parseInt(_0xcd4035(0x16d)) / 0x6) + parseInt(_0xcd4035(0x176)) / 0x7 * (-parseInt(_0xcd4035(0x177)) / 0x8) + parseInt(_0xcd4035(0x170)) / 0x9 + parseInt(_0xcd4035(0x16f)) / 0xa * (parseInt(_0xcd4035(0x171)) / 0xb) + -parseInt(_0xcd4035(0x167)) / 0xc * (parseInt(_0xcd4035(0x16c)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1bd9, 0xa26b6));
function Main(s) {
    var _0xc4375b = a0_0x37bc;
    s = s[_0xc4375b(0x16b)]('\x0a');
    var n = +s[0x0];
    var m = 0x1 << n;
    var a = s[0x1][_0xc4375b(0x16b)]('\x20')[_0xc4375b(0x16e)](a => +a);
    var b = [a[0x0]], c = [[
                a[0x0],
                0x0
            ]], d = [[
                -0x1,
                -0x1
            ]];
    for (var i = 0x1; i < m; i++) {
        f(i);
    }
    console[_0xc4375b(0x169)](b['slice'](0x1)[_0xc4375b(0x179)]('\x0a'));
    function f(n) {
        var _0x4deb1f = _0xc4375b;
        var q = {}, s = n, t = 0x0;
        while (s) {
            t++;
            s >>= 0x1;
        }
        for (var i = 0x0; i < t; i++) {
            var u = n & (0x1 << i ^ 0xfffff);
            if (u === n)
                continue;
            q[c[u][0x1]] = c[u][0x0];
            q[d[u][0x1]] = d[u][0x0];
        }
        s = [
            a[n],
            n
        ], t = [
            -0x1,
            -0x1
        ];
        for (i in q) {
            if (t[0x0] > q[i])
                continue;
            if (s[0x0] > q[i])
                t = [
                    q[i],
                    i
                ];
            else {
                t = s;
                s = [
                    q[i],
                    i
                ];
            }
        }
        b[n] = Math[_0x4deb1f(0x175)](b[n - 0x1], t[0x0] + s[0x0]);
        c[n] = t;
        d[n] = s;
    }
}
Main(require('fs')[a0_0x429a4a(0x166)]('/dev/stdin', a0_0x429a4a(0x16a)));
function a0_0x37bc(LeQiHM, key) {
    var stringArray = a0_0x1bd9();
    a0_0x37bc = function (index, key) {
        index = index - 0x166;
        var value = stringArray[index];
        return value;
    };
    return a0_0x37bc(LeQiHM, key);
}
function a0_0x1bd9() {
    var _0x1d2e18 = [
        'log',
        'utf8',
        'split',
        '3627468YPHYgD',
        '354UkmlQm',
        'map',
        '10zotVNY',
        '5613093sEsBkx',
        '220693IrUTPZ',
        '1444194PFQrfY',
        '382QOxqrc',
        '14855ESyack',
        'max',
        '1409695HyqGZi',
        '16JajwsH',
        '4627UfzCGT',
        'join',
        'readFileSync',
        '48DcYwUF',
        '4ALsVQU'
    ];
    a0_0x1bd9 = function () {
        return _0x1d2e18;
    };
    return a0_0x1bd9();
}