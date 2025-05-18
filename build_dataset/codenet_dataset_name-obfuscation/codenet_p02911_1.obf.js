'use strict';
let arg_str = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
arg_str = arg_str['split']('\x0a');
const arg_str_0 = arg_str[0x0]['split']('\x20');
const N = arg_str_0[0x0];
const K = arg_str_0[0x1];
const Q = arg_str_0[0x2];
const A_array = arg_str['slice'](0x1);
let result_val = [];
for (let i = 0x0; i < N; i++) {
    result_val[i] = K;
}
A_array['forEach']((_0x15b308, _0x3c1caa) => {
    for (let _0x11acf9 = 0x0; _0x11acf9 < N; _0x11acf9++) {
        if (_0x15b308 - 0x1 != _0x11acf9) {
            result_val[_0x11acf9]--;
        }
    }
});
result_val['map'](_0x55e6c7 => _0x55e6c7 > 0x0 ? console['log']('Yes') : console['log']('No'));