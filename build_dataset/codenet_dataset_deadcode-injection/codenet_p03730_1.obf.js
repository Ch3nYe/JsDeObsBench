'use strict';
const a0_0x48c1a2 = a0_0x29b8;
function a0_0x53b5() {
    const _0x5c6797 = [
        'split',
        'YES',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x53b5 = function () {
        return _0x5c6797;
    };
    return a0_0x53b5();
}
function a0_0x29b8(XslTOW, key) {
    const stringArray = a0_0x53b5();
    a0_0x29b8 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x29b8(XslTOW, key);
}
const main = arg => {
    const _0x377b6f = a0_0x29b8;
    let Nums = arg[_0x377b6f(0x0)]('\x0a')[0x0][_0x377b6f(0x0)]('\x20')['map'](n => Number(n));
    let A = Nums[0x0], B = Nums[0x1], C = Nums[0x2];
    let ans = 'NO';
    for (let i = 0x1; i <= B; i++) {
        if (A * i % B == C) {
            ans = _0x377b6f(0x1);
        }
    }
    console[_0x377b6f(0x2)](ans);
};
main(require('fs')[a0_0x48c1a2(0x3)]('/dev/stdin', a0_0x48c1a2(0x4)));