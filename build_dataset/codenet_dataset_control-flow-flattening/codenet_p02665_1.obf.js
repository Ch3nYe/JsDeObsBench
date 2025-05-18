console['log']((args => {
    const MFvLLE = {
        'EjCWe': function (x, y) {
            return x - y;
        },
        'OZdvd': function (x, y) {
            return x - y;
        },
        'OYjmO': function (x, y) {
            return x * y;
        },
        'Rokjd': function (callee, param1) {
            return callee(param1);
        },
        'IWhuK': function (x, y) {
            return x - y;
        },
        'mgsCL': function (x, y) {
            return x + y;
        },
        'FnRkF': function (x, y) {
            return x > y;
        },
        'ktYsr': function (x, y) {
            return x < y;
        },
        'GRXNp': function (callee, param1) {
            return callee(param1);
        }
    };
    const [[N], A] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const a = [MFvLLE['EjCWe'](0x1, A[0x0])];
    for (let i = 0x1; i < N; i++)
        a['push'](MFvLLE['OZdvd'](MFvLLE['OYjmO'](a[MFvLLE['OZdvd'](i, 0x1)], 0x2), A[i]));
    a['push'](0x0);
    let n = MFvLLE['Rokjd'](BigInt, A[N]);
    for (let i = MFvLLE['IWhuK'](N, 0x1); i >= 0x0; i--) {
        const c = MFvLLE['mgsCL'](a[i + 0x1], A[MFvLLE['mgsCL'](i, 0x1)]);
        if (MFvLLE['FnRkF'](a[i], c))
            a[i] = c;
        else if (MFvLLE['ktYsr'](MFvLLE['OYjmO'](a[i], 0x2), c))
            return '-1';
        n += MFvLLE['GRXNp'](BigInt, a[i] + A[i]);
    }
    return '' + n;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));