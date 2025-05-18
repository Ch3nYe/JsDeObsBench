'use strict';
const a0_0x2fbc59 = a0_0x51e4;
function a0_0x51e4(BkFgMD, key) {
    const stringArray = a0_0x85a4();
    a0_0x51e4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x51e4(BkFgMD, key);
}
function a0_0x85a4() {
    const _0x14b55c = [
        'trim',
        'split',
        'floor',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x85a4 = function () {
        return _0x14b55c;
    };
    return a0_0x85a4();
}
const main = arg => {
    const _0x16dc3d = a0_0x51e4;
    arg = arg[_0x16dc3d(0x0)]()[_0x16dc3d(0x1)]('\x0a');
    const A = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const B = parseInt(arg[0x0][_0x16dc3d(0x1)]('\x20')[0x1]);
    for (let i = 0x1; i <= 0x2710; i++) {
        const temp1 = Math['floor'](i * 0.08);
        const temp2 = Math[_0x16dc3d(0x2)](i * 0.1);
        if (temp1 === A && temp2 === B) {
            console[_0x16dc3d(0x3)](i);
            return;
        }
    }
    console['log'](-0x1);
};
main(require('fs')[a0_0x2fbc59(0x4)]('/dev/stdin', a0_0x2fbc59(0x5)));