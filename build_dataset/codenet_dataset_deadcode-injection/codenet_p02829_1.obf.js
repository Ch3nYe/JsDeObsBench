'use strict';
const a0_0x5c1b4c = a0_0x19b9;
function a0_0x557c() {
    const _0xa3e3f4 = [
        'split',
        'map',
        'filter',
        'find',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x557c = function () {
        return _0xa3e3f4;
    };
    return a0_0x557c();
}
function a0_0x19b9(UJRkRI, key) {
    const stringArray = a0_0x557c();
    a0_0x19b9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x19b9(UJRkRI, key);
}
function main(input) {
    const _0x1d94ad = a0_0x19b9;
    const args = input[_0x1d94ad(0x0)]('\x0a');
    const num = args[_0x1d94ad(0x1)](el => parseInt(el));
    const ans = [
        0x1,
        0x2,
        0x3
    ];
    let out = ans[_0x1d94ad(0x2)](el => el !== num[0x0]);
    out = out[_0x1d94ad(0x3)](el => el !== num[0x1]);
    console['log'](out);
}
main(require('fs')['readFileSync'](a0_0x5c1b4c(0x4), a0_0x5c1b4c(0x5)));