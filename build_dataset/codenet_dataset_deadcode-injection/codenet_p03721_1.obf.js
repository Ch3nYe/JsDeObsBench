'use strict';
function a0_0x3375() {
    const _0x514c56 = [
        'map',
        'split',
        'slice',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3375 = function () {
        return _0x514c56;
    };
    return a0_0x3375();
}
const a0_0x359fe0 = a0_0x397d;
function main(input) {
    const _0x52b9b2 = a0_0x397d;
    const args = input['trim']()['split']('\x0a')[_0x52b9b2(0x0)](_ => _[_0x52b9b2(0x1)]('\x20')[_0x52b9b2(0x0)](x => parseInt(x, 0xa)));
    const k = args[0x0][0x1];
    const arr = args[_0x52b9b2(0x2)](0x1);
    let cnt = 0x0;
    let i = 0x0;
    while (cnt < k) {
        cnt += arr[i][0x1];
        i++;
    }
    console[_0x52b9b2(0x3)](arr[i - 0x1][0x0]);
}
function a0_0x397d(pnFmvQ, key) {
    const stringArray = a0_0x3375();
    a0_0x397d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x397d(pnFmvQ, key);
}
main(require('fs')[a0_0x359fe0(0x4)](a0_0x359fe0(0x5), a0_0x359fe0(0x6)));