'use strict';
const main = arg => {
    const dSyGTO = {
        'SpVsr': function (x, y) {
            return x + y;
        },
        'BopiY': function (x, y) {
            return x === y;
        },
        'SFaRv': function (x, y) {
            return x === y;
        },
        'owtIn': function (x, y) {
            return x === y;
        },
        'JfGQk': function (x, y) {
            return x < y;
        },
        'DHqwQ': function (x, y) {
            return x * y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = parseInt(arg[0x0]);
    const names = arg['slice'](0x1, dSyGTO['SpVsr'](N, 0x1));
    const p = [
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1,
        0x2
    ];
    const q = [
        0x1,
        0x1,
        0x1,
        0x2,
        0x2,
        0x3,
        0x2,
        0x2,
        0x3,
        0x3
    ];
    const r = [
        0x2,
        0x3,
        0x4,
        0x3,
        0x4,
        0x4,
        0x3,
        0x4,
        0x4,
        0x4
    ];
    let march = [
        0x0,
        0x0,
        0x0,
        0x0,
        0x0
    ];
    for (let i in names) {
        const Ppqize = '0|3|4|2|1'['split']('|');
        let EIKBNG = 0x0;
        while (!![]) {
            switch (Ppqize[EIKBNG++]) {
            case '0':
                if (dSyGTO['BopiY'](names[i][0x0], 'M')) {
                    march[0x0]++;
                }
                continue;
            case '1':
                if (names[i][0x0] === 'H') {
                    march[0x4]++;
                }
                continue;
            case '2':
                if (dSyGTO['SFaRv'](names[i][0x0], 'C')) {
                    march[0x3]++;
                }
                continue;
            case '3':
                if (dSyGTO['owtIn'](names[i][0x0], 'A')) {
                    march[0x1]++;
                }
                continue;
            case '4':
                if (names[i][0x0] === 'R') {
                    march[0x2]++;
                }
                continue;
            }
            break;
        }
    }
    let answer = 0x0;
    for (let i = 0x0; dSyGTO['JfGQk'](i, 0xa); i++) {
        answer += dSyGTO['DHqwQ'](dSyGTO['DHqwQ'](march[p[i]], march[q[i]]), march[r[i]]);
    }
    console['log'](answer);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));