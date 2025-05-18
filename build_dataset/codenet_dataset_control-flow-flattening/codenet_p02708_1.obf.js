const main = input => {
    const EPNepG = {
        'cUUBc': function (x, y) {
            return x + y;
        },
        'AuSaQ': function (x, y) {
            return x ** y;
        },
        'IVBha': function (x, y) {
            return x <= y;
        },
        'dMXDe': function (x, y) {
            return x / y;
        },
        'XkBvi': function (x, y) {
            return x * y;
        },
        'fiXEe': function (x, y) {
            return x - y;
        },
        'cnaQC': function (x, y) {
            return x + y;
        },
        'eHplb': function (x, y) {
            return x / y;
        },
        'XTUXF': function (x, y) {
            return x + y;
        },
        'wFwhI': function (x, y) {
            return x - y;
        },
        'SfDyv': function (x, y) {
            return x % y;
        },
        'uMgdr': function (x, y) {
            return x + y;
        },
        'mSDKE': function (x, y) {
            return x % y;
        }
    };
    const mod = EPNepG['cUUBc'](EPNepG['AuSaQ'](0xa, 0x9), 0x7);
    const [n, k] = input['trim']()['split']('\x20')['map'](Number);
    let ans = 0x0;
    for (let i = k; EPNepG['IVBha'](i, EPNepG['cUUBc'](n, 0x1)); i++) {
        const s_sum = EPNepG['dMXDe'](EPNepG['XkBvi'](EPNepG['fiXEe'](i, 0x1), i), 0x2);
        const b_f = EPNepG['cnaQC'](EPNepG['fiXEe'](n, i), 0x1);
        const b_sum = EPNepG['eHplb'](EPNepG['cnaQC'](b_f, n) * i, 0x2);
        ans += EPNepG['XTUXF'](EPNepG['wFwhI'](b_sum, s_sum), 0x1);
    }
    return console['log'](EPNepG['SfDyv'](EPNepG['uMgdr'](EPNepG['mSDKE'](ans, mod), mod), mod));
};
process['env']['MYTEST'] ? process['env']['MYTEST'] === 'test' ? test() : main(require('fs')['readFileSync']('dev/stdin', 'utf8')) : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));