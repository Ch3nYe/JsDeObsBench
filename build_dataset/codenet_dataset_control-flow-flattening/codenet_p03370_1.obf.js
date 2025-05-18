'use strict';
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
input = input['split']('\x0a');
let info = input['shift']();
let N = info['split']('\x20')[0x0] * 0x1;
let X = info['split']('\x20')[0x1];
let arr = input['map'](x => x * 0x1);
let min = Math['min'](...arr);
let sum = arr['reduce']((x, a) => {
    return a + x;
});
let ans = N + Math['floor']((X - sum) / min);
console['log'](ans);