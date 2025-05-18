'use strict';
const main = arg => {
    const DLlcGm = {
        'bSwUy': function (x, y) {
            return x < y;
        },
        'wKFDn': function (callee, param1) {
            return callee(param1);
        },
        'kxsdo': function (callee, param1) {
            return callee(param1);
        },
        'SbvDs': function (x, y) {
            return x !== y;
        },
        'mRDZX': function (x, y) {
            return x !== y;
        },
        'KJbbS': function (callee, param1) {
            return callee(param1);
        },
        'qTgSq': function (x, y) {
            return x - y;
        }
    };
    const times = arg['trim']()['split']('\x0a')['map'](n => parseInt(n));
    let min = 0xa;
    let sum = 0x0;
    for (let i = 0x0; DLlcGm['bSwUy'](i, times['length']); i++) {
        let digitOne = DLlcGm['wKFDn'](String, times[i])['split']('');
        digitOne = DLlcGm['wKFDn'](parseInt, digitOne[digitOne['length'] - 0x1]);
        let digitMinus = 0xa - digitOne;
        sum += DLlcGm['kxsdo'](parseInt, times[i]);
        if (DLlcGm['SbvDs'](digitMinus, 0xa)) {
            sum += digitMinus;
        }
        if (DLlcGm['mRDZX'](digitMinus, 0xa) && DLlcGm['bSwUy'](digitOne, min)) {
            min = digitOne;
        }
    }
    console['log'](DLlcGm['KJbbS'](parseInt, sum - DLlcGm['qTgSq'](0xa, min)));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));