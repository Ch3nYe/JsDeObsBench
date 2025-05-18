const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
(input => {
    const VoztEl = {
        'mOcHt': function (x, y) {
            return x < y;
        },
        'RPlQg': function (x, y) {
            return x + y;
        },
        'cGoAA': function (x, y) {
            return x * y;
        },
        'gKlPr': function (x, y) {
            return x * y;
        },
        'IksgW': function (x, y) {
            return x > y;
        },
        'mqBLM': function (x, y) {
            return x / y;
        },
        'EQCEA': function (x, y) {
            return x < y;
        },
        'JyhIS': function (x, y) {
            return x + y;
        },
        'agqQI': function (x, y) {
            return x > y;
        },
        'RuOWV': function (x, y) {
            return x / y;
        },
        'IlMGF': function (x, y) {
            return x - y;
        },
        'aXcEE': function (x, y) {
            return x - y;
        }
    };
    const [A, B, C, D, E, F] = input['trim']()['split']('\x20')['map'](Number);
    let W = {};
    let S = {};
    for (let i = 0x1; VoztEl['mOcHt'](i, F); i++) {
        for (let j = 0x0; j < F; j++) {
            const s = VoztEl['RPlQg'](VoztEl['cGoAA'](VoztEl['cGoAA'](A, i), 0x64), VoztEl['cGoAA'](VoztEl['gKlPr'](j, B), 0x64));
            if (VoztEl['IksgW'](s, F))
                break;
            W[s] = 0x1;
        }
    }
    const p = VoztEl['mqBLM'](VoztEl['gKlPr'](F, E), 0x64);
    for (let i = 0x0; VoztEl['EQCEA'](i, F); i++) {
        for (let j = 0x0; VoztEl['mOcHt'](j, F); j++) {
            const s = VoztEl['JyhIS'](VoztEl['gKlPr'](C, i), D * j);
            if (VoztEl['agqQI'](s, p))
                break;
            S[s] = 0x1;
        }
    }
    let ans = [
        A * 0x64,
        0x0
    ];
    let max = 0x0;
    let r = VoztEl['RuOWV'](E, 0x64);
    for (let i in W) {
        for (let j in S) {
            const t = VoztEl['RPlQg'](VoztEl['IlMGF'](i, 0x0), VoztEl['aXcEE'](j, 0x0));
            const sw = VoztEl['mqBLM'](j, i);
            if (VoztEl['IksgW'](sw, r) || t > F)
                continue;
            if (sw > max) {
                max = sw;
                ans = [
                    t,
                    j
                ];
            }
        }
    }
    console['log'](ans[0x0], ans[0x1]);
})(input);