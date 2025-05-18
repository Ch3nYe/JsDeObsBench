console['log']((args => {
    const lSrvFF = {
        'AtnsT': function (x, y) {
            return x > y;
        },
        'gJQoB': function (x, y) {
            return x < y;
        },
        'EiaKn': function (x, y) {
            return x - y;
        },
        'ceYmI': function (x, y) {
            return x === y;
        },
        'FAmZg': function (x, y) {
            return x + y;
        },
        'IYNVL': function (x, y) {
            return x <= y;
        }
    };
    const [N, ...A] = args['trim']()['split']('\x0a')['map'](v => v | 0x0);
    if (lSrvFF['AtnsT'](A[0x0], 0x0))
        return '-1';
    let m = 0x0;
    for (let i = 0x1; lSrvFF['gJQoB'](i, N); i++) {
        if (lSrvFF['AtnsT'](A[i], i) || lSrvFF['AtnsT'](A[i], A[lSrvFF['EiaKn'](i, 0x1)] + 0x1))
            return '-1';
        if (lSrvFF['ceYmI'](A[i], lSrvFF['FAmZg'](A[lSrvFF['EiaKn'](i, 0x1)], 0x1)))
            m++;
        else if (lSrvFF['IYNVL'](A[i], A[i - 0x1]))
            m += A[i];
    }
    return '' + m;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));