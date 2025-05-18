'use strict';
function a0_0x1af2() {
    const _0x546d25 = [
        'split',
        'sort',
        'splice',
        'length',
        'reduce',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x1af2 = function () {
        return _0x546d25;
    };
    return a0_0x1af2();
}
function a0_0xa6e8(hjzamL, key) {
    const stringArray = a0_0x1af2();
    a0_0xa6e8 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xa6e8(hjzamL, key);
}
const a0_0x5aaf8e = a0_0xa6e8;
function main(input) {
    const _0x39ca3c = a0_0xa6e8;
    const args = input[_0x39ca3c(0x0)]('\x0a'), K = parseInt(args[0x0]['split']('\x20')[0x1]), H = args[0x1][_0x39ca3c(0x0)]('\x20');
    var ans = H[_0x39ca3c(0x1)]()[_0x39ca3c(0x2)](0x0, H[_0x39ca3c(0x3)] - K)[_0x39ca3c(0x4)]((a, x) => a + parseInt(x), 0x0);
    console[_0x39ca3c(0x5)](ans);
}
main(require('fs')[a0_0x5aaf8e(0x6)]('/dev/stdin', a0_0x5aaf8e(0x7)));