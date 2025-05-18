'use strict';
const main = arg => {
    const qmZuZW = {
        'OstDz': function (callee, param1) {
            return callee(param1);
        },
        'sbeAr': function (x, y) {
            return x < y;
        },
        'deKgf': 'Yes'
    };
    arg = arg['trim']()['split']('\x0a');
    const N = qmZuZW['OstDz'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    let L = arg[0x1]['split']('\x20')['map'](n => parseInt(n))['sort']((a, b) => b - a);
    const longest = L['shift']();
    const sum = L['reduce']((m, n) => m + n);
    console['log'](qmZuZW['sbeAr'](longest, sum) ? qmZuZW['deKgf'] : 'No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));