'use strict';
function a0_0x5578() {
    const _0x2a4c8d = [
        'max',
        'log',
        '35988sXMjIh',
        '/dev/stdin',
        'indexOf',
        'split',
        '2240298VLjJDK',
        '47176wgqidq',
        '147InumRb',
        'stringify',
        'readFileSync',
        'find',
        'map',
        '6270HjVIlJ',
        '1049QEOCHC',
        '786WJvOXJ',
        '854eDeDPK',
        '4781136GDedUu',
        '5300nbwwUj',
        '2509010ggMOzC'
    ];
    a0_0x5578 = function () {
        return _0x2a4c8d;
    };
    return a0_0x5578();
}
const a0_0x2d8782 = a0_0x417f;
(function (stringArrayFunction, comparisonValue) {
    const _0x2db504 = a0_0x417f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2db504(0xcd)) / 0x1 * (parseInt(_0x2db504(0xce)) / 0x2) + parseInt(_0x2db504(0xc7)) / 0x3 * (parseInt(_0x2db504(0xd5)) / 0x4) + -parseInt(_0x2db504(0xd2)) / 0x5 + parseInt(_0x2db504(0xd0)) / 0x6 + -parseInt(_0x2db504(0xcf)) / 0x7 * (parseInt(_0x2db504(0xda)) / 0x8) + -parseInt(_0x2db504(0xd9)) / 0x9 + -parseInt(_0x2db504(0xd1)) / 0xa * (-parseInt(_0x2db504(0xcc)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5578, 0x75a74));
const arg_str = require('fs')[a0_0x2d8782(0xc9)](a0_0x2d8782(0xd6), 'UTF-8');
const args_lines = arg_str[a0_0x2d8782(0xd8)]('\x0a');
const n = args_lines[0x0];
const a = args_lines[0x1][a0_0x2d8782(0xd8)]('\x20')[a0_0x2d8782(0xcb)](x => parseInt(x));
const b = args_lines[0x2][a0_0x2d8782(0xd8)]('\x20')['map'](x => parseInt(x));
function a0_0x417f(SeLPCQ, key) {
    const stringArray = a0_0x5578();
    a0_0x417f = function (index, key) {
        index = index - 0xc7;
        let value = stringArray[index];
        return value;
    };
    return a0_0x417f(SeLPCQ, key);
}
let cnt = 0x0;
let current_b = b;
while (!![]) {
    const max_index = current_b[a0_0x2d8782(0xd7)](Math[a0_0x2d8782(0xd3)](...current_b));
    if (max_index == 0x0) {
        current_b[max_index] = current_b[max_index] - current_b[0x1] - current_b[n - 0x1];
    } else if (max_index == n - 0x1) {
        current_b[max_index] = current_b[max_index] - current_b[n - 0x2] - current_b[0x0];
    } else {
        current_b[max_index] = current_b[max_index] - current_b[max_index - 0x1] - current_b[max_index + 0x1];
    }
    cnt++;
    if (JSON['stringify'](current_b) == JSON[a0_0x2d8782(0xc8)](a)) {
        console[a0_0x2d8782(0xd4)](cnt);
        break;
    }
    if (current_b[a0_0x2d8782(0xca)](x => x < 0x1)) {
        console[a0_0x2d8782(0xd4)](-0x1);
        break;
    }
}