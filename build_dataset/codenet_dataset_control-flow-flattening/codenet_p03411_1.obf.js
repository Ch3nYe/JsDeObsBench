console['log']((args => {
    const QrmQuC = {
        'meyhF': function (x, y) {
            return x < y;
        },
        'bpeuG': function (x, y) {
            return x + y;
        },
        'CbShX': function (x, y) {
            return x < y;
        }
    };
    const [[N], ...tmp] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const rp = [], bp = [];
    for (let i = 0x0; QrmQuC['meyhF'](i, N); i++) {
        rp['push'](tmp[i]);
        bp['push'](tmp[QrmQuC['bpeuG'](N, i)]);
    }
    bp['sort'](([a], [b]) => a - b);
    let count = 0x0;
    const test = [];
    for (let i = 0x0; i < N; i++) {
        const [bx, by] = bp[i];
        let max = [
            -0x1,
            -0x1
        ];
        for (let j = 0x0; QrmQuC['CbShX'](j, rp['length']); j++) {
            const [rx, ry] = rp[j];
            if (bx < rx)
                continue;
            if (by > ry && ry > max[0x1])
                max = [
                    j,
                    ry
                ];
        }
        if (max[0x1] >= 0x0) {
            rp['splice'](max[0x0], 0x1);
            count++;
        }
    }
    return '' + count;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));