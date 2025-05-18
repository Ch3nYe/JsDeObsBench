console['log']((args => {
    const qDExBa = {
        'vnQwN': function (x, y) {
            return x < y;
        },
        'VdWXM': function (x, y) {
            return x < y;
        },
        'ZGnRw': function (x, y) {
            return x > y;
        },
        'tGLSF': function (x, y) {
            return x === y;
        },
        'sCTbb': 'YES'
    };
    const [[N], D, [M], T] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    D['sort']((a, b) => a - b);
    T['sort']((a, b) => a - b);
    let j = -0x1;
    Q:
        for (let i = 0x0; qDExBa['vnQwN'](i, M); i++) {
            while (qDExBa['VdWXM'](++j, N)) {
                if (qDExBa['ZGnRw'](D[j], T[i]))
                    return 'NO';
                if (qDExBa['tGLSF'](D[j], T[i]))
                    continue Q;
            }
            return 'NO';
        }
    return qDExBa['sCTbb'];
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));