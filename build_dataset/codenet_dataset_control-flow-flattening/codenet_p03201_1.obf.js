'use strict';
function getPair(num) {
    const uNcuxE = {
        'LnopR': function (x, y) {
            return x + y;
        },
        'qkSqt': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return uNcuxE['LnopR'](uNcuxE['qkSqt'](parseInt, num['toString'](0x2)['split']('')['map'](x => x === '1' ? '0' : '1')['reduce']((acc, cur) => acc + cur, ''), 0x2), 0x1);
}
function main(input) {
    const VClHjx = {
        'czTVN': function (x, y) {
            return x > y;
        },
        'rrEUm': function (callee, param1) {
            return callee(param1);
        },
        'Bbtew': function (x, y) {
            return x >= y;
        }
    };
    const inputs = input['split']('\x0a')['filter'](x => x !== '');
    const A = inputs[0x1]['split']('\x20')['map'](Number);
    let sortedA = A['sort']((a, b) => b - a);
    let count = 0x0;
    while (VClHjx['czTVN'](sortedA['length'], 0x0)) {
        let i = sortedA[0x0];
        sortedA['splice'](0x0, 0x1);
        let j = VClHjx['rrEUm'](getPair, i);
        let indexJ = sortedA['findIndex'](x => x === j);
        if (VClHjx['Bbtew'](indexJ, 0x0)) {
            sortedA['splice'](indexJ, 0x1);
            count++;
        }
    }
    console['log'](count);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));