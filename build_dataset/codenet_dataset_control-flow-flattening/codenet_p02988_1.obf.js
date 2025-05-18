'use strict';
const Main = arg => {
    const ZerUie = {
        'CUyqG': function (x, y) {
            return x < y;
        },
        'mMaHt': function (x, y) {
            return x - y;
        },
        'mJcNd': function (x, y) {
            return x < y;
        },
        'LGsMz': function (x, y) {
            return x + y;
        },
        'ijcXo': function (x, y) {
            return x < y;
        }
    };
    let input = arg['trim']()['split']('\x0a');
    let n = parseInt(input[0x0]);
    let pArr = input[0x1]['split']('\x20')['map'](Number);
    let count = 0x0;
    for (let i = 0x1; ZerUie['CUyqG'](ZerUie['mMaHt'](i, 0x1), n); i++) {
        if (ZerUie['CUyqG'](pArr[ZerUie['mMaHt'](i, 0x1)], pArr[i]) && ZerUie['mJcNd'](pArr[i], pArr[ZerUie['LGsMz'](i, 0x1)]) || pArr[ZerUie['LGsMz'](i, 0x1)] < pArr[i] && ZerUie['ijcXo'](pArr[i], pArr[ZerUie['mMaHt'](i, 0x1)])) {
            count += 0x1;
        }
    }
    console['log'](count);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));