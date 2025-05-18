'use strict';
const a0_0x67b14c = a0_0x1e28;
function main(arg) {
    const _0x5b07db = a0_0x1e28;
    let a = arg[_0x5b07db(0x0)]()['split']('\x0a')[0x1][_0x5b07db(0x1)]('\x20')[_0x5b07db(0x2)](Number);
    let N = a[_0x5b07db(0x3)];
    let ans = 0x0;
    for (let i = 0x0; i < N; i++) {
        if ((i + 0x1) % 0x2 === 0x0) {
            continue;
        }
        if (a[i] % 0x2 === 0x0) {
            continue;
        }
        ans++;
    }
    console[_0x5b07db(0x4)](ans);
}
function a0_0x1e28(hksbCU, key) {
    const stringArray = a0_0x2ba9();
    a0_0x1e28 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1e28(hksbCU, key);
}
function a0_0x2ba9() {
    const _0x38f532 = [
        'trim',
        'split',
        'map',
        'length',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2ba9 = function () {
        return _0x38f532;
    };
    return a0_0x2ba9();
}
main(require('fs')['readFileSync'](a0_0x67b14c(0x5), a0_0x67b14c(0x6)));