'use strict';
const arg_str = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
const args_lines = arg_str['split']('\x0a');
const n_m = args_lines[0x0]['split']('\x20');
const N = n_m[0x0];
const M = n_m[0x1];
let A_array = args_lines[0x1]['split']('\x20');
A_array = A_array['map'](_0x2a48b9 => parseInt(_0x2a48b9));
for (let i = 0x0; i < M; i++) {
    const max_value = Math['max']['apply'](null, A_array);
    const max_index = A_array['indexOf'](max_value);
    A_array[max_index] = A_array[max_index] / 0x2;
}
const result = A_array['map'](_0x2b7603 => Math['floor'](_0x2b7603))['reduce']((_0x18b9f5, _0x235e31) => _0x18b9f5 += _0x235e31, 0x0);
console['log'](result);