'use strict';
const main = arg => {
    const QnEAsS = {
        'azOjn': function (x, y) {
            return x - y;
        },
        'mkceG': function (x, y) {
            return x / y;
        },
        'QuYzc': function (x, y) {
            return x < y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = parseInt(arg[0x0]);
    const A = arg[0x1]['split']('\x20')['map'](n => parseInt(0x2 * n));
    let offset = 0x0;
    for (let i = 0x0; i < N; i++) {
        offset = QnEAsS['azOjn'](A[i], offset);
    }
    let x = QnEAsS['mkceG'](offset, 0x2);
    let cur = x;
    let answer = [];
    for (let i = 0x0; QnEAsS['QuYzc'](i, N); i++) {
        answer['push'](cur);
        cur = QnEAsS['azOjn'](A[i], cur);
    }
    console['log'](answer['join']('\x20'));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));