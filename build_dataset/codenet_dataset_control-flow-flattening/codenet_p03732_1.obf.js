'use strict';
const main = arg => {
    const gcxOyz = {
        'oPPsg': function (callee, param1) {
            return callee(param1);
        },
        'kUDuW': function (callee, param1) {
            return callee(param1);
        },
        'iYteW': function (callee, param1) {
            return callee(param1);
        },
        'aPIWj': function (x, y) {
            return x + y;
        },
        'fiaQk': function (x, y) {
            return x < y;
        },
        'UKnNz': function (x, y) {
            return x - y;
        },
        'Jdwvi': function (x, y) {
            return x + y;
        },
        'TCQVQ': function (x, y) {
            return x > y;
        },
        'qBTRS': function (x, y) {
            return x - y;
        },
        'NXAJL': function (x, y) {
            return x - y;
        },
        'Pugbw': function (x, y) {
            return x > y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = gcxOyz['oPPsg'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const W = gcxOyz['kUDuW'](parseInt, arg[0x0]['split']('\x20')[0x1]);
    const wv = arg['slice'](0x1, N + 0x1)['map'](n => n['split']('\x20')['map'](l => parseInt(l)));
    let dp = [...gcxOyz['iYteW'](Array, gcxOyz['aPIWj'](N, 0x1))]['map'](n => [...Array(W + 0x1)]['fill'](0x0));
    let answer = 0x0;
    for (let i = 0x1; gcxOyz['fiaQk'](i, gcxOyz['aPIWj'](N, 0x1)); i++) {
        const w = wv[gcxOyz['UKnNz'](i, 0x1)][0x0];
        const v = wv[gcxOyz['UKnNz'](i, 0x1)][0x1];
        for (let j = 0x0; j < gcxOyz['Jdwvi'](W, 0x1); j++) {
            if (gcxOyz['TCQVQ'](w, j)) {
                dp[i][j] = dp[gcxOyz['UKnNz'](i, 0x1)][j];
            } else {
                dp[i][j] = Math['max'](dp[gcxOyz['qBTRS'](i, 0x1)][j], gcxOyz['aPIWj'](v, dp[i - 0x1][gcxOyz['NXAJL'](j, w)]));
            }
            if (gcxOyz['Pugbw'](dp[i][j], answer)) {
                answer = dp[i][j];
            }
        }
    }
    console['log'](answer);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));