function Main(s) {
    var PvIZDg = {
        'ieret': '3|1|4|8|7|0|5|6|2|9',
        'AuFua': function (callee, param1) {
            return callee(param1);
        },
        'WQvmC': function (x, y) {
            return x < y;
        },
        'WtJwN': function (x, y) {
            return x > y;
        },
        'oXWZu': function (x, y) {
            return x < y;
        },
        'cGTlr': function (x, y) {
            return x + y;
        },
        'Yqxqc': function (x, y) {
            return x + y;
        },
        'ToybT': function (x, y) {
            return x + y;
        },
        'tnInC': function (x, y) {
            return x + y;
        },
        'lqVfC': function (x, y) {
            return x - y;
        },
        'pylNB': function (x, y) {
            return x - y;
        }
    };
    var TrsXts = PvIZDg['ieret']['split']('|');
    var IwbWQu = 0x0;
    while (!![]) {
        switch (TrsXts[IwbWQu++]) {
        case '0':
            var a = PvIZDg['AuFua'](Array, 0x4)['fill'](0x0)['map'](a => Array(n));
            continue;
        case '1':
            var n = s[0x0]['split']('\x20')['map'](a => +a);
            continue;
        case '2':
            for (i = 0x0; PvIZDg['WQvmC'](i, 0x4); i++) {
                a[i]['sort']((a, b) => a - b);
                var t = 0x0;
                for (var j = 0x0; PvIZDg['WQvmC'](j, m); j++) {
                    t += a[i][j];
                }
                ans = Math['max'](ans, Math['abs'](t));
                t = 0x0;
                for (j = n; PvIZDg['WtJwN'](j, n - m);) {
                    t += a[i][--j];
                }
                ans = Math['max'](ans, Math['abs'](t));
            }
            continue;
        case '3':
            s = s['split']('\x0a');
            continue;
        case '4':
            var m = n[0x1];
            continue;
        case '5':
            for (var i = 0x0; PvIZDg['oXWZu'](i, n); i++) {
                var nqGMpm = '4|0|2|3|1'['split']('|');
                var SrSAxR = 0x0;
                while (!![]) {
                    switch (nqGMpm[SrSAxR++]) {
                    case '0':
                        a[0x0][i] = PvIZDg['cGTlr'](PvIZDg['Yqxqc'](x[0x0], x[0x1]), x[0x2]);
                        continue;
                    case '1':
                        a[0x3][i] = PvIZDg['ToybT'](PvIZDg['tnInC'](-x[0x0], x[0x1]), x[0x2]);
                        continue;
                    case '2':
                        a[0x1][i] = PvIZDg['lqVfC'](PvIZDg['cGTlr'](x[0x0], x[0x1]), x[0x2]);
                        continue;
                    case '3':
                        a[0x2][i] = PvIZDg['tnInC'](PvIZDg['pylNB'](x[0x0], x[0x1]), x[0x2]);
                        continue;
                    case '4':
                        x = s[PvIZDg['Yqxqc'](i, 0x1)]['split']('\x20')['map'](a => +a);
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '6':
            var ans = 0x0;
            continue;
        case '7':
            var x;
            continue;
        case '8':
            n = n[0x0];
            continue;
        case '9':
            console['log'](ans);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));