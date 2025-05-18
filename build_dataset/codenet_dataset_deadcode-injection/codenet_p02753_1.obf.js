'use strict;';
function a0_0x4e53(hbpffM, key) {
    const stringArray = a0_0x5524();
    a0_0x4e53 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4e53(hbpffM, key);
}
function a0_0x5524() {
    const _0x1acb73 = [
        'readFileSync',
        '/dev/stdin',
        'UTF-8',
        'trim',
        'split',
        'log',
        'Yes'
    ];
    a0_0x5524 = function () {
        return _0x1acb73;
    };
    return a0_0x5524();
}
const a0_0x379913 = a0_0x4e53;
main(require('fs')[a0_0x379913(0x0)](a0_0x379913(0x1), a0_0x379913(0x2))[a0_0x379913(0x3)]()[a0_0x379913(0x4)]('\x0a'));
function main(input) {
    const _0x447c6a = a0_0x4e53;
    input = input[0x0][_0x447c6a(0x4)]('');
    let num = 0x2;
    let isSame = !![];
    while (num > 0x0) {
        if (input[num] !== input[0x0]) {
            isSame = ![];
            break;
        }
        num--;
    }
    console[_0x447c6a(0x5)](isSame ? 'No' : _0x447c6a(0x6));
}