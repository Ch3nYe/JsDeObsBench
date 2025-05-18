'use strict';
const a0_0x178640 = a0_0x4957;
function a0_0x5e5c() {
    const _0x1f5025 = [
        'split',
        'map',
        'length',
        'has',
        'delete',
        'add',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x5e5c = function () {
        return _0x1f5025;
    };
    return a0_0x5e5c();
}
function a0_0x4957(BQiLVy, key) {
    const stringArray = a0_0x5e5c();
    a0_0x4957 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4957(BQiLVy, key);
}
function main(input) {
    const _0x4bc489 = a0_0x4957;
    input = input[_0x4bc489(0x0)](/\n/)[_0x4bc489(0x1)](v => ~~v);
    let set = new Set();
    for (let i = 0x1; i < input[_0x4bc489(0x2)]; i++) {
        if (set[_0x4bc489(0x3)](input[i])) {
            set[_0x4bc489(0x4)](input[i]);
        } else {
            set[_0x4bc489(0x5)](input[i]);
        }
    }
    console[_0x4bc489(0x6)](set['size']);
}
main(require('fs')[a0_0x178640(0x7)]('/dev/stdin', a0_0x178640(0x8)));