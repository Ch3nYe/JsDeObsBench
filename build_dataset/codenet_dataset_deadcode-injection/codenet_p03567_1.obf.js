'use strict';
const a0_0x6db41c = a0_0x1901;
function a0_0x1901(qqtNeP, key) {
    const stringArray = a0_0x1aa4();
    a0_0x1901 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1901(qqtNeP, key);
}
function a0_0x1aa4() {
    const _0x33d20d = [
        'trim',
        'split',
        'log',
        'Yes',
        '/dev/stdin'
    ];
    a0_0x1aa4 = function () {
        return _0x33d20d;
    };
    return a0_0x1aa4();
}
const main = arg => {
    const _0x54a6b8 = a0_0x1901;
    arg = arg[_0x54a6b8(0x0)]()[_0x54a6b8(0x1)]('\x0a');
    const S = arg[0x0][_0x54a6b8(0x1)]('');
    let previous = null;
    for (let i in S) {
        if (previous === 'A' && S[i] === 'C') {
            console[_0x54a6b8(0x2)](_0x54a6b8(0x3));
            return;
        }
        previous = S[i];
    }
    console[_0x54a6b8(0x2)]('No');
};
main(require('fs')['readFileSync'](a0_0x6db41c(0x4), 'utf8'));