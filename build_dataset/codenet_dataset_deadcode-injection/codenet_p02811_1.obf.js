'use strict';
const a0_0x2a28ab = a0_0x4805;
const main = arg => {
    const _0x544870 = a0_0x4805;
    arg = arg[_0x544870(0x0)]()[_0x544870(0x1)]('\x0a');
    const K = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const X = parseInt(arg[0x0]['split']('\x20')[0x1]);
    console[_0x544870(0x2)](0x1f4 * K >= X ? _0x544870(0x3) : 'No');
};
function a0_0x4805(tAvSsd, key) {
    const stringArray = a0_0x52bf();
    a0_0x4805 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4805(tAvSsd, key);
}
function a0_0x52bf() {
    const _0x5d3140 = [
        'trim',
        'split',
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x52bf = function () {
        return _0x5d3140;
    };
    return a0_0x52bf();
}
main(require('fs')[a0_0x2a28ab(0x4)](a0_0x2a28ab(0x5), a0_0x2a28ab(0x6)));