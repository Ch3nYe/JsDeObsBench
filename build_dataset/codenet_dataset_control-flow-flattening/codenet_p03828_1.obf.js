'use strict';
const pf = (n, res) => {
    const AyoBgF = {
        'FPxal': function (x, y) {
            return x <= y;
        },
        'vuRER': function (x, y) {
            return x % y;
        },
        'GtXeu': function (x, y) {
            return x in y;
        }
    };
    for (let i = 0x2; AyoBgF['FPxal'](i, n); i++) {
        while (AyoBgF['vuRER'](n, i) === 0x0) {
            n /= i;
            if (!AyoBgF['GtXeu'](i, res))
                res[i] = 0x0;
            res[i]++;
        }
    }
    return res;
};
function main(input) {
    const Pkbxwf = {
        'PVSNA': function (x, y) {
            return x % y;
        },
        'ApSau': function (x, y) {
            return x + y;
        },
        'ptlIf': function (x, y) {
            return x <= y;
        },
        'bwXRP': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    input = Number(input['trim']());
    const mod = Pkbxwf['ApSau'](0x3b9aca00, 0x7);
    let obj = {};
    let ans = 0x1;
    for (let i = 0x1; Pkbxwf['ptlIf'](i, input); i++) {
        obj = Pkbxwf['bwXRP'](pf, i, obj);
    }
    Object['keys'](obj)['forEach'](n => {
        ans = Pkbxwf['PVSNA'](ans * Pkbxwf['ApSau'](obj[n], 0x1), mod);
    });
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));