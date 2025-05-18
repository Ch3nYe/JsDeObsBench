'use strict';
const a0_0x296fce = a0_0x3450;
function a0_0x3450(CmEpki, key) {
    const stringArray = a0_0x2b10();
    a0_0x3450 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3450(CmEpki, key);
}
function main(input) {
    const _0x476c02 = a0_0x3450;
    input = input[_0x476c02(0x0)]()[_0x476c02(0x1)]('\x0a');
    const N = Number(input[0x0]);
    const line2_arr = input[0x1][_0x476c02(0x1)]('\x20');
    let ans = 0x0;
    for (let i = 0x0; i < N; i++) {
        if (Number(line2_arr[i]) == 0x0)
            continue;
        for (let j = i + 0x1; j < N; j++) {
            ans = ans + Number(line2_arr[i]) * Number(line2_arr[j]);
        }
    }
    console[_0x476c02(0x2)](ans % 0x3b9aca07);
}
function numberSort(array) {
    array['sort'](f);
    return array;
}
var f = function (a, b) {
    return a - b;
};
main(require('fs')[a0_0x296fce(0x3)](a0_0x296fce(0x4), a0_0x296fce(0x5)));
function a0_0x2b10() {
    const _0x3e136a = [
        'trim',
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf-8'
    ];
    a0_0x2b10 = function () {
        return _0x3e136a;
    };
    return a0_0x2b10();
}