'use strict';
const DELIMITER = '\x20';
const A_INDEX = 0x0;
const B_INDEX = 0x1;
const K_INDEX = 0x3;
const LIMIT = Math['pow'](0xa, 0x12);
const process = input => {
    const jEYCBI = {
        'KOiXK': function (callee, param1) {
            return callee(param1);
        },
        'HWcix': function (callee, param1) {
            return callee(param1);
        },
        'EgrKA': 'Unfair',
        'qEghm': function (x, y) {
            return x === y;
        },
        'Zuibv': function (x, y) {
            return x % y;
        },
        'zCdhr': function (x, y) {
            return x === y;
        }
    };
    const indexArr = input['split'](DELIMITER);
    const ans = jEYCBI['KOiXK'](parseInt, indexArr[A_INDEX]) - parseInt(indexArr[B_INDEX]);
    const KString = indexArr[K_INDEX];
    const K = jEYCBI['HWcix'](parseInt, KString['charAt'](KString['length'] - 0x1));
    if (Math['abs'](ans) > LIMIT) {
        console['log'](jEYCBI['EgrKA']);
    } else {
        console['log'](jEYCBI['qEghm'](jEYCBI['Zuibv'](K, 0x2), 0x0) || jEYCBI['zCdhr'](ans, 0x0) ? ans : -ans);
    }
};
process(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());