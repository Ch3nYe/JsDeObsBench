'use strict';
const ncr = (n, r, mod) => {
    const pyWtwR = {
        'okJLd': function (x, y) {
            return x + y;
        },
        'JYMDA': function (x, y) {
            return x > y;
        },
        'pCARD': function (x, y) {
            return x <= y;
        },
        'QwPli': function (x, y) {
            return x + y;
        },
        'parNS': function (x, y) {
            return x - y;
        },
        'xBDkx': function (x, y) {
            return x % y;
        },
        'SzXFy': function (x, y) {
            return x > y;
        },
        'LVMeA': function (x, y) {
            return x % y;
        },
        'GxemV': function (x, y) {
            return x * y;
        }
    };
    mod = mod || 0x3b9aca00 + 0x7;
    const a = Math['max'](n, r);
    const b = Math['min'](n, r);
    const p = Math['min'](b, a - b);
    const nu = new Array(p + 0x1);
    const de = new Array(pyWtwR['okJLd'](p, 0x1));
    let dest = 0x1;
    if (pyWtwR['JYMDA'](p, 0x0)) {
        for (let i = 0x1; pyWtwR['pCARD'](i, p); i++) {
            nu[i] = pyWtwR['QwPli'](pyWtwR['parNS'](a, p), i);
            de[i] = i;
        }
        for (let k = 0x2; pyWtwR['pCARD'](k, p); k++) {
            const piv = de[k];
            const j = pyWtwR['JYMDA'](piv, 0x1) ? -pyWtwR['xBDkx'](pyWtwR['parNS'](a, p), k) : 0x0;
            for (let i = k; pyWtwR['pCARD'](i, p); i += k) {
                nu[pyWtwR['okJLd'](i, j)] /= piv;
                de[i] /= piv;
            }
        }
        for (let i = 0x1; i <= p; i++) {
            if (pyWtwR['SzXFy'](nu[i], 0x1))
                dest = pyWtwR['LVMeA'](pyWtwR['GxemV'](dest, nu[i]), mod);
        }
    }
    return dest;
};
function main(inp) {
    const fUUCUm = {
        'msnoE': function (callee, param1) {
            return callee(param1);
        },
        'CvKgn': function (x, y) {
            return x / y;
        },
        'Fgocz': function (x, y) {
            return x >= y;
        },
        'oPsCC': function (x, y) {
            return x - y;
        },
        'kKzZU': function (x, y) {
            return x * y;
        },
        'nOPgB': function (x, y) {
            return x * y;
        },
        'hGqcU': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'Ophvd': function (x, y) {
            return x + y;
        }
    };
    inp = inp['trim']()['split']('\x20');
    const x = Number(inp[0x0]);
    const y = fUUCUm['msnoE'](Number, inp[0x1]);
    let sum = 0x0;
    for (let i = Math['floor'](fUUCUm['CvKgn'](x, 0x2)); fUUCUm['Fgocz'](i, 0x0); i--) {
        const a = fUUCUm['oPsCC'](x, fUUCUm['kKzZU'](i, 0x2));
        if (fUUCUm['nOPgB'](a, 0x2) + i === y) {
            sum = fUUCUm['hGqcU'](ncr, fUUCUm['Ophvd'](i, a), i);
        }
    }
    console['log'](sum);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));