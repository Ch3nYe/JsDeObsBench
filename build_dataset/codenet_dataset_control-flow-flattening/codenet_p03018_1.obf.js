'use strict';
function Main(input) {
    const bReYWM = {
        'mIZVa': 'ABC',
        'pIttN': function (x, y) {
            return x - y;
        }
    };
    let s = input;
    let tmp = s['split'](bReYWM['mIZVa']);
    let result = tmp['length'] - 0x1;
    while (tmp['length'] !== 0x1) {
        s = tmp['join']('BCA');
        tmp = s['split'](bReYWM['mIZVa']);
        result += bReYWM['pIttN'](tmp['length'], 0x1);
    }
    console['log'](result);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));