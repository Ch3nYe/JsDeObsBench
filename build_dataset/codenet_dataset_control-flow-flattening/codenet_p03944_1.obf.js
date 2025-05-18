'use strict';
function Main(input) {
    const VHAEED = {
        'vqKoE': function (x, y) {
            return x === y;
        },
        'ogepS': function (x, y) {
            return x > y;
        },
        'LtJVQ': function (x, y) {
            return x === y;
        },
        'lNtYl': function (x, y) {
            return x < y;
        },
        'ybZtS': function (x, y) {
            return x - y;
        },
        'SUmmA': function (x, y) {
            return x <= y;
        }
    };
    input = input['trim']()['split']('\x0a');
    let WHN = input[0x0]['split']('\x20')['map'](Number);
    let minX = 0x0;
    let minY = 0x0;
    let maxX = WHN[0x0];
    let maxY = WHN[0x1];
    const N = WHN[0x2];
    for (let i = 0x1; i <= N; i++) {
        let tmp = input[i]['trim']()['split']('\x20')['map'](Number);
        let A = tmp[0x2];
        if (VHAEED['vqKoE'](A, 0x1)) {
            if (VHAEED['ogepS'](tmp[0x0], minX)) {
                minX = tmp[0x0];
            }
        } else if (VHAEED['LtJVQ'](A, 0x2)) {
            if (VHAEED['lNtYl'](tmp[0x0], maxX)) {
                maxX = tmp[0x0];
            }
        } else if (A === 0x3) {
            if (VHAEED['ogepS'](tmp[0x1], minY)) {
                minY = tmp[0x1];
            }
        } else if (VHAEED['vqKoE'](A, 0x4)) {
            if (tmp[0x1] < maxY) {
                maxY = tmp[0x1];
            }
        }
    }
    const X = VHAEED['ybZtS'](maxX, minX);
    const Y = VHAEED['ybZtS'](maxY, minY);
    if (VHAEED['SUmmA'](X, 0x0) || VHAEED['SUmmA'](Y, 0x0)) {
        console['log'](0x0);
    } else {
        console['log'](X * Y);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));