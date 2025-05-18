'use strict';
function a0_0x7252(beezzh, key) {
    const stringArray = a0_0x3367();
    a0_0x7252 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x7252(beezzh, key);
}
const a0_0x3fa72c = a0_0x7252;
const main = arg => {
    const _0x47f083 = a0_0x7252;
    arg = arg[_0x47f083(0x0)]()['split']('\x0a');
    const N = parseInt(arg[0x0][_0x47f083(0x1)]('\x20')[0x0]);
    const K = parseInt(arg[0x0][_0x47f083(0x1)]('\x20')[0x1]);
    const S = arg[0x1][_0x47f083(0x1)]('');
    let alreadyHappy = 0x0;
    let last;
    for (let i in S) {
        if (last === 'L' && S[i] === 'L') {
            alreadyHappy++;
        }
        if (last === 'R' && S[i] === 'R') {
            alreadyHappy++;
        }
        last = S[i];
    }
    console['log'](Math[_0x47f083(0x2)](N - 0x1, alreadyHappy + 0x2 * K));
};
function a0_0x3367() {
    const _0x43ec14 = [
        'trim',
        'split',
        'min',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3367 = function () {
        return _0x43ec14;
    };
    return a0_0x3367();
}
main(require('fs')[a0_0x3fa72c(0x3)](a0_0x3fa72c(0x4), a0_0x3fa72c(0x5)));