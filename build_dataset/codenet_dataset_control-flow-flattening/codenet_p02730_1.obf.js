'use strict';
const is_palindrome = s => {
    const WruCoL = {
        'rWWBA': function (x, y) {
            return x < y;
        },
        'zExLW': function (x, y) {
            return x !== y;
        },
        'ZBBHK': function (x, y) {
            return x - y;
        }
    };
    let n = s['length'];
    for (let i = 0x0; WruCoL['rWWBA'](i, n); i++) {
        if (WruCoL['zExLW'](s[i], s[WruCoL['ZBBHK'](n - i, 0x1)]))
            return ![];
    }
    return !![];
};
const main = input => {
    const JVHWuA = {
        'bawvm': function (callee, param1) {
            return callee(param1);
        },
        'NbzEr': function (callee, param1) {
            return callee(param1);
        },
        'xTOzJ': function (x, y) {
            return x - y;
        },
        'ADWMq': function (x, y) {
            return x + y;
        },
        'LTxAk': 'Yes'
    };
    const spi = input['split']('\x0a');
    const s = spi[0x0];
    const n = s['length'];
    if (JVHWuA['bawvm'](is_palindrome, s) && JVHWuA['NbzEr'](is_palindrome, s['substring'](0x0, JVHWuA['xTOzJ'](n, 0x1) / 0x2)) && JVHWuA['NbzEr'](is_palindrome, s['substr'](JVHWuA['ADWMq'](n, 0x3) / 0x2 - 0x1)))
        console['log'](JVHWuA['LTxAk']);
    else
        console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));