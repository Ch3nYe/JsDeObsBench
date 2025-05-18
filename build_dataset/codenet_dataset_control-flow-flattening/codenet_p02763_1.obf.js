'use strict';
function main(input) {
    const sjeNsU = {
        'CDBBK': function (callee, param1) {
            return callee(param1);
        },
        'eICZG': function (callee, param1) {
            return callee(param1);
        },
        'XSlfc': function (x, y) {
            return x < y;
        },
        'nzYcT': function (x, y) {
            return x + y;
        },
        'gAZOD': function (x, y) {
            return x === y;
        },
        'OCKgm': function (callee, param1) {
            return callee(param1);
        },
        'KRmsO': function (callee, param1) {
            return callee(param1);
        },
        'ZFzbd': function (x, y) {
            return x - y;
        }
    };
    let n = sjeNsU['CDBBK'](parseInt, input[0x0]);
    let s = input[0x1];
    let q_l = sjeNsU['eICZG'](parseInt, input[0x2]);
    let q = [];
    for (let j = 0x0; sjeNsU['XSlfc'](j, q_l); j++) {
        let kari = input[sjeNsU['nzYcT'](j, 0x3)]['trim']()['split']('\x20');
        q[j] = sjeNsU['CDBBK'](parseInt, kari[0x0]);
        if (sjeNsU['gAZOD'](q[j], 0x1)) {
            let i = sjeNsU['OCKgm'](parseInt, kari[0x1]);
            let c = kari[0x2];
            let str1 = s['slice'](0x0, i - 0x1);
            let str2 = s['slice'](i);
            s = str1 + c + str2;
        } else {
            let l = sjeNsU['CDBBK'](parseInt, kari[0x1]);
            let r = sjeNsU['KRmsO'](parseInt, kari[0x2]);
            let str = s['slice'](sjeNsU['ZFzbd'](l, 0x1), r);
            let list = {};
            let counter = 0x0;
            for (let i = 0x0; i < str['length']; i++) {
                if (sjeNsU['gAZOD'](list[str[i]], undefined)) {
                    counter++;
                    list[str[i]] = !![];
                }
            }
            console['log'](counter);
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));