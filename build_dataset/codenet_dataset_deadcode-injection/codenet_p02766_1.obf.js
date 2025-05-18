'use strict';
const a0_0x29bc75 = a0_0x4243;
function main(input) {
    const _0x3a0b70 = a0_0x4243;
    let line = input[_0x3a0b70(0x0)](/\r?\n/g);
    let arr = line[0x0][_0x3a0b70(0x0)]('\x20');
    const N = parseInt(arr[0x0]), K = parseInt(arr[0x1]);
    let cnt = 0x1;
    while (K ** cnt < N)
        cnt++;
    console[_0x3a0b70(0x1)](cnt);
}
function a0_0x4243(zpWKpY, key) {
    const stringArray = a0_0x1c89();
    a0_0x4243 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4243(zpWKpY, key);
}
main(require('fs')[a0_0x29bc75(0x2)](a0_0x29bc75(0x3), a0_0x29bc75(0x4)));
function a0_0x1c89() {
    const _0x16e642 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1c89 = function () {
        return _0x16e642;
    };
    return a0_0x1c89();
}