'use strict';
function a0_0x5e1e(lmhyWG, key) {
    const stringArray = a0_0x31c4();
    a0_0x5e1e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5e1e(lmhyWG, key);
}
const a0_0x31a79e = a0_0x5e1e;
function a0_0x31c4() {
    const _0x31d6f8 = [
        'trim',
        'split',
        'readFileSync',
        'utf8'
    ];
    a0_0x31c4 = function () {
        return _0x31d6f8;
    };
    return a0_0x31c4();
}
const Main = arg => {
    const _0x1190fe = a0_0x5e1e;
    let input = arg[_0x1190fe(0x0)]()['split']('\x0a');
    let n = parseInt(input[0x0]);
    let pArr = input[0x1][_0x1190fe(0x1)]('\x20')['map'](Number);
    let count = 0x0;
    for (let i = 0x1; i - 0x1 < n; i++) {
        if (pArr[i - 0x1] < pArr[i] && pArr[i] < pArr[i + 0x1] || pArr[i + 0x1] < pArr[i] && pArr[i] < pArr[i - 0x1]) {
            count += 0x1;
        }
    }
    console['log'](count);
};
Main(require('fs')[a0_0x31a79e(0x2)]('/dev/stdin', a0_0x31a79e(0x3)));