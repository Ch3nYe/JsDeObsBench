'use strict';
const main = arg => {
    const DqVezE = {
        'EzqhC': function (x, y) {
            return x + y;
        },
        'zfKvF': function (x, y) {
            return x !== y;
        },
        'WaecQ': function (x, y) {
            return x - y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = ~~arg[0x0];
    const S = arg['slice'](0x1, DqVezE['EzqhC'](N, 0x1))['map'](n => ~~n);
    let now = 0x1;
    let cnt = 0x0;
    while (DqVezE['zfKvF'](now, 0x2)) {
        now = S[DqVezE['WaecQ'](now, 0x1)];
        cnt++;
        if (cnt > N) {
            console['log'](-0x1);
            return;
        }
    }
    console['log'](cnt);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));