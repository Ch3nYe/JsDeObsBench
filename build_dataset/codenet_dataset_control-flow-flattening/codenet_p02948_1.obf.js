'use strict';
function Main(input) {
    const kHzWwx = {
        'nCoFZ': function (x, y) {
            return x === y;
        },
        'nTTdC': function (x, y) {
            return x - y;
        },
        'OatWp': function (callee, param1) {
            return callee(param1);
        },
        'gyvNM': function (x, y) {
            return x < y;
        },
        'ykONZ': function (x, y) {
            return x === y;
        },
        'XEfKU': function (x, y) {
            return x > y;
        },
        'FDzLO': function (x, y) {
            return x - y;
        }
    };
    const N = Number(input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const M = kHzWwx['OatWp'](Number, input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    const list = input['split']('\x0a')['slice'](0x1)['map'](x => x['split']('\x20')['map'](x => Number(x)))['filter'](x => x[0x0] <= M)['sort']((a, b) => {
        if (kHzWwx['nCoFZ'](a[0x1], b[0x1])) {
            return b[0x0] - a[0x0];
        } else {
            return kHzWwx['nTTdC'](b[0x1], a[0x1]);
        }
    });
    let ans = 0x0;
    let now = 0x0;
    if (kHzWwx['nCoFZ'](list['length'], 0x0)) {
        console['log'](0x0);
        return;
    }
    for (let i = 0x0; kHzWwx['gyvNM'](i, N); i++) {
        if (kHzWwx['ykONZ'](now, M)) {
            break;
        }
        if (kHzWwx['XEfKU'](list[i][0x0], kHzWwx['FDzLO'](M, now))) {
            continue;
        }
        ans += list[i][0x1];
        now++;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());