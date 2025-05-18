'use strict';
const main = arg => {
    const oefyOf = {
        'PvRuh': function (callee, param1) {
            return callee(param1);
        },
        'AbPtr': function (x, y) {
            return x < y;
        },
        'aeOWY': function (x, y) {
            return x < y;
        },
        'rVnNf': function (x, y) {
            return x <= y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = oefyOf['PvRuh'](parseInt, arg[0x0]);
    const a = arg[0x1]['split']('\x20')['map'](n => parseInt(n))['sort']((a, b) => a - b);
    const set = new Set();
    let max = 0x0;
    for (let i = 0x0; oefyOf['AbPtr'](i, N); i++) {
        let cnt = 0x0;
        if (set['has'](a[i])) {
            continue;
        }
        set['add'](a[i]);
        for (let j = 0x0; oefyOf['aeOWY'](j, N); j++) {
            if (oefyOf['rVnNf'](Math['abs'](a[j] - a[i]), 0x1)) {
                cnt++;
            }
        }
        if (cnt > max) {
            max = cnt;
        }
    }
    console['log'](max);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));