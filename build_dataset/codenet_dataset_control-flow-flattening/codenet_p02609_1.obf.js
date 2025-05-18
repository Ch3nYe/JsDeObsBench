const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
(input => {
    const RVsIHq = {
        'hcOuL': function (x, y) {
            return x & y;
        },
        'Tsecf': function (x, y) {
            return x >>> y;
        },
        'kwtaH': function (x, y) {
            return x === y;
        },
        'KpYAK': function (callee, param1) {
            return callee(param1);
        },
        'OtoMm': function (x, y) {
            return x - y;
        },
        'rbItg': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'IzkcG': function (x, y) {
            return x + y;
        },
        'RTUSG': function (callee, param1) {
            return callee(param1);
        },
        'FRqAG': function (x, y) {
            return x < y;
        },
        'wYsQx': function (x, y) {
            return x - y;
        },
        'PszoH': function (x, y) {
            return x - y;
        },
        'rUeKY': function (x, y) {
            return x === y;
        },
        'xZqBW': function (x, y) {
            return x + y;
        },
        'tZPQv': function (x, y) {
            return x % y;
        },
        'vnXps': function (x, y) {
            return x === y;
        }
    };
    const lines = input['split']('\x0a');
    const N = RVsIHq['OtoMm'](lines[0x0], 0x0);
    const X = lines[0x1];
    const popcount = n => {
        let count = 0x0;
        do {
            RVsIHq['hcOuL'](n, 0x1) ? count++ : count;
        } while (n = RVsIHq['Tsecf'](n, 0x1));
        return count;
    };
    const f = n => {
        if (RVsIHq['kwtaH'](n, 0x0)) {
            return 0x0;
        }
        let count = 0x1;
        while (n %= RVsIHq['KpYAK'](popcount, n))
            count++;
        return count;
    };
    const x = RVsIHq['rbItg'](parseInt, X, 0x2);
    const pr = RVsIHq['KpYAK'](popcount, x) - 0x1;
    const nx = RVsIHq['IzkcG'](RVsIHq['RTUSG'](popcount, x), 0x1);
    for (let i = 0x0; RVsIHq['FRqAG'](i, N); i++) {
        let n = x ^ Math['pow'](0x2, RVsIHq['wYsQx'](RVsIHq['PszoH'](N, i), 0x1));
        if (RVsIHq['rUeKY'](n, 0x0)) {
            console['log'](0x0);
        } else {
            console['log'](RVsIHq['xZqBW'](f(RVsIHq['tZPQv'](n, RVsIHq['vnXps'](X[i], '1') ? pr : nx)), 0x1));
        }
    }
})(input);