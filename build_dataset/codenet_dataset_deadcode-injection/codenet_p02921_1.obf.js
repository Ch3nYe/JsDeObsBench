'use strict';
const a0_0x428dd6 = a0_0x2cbf;
let input = require('fs')[a0_0x428dd6(0x0)]('/dev/stdin', 'utf8');
const Nums = input[a0_0x428dd6(0x1)]('\x0a');
const S = Nums[0x0][a0_0x428dd6(0x1)]('');
const T = Nums[0x1][a0_0x428dd6(0x1)]('');
let ans = 0x0;
S[a0_0x428dd6(0x2)]((x, i) => {
    if (x == T[i]) {
        ans++;
    }
});
function a0_0x2cbf(iLPXQx, key) {
    const stringArray = a0_0x6fc6();
    a0_0x2cbf = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2cbf(iLPXQx, key);
}
function a0_0x6fc6() {
    const _0x25fec8 = [
        'readFileSync',
        'split',
        'forEach',
        'log'
    ];
    a0_0x6fc6 = function () {
        return _0x25fec8;
    };
    return a0_0x6fc6();
}
console[a0_0x428dd6(0x3)](ans);