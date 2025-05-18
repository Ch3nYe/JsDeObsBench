'use strict';
const a0_0x1420d8 = a0_0x408c;
const main = input => {
    const _0x5b186c = a0_0x408c;
    const args = input['trim']()[_0x5b186c(0x0)]('\x0a');
    const n = parseInt(args[0x0], 0xa);
    if (n === 0x1) {
        console['log'](_0x5b186c(0x1));
    } else {
        const a = parseInt(args[0x1], 0xa);
        const b = parseInt(args[0x2], 0xa);
        console[_0x5b186c(0x2)](a + b);
    }
};
main(require('fs')[a0_0x1420d8(0x3)](a0_0x1420d8(0x4), 'utf8'));
function a0_0x408c(WfSDqL, key) {
    const stringArray = a0_0xda21();
    a0_0x408c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x408c(WfSDqL, key);
}
function a0_0xda21() {
    const _0x25c8e2 = [
        'split',
        'Hello\x20World',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0xda21 = function () {
        return _0x25c8e2;
    };
    return a0_0xda21();
}