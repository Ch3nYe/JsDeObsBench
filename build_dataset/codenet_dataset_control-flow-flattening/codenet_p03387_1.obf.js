function Main(s) {
    var LGlPUI = {
        'rEqju': function (x, y) {
            return x === y;
        },
        'BIWfB': function (x, y) {
            return x % y;
        },
        'JqUNJ': function (x, y) {
            return x - y;
        },
        'tsgOj': function (x, y) {
            return x / y;
        },
        'PRjFZ': function (x, y) {
            return x - y;
        },
        'UyKzq': '2|5|0|4|3|1',
        'mHLxc': function (x, y) {
            return x - y;
        },
        'UnuJd': function (x, y) {
            return x - y;
        }
    };
    var s = s['split']('\x0a')[0x0]['split']('\x20')['map'](e => parseInt(e, 0xa))['sort']((a, b) => b - a);
    var cnt = 0x0;
    if (LGlPUI['rEqju'](LGlPUI['BIWfB'](s[0x1] - s[0x2], 0x2), 0x0)) {
        cnt += LGlPUI['JqUNJ'](s[0x0], s[0x1]);
        s[0x2] += cnt;
        cnt += LGlPUI['tsgOj'](LGlPUI['PRjFZ'](s[0x0], s[0x2]), 0x2);
    } else {
        var HiVVqI = LGlPUI['UyKzq']['split']('|');
        var ZrUnBy = 0x0;
        while (!![]) {
            switch (HiVVqI[ZrUnBy++]) {
            case '0':
                cnt++;
                continue;
            case '1':
                cnt += LGlPUI['tsgOj'](LGlPUI['mHLxc'](s[0x0], s[0x2]), 0x2);
                continue;
            case '2':
                s[0x0]++;
                continue;
            case '3':
                s[0x2] += LGlPUI['UnuJd'](s[0x0], s[0x1]);
                continue;
            case '4':
                cnt += LGlPUI['PRjFZ'](s[0x0], s[0x1]);
                continue;
            case '5':
                s[0x1]++;
                continue;
            }
            break;
        }
    }
    console['log'](cnt);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));