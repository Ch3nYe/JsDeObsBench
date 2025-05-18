console['log']((args => {
    const ayIyWl = {
        'zCeJZ': function (x, y) {
            return x < y;
        },
        'fOJmW': function (x, y) {
            return x + y;
        },
        'RCnYO': function (x, y) {
            return x - y;
        },
        'culXu': function (x, y) {
            return x - y;
        }
    };
    const [[N, T], t] = args['trim']()['split']`\n`['map'](r => r['split']` `['map'](v => v | 0x0));
    t['sort']((a, b) => a - b);
    let s = T;
    for (let i = 0x1; ayIyWl['zCeJZ'](i, N); i++) {
        if (ayIyWl['fOJmW'](t[ayIyWl['RCnYO'](i, 0x1)], T) > t[i])
            s += ayIyWl['culXu'](t[i], t[i - 0x1]);
        else
            s += T;
    }
    return '' + s;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));