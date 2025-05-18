const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
function pow(x, n) {
    const YOHdPg = {
        'CXBtC': function (x, y) {
            return x > y;
        },
        'FBMUE': function (x, y) {
            return x & y;
        },
        'NiHeI': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    let res = 0x1;
    while (YOHdPg['CXBtC'](n, 0x0)) {
        if (YOHdPg['FBMUE'](n, 0x1))
            res = mul(res, x);
        x = YOHdPg['NiHeI'](mul, x, x);
        n >>= 0x1;
    }
    return res;
}
function inv(x) {
    const bymIFs = {
        'CnAOa': function (x, y) {
            return x - y;
        }
    };
    if (x == 0x1)
        return 0x1;
    return pow(x, bymIFs['CnAOa'](mod, 0x2));
}
function mul(a, b) {
    const mZgefI = {
        'ILTQC': function (x, y) {
            return x % y;
        },
        'XfxWe': function (x, y) {
            return x * y;
        },
        'QIliW': function (x, y) {
            return x >> y;
        }
    };
    return mZgefI['ILTQC'](mZgefI['XfxWe'](mZgefI['QIliW'](a, 0x10) * b % mod, 0x10000) + mZgefI['XfxWe'](a & 0xffff, b), mod);
}
const mod = 0x3b800001;
(input => {
    const iykLLB = {
        'GKiRe': function (x, y) {
            return x <= y;
        },
        'gSyoP': function (x, y) {
            return x * y;
        },
        'qoANJ': function (x, y) {
            return x % y;
        },
        'crKLQ': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'HMcHV': function (callee, param1) {
            return callee(param1);
        },
        'hOGXM': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'yYLqP': function (x, y) {
            return x - y;
        },
        'DYAqg': function (x, y) {
            return x + y;
        }
    };
    const lines = input['split']('\x0a');
    let [N, M, K] = lines[0x0]['split']('\x20')['map'](Number);
    let ans = 0x0;
    let fa = 0x1;
    let fa2 = 0x1;
    for (let k = 0x0; iykLLB['GKiRe'](k, K); k++) {
        fa = iykLLB['gSyoP'](fa, k || 0x1) % mod;
        fa2 = iykLLB['qoANJ'](iykLLB['gSyoP'](fa2, k ? N - k : 0x1), mod);
        let left = iykLLB['qoANJ'](iykLLB['crKLQ'](mul, fa2, iykLLB['HMcHV'](inv, fa)), mod);
        ans += iykLLB['qoANJ'](iykLLB['gSyoP'](iykLLB['crKLQ'](mul, left, iykLLB['hOGXM'](pow, iykLLB['yYLqP'](M, 0x1), iykLLB['yYLqP'](N, iykLLB['DYAqg'](k, 0x1)))), M), mod);
    }
    console['log'](iykLLB['qoANJ'](ans, mod));
})(input);