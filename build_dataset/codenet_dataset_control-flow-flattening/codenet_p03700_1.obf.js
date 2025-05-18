console['log']((args => {
    const IKupdx = {
        'tyLRO': function (x, y) {
            return x + y;
        },
        'EycQA': function (x, y) {
            return x >> y;
        },
        'QdWdU': function (x, y) {
            return x + y;
        },
        'vGPmr': function (x, y) {
            return x < y;
        },
        'FekQO': function (x, y) {
            return x - y;
        },
        'xkZaP': function (x, y) {
            return x >= y;
        }
    };
    const [[N, A, B], ...h] = args['trim']()['split']`\n`['map'](r => r['split']` `['map'](v => v | 0x0));
    let ok = Math['ceil'](0x3b9aca00 / B), ng = 0x0;
    bisect:
        while (ok > IKupdx['tyLRO'](ng, 0x1)) {
            let m = IKupdx['EycQA'](IKupdx['QdWdU'](ok, ng), 0x1), k = m;
            for (let i = 0x0; IKupdx['vGPmr'](i, N); i++) {
                let r = h[i] - m * B;
                if (r <= 0x0)
                    continue;
                k -= Math['ceil'](r / IKupdx['FekQO'](A, B));
            }
            if (IKupdx['xkZaP'](k, 0x0))
                ok = m;
            else
                ng = m;
        }
    return '' + ok;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));