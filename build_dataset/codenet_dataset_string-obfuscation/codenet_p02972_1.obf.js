'use strict';
const a0_0x7b2029 = a0_0x4eae;
(function (stringArrayFunction, comparisonValue) {
    const _0x201aad = a0_0x4eae;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x201aad(0x1ed)) / 0x1 + -parseInt(_0x201aad(0x1f0)) / 0x2 + -parseInt(_0x201aad(0x201)) / 0x3 * (-parseInt(_0x201aad(0x1ff)) / 0x4) + -parseInt(_0x201aad(0x1f3)) / 0x5 * (-parseInt(_0x201aad(0x200)) / 0x6) + parseInt(_0x201aad(0x1fb)) / 0x7 * (parseInt(_0x201aad(0x1fd)) / 0x8) + parseInt(_0x201aad(0x1f5)) / 0x9 * (parseInt(_0x201aad(0x1fa)) / 0xa) + -parseInt(_0x201aad(0x1f1)) / 0xb * (-parseInt(_0x201aad(0x1fc)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4405, 0xac2f0));
function a0_0x4405() {
    const _0x5b15b0 = [
        '255835vmGCOL',
        'map',
        '2295FRVlgd',
        'length',
        'split',
        '/dev/stdin',
        'readFileSync',
        '890SmLQuM',
        '5625564NtJCqE',
        '132CVMipg',
        '8xEjvQu',
        'log',
        '10204JmNJuG',
        '6ZsDhDx',
        '123anwnCz',
        'push',
        'sqrt',
        '662775MZsdhW',
        'join',
        'forEach',
        '2316976iKlrzV',
        '1544422rjNfRC',
        'UTF-8'
    ];
    a0_0x4405 = function () {
        return _0x5b15b0;
    };
    return a0_0x4405();
}
const arg_str = require('fs')[a0_0x7b2029(0x1f9)](a0_0x7b2029(0x1f8), a0_0x7b2029(0x1f2));
const args = arg_str[a0_0x7b2029(0x1f7)]('\x0a');
const N = parseInt(args[0x0]);
const a_array = args[0x1][a0_0x7b2029(0x1f7)]('\x20')[a0_0x7b2029(0x1f4)](x => parseInt(x));
function a0_0x4eae(DfcSSg, key) {
    const stringArray = a0_0x4405();
    a0_0x4eae = function (index, key) {
        index = index - 0x1ed;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4eae(DfcSSg, key);
}
for (let i = N; i >= 0x1; i--) {
    let i_n = 0x0;
    if (i == 0x1) {
        i_n = N;
    } else {
        i_n = Math[a0_0x7b2029(0x203)](N);
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
a_array[a0_0x7b2029(0x1ef)]((item, index) => {
    const _0x29454c = a0_0x7b2029;
    if (item == 0x1) {
        result[_0x29454c(0x202)](index + 0x1);
    }
});
console[a0_0x7b2029(0x1fe)](result[a0_0x7b2029(0x1f6)]);
if (result[a0_0x7b2029(0x1f6)] > 0x0) {
    console[a0_0x7b2029(0x1fe)](result[a0_0x7b2029(0x1ee)]('\x20'));
}