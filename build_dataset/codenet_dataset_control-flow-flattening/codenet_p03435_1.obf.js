'use strict';
const main = arg => {
    const JguDsB = {
        'GUnhC': function (x, y) {
            return x - y;
        },
        'utJOS': function (x, y) {
            return x - y;
        },
        'nhjvx': function (x, y) {
            return x <= y;
        },
        'qVrnq': function (x, y) {
            return x + y;
        },
        'GgJSV': function (x, y) {
            return x !== y;
        },
        'WCCnz': function (x, y) {
            return x !== y;
        },
        'wvHLu': function (x, y) {
            return x !== y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const c = arg['map'](n => n['split']('\x20')['map'](l => parseInt(l)));
    for (let a1 = 0x0; a1 <= 0x64; a1++) {
        const b1 = JguDsB['GUnhC'](c[0x0][0x0], a1);
        const b2 = JguDsB['GUnhC'](c[0x1][0x0], a1);
        const b3 = JguDsB['utJOS'](c[0x2][0x0], a1);
        for (let a2 = 0x0; JguDsB['nhjvx'](a2, 0x64); a2++) {
            if (JguDsB['qVrnq'](a2, b1) !== c[0x0][0x1])
                continue;
            if (a2 + b2 !== c[0x1][0x1])
                continue;
            if (JguDsB['GgJSV'](JguDsB['qVrnq'](a2, b3), c[0x2][0x1]))
                continue;
            for (let a3 = 0x0; JguDsB['nhjvx'](a3, 0x64); a3++) {
                if (a3 + b1 !== c[0x0][0x2])
                    continue;
                if (JguDsB['WCCnz'](JguDsB['qVrnq'](a3, b2), c[0x1][0x2]))
                    continue;
                if (JguDsB['wvHLu'](JguDsB['qVrnq'](a3, b3), c[0x2][0x2]))
                    continue;
                console['log']('Yes');
                return;
            }
        }
    }
    console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));