'use strict';
const a0_0x216db1 = a0_0x5bb8;
const arg_str = require('fs')[a0_0x216db1(0x0)](a0_0x216db1(0x1), a0_0x216db1(0x2));
const args_lines = arg_str[a0_0x216db1(0x3)]('\x0a');
function a0_0x1d7b() {
    const _0x392573 = [
        'readFileSync',
        '/dev/stdin',
        'UTF-8',
        'split',
        'map',
        'indexOf',
        'find',
        'log'
    ];
    a0_0x1d7b = function () {
        return _0x392573;
    };
    return a0_0x1d7b();
}
const n = args_lines[0x0];
const a = args_lines[0x1][a0_0x216db1(0x3)]('\x20')[a0_0x216db1(0x4)](x => parseInt(x));
const b = args_lines[0x2]['split']('\x20')['map'](x => parseInt(x));
function a0_0x5bb8(DUPzOV, key) {
    const stringArray = a0_0x1d7b();
    a0_0x5bb8 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5bb8(DUPzOV, key);
}
let cnt = 0x0;
let current_b = b;
while (!![]) {
    const max_index = current_b[a0_0x216db1(0x5)](Math['max'](...current_b));
    if (max_index == 0x0) {
        current_b[max_index] = current_b[max_index] - current_b[0x1] - current_b[n - 0x1];
    } else if (max_index == n - 0x1) {
        current_b[max_index] = current_b[max_index] - current_b[n - 0x2] - current_b[0x0];
    } else {
        current_b[max_index] = current_b[max_index] - current_b[max_index - 0x1] - current_b[max_index + 0x1];
    }
    cnt++;
    if (JSON['stringify'](current_b) == JSON['stringify'](a)) {
        console['log'](cnt);
        break;
    }
    if (current_b[a0_0x216db1(0x6)](x => x < 0x1)) {
        console[a0_0x216db1(0x7)](-0x1);
        break;
    }
}