function Main(input) {
    var zViKAL = {
        'gfWbK': function (x, y) {
            return x > y;
        },
        'zabPC': function (x, y) {
            return x < y;
        },
        'xqrtM': function (x, y) {
            return x < y;
        }
    };
    a = input['split']('\x0a');
    b = a[0x0]['split']('\x20')['map'](Number);
    c = a[0x1]['split']('\x20')['map'](Number);
    N = b[0x0], K = b[0x1], r = 0x0;
    while (zViKAL['gfWbK'](c['length'], 0x1)) {
        var YVmTUv = '4|0|1|3|2'['split']('|');
        var BzGXPi = 0x0;
        while (!![]) {
            switch (YVmTUv[BzGXPi++]) {
            case '0':
                d = [];
                continue;
            case '1':
                for (i = 0x0; zViKAL['zabPC'](i, K); i++) {
                    d['push'](c[i]);
                }
                continue;
            case '2':
                c = c['join']('')['split']('')['map'](Number);
                continue;
            case '3':
                for (i = 0x0; zViKAL['xqrtM'](i, K); i++) {
                    if (d['sort']()[0x0] !== c[i]) {
                        c[i] = '';
                    }
                }
                continue;
            case '4':
                r++;
                continue;
            }
            break;
        }
    }
    console['log'](r);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));