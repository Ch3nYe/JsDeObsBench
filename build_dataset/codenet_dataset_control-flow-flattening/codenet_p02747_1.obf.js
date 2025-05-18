'use strict';
const Main = input => {
    const abRUvI = {
        'OVGOX': function (x, y) {
            return x <= y;
        },
        'HQwGX': function (x, y) {
            return x == y;
        },
        'csJsZ': function (x, y) {
            return x != y;
        },
        'ImdqI': function (x, y) {
            return x + y;
        },
        'VxNtJ': function (x, y) {
            return x % y;
        },
        'BxWwx': function (x, y) {
            return x >= y;
        },
        'JDLVj': 'Yes'
    };
    let xs = input['trim']()['split']('');
    let len = xs['length'];
    let ans = 0x0;
    for (let i = 0x0; abRUvI['OVGOX'](i, len); i++) {
        if (i % 0x2 == 0x0 && abRUvI['HQwGX'](xs[i], 'h') && abRUvI['csJsZ']([abRUvI['ImdqI'](i, 0x1)], 'h')) {
            ans += 0x1;
        } else if (abRUvI['HQwGX'](abRUvI['VxNtJ'](i, 0x2), 0x1) && abRUvI['HQwGX'](xs[i], 'i') && xs[i + 0x1] != 'i') {
            ans += 0x1;
        } else {
            ans += 0x0;
        }
    }
    if (abRUvI['BxWwx'](ans, 0x2)) {
        console['log'](abRUvI['JDLVj']);
    } else {
        console['log']('No');
    }
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));