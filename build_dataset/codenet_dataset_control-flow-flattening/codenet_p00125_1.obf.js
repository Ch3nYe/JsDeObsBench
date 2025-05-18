function year(x) {
    var ojlyIF = {
        'kdcjq': function (x, y) {
            return x == y;
        },
        'zVpnt': function (x, y) {
            return x == y;
        },
        'GChrR': function (x, y) {
            return x == y;
        },
        'HHHlB': function (x, y) {
            return x % y;
        }
    };
    var m = [
        0x16d,
        0x1f,
        0x1c,
        0x1f,
        0x1e,
        0x1f,
        0x1e,
        0x1f,
        0x1f,
        0x1e,
        0x1f,
        0x1e,
        0x1f
    ];
    if (ojlyIF['kdcjq'](x % 0x4, 0x0)) {
        m[0x2] = 0x1d;
        m[0x0] = 0x16e;
        if (ojlyIF['zVpnt'](x % 0x64, 0x0)) {
            m[0x2] = 0x1c;
            m[0x0] = 0x16d;
        }
        if (ojlyIF['GChrR'](ojlyIF['HHHlB'](x, 0x190), 0x0)) {
            m[0x2] = 0x1d;
            m[0x0] = 0x16e;
        }
    }
    return m;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var str = Arr['shift']();
    if (str == '-1\x20-1\x20-1\x20-1\x20-1\x20-1')
        break;
    var arr = str['split']('\x20')['map'](Number);
    (function (y1, m1, d1, y2, m2, d2) {
        var WiWoYC = {
            'YnRPy': '0|2|6|8|4|3|5|10|7|1|9',
            'LysZK': function (x, y) {
                return x != y;
            },
            'PzENJ': function (x, y) {
                return x - y;
            },
            'dMnnf': function (x, y) {
                return x < y;
            },
            'AEmHD': function (x, y) {
                return x - y;
            },
            'reCYy': function (callee, param1) {
                return callee(param1);
            }
        };
        var DaXDNt = WiWoYC['YnRPy']['split']('|');
        var TVQEIQ = 0x0;
        while (!![]) {
            switch (DaXDNt[TVQEIQ++]) {
            case '0':
                var sum1 = 0x0;
                continue;
            case '1':
                while (WiWoYC['LysZK'](y1, y2)) {
                    y1++;
                    days += year(y1)[0x0];
                }
                continue;
            case '2':
                var sum2 = 0x0;
                continue;
            case '3':
                sum2 += WiWoYC['PzENJ'](Y2[m2], d2);
                continue;
            case '4':
                sum1 += WiWoYC['PzENJ'](Y1[m1], d1);
                continue;
            case '5':
                while (WiWoYC['dMnnf'](m1, 0xc)) {
                    m1++;
                    sum1 += Y1[m1];
                }
                continue;
            case '6':
                var Y1 = year(y1);
                continue;
            case '7':
                var days = WiWoYC['AEmHD'](sum1, sum2);
                continue;
            case '8':
                var Y2 = WiWoYC['reCYy'](year, y2);
                continue;
            case '9':
                console['log'](days);
                continue;
            case '10':
                while (WiWoYC['dMnnf'](m2, 0xc)) {
                    m2++;
                    sum2 += Y2[m2];
                }
                continue;
            }
            break;
        }
    }['apply'](null, arr));
}