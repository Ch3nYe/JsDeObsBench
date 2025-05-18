'use strict';
function a0_0x501b() {
    const _0x14832f = [
        'split',
        'fill',
        'keys',
        'forEach',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x501b = function () {
        return _0x14832f;
    };
    return a0_0x501b();
}
function a0_0x3439(ktwAbf, key) {
    const stringArray = a0_0x501b();
    a0_0x3439 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3439(ktwAbf, key);
}
const a0_0x127019 = a0_0x3439;
const main = arg => {
    const _0xffb9a8 = a0_0x3439;
    arg = arg['trim']()[_0xffb9a8(0x0)]('\x0a');
    const N = arg[0x0] * 0x1;
    const nums = arg[0x1]['split']('\x20')['map'](x => x * 0x1);
    const totalSum = new Array(N)[_0xffb9a8(0x1)](0x0);
    for (let i = 0x0; i < N; i++) {
        totalSum[i] += (totalSum[i - 0x1] || 0x0) + nums[i];
    }
    let accumObj = {};
    accumObj[0x0] = 0x1;
    for (let i = 0x0; i < N; i++) {
        accumObj[totalSum[i]] = (accumObj[totalSum[i]] || 0x0) + 0x1;
    }
    let ans = 0x0;
    Object[_0xffb9a8(0x2)](accumObj)[_0xffb9a8(0x3)](x => {
        ans += accumObj[x] * (accumObj[x] - 0x1) / 0x2;
    });
    console[_0xffb9a8(0x4)](ans);
};
main(require('fs')[a0_0x127019(0x5)](a0_0x127019(0x6), a0_0x127019(0x7)));