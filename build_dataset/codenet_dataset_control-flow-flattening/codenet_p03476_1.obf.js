console['log'](function (args) {
    const LwqhZt = {
        'WYumh': function (callee, param1) {
            return callee(param1);
        },
        'vYucM': function (callee, param1) {
            return callee(param1);
        },
        'BERgD': function (x, y) {
            return x + y;
        },
        'Pzsbj': function (x, y) {
            return x < y;
        },
        'TmpoW': function (x, y) {
            return x / y;
        },
        'uwyth': function (x, y) {
            return x + y;
        },
        'adSrU': function (x, y) {
            return x + y;
        },
        'MSmOS': function (x, y) {
            return x + y;
        },
        'uzNXr': function (x, y) {
            return x < y;
        },
        'duErG': function (x, y) {
            return x / y;
        },
        'MwSQn': function (x, y) {
            return x - y;
        },
        'TKRWZ': function (x, y) {
            return x - y;
        }
    };
    const [[Q], ...tmp] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const MAX = 0x186a0;
    const a = LwqhZt['WYumh'](Array, MAX)['fill'](!![]);
    const s = LwqhZt['vYucM'](Array, LwqhZt['BERgD'](MAX, 0x2))['fill'](0x0);
    a[0x0] = ![];
    s[0x2] = 0x1;
    for (let i = 0x1; LwqhZt['Pzsbj'](i, MAX); i++) {
        if (a[i]) {
            const n = 0x2 * i + 0x1;
            if (~i & 0x1 && a[LwqhZt['TmpoW'](i, 0x2)])
                s[LwqhZt['uwyth'](i, 0x1)] += 0x1;
            for (let j = LwqhZt['BERgD'](i, n); j < MAX; j = LwqhZt['adSrU'](j, n))
                a[j] = ![];
        }
        s[i + 0x2] += s[LwqhZt['MSmOS'](i, 0x1)];
    }
    const x = [];
    for (let i = 0x0; LwqhZt['uzNXr'](i, Q); i++) {
        const l = LwqhZt['duErG'](LwqhZt['MwSQn'](tmp[i][0x0], 0x1), 0x2);
        const r = LwqhZt['TKRWZ'](tmp[i][0x1], 0x1) / 0x2 + 0x1;
        x['push'](LwqhZt['TKRWZ'](s[r], s[l]));
    }
    return x['join']('\x0a');
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));