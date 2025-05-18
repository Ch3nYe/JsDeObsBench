'use strict';
function Main(s) {
    const nFMTMa = {
        'MVdLx': function (callee, param1) {
            return callee(param1);
        },
        'xjbNT': function (x, y) {
            return x <= y;
        },
        'bCGPG': function (x, y) {
            return x < y;
        },
        'IgpDi': function (x, y) {
            return x - y;
        }
    };
    s = s['trim']()['split']('\x0a');
    const n = nFMTMa['MVdLx'](Number, s[0x0]);
    const p = s[0x1]['trim']()['split']('\x20')['map'](Number);
    let cnt = 0x0;
    for (let i = 0x1; nFMTMa['xjbNT'](i, n); i++) {
        let flg = !![];
        let t = p['slice'](0x0, i);
        let x = 0x0;
        while (nFMTMa['bCGPG'](x, t['length'] - 0x1)) {
            if (t[x] < p[nFMTMa['IgpDi'](i, 0x1)])
                flg = ![];
            x++;
        }
        if (flg)
            cnt++;
    }
    console['log'](cnt);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));