'use strict';
console['log'](function (args) {
    const QuBhZR = {
        'vifwX': function (x, y) {
            return x | y;
        },
        'ZnGpf': function (x, y) {
            return x < y;
        },
        'WZVuE': function (x, y) {
            return x | y;
        },
        'XMGaR': function (x, y) {
            return x << y;
        },
        'wTPBv': function (x, y) {
            return x < y;
        },
        'CmaKB': function (x, y) {
            return x & y;
        },
        'FIhpZ': function (x, y) {
            return x !== y;
        },
        'WqAkb': function (x, y) {
            return x > y;
        }
    };
    const _tmp = args['trim']()['split']('\x0a');
    const N = _tmp['shift']() | 0x0;
    const A = [], x = [], y = [];
    for (let i = 0x0; i < N; i++) {
        A[i] = QuBhZR['vifwX'](_tmp['shift'](), 0x0);
        x[i] = [];
        y[i] = [];
        for (let j = 0x0; QuBhZR['ZnGpf'](j, A[i]); j++) {
            const xy = _tmp[j]['split']('\x20');
            x[i][j] = xy[0x0] - 0x1;
            y[i][j] = QuBhZR['WZVuE'](xy[0x1], 0x0);
        }
        _tmp['splice'](0x0, A[i]);
    }
    let K = 0x0;
    TEST:
        for (let honest = 0x1; QuBhZR['ZnGpf'](honest, QuBhZR['XMGaR'](0x1, N)); honest++) {
            let k = 0x0;
            for (let i = 0x0; QuBhZR['wTPBv'](i, N); i++) {
                if (!QuBhZR['CmaKB'](honest, 0x1 << i))
                    continue;
                k++;
                for (let j = 0x0; j < A[i]; j++) {
                    const Xij = x[i][j], Yij = y[i][j];
                    const target = QuBhZR['CmaKB'](honest, QuBhZR['XMGaR'](0x1, Xij));
                    if (QuBhZR['FIhpZ'](target, Yij << Xij))
                        continue TEST;
                }
            }
            if (QuBhZR['WqAkb'](k, K))
                K = k;
        }
    return K;
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));