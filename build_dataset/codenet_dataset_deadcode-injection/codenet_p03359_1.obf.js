function a0_0x49a9(dlvpBX, key) {
    const stringArray = a0_0x5405();
    a0_0x49a9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x49a9(dlvpBX, key);
}
const a0_0x231ba1 = a0_0x49a9;
const input = require('fs')['readFileSync'](a0_0x231ba1(0x0), 'utf8');
function a0_0x5405() {
    const _0x3adb9e = [
        '/dev/stdin',
        'split',
        'log'
    ];
    a0_0x5405 = function () {
        return _0x3adb9e;
    };
    return a0_0x5405();
}
const list = input[a0_0x231ba1(0x1)]('\x20');
const a = Number(list[0x0]);
const b = Number(list[0x1]);
if (a > b) {
    console[a0_0x231ba1(0x2)](a - 0x1);
} else {
    console[a0_0x231ba1(0x2)](a);
}