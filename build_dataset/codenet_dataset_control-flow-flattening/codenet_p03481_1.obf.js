'use strict';
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x20')['map'](x => x * 0x1);
let ans = 0x0;
let max = input[0x1];
let div = input[0x0];
let tmpNum = div;
while (tmpNum < max + 0x1) {
    tmpNum *= 0x2;
    ans++;
}
console['log'](ans);