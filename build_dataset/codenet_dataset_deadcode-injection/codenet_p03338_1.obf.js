'use strict';
function a0_0x19ec(OwRJHx, key) {
    const stringArray = a0_0x4a90();
    a0_0x19ec = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x19ec(OwRJHx, key);
}
const a0_0xea4bfe = a0_0x19ec;
const main = arg => {
    const _0x539f8b = a0_0x19ec;
    arg = arg[_0x539f8b(0x0)]()[_0x539f8b(0x1)]('\x0a');
    const N = parseInt(arg[0x0][_0x539f8b(0x1)]('\x20')[0x0]);
    const S = arg[0x1][_0x539f8b(0x1)]('');
    const charset = new Set(S);
    const chars = [...charset];
    let answer = 0x0;
    for (let i in S) {
        const first = S[_0x539f8b(0x2)](0x0, i);
        const last = S[_0x539f8b(0x2)](i, S[_0x539f8b(0x3)]);
        let temp = 0x0;
        for (let j in chars) {
            if (first[_0x539f8b(0x4)](chars[j]) !== -0x1 && last['indexOf'](chars[j]) !== -0x1) {
                temp++;
            }
        }
        answer = Math['max'](answer, temp);
    }
    console[_0x539f8b(0x5)](answer);
};
main(require('fs')['readFileSync'](a0_0xea4bfe(0x6), 'utf8'));
function a0_0x4a90() {
    const _0x5cdc52 = [
        'trim',
        'split',
        'slice',
        'length',
        'indexOf',
        'log',
        '/dev/stdin'
    ];
    a0_0x4a90 = function () {
        return _0x5cdc52;
    };
    return a0_0x4a90();
}