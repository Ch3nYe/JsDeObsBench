function Main(s) {
    var QIcrnZ = {
        'Onxal': '1|0|2|5|3|4',
        'bYwWG': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'xKCZC': function (x, y) {
            return x < y;
        },
        'aLFSY': function (x, y) {
            return x + y;
        },
        'AEWOn': function (x, y) {
            return x === y;
        },
        'TDlSJ': function (x, y) {
            return x - y;
        },
        'RiHak': function (x, y) {
            return x > y;
        },
        'SOaRo': function (x, y) {
            return x - y;
        },
        'bFBgn': function (x, y) {
            return x >= y;
        },
        'zRxNY': function (x, y) {
            return x <= y;
        }
    };
    var ZOKDKG = QIcrnZ['Onxal']['split']('|');
    var rntyHg = 0x0;
    while (!![]) {
        switch (ZOKDKG[rntyHg++]) {
        case '0':
            var n = QIcrnZ['bYwWG'](parseInt, s[0x0], 0xa);
            continue;
        case '1':
            var s = s['split']('\x0a');
            continue;
        case '2':
            var a = s[0x1]['split']('\x20')['map'](e => parseInt(e, 0xa));
            continue;
        case '3':
            for (var i = 0x0; QIcrnZ['xKCZC'](i, n); i++) {
                acc += a[i];
                if (i === 0x0) {
                    if (acc === 0x0) {
                        if (a[QIcrnZ['aLFSY'](i, 0x1)] >= 0x0) {
                            acc -= a[QIcrnZ['aLFSY'](i, 0x1)] - 0x1;
                            if (QIcrnZ['AEWOn'](acc, 0x0))
                                acc--;
                            cnt += Math['abs'](acc);
                        } else {
                            acc += QIcrnZ['TDlSJ'](Math['abs'](a[i + 0x1]), 0x1);
                            if (QIcrnZ['AEWOn'](acc, 0x0))
                                acc++;
                            cnt += acc;
                        }
                    }
                } else {
                    if (QIcrnZ['RiHak'](arr[QIcrnZ['SOaRo'](i, 0x1)], 0x0)) {
                        if (QIcrnZ['bFBgn'](acc, 0x0)) {
                            cnt += QIcrnZ['aLFSY'](acc, 0x1);
                            acc -= QIcrnZ['aLFSY'](acc, 0x1);
                        }
                    } else {
                        if (QIcrnZ['zRxNY'](acc, 0x0)) {
                            cnt += QIcrnZ['aLFSY'](Math['abs'](acc), 0x1);
                            acc += QIcrnZ['aLFSY'](Math['abs'](acc), 0x1);
                        }
                    }
                }
                arr['push'](acc);
            }
            continue;
        case '4':
            console['log'](cnt);
            continue;
        case '5':
            var acc = 0x0, cnt = 0x0, arr = [];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));