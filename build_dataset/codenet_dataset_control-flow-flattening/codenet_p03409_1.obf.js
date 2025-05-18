function Main(s) {
    var xglYxS = {
        'Ksnhi': function (callee, param1) {
            return callee(param1);
        },
        'uelZw': function (x, y) {
            return x < y;
        },
        'TeqTC': function (x, y) {
            return x < y;
        },
        'tQxWZ': function (x, y) {
            return x - y;
        },
        'oZoHM': function (x, y) {
            return x >= y;
        },
        'JiXmQ': function (x, y) {
            return x < y;
        }
    };
    s = s['split']('\x0a');
    var n = xglYxS['Ksnhi'](parseInt, s[0x0]);
    var a = xglYxS['Ksnhi'](Array, n);
    var c = xglYxS['Ksnhi'](Array, n);
    for (var i = 0x0; xglYxS['uelZw'](i, n); i++) {
        a[i] = s[i + 0x1]['split']('\x20')['map'](a => parseInt(a));
    }
    for (var i = 0x0; xglYxS['TeqTC'](i, n); i++) {
        c[i] = s[i + n + 0x1]['split']('\x20')['map'](a => parseInt(a));
    }
    a = a['sort']((a, b) => a[0x1] - b[0x1]);
    a = a['sort']((a, b) => a[0x0] - b[0x0]);
    c = c['sort']((a, b) => a[0x0] - b[0x0]);
    c = c['sort']((a, b) => b[0x1] - a[0x1]);
    var ans = 0x0;
    for (i = xglYxS['tQxWZ'](n, 0x1); xglYxS['oZoHM'](i, 0x0); i--) {
        for (var j = xglYxS['tQxWZ'](c['length'], 0x1); j >= 0x0; j--) {
            if (xglYxS['uelZw'](a[i][0x0], c[j][0x0]) && xglYxS['JiXmQ'](a[i][0x1], c[j][0x1])) {
                ans++;
                c['splice'](j, 0x1);
                break;
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());