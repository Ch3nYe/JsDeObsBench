function a0_0x2e4a(kiRaYJ, key) {
    var stringArray = a0_0x43c0();
    a0_0x2e4a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e4a(kiRaYJ, key);
}
var a0_0x4c4143 = a0_0x2e4a;
function Main(s) {
    var _0x4e00b7 = a0_0x2e4a;
    s = s[_0x4e00b7(0x0)]('\x0a');
    var n = +s[0x0];
    var m = 0x1 << n;
    var a = s[0x1][_0x4e00b7(0x0)]('\x20')[_0x4e00b7(0x1)](a => +a);
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
    console[_0x4e00b7(0x2)](b['slice'](0x1)[_0x4e00b7(0x3)]('\x0a'));
    function f(n) {
        var _0x44d0a0 = a0_0x2e4a;
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
        b[n] = Math[_0x44d0a0(0x4)](b[n - 0x1], t[0x0] + s[0x0]);
        c[n] = t;
        d[n] = s;
    }
}
Main(require('fs')[a0_0x4c4143(0x5)](a0_0x4c4143(0x6), 'utf8'));
function a0_0x43c0() {
    var _0x2d2075 = [
        'split',
        'map',
        'log',
        'join',
        'max',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x43c0 = function () {
        return _0x2d2075;
    };
    return a0_0x43c0();
}