'use strict';
function main(input) {
    const HpqSRn = {
        'KGZfe': function (x, y) {
            return x < y;
        },
        'sGdfu': function (x, y) {
            return x - y;
        },
        'pWzFK': function (x, y) {
            return x > y;
        },
        'GXafF': function (x, y) {
            return x < y;
        }
    };
    const inputRows = input['split']('\x0a');
    const d = parseInt(inputRows[0x0]);
    let cStrArray = inputRows[0x1]['split']('\x20');
    const c = cStrArray['map'](str => parseInt(str));
    let s = [];
    for (let i = 0x2; i < inputRows['length']; i++) {
        s['push']([]);
        const tmpRow = inputRows[i]['split']('\x20');
        for (let j = 0x0; HpqSRn['KGZfe'](j, tmpRow['length']); j++) {
            s[HpqSRn['sGdfu'](i, 0x2)]['push'](parseInt(tmpRow[j]));
        }
    }
    let t = [];
    for (let i = 0x0; HpqSRn['KGZfe'](i, s['length']); i++) {
        let tmpMax = s[i][0x0];
        let index = 0x0;
        for (let j = 0x1; j < s[i]['length']; j++) {
            if (HpqSRn['pWzFK'](s[i][j], tmpMax)) {
                index = j;
                tmpMax = s[i][j];
            }
        }
        t['push'](index + 0x1);
    }
    for (let i = 0x0; HpqSRn['GXafF'](i, t['length']); i++) {
        console['log'](t[i]);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
main(input);