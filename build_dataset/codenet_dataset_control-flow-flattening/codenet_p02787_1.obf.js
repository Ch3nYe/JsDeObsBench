'use strict';
function Main(input) {
    const OCHgsT = {
        'iDWng': function (x, y) {
            return x + y;
        },
        'MhUSb': function (x, y) {
            return x < y;
        },
        'hkQWu': function (x, y) {
            return x <= y;
        },
        'IlSqO': function (x, y) {
            return x + y;
        },
        'EbhTb': function (x, y) {
            return x + y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const array = input[0x0]['split']('\x20')['map'](s => parseInt(s));
    const rest = input['slice'](0x1);
    const H = array[0x0];
    const N = array[0x1];
    const magic = [];
    for (let i = 0x0; i < rest['length']; ++i) {
        const a = rest[i]['split']('\x20')['map'](s => parseInt(s));
        magic['push']([
            a[0x0],
            a[0x1]
        ]);
    }
    magic['sort']((a, b) => a[0x0] - b[0x0]);
    let dp = Array(OCHgsT['iDWng'](H, 0x1))['fill'](Infinity);
    dp[0x0] = 0x0;
    for (let i = 0x0; OCHgsT['MhUSb'](i, N); ++i) {
        const w = magic[i][0x0];
        const v = magic[i][0x1];
        for (let j = 0x0; OCHgsT['hkQWu'](j, H); ++j) {
            const min = Math['min'](OCHgsT['IlSqO'](j, w), H);
            dp[min] = Math['min'](dp[min], OCHgsT['EbhTb'](dp[j], v));
        }
    }
    console['log'](dp[H]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));