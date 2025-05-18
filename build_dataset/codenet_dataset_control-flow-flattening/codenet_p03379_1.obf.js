console['log']((args => {
    const QcynQU = {
        'ecBth': function (x, y) {
            return x - y;
        },
        'amEyn': function (x, y) {
            return x / y;
        },
        'JaXvQ': function (x, y) {
            return x / y;
        },
        'bWouP': function (x, y) {
            return x < y;
        },
        'XRIzd': function (x, y) {
            return x <= y;
        }
    };
    const [[N], X] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const _X = []['concat'](X)['sort']((a, b) => a - b);
    const M1 = _X[QcynQU['ecBth'](QcynQU['amEyn'](N, 0x2), 0x1)], M2 = _X[QcynQU['JaXvQ'](N, 0x2)];
    const m = [];
    for (let i = 0x0; QcynQU['bWouP'](i, N); i++) {
        if (QcynQU['XRIzd'](X[i], M1))
            m['push'](M2);
        else
            m['push'](M1);
    }
    return m['join']`\n`;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));