'use strict';
const a0_0x2b6d77 = a0_0x40ed;
let arg_str = require('fs')[a0_0x2b6d77(0x0)]('/dev/stdin', a0_0x2b6d77(0x1));
arg_str = arg_str['split']('\x0a');
const arg_str_0 = arg_str[0x0][a0_0x2b6d77(0x2)]('\x20');
function a0_0x293d() {
    const _0x4a0ad6 = [
        'readFileSync',
        'UTF-8',
        'split',
        'slice',
        'Yes'
    ];
    a0_0x293d = function () {
        return _0x4a0ad6;
    };
    return a0_0x293d();
}
const N = arg_str_0[0x0];
const K = arg_str_0[0x1];
const Q = arg_str_0[0x2];
const A_array = arg_str[a0_0x2b6d77(0x3)](0x1);
let result_val = [];
for (let i = 0x0; i < N; i++) {
    result_val[i] = K;
}
function a0_0x40ed(LtuBUF, key) {
    const stringArray = a0_0x293d();
    a0_0x40ed = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x40ed(LtuBUF, key);
}
A_array['forEach']((item, index) => {
    for (let i = 0x0; i < N; i++) {
        if (item - 0x1 != i) {
            result_val[i]--;
        }
    }
});
result_val['map'](x => x > 0x0 ? console['log'](a0_0x2b6d77(0x4)) : console['log']('No'));