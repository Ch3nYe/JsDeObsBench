'use strict';
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const info = input['trim']()['split']('\x0a');
const nums = info[0x1]['split']('\x20')['map'](_0x1a9f9c => _0x1a9f9c * 0x1);
const ave = Math['round'](nums['reduce']((_0x235cbd, _0x10fd95) => {
    return _0x10fd95 += _0x235cbd;
}) / info[0x0]);
let sum = 0x0;
for (let i = 0x0; i < info[0x0]; i++) {
    sum += Math['pow'](nums[i] - ave, 0x2);
}
console['log'](sum);