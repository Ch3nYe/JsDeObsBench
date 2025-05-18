'use strict';
function Main(input) {
    const qLUfMl = {
        'nNWdV': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'vtUwS': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'mBEdn': function (x, y) {
            return x < y;
        },
        'EztPk': function (x, y) {
            return x % y;
        },
        'BFyCm': function (x, y) {
            return x == y;
        },
        'juUAd': function (x, y) {
            return x % y;
        },
        'JeIto': function (x, y) {
            return x / y;
        }
    };
    const tmp = input['split']('\x20');
    let A = qLUfMl['nNWdV'](parseInt, tmp[0x0], 0xa);
    let B = qLUfMl['vtUwS'](parseInt, tmp[0x1], 0xa);
    const K = tmp[0x2];
    for (let i = 0x0; qLUfMl['mBEdn'](i, K); i++) {
        if (qLUfMl['EztPk'](i, 0x2) == 0x0) {
            if (qLUfMl['BFyCm'](qLUfMl['juUAd'](A, 0x2), 0x1)) {
                A--;
            }
            B += qLUfMl['JeIto'](A, 0x2);
            A /= 0x2;
        } else {
            if (qLUfMl['juUAd'](B, 0x2) == 0x1) {
                B--;
            }
            A += qLUfMl['JeIto'](B, 0x2);
            B /= 0x2;
        }
    }
    console['log'](A, B);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));