'use strict';
const main = input => {
    const dURmRc = {
        'qQlAW': function (callee, param1) {
            return callee(param1);
        },
        'koMuD': function (x, y) {
            return x <= y;
        },
        'jVfrk': function (x, y) {
            return x + y;
        },
        'lcOyB': function (x, y) {
            return x + y;
        },
        'PgmiN': function (x, y) {
            return x - y;
        },
        'fdJxe': function (x, y) {
            return x !== y;
        },
        'IUdzG': function (x, y) {
            return x === y;
        }
    };
    input = input['split']('\x0a');
    const N = dURmRc['qQlAW'](parseInt, input[0x0]);
    let X = [];
    let Y = [];
    let Z = [];
    input['slice'](0x1, N + 0x1)['forEach'](v => {
        let tmp = v['split']('\x20')['map'](j => parseInt(j));
        X['push'](tmp[0x0]);
        Y['push'](tmp[0x1]);
        Z['push'](tmp[0x2]);
    });
    const MAX = 0x64;
    for (let y = 0x0; dURmRc['koMuD'](y, MAX); y++) {
        for (let x = 0x0; dURmRc['koMuD'](x, MAX); x++) {
            let needH = -0x1;
            for (let i = 0x0; i < N; i++) {
                let tmp = dURmRc['jVfrk'](dURmRc['lcOyB'](Z[i], Math['abs'](Y[i] - y)), Math['abs'](dURmRc['PgmiN'](X[i], x)));
                if (needH === -0x1) {
                    needH = tmp;
                } else if (dURmRc['fdJxe'](needH, tmp)) {
                    needH = -0x2;
                    break;
                }
            }
            if (dURmRc['IUdzG'](needH, -0x2))
                continue;
            console['log']('%d\x20%d\x20%d', x, y, needH);
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));