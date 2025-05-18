'use strict';
function main(input) {
    const GOwTXm = {
        'wdGHY': function (callee, param1) {
            return callee(param1);
        },
        'moDAS': function (x, y) {
            return x + y;
        },
        'gsSOe': function (x, y) {
            return x < y;
        },
        'ymsBH': function (x, y) {
            return x > y;
        },
        'LuoKr': function (x, y) {
            return x - y;
        },
        'fWImE': function (x, y) {
            return x - y;
        },
        'MHnVZ': function (x, y) {
            return x === y;
        },
        'CYAvn': function (callee, param1) {
            return callee(param1);
        },
        'GkdJz': function (x, y) {
            return x === y;
        }
    };
    const k = GOwTXm['wdGHY'](parseInt, input[0x0]);
    let i = 0x1;
    let runruncounter = 0x0;
    while (!![]) {
        const j = GOwTXm['moDAS'](i, '')['split']('')['map'](a => parseInt(a));
        let judge = !![];
        for (let l = 0x1; GOwTXm['gsSOe'](l, j['length']); l++) {
            if (GOwTXm['ymsBH'](Math['abs'](GOwTXm['LuoKr'](j[l], j[GOwTXm['fWImE'](l, 0x1)])), 0x1)) {
                judge = ![];
                if (GOwTXm['MHnVZ'](j[l], 0x9)) {
                    j[l - 0x1] += 0x1;
                    j[l] = 0x0;
                } else {
                    j[l] += 0x1;
                }
                i = GOwTXm['CYAvn'](parseInt, j['join'](''));
                break;
            }
        }
        if (judge) {
            runruncounter++;
            if (GOwTXm['GkdJz'](runruncounter, k)) {
                console['log'](i);
                break;
            }
            i++;
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));