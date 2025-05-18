function Main(s) {
    var HaWgIS = {
        'rRjCK': '0|8|1|5|6|2|3|10|9|7|4',
        'kSjid': function (x, y) {
            return x === y;
        },
        'NvBSU': function (x, y) {
            return x * y;
        },
        'qrXHf': function (x, y) {
            return x > y;
        },
        'mcJqd': function (x, y) {
            return x / y;
        },
        'NiFBE': function (x, y) {
            return x * y;
        },
        'mGRfm': function (x, y) {
            return x - y;
        },
        'uhzwl': function (x, y) {
            return x % y;
        },
        'tovPr': function (x, y) {
            return x + y;
        }
    };
    var bkpunc = HaWgIS['rRjCK']['split']('|');
    var LMOifg = 0x0;
    while (!![]) {
        switch (bkpunc[LMOifg++]) {
        case '0':
            s = s['split']('\x0a');
            continue;
        case '1':
            var m = n[0x1];
            continue;
        case '2':
            var ans = 0x0;
            continue;
        case '3':
            var b = {};
            continue;
        case '4':
            console['log'](ans);
            continue;
        case '5':
            n = n[0x0];
            continue;
        case '6':
            var a = s[0x1]['split']('\x20')['map'](a => +a);
            continue;
        case '7':
            for (i in b) {
                i = +i;
                if (HaWgIS['kSjid'](i, 0x0))
                    ans += HaWgIS['NvBSU'](b[i], b[i] + 0x1) / 0x2;
                else if (HaWgIS['qrXHf'](b[i], 0x1))
                    ans += HaWgIS['mcJqd'](HaWgIS['NiFBE'](b[i], HaWgIS['mGRfm'](b[i], 0x1)), 0x2);
            }
            continue;
        case '8':
            var n = s[0x0]['split']('\x20')['map'](a => +a);
            continue;
        case '9':
            for (var i = 0x0; i < n; i++) {
                t = HaWgIS['uhzwl'](HaWgIS['tovPr'](t, a[i]), m);
                if (b[t])
                    b[t]++;
                else
                    b[t] = 0x1;
            }
            continue;
        case '10':
            var t = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));