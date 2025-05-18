'use strict';
const a0_0x58aa0b = a0_0xb335;
(function (stringArrayFunction, comparisonValue) {
    const _0x4086b1 = a0_0xb335;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4086b1(0xae)) / 0x1 * (-parseInt(_0x4086b1(0xac)) / 0x2) + -parseInt(_0x4086b1(0xb8)) / 0x3 * (-parseInt(_0x4086b1(0xa9)) / 0x4) + -parseInt(_0x4086b1(0xb2)) / 0x5 * (-parseInt(_0x4086b1(0xb1)) / 0x6) + -parseInt(_0x4086b1(0xb6)) / 0x7 + -parseInt(_0x4086b1(0xaa)) / 0x8 + -parseInt(_0x4086b1(0xb4)) / 0x9 + parseInt(_0x4086b1(0xad)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5a64, 0xda425));
let arg_str = require('fs')['readFileSync'](a0_0x58aa0b(0xb9), a0_0x58aa0b(0xab));
arg_str = arg_str[a0_0x58aa0b(0xba)]('\x0a');
const arg_str_0 = arg_str[0x0]['split']('\x20');
function a0_0x5a64() {
    const _0x524816 = [
        'slice',
        '1122058XTqBiN',
        'forEach',
        '40845wberzV',
        '/dev/stdin',
        'split',
        '204iZnipU',
        '11038368PQyExg',
        'UTF-8',
        '10KUvQdS',
        '6597500OnMaWv',
        '291271WaWqzm',
        'log',
        'Yes',
        '4242lPKewm',
        '4115mxZtEY',
        'map',
        '8624268JiBxcl'
    ];
    a0_0x5a64 = function () {
        return _0x524816;
    };
    return a0_0x5a64();
}
function a0_0xb335(YCuAgF, key) {
    const stringArray = a0_0x5a64();
    a0_0xb335 = function (index, key) {
        index = index - 0xa9;
        let value = stringArray[index];
        return value;
    };
    return a0_0xb335(YCuAgF, key);
}
const N = arg_str_0[0x0];
const K = arg_str_0[0x1];
const Q = arg_str_0[0x2];
const A_array = arg_str[a0_0x58aa0b(0xb5)](0x1);
let result_val = [];
for (let i = 0x0; i < N; i++) {
    result_val[i] = K;
}
A_array[a0_0x58aa0b(0xb7)]((item, index) => {
    for (let i = 0x0; i < N; i++) {
        if (item - 0x1 != i) {
            result_val[i]--;
        }
    }
});
result_val[a0_0x58aa0b(0xb3)](x => x > 0x0 ? console[a0_0x58aa0b(0xaf)](a0_0x58aa0b(0xb0)) : console[a0_0x58aa0b(0xaf)]('No'));