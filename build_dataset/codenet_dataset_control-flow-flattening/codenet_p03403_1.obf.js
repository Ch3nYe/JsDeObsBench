console['log']((args => {
    const KoyAwA = {
        'iCeTg': function (x, y) {
            return x + y;
        },
        'fmQLk': function (x, y) {
            return x - y;
        },
        'RQecX': function (x, y) {
            return x < y;
        },
        'uUyQd': function (x, y) {
            return x + y;
        },
        'fXnoS': function (x, y) {
            return x - y;
        },
        'dvflJ': function (x, y) {
            return x - y;
        },
        'XAMyp': function (x, y) {
            return x + y;
        },
        'fzeaU': function (x, y) {
            return x - y;
        },
        'PUhwQ': function (x, y) {
            return x - y;
        }
    };
    const [[N], A] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    let C = KoyAwA['iCeTg'](Math['abs'](A[0x0]), Math['abs'](A[KoyAwA['fmQLk'](N, 0x1)]));
    for (let i = 0x1; KoyAwA['RQecX'](i, N); i++) {
        C += Math['abs'](KoyAwA['fmQLk'](A[i], A[i - 0x1]));
    }
    const c = [KoyAwA['uUyQd'](KoyAwA['fmQLk'](KoyAwA['fmQLk'](C, Math['abs'](A[0x0])), Math['abs'](KoyAwA['fXnoS'](A[0x1], A[0x0]))), Math['abs'](A[0x1]))];
    for (let i = 0x1; i < KoyAwA['fmQLk'](N, 0x1); i++) {
        c['push'](KoyAwA['dvflJ'](KoyAwA['fmQLk'](C, Math['abs'](KoyAwA['dvflJ'](A[KoyAwA['XAMyp'](i, 0x1)], A[i]))), Math['abs'](A[i] - A[KoyAwA['fzeaU'](i, 0x1)])) + Math['abs'](KoyAwA['fXnoS'](A[KoyAwA['XAMyp'](i, 0x1)], A[KoyAwA['fmQLk'](i, 0x1)])));
    }
    c['push'](KoyAwA['fXnoS'](C - Math['abs'](A[KoyAwA['dvflJ'](N, 0x1)]), Math['abs'](KoyAwA['dvflJ'](A[KoyAwA['fzeaU'](N, 0x2)], A[KoyAwA['PUhwQ'](N, 0x1)]))) + Math['abs'](A[N - 0x2]));
    return c['join']`\n`;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));