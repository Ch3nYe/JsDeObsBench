'use strict';
const arg_str = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
const args_lines = arg_str['split']('\x0a');
const n = args_lines[0x0];
const a = args_lines[0x1]['split']('\x20')['map'](x => parseInt(x));
const b = args_lines[0x2]['split']('\x20')['map'](x => parseInt(x));
let cnt = 0x0;
let current_b = b;
while (!![]) {
    const max_index = current_b['indexOf'](Math['max'](...current_b));
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
    if (current_b['find'](x => x < 0x1)) {
        console['log'](-0x1);
        break;
    }
}