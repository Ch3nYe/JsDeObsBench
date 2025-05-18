'use strict';
function main(arg) {
    const GMhSiI = {
        'HpOKc': function (x, y) {
            return x < y;
        },
        'nUVwb': function (x, y) {
            return x % y;
        },
        'zvWuV': function (x, y) {
            return x + y;
        },
        'dGDpD': function (x, y) {
            return x === y;
        }
    };
    let a = arg['trim']()['split']('\x0a')[0x1]['split']('\x20')['map'](Number);
    let N = a['length'];
    let ans = 0x0;
    for (let i = 0x0; GMhSiI['HpOKc'](i, N); i++) {
        if (GMhSiI['nUVwb'](GMhSiI['zvWuV'](i, 0x1), 0x2) === 0x0) {
            continue;
        }
        if (GMhSiI['dGDpD'](a[i] % 0x2, 0x0)) {
            continue;
        }
        ans++;
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));