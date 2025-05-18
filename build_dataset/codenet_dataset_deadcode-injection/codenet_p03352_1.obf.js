'use strict';
const a0_0x115942 = a0_0x4d31;
function a0_0x4d31(DLrzmv, key) {
    const stringArray = a0_0x2f8e();
    a0_0x4d31 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4d31(DLrzmv, key);
}
function main(s) {
    const _0xc4add0 = a0_0x4d31;
    const x = Number(s);
    const nums = [...Array(0x1f)][_0xc4add0(0x0)]((x, i) => i + 0x1);
    nums[_0xc4add0(0x1)]();
    const max_ary = [0x1];
    for (let i = 0x0; i < nums[_0xc4add0(0x2)]; i++) {
        let j = 0x2;
        let n = nums[i];
        let max = Math[_0xc4add0(0x3)](n, j);
        if (max > x)
            continue;
        while (max <= x) {
            j += 0x1;
            max = Math[_0xc4add0(0x3)](n, j);
        }
        max = Math[_0xc4add0(0x3)](n, j - 0x1);
        max_ary['push'](max);
    }
    const ans = Math['max'](...max_ary);
    console[_0xc4add0(0x4)](ans);
}
main(require('fs')[a0_0x115942(0x5)](a0_0x115942(0x6), a0_0x115942(0x7)));
function a0_0x2f8e() {
    const _0x4f7a06 = [
        'map',
        'shift',
        'length',
        'pow',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2f8e = function () {
        return _0x4f7a06;
    };
    return a0_0x2f8e();
}