'use strict';
const arg_str = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
const args = arg_str['split']('\x0a');
const N = parseInt(args[0x0]);
const a_array = args[0x1]['split']('\x20')['map'](x => parseInt(x));
for (let i = N; i >= 0x1; i--) {
    let i_n = 0x0;
    if (i == 0x1) {
        i_n = N;
    } else {
        i_n = Math['sqrt'](N);
    }
    for (let j = i_n; j >= 0x1; j--) {
        if (i < j) {
            if (j % i == 0x0) {
                a_array[i - 0x1] ^= a_array[j - 0x1];
            }
        } else {
            continue;
        }
    }
}
const result = [];
a_array['forEach']((item, index) => {
    const RDRFPo = {
        'ApqtD': function (x, y) {
            return x == y;
        }
    };
    if (RDRFPo['ApqtD'](item, 0x1)) {
        result['push'](index + 0x1);
    }
});
console['log'](result['length']);
if (result['length'] > 0x0) {
    console['log'](result['join']('\x20'));
}