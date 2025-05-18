console['log']((args => {
    const IHdwHK = {
        'IxMtS': function (x, y) {
            return x < y;
        },
        'yodXE': function (x, y) {
            return x >= y;
        },
        'gHszH': function (x, y) {
            return x * y;
        },
        'ugBtF': function (x, y) {
            return x + y;
        },
        'TWLSJ': function (x, y) {
            return x - y;
        },
        'GgOPR': function (x, y) {
            return x + y;
        }
    };
    const [[N], A] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    A['sort']((a, b) => a - b);
    let sum = A[0x0], n = 0x0;
    for (let i = 0x1; IHdwHK['IxMtS'](i, N); i++) {
        if (IHdwHK['yodXE'](IHdwHK['gHszH'](sum, 0x2), A[i]))
            n++;
        else
            n = 0x0;
        if (IHdwHK['yodXE'](IHdwHK['ugBtF'](sum, A[i]), 0x3b9aca00))
            return '' + IHdwHK['TWLSJ'](IHdwHK['ugBtF'](n, N), i);
        sum = IHdwHK['ugBtF'](sum, A[i]);
    }
    return '' + IHdwHK['GgOPR'](n, 0x1);
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));