'use strict';
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const info = input['trim']()['split']('\x0a');
const nums = info[0x1]['split']('\x20')['map'](x => x * 0x1);
const ave = Math['round'](nums['reduce']((x, a) => {
    return a += x;
}) / info[0x0]);
let sum = 0x0;
for (let i = 0x0; i < info[0x0]; i++) {
    sum += Math['pow'](nums[i] - ave, 0x2);
}
console['log'](sum);