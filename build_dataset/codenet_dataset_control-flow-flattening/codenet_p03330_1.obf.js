function Main(s) {
    var BTwmYA = {
        'iPQfG': function (x, y) {
            return x < y;
        },
        'zZHrQ': function (x, y) {
            return x + y;
        },
        'qNOkH': function (x, y) {
            return x + y;
        },
        'FGqDM': function (callee, param1) {
            return callee(param1);
        },
        'lTZKy': function (x, y) {
            return x % y;
        },
        'CBLHP': function (x, y) {
            return x < y;
        },
        'SItBb': function (x, y) {
            return x === y;
        },
        'fIMjl': function (x, y) {
            return x * y;
        }
    };
    s = s['split']('\x0a');
    s[0x0] = s[0x0]['split']('\x20')['map'](a => +a);
    var n = s[0x0][0x0];
    var c = s[0x0][0x1];
    var d = [], a = [];
    for (var i = 0x0; BTwmYA['iPQfG'](i, c); i++) {
        d[i] = s[BTwmYA['zZHrQ'](i, 0x1)]['split']('\x20')['map'](a => +a);
    }
    for (i = 0x0; i < n; i++) {
        a[i] = s[BTwmYA['qNOkH'](i + 0x1, c)]['split']('\x20')['map'](a => +a - 0x1);
    }
    var z = BTwmYA['FGqDM'](Array, 0x3)['fill'](0x0)['map'](a => Array(c)['fill'](0x0));
    for (i = 0x0; i < n; i++)
        for (var j = 0x0; j < n; j++) {
            var t = BTwmYA['lTZKy'](i + j, 0x3);
            z[t][a[i][j]]++;
        }
    var ans = 0x218711a00;
    for (i = 0x0; BTwmYA['iPQfG'](i, c); i++) {
        for (j = 0x0; BTwmYA['CBLHP'](j, c); j++) {
            if (i === j)
                continue;
            for (var k = 0x0; k < c; k++) {
                if (BTwmYA['SItBb'](i, k) || BTwmYA['SItBb'](j, k))
                    continue;
                t = 0x0;
                for (var l = 0x0; BTwmYA['iPQfG'](l, c); l++) {
                    t += BTwmYA['fIMjl'](z[0x0][l], d[l][i]);
                    t += z[0x1][l] * d[l][j];
                    t += z[0x2][l] * d[l][k];
                }
                ans = Math['min'](ans, t);
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));