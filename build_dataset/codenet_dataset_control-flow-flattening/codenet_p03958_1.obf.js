'use strict';
const main = input => {
    const ugNWnL = {
        'QDtwo': function (callee, param1) {
            return callee(param1);
        },
        'hoWUc': function (x, y) {
            return x > y;
        },
        'dTKVH': function (x, y) {
            return x > y;
        },
        'bSwNL': function (x, y) {
            return x - y;
        },
        'EDGuN': function (x, y) {
            return x - y;
        },
        'iPhtm': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const K = parseInt(input[0x0]['split']('\x20')[0x0]);
    const T = ugNWnL['QDtwo'](parseInt, input[0x0]['split']('\x20')[0x1]);
    let a = input[0x1]['split']('\x20')['map'](el => {
        return ugNWnL['QDtwo'](parseInt, el);
    });
    let max = a['reduce'](function (previous, current) {
        return ugNWnL['hoWUc'](previous, current) ? previous : current;
    });
    if (ugNWnL['dTKVH'](ugNWnL['bSwNL'](ugNWnL['bSwNL'](max, 0x1), K - max), 0x0)) {
        console['log'](ugNWnL['bSwNL'](ugNWnL['EDGuN'](max, 0x1), ugNWnL['iPhtm'](K, max)));
    } else {
        console['log'](0x0);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));