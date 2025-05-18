'use strict';
const a0_0x10dc32 = a0_0x4e47;
function a0_0x1ced() {
    const _0x16cb59 = [
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1ced = function () {
        return _0x16cb59;
    };
    return a0_0x1ced();
}
function main(s) {
    s = s['split']('\x0a');
    const r = Number(s[0x0]);
    const g = Number(s[0x1]);
    let ans = g + (g - r);
    console['log'](ans);
}
function a0_0x4e47(AWFFZM, key) {
    const stringArray = a0_0x1ced();
    a0_0x4e47 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4e47(AWFFZM, key);
}
main(require('fs')['readFileSync'](a0_0x10dc32(0x0), a0_0x10dc32(0x1)));