'use strict';
function a0_0x4581(ZKnSEv, key) {
    const stringArray = a0_0x17ae();
    a0_0x4581 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4581(ZKnSEv, key);
}
const a0_0xe938b9 = a0_0x4581;
function Main(input) {
    const _0x2bfb19 = a0_0x4581;
    const ab = input[_0x2bfb19(0x0)]('\x20');
    console['log']((parseFloat(ab[0x0]) + parseFloat(ab[0x1])) / 0x2);
}
function a0_0x17ae() {
    const _0xd35b0a = [
        'split',
        'readFileSync',
        'utf8'
    ];
    a0_0x17ae = function () {
        return _0xd35b0a;
    };
    return a0_0x17ae();
}
Main(require('fs')[a0_0xe938b9(0x1)]('/dev/stdin', a0_0xe938b9(0x2)));