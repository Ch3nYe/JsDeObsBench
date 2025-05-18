'use strict';
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
let ws = new Set();
let prev = null;
console['log'](((() => {
    for (const _0x47ca16 of input['slice'](0x1, parseInt(input[0x0]) + 0x1)) {
        if (prev && prev != _0x47ca16[0x0]) {
            return 'No';
        }
        if (ws['has'](_0x47ca16)) {
            return 'No';
        }
        ws['add'](_0x47ca16);
        prev = _0x47ca16['substr'](-0x1);
    }
    return 'Yes';
})()));