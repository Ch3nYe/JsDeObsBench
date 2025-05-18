'use strict';
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
input = input['split']('\x0a');
let info = input['shift']();
let N = info['split']('\x20')[0x0] * 0x1;
let X = info['split']('\x20')[0x1];
let arr = input['map'](_0x1cd677 => _0x1cd677 * 0x1);
let min = Math['min'](...arr);
let sum = arr['reduce']((_0xffc0a0, _0x18497d) => {
    return _0x18497d + _0xffc0a0;
});
let ans = N + Math['floor']((X - sum) / min);
console['log'](ans);