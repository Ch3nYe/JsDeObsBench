require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['map'](function (i) {
    var MxMxVJ = {
        'eChUy': function (x, y) {
            return x == y;
        },
        'LKIvl': 'four\x20card',
        'qsPpO': function (x, y) {
            return x == y;
        },
        'tvHtN': 'full\x20house',
        'VEDac': 'three\x20card',
        'tTGLD': 'two\x20pair',
        'zgqPc': 'one\x20pair',
        'ZiGYe': function (x, y) {
            return x == y;
        },
        'ZksIx': function (x, y) {
            return x - y;
        },
        'umKaN': 'null'
    };
    var chtQIj = '2|0|5|1|3|4'['split']('|');
    var HXsXZh = 0x0;
    while (!![]) {
        switch (chtQIj[HXsXZh++]) {
        case '0':
            a = [], c = i['split'](',')['sort'](f);
            continue;
        case '1':
            a['sort'](f);
            continue;
        case '2':
            f = function (a, b) {
                return b - a;
            };
            continue;
        case '3':
            l = a[0x0], n = a[0x1];
            continue;
        case '4':
            console['log'](MxMxVJ['eChUy'](l, 0x4) ? MxMxVJ['LKIvl'] : MxMxVJ['eChUy'](l, 0x3) ? MxMxVJ['qsPpO'](n, 0x2) ? MxMxVJ['tvHtN'] : MxMxVJ['VEDac'] : l == 0x2 ? MxMxVJ['eChUy'](n, 0x2) ? MxMxVJ['tTGLD'] : MxMxVJ['zgqPc'] : MxMxVJ['eChUy'](0x4, c[0x0] - c[0x4]) || MxMxVJ['ZiGYe'](MxMxVJ['ZksIx'](c[0x0], c[0x3]), 0x3) && +c[0x4] == 0x1 ? 'straight' : MxMxVJ['umKaN']);
            continue;
        case '5':
            c['map'](function (j) {
                a[j] ? a[j]++ : a[j] = 0x1;
            });
            continue;
        }
        break;
    }
});