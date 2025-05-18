console['log']((args => {
    const ySFvOP = {
        'Guhlf': function (callee, param1) {
            return callee(param1);
        },
        'vzeYu': function (x, y) {
            return x + y;
        },
        'FTnXL': function (x, y) {
            return x === y;
        },
        'tTicA': function (x, y) {
            return x < y;
        },
        'QHBgh': function (x, y) {
            return x === y;
        },
        'rPQOZ': function (x, y) {
            return x > y;
        }
    };
    const s = args['trim']();
    const L = s['length'];
    const p = ySFvOP['Guhlf'](Array, L)['fill'](0x0);
    for (let i = L; --i;)
        p[i - 0x1] = ySFvOP['vzeYu'](p[i], ySFvOP['FTnXL'](s[i], 'p'));
    let g = 0x0, w = 0x0;
    for (let i = 0x0; ySFvOP['tTicA'](i, L); i++) {
        if (ySFvOP['QHBgh'](s[i], 'g')) {
            if (ySFvOP['rPQOZ'](g, p[i])) {
                g--;
                w++;
            } else
                g++;
        } else
            g--;
    }
    return '' + w;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));