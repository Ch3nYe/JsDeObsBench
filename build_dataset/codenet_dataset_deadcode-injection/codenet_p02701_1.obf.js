'use strict';
const a0_0x42f5a6 = a0_0x52c5;
function a0_0x266b() {
    const _0x810d6a = [
        'trim',
        'split',
        'size',
        'readFileSync'
    ];
    a0_0x266b = function () {
        return _0x810d6a;
    };
    return a0_0x266b();
}
function a0_0x52c5(QGwOoY, key) {
    const stringArray = a0_0x266b();
    a0_0x52c5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x52c5(QGwOoY, key);
}
const main = arg => {
    const _0x5d6c66 = a0_0x52c5;
    const input = arg[_0x5d6c66(0x0)]()[_0x5d6c66(0x1)]('\x0a');
    const setItems = new Set(input);
    console['log'](setItems[_0x5d6c66(0x2)] - 0x1);
};
main(require('fs')[a0_0x42f5a6(0x3)]('/dev/stdin', 'utf8'));