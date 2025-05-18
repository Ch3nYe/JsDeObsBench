console['log']((args => {
    const yhToAd = {
        'qZFFl': function (x, y) {
            return x === y;
        },
        'xOtHe': function (callee, param1) {
            return callee(param1);
        },
        'nQcwj': function (x, y) {
            return x < y;
        },
        'HCCtT': function (x, y) {
            return x - y;
        },
        'UnNwp': function (x, y) {
            return x > y;
        },
        'gsmzI': function (x, y) {
            return x > y;
        },
        'vzUWW': function (x, y) {
            return x < y;
        },
        'fKirZ': function (x, y) {
            return x + y;
        },
        'dthJr': function (x, y) {
            return x + y;
        },
        'ltZve': function (x, y) {
            return x ^ y;
        },
        'Docsv': function (x, y) {
            return x & y;
        },
        'EqbSD': function (x, y) {
            return x >> y;
        },
        'UtyUG': function (x, y) {
            return x < y;
        }
    };
    const [[N], D] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    if (yhToAd['qZFFl'](N, 0x1))
        return '' + D[0x0];
    const q = yhToAd['xOtHe'](Array, 0xd)['fill'](0x0);
    let _s = 0xc, s = 0x1;
    for (let i = 0x0; yhToAd['nQcwj'](i, N); i++) {
        if (++q[D[i]] > 0x2)
            return '0';
        if (yhToAd['nQcwj'](D[i], _s))
            _s = D[i];
        if (yhToAd['qZFFl'](q[D[i]], 0x2))
            _s = Math['min'](_s, yhToAd['HCCtT'](0x18, 0x2 * D[i]));
    }
    if (yhToAd['UnNwp'](q[0xc], 0x1) || yhToAd['gsmzI'](q[0x0], 0x0))
        return '0';
    const mask = q['reduce']((a, b, i) => a | (b === 0x1 ? 0x0 : 0x1 << i), 0x1);
    for (let m = 0x0; yhToAd['vzUWW'](m, 0x1 << 0xd); m = yhToAd['fKirZ'](m, 0x1) | mask) {
        let min = _s;
        for (let a = 0x1; a <= 0xc; a++) {
            if (!q[a])
                continue;
            for (let b = yhToAd['dthJr'](a, 0x1); b <= 0xc; b++) {
                if (!q[b])
                    continue;
                let t = b - a;
                if (yhToAd['qZFFl'](q[a], 0x1) && yhToAd['qZFFl'](q[b], 0x1))
                    t = yhToAd['ltZve'](m >> a & 0x1, yhToAd['Docsv'](yhToAd['EqbSD'](m, b), 0x1)) ? yhToAd['HCCtT'](0x18 - a, b) : t;
                min = Math['min'](min, t);
            }
        }
        if (yhToAd['UtyUG'](s, min))
            s = min;
    }
    return '' + s;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));