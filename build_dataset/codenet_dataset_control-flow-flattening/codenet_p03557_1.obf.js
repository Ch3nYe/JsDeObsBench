'use strict';
function main(input) {
    const fRMEwe = {
        'Mphmh': function (callee, param1) {
            return callee(param1);
        },
        'znlrW': function (x, y) {
            return x < y;
        },
        'zPBqj': function (x, y) {
            return x < y;
        },
        'mTAif': function (x, y) {
            return x <= y;
        },
        'ptiZy': function (x, y) {
            return x >= y;
        },
        'CiTWZ': function (x, y) {
            return x * y;
        }
    };
    const lines = input['split']('\x0a');
    const N = fRMEwe['Mphmh'](parseInt, lines['shift']());
    const A = lines['shift']()['split']('\x20')['map'](x => parseInt(x))['sort']((a, b) => a - b);
    const B = lines['shift']()['split']('\x20')['map'](x => parseInt(x))['sort']((a, b) => a - b);
    const C = lines['shift']()['split']('\x20')['map'](x => parseInt(x))['sort']((a, b) => a - b);
    let result = 0x0;
    for (let b = 0x0; fRMEwe['znlrW'](b, N); b++) {
        let current_b = B[b];
        let count_a = N;
        for (let a = 0x0; fRMEwe['zPBqj'](a, N); a++) {
            if (fRMEwe['mTAif'](current_b, A[a])) {
                count_a--;
            }
        }
        let count_c = N;
        for (let c = 0x0; fRMEwe['zPBqj'](c, N); c++) {
            if (fRMEwe['ptiZy'](current_b, C[c])) {
                count_c--;
            }
        }
        result += fRMEwe['CiTWZ'](count_a, count_c);
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));