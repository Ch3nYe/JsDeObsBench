'use strict';
function a0_0x3ee5(DIJQRu, key) {
    const stringArray = a0_0x1bf3();
    a0_0x3ee5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3ee5(DIJQRu, key);
}
const a0_0x5d4794 = a0_0x3ee5;
const arg_str = require('fs')[a0_0x5d4794(0x0)](a0_0x5d4794(0x1), a0_0x5d4794(0x2));
const args_lines = arg_str[a0_0x5d4794(0x3)]('\x0a');
const n_m = args_lines[0x0]['split']('\x20');
const N = n_m[0x0];
const M = n_m[0x1];
let A_array = args_lines[0x1]['split']('\x20');
A_array = A_array['map'](x => parseInt(x));
for (let i = 0x0; i < M; i++) {
    const max_value = Math[a0_0x5d4794(0x4)][a0_0x5d4794(0x5)](null, A_array);
    const max_index = A_array['indexOf'](max_value);
    A_array[max_index] = A_array[max_index] / 0x2;
}
const result = A_array[a0_0x5d4794(0x6)](x => Math[a0_0x5d4794(0x7)](x))['reduce']((a, x) => a += x, 0x0);
console['log'](result);
function a0_0x1bf3() {
    const _0x1fdef0 = [
        'readFileSync',
        '/dev/stdin',
        'UTF-8',
        'split',
        'max',
        'apply',
        'map',
        'floor'
    ];
    a0_0x1bf3 = function () {
        return _0x1fdef0;
    };
    return a0_0x1bf3();
}