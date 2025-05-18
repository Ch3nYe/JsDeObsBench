process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var SbUIqa = {
        'NrSPV': function (x, y) {
            return x < y;
        },
        'atzfO': function (x, y) {
            return x == y;
        },
        'YXFXG': function (x, y) {
            return x >= y;
        },
        'QmJvM': function (x, y) {
            return x * y;
        },
        'eiWkn': function (x, y) {
            return x > y;
        },
        'kFsYw': function (x, y) {
            return x > y;
        },
        'yhTtV': function (x, y) {
            return x % y;
        },
        'SgwRA': function (x, y) {
            return x + y;
        }
    };
    var line, lines = chunk['split']('\x0a'), i, len = lines['length'], j, jLen, deg, pow, max;
    for (i = 0x0; SbUIqa['NrSPV'](i, len); i++) {
        line = lines[i];
        if (SbUIqa['atzfO'](line, '#')) {
            break;
        }
        line = line['replace'](/north/g, 0x0);
        line = line['replace'](/west/g, 0x1);
        deg = 0x0;
        jLen = line['length'];
        pow = line['length'] - 0x1;
        max = 0x5a * Math['pow'](0x2, pow);
        for (j = jLen; SbUIqa['YXFXG'](j, 0x0); j--) {
            if (SbUIqa['QmJvM'](line[j], 0x1)) {
                if (SbUIqa['NrSPV'](deg, max)) {
                    deg += SbUIqa['QmJvM'](0x5a, Math['pow'](0x2, j));
                }
            } else {
                if (SbUIqa['eiWkn'](deg, 0x0)) {
                    deg -= SbUIqa['QmJvM'](0x5a, Math['pow'](0x2, j));
                }
            }
        }
        while (SbUIqa['kFsYw'](pow, 0x0) && SbUIqa['yhTtV'](deg, 0x2) === 0x0) {
            deg = deg / 0x2;
            pow--;
        }
        if (SbUIqa['eiWkn'](pow, 0x0)) {
            console['log'](SbUIqa['SgwRA'](SbUIqa['SgwRA'](deg, '/'), Math['pow'](0x2, pow)));
        } else {
            console['log'](deg);
        }
    }
});