'use strict';
const a0_0x52386c = a0_0x2c5b;
(function (stringArrayFunction, comparisonValue) {
    const _0x3db56b = a0_0x2c5b;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x3db56b(0x189)) / 0x1 * (-parseInt(_0x3db56b(0x193)) / 0x2) + -parseInt(_0x3db56b(0x18d)) / 0x3 + -parseInt(_0x3db56b(0x185)) / 0x4 * (parseInt(_0x3db56b(0x186)) / 0x5) + parseInt(_0x3db56b(0x18f)) / 0x6 + -parseInt(_0x3db56b(0x187)) / 0x7 * (parseInt(_0x3db56b(0x183)) / 0x8) + -parseInt(_0x3db56b(0x184)) / 0x9 + -parseInt(_0x3db56b(0x191)) / 0xa * (-parseInt(_0x3db56b(0x194)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x51ba, 0x23fec));
function a0_0x2c5b(JitCMS, key) {
    const stringArray = a0_0x51ba();
    a0_0x2c5b = function (index, key) {
        index = index - 0x183;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2c5b(JitCMS, key);
}
const arg_str = require('fs')[a0_0x52386c(0x18a)](a0_0x52386c(0x18b), a0_0x52386c(0x190));
function a0_0x51ba() {
    const _0x11078c = [
        'map',
        '8kVPcwz',
        '915318wsBrsS',
        '1056ysyDSe',
        '4890XTvrHg',
        '46711qcfroy',
        'apply',
        '42WNtVqx',
        'readFileSync',
        '/dev/stdin',
        'log',
        '320145qfESxl',
        'split',
        '187044apmqZr',
        'UTF-8',
        '10yFrnUw',
        'floor',
        '10886iKoQLz',
        '8999650XAPGAk'
    ];
    a0_0x51ba = function () {
        return _0x11078c;
    };
    return a0_0x51ba();
}
const args_lines = arg_str['split']('\x0a');
const n_m = args_lines[0x0]['split']('\x20');
const N = n_m[0x0];
const M = n_m[0x1];
let A_array = args_lines[0x1][a0_0x52386c(0x18e)]('\x20');
A_array = A_array[a0_0x52386c(0x195)](x => parseInt(x));
for (let i = 0x0; i < M; i++) {
    const max_value = Math['max'][a0_0x52386c(0x188)](null, A_array);
    const max_index = A_array['indexOf'](max_value);
    A_array[max_index] = A_array[max_index] / 0x2;
}
const result = A_array[a0_0x52386c(0x195)](x => Math[a0_0x52386c(0x192)](x))['reduce']((a, x) => a += x, 0x0);
console[a0_0x52386c(0x18c)](result);