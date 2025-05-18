console['log']((args => {
    const RYgMJx = {
        'VETRW': function (x, y) {
            return x < y;
        },
        'CqTVu': function (x, y) {
            return x - y;
        },
        'LsmgA': function (x, y) {
            return x | y;
        },
        'yQQAB': function (x, y) {
            return x < y;
        },
        'PZzSK': function (x, y) {
            return x & y;
        },
        'ARYaz': function (x, y) {
            return x << y;
        },
        'mjqcD': function (x, y) {
            return x + y;
        }
    };
    const S = args['trim']();
    const L = S['length'];
    let total = 0x0;
    for (let bit = 0x0; RYgMJx['VETRW'](bit, 0x1 << RYgMJx['CqTVu'](L, 0x1)); bit++) {
        let st = RYgMJx['LsmgA'](S[0x0], 0x0), t = 0x0;
        for (let i = 0x0; RYgMJx['yQQAB'](i, RYgMJx['CqTVu'](L, 0x1)); i++) {
            if (RYgMJx['PZzSK'](RYgMJx['ARYaz'](0x1, i), bit)) {
                t += st;
                st = RYgMJx['LsmgA'](S[i + 0x1], 0x0);
            } else {
                st = RYgMJx['mjqcD'](st * 0xa, RYgMJx['LsmgA'](S[RYgMJx['mjqcD'](i, 0x1)], 0x0));
            }
        }
        total += RYgMJx['mjqcD'](t, st);
    }
    return total['toString']();
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));