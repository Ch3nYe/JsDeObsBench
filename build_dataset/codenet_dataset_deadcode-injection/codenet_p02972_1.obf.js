'use strict';
const a0_0x27a97e = a0_0x3a9b;
function a0_0x3a9b(fcXgbW, key) {
    const stringArray = a0_0x297f();
    a0_0x3a9b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3a9b(fcXgbW, key);
}
const arg_str = require('fs')[a0_0x27a97e(0x0)](a0_0x27a97e(0x1), 'UTF-8');
const args = arg_str[a0_0x27a97e(0x2)]('\x0a');
const N = parseInt(args[0x0]);
const a_array = args[0x1][a0_0x27a97e(0x2)]('\x20')[a0_0x27a97e(0x3)](x => parseInt(x));
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
a_array[a0_0x27a97e(0x4)]((item, index) => {
    if (item == 0x1) {
        result['push'](index + 0x1);
    }
});
console[a0_0x27a97e(0x5)](result[a0_0x27a97e(0x6)]);
function a0_0x297f() {
    const _0x45971e = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'map',
        'forEach',
        'log',
        'length',
        'join'
    ];
    a0_0x297f = function () {
        return _0x45971e;
    };
    return a0_0x297f();
}
if (result[a0_0x27a97e(0x6)] > 0x0) {
    console[a0_0x27a97e(0x5)](result[a0_0x27a97e(0x7)]('\x20'));
}