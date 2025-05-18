'use strict';
let a = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
a['shift']();
let d = a['map'](e => {
    const YgdEzk = {
        'FYJfn': function (x, y) {
            return x - y;
        }
    };
    let r = e['split']('\x20')['map'](Number);
    return [
        YgdEzk['FYJfn'](r[0x0], r[0x1]),
        r[0x1] + r[0x0]
    ];
})['sort']((a, b) => {
    const BXJKaH = {
        'xNzgX': function (x, y) {
            return x - y;
        }
    };
    return BXJKaH['xNzgX'](a[0x1], b[0x1]);
});
let s = 0x0;
let P = Number['MIN_SAFE_INTEGER'];
for (let i = 0x0; i < d['length']; i++) {
    if (P <= d[i][0x0]) {
        s++;
        P = d[i][0x1];
    }
}
console['log'](s);