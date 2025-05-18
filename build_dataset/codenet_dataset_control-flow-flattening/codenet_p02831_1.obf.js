'use strict';
const Main = input => {
    const kpLlxr = {
        'MEbhp': function (x, y) {
            return x >= y;
        },
        'uEeQO': function (x, y) {
            return x > y;
        },
        'xBuqb': function (x, y) {
            return x % y;
        },
        'Oomty': function (x, y) {
            return x > y;
        },
        'aczYK': function (x, y) {
            return x * y;
        }
    };
    let xs = input['trim']()['split']('\x20')['map'](v => parseInt(v, 0xa));
    let m = xs[0x0];
    let n = xs[0x1];
    let r = 0x0;
    let d = 0x0;
    let x = m;
    let y = n;
    if (kpLlxr['MEbhp'](m, n)) {
        while (kpLlxr['uEeQO'](n, 0x0)) {
            let r = kpLlxr['xBuqb'](m, n);
            m = n;
            n = r;
        }
        d = m;
    } else {
        while (kpLlxr['Oomty'](m, 0x0)) {
            r = kpLlxr['xBuqb'](n, m);
            n = m;
            m = r;
        }
        d = n;
    }
    let ans = kpLlxr['aczYK'](x, y) / d;
    console['log'](ans);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));