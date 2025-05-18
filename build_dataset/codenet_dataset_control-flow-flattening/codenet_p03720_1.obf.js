'use strict';
let lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
let N = +lines[0x0]['split']('\x20')[0x0];
let ABs = lines['slice'](0x1)['map'](line => line['split']('\x20')['map'](Number));
let res = [];
for (let i = 0x0; i < N; i++)
    res[i] = 0x0;
ABs['forEach'](ab => {
    const mGmDJp = {
        'ZHwkK': function (x, y) {
            return x - y;
        }
    };
    res[ab[0x0] - 0x1]++;
    res[mGmDJp['ZHwkK'](ab[0x1], 0x1)]++;
});
res['forEach'](n => console['log'](n));