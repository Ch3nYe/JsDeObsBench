function Main(s) {
    var rGAcoj = {
        'VLkrT': '2|3|4|1|6|5|0',
        'xJdNv': function (x, y) {
            return x < y;
        },
        'IAXbm': function (x, y) {
            return x * y;
        },
        'zepyZ': function (x, y) {
            return x * y;
        },
        'qJVGq': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'DTDHy': function (x, y) {
            return x === y;
        },
        'nfECf': function (x, y) {
            return x * y;
        },
        'teXZM': function (callee, param1) {
            return callee(param1);
        }
    };
    var gciOXb = rGAcoj['VLkrT']['split']('|');
    var xzRxWs = 0x0;
    while (!![]) {
        switch (gciOXb[xzRxWs++]) {
        case '0':
            for (var i = 0x0; rGAcoj['xJdNv'](i, rGAcoj['IAXbm'](0x2, n)); i++)
                for (var j = 0x0; rGAcoj['xJdNv'](j, rGAcoj['zepyZ'](0x2, n)); j++) {
                    if (f(a, i, j) && rGAcoj['qJVGq'](f, b, i, j))
                        ans[k++] = i + '\x20' + j;
                    if (rGAcoj['DTDHy'](k, rGAcoj['nfECf'](n, n))) {
                        console['log'](ans['join']('\x0a'));
                        return;
                    }
                }
            continue;
        case '1':
            var b = rGAcoj['teXZM'](calc, s[0x2]);
            continue;
        case '2':
            s = s['split']('\x20')['map'](a => +a);
            continue;
        case '3':
            var n = s[0x0];
            continue;
        case '4':
            var a = rGAcoj['teXZM'](calc, s[0x1]);
            continue;
        case '5':
            var k = 0x0;
            continue;
        case '6':
            var ans = [];
            continue;
        }
        break;
    }
}
function calc(n) {
    var AlcqEY = {
        'kmTgr': function (x, y) {
            return x === y;
        },
        'NjnkD': function (x, y) {
            return x & y;
        }
    };
    var s = 0x1;
    while (AlcqEY['kmTgr'](AlcqEY['NjnkD'](n, 0x3), 0x0)) {
        s++;
        n >>>= 0x2;
    }
    return [
        s,
        AlcqEY['NjnkD'](n, 0x1)
    ];
}
function f(s, y, x) {
    var ppBxtE = {
        'lObeA': function (x, y) {
            return x / y;
        },
        'yfezs': function (x, y) {
            return x & y;
        },
        'MVhbl': function (x, y) {
            return x / y;
        },
        'NCwun': function (x, y) {
            return x + y;
        }
    };
    y = Math['floor'](ppBxtE['lObeA'](y, s[0x0]));
    if (!s[0x1])
        return !ppBxtE['yfezs'](y, 0x1);
    x = Math['floor'](ppBxtE['MVhbl'](x, s[0x0]));
    return !ppBxtE['yfezs'](ppBxtE['NCwun'](x, y), 0x1);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));