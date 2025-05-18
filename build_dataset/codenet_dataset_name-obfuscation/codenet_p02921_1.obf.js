'use strict';
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const Nums = input['split']('\x0a');
const S = Nums[0x0]['split']('');
const T = Nums[0x1]['split']('');
let ans = 0x0;
S['forEach']((_0x57779f, _0x39ced2) => {
    if (_0x57779f == T[_0x39ced2]) {
        ans++;
    }
});
console['log'](ans);