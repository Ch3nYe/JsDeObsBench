function Main(s) {
    var RQseTE = {
        'wWovZ': function (x, y) {
            return x < y;
        },
        'xrEnv': function (x, y) {
            return x ^ y;
        },
        'Fypvy': function (x, y) {
            return x << y;
        },
        'EaEjQ': function (x, y) {
            return x > y;
        },
        'inqMK': function (x, y) {
            return x - y;
        },
        'MhVmk': function (x, y) {
            return x + y;
        },
        'iLHUG': function (x, y) {
            return x << y;
        },
        'DOkKa': function (callee, param1) {
            return callee(param1);
        }
    };
    s = s['split']('\x0a');
    var n = +s[0x0];
    var m = RQseTE['iLHUG'](0x1, n);
    var a = s[0x1]['split']('\x20')['map'](a => +a);
    var b = [a[0x0]], c = [[
                a[0x0],
                0x0
            ]], d = [[
                -0x1,
                -0x1
            ]];
    for (var i = 0x1; RQseTE['wWovZ'](i, m); i++) {
        RQseTE['DOkKa'](f, i);
    }
    console['log'](b['slice'](0x1)['join']('\x0a'));
    function f(n) {
        var q = {}, s = n, t = 0x0;
        while (s) {
            t++;
            s >>= 0x1;
        }
        for (var i = 0x0; RQseTE['wWovZ'](i, t); i++) {
            var u = n & RQseTE['xrEnv'](RQseTE['Fypvy'](0x1, i), 0xfffff);
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
            if (RQseTE['EaEjQ'](s[0x0], q[i]))
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
        b[n] = Math['max'](b[RQseTE['inqMK'](n, 0x1)], RQseTE['MhVmk'](t[0x0], s[0x0]));
        c[n] = t;
        d[n] = s;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));