'use strict';
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
let ws = new Set();
let prev = null;
console['log'](((() => {
    const KDTFoE = {
        'XEjgE': function (x, y) {
            return x + y;
        },
        'NjaFg': function (callee, param1) {
            return callee(param1);
        }
    };
    for (const w of input['slice'](0x1, KDTFoE['XEjgE'](KDTFoE['NjaFg'](parseInt, input[0x0]), 0x1))) {
        if (prev && prev != w[0x0]) {
            return 'No';
        }
        if (ws['has'](w)) {
            return 'No';
        }
        ws['add'](w);
        prev = w['substr'](-0x1);
    }
    return 'Yes';
})()));