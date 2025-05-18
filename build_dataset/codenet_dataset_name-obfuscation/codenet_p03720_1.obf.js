'use strict';
let lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
let N = +lines[0x0]['split']('\x20')[0x0];
let ABs = lines['slice'](0x1)['map'](_0x2684dd => _0x2684dd['split']('\x20')['map'](Number));
let res = [];
for (let i = 0x0; i < N; i++)
    res[i] = 0x0;
ABs['forEach'](_0x2b4364 => {
    res[_0x2b4364[0x0] - 0x1]++;
    res[_0x2b4364[0x1] - 0x1]++;
});
res['forEach'](_0x522d88 => console['log'](_0x522d88));