'use strict';
const main = arg => {
    const pVGtoU = {
        'AYhPG': function (callee, param1) {
            return callee(param1);
        },
        'BfiPU': function (x, y) {
            return x === y;
        },
        'OvBXG': function (x, y) {
            return x === y;
        },
        'IAyMY': function (x, y) {
            return x === y;
        },
        'ofang': function (x, y) {
            return x === y;
        },
        'wZDId': function (x, y) {
            return x - y;
        },
        'uvKoB': function (x, y) {
            return x + y;
        },
        'xGCkn': function (x, y) {
            return x * y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = pVGtoU['AYhPG'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const K = pVGtoU['AYhPG'](parseInt, arg[0x0]['split']('\x20')[0x1]);
    const S = arg[0x1]['split']('');
    let alreadyHappy = 0x0;
    let last;
    for (let i in S) {
        if (pVGtoU['BfiPU'](last, 'L') && pVGtoU['OvBXG'](S[i], 'L')) {
            alreadyHappy++;
        }
        if (pVGtoU['IAyMY'](last, 'R') && pVGtoU['ofang'](S[i], 'R')) {
            alreadyHappy++;
        }
        last = S[i];
    }
    console['log'](Math['min'](pVGtoU['wZDId'](N, 0x1), pVGtoU['uvKoB'](alreadyHappy, pVGtoU['xGCkn'](0x2, K))));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));