console['log']((args => {
    const pPjskN = {
        'yhxmi': function (x, y) {
            return x < y;
        },
        'GUExW': function (x, y) {
            return x < y;
        },
        'kPWnf': function (x, y) {
            return x === y;
        },
        'vdWiB': function (x, y) {
            return x + y;
        }
    };
    const S = args['trim']()['split']``['map'](c => c['charCodeAt']() - 0x61);
    const N = S['length'];
    const a = Array(0x1a)['fill'](-0x1);
    for (let i = 0x0; pPjskN['yhxmi'](i, 0x1a); i++) {
        let d = 0x0;
        for (let j = 0x0; pPjskN['GUExW'](j, N); j++) {
            d = pPjskN['kPWnf'](S[j], i) ? 0x0 : pPjskN['vdWiB'](d, 0x1);
            if (a[i] < d)
                a[i] = d;
        }
    }
    return Math['min'](...a['filter'](v => v >= 0x0));
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));