'use strict';
function a0_0x1036(rsfAGL, key) {
    const stringArray = a0_0x16ec();
    a0_0x1036 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1036(rsfAGL, key);
}
function a0_0x16ec() {
    const _0x327b22 = [
        'trim',
        'split',
        'log',
        'length',
        'floor',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x16ec = function () {
        return _0x327b22;
    };
    return a0_0x16ec();
}
const a0_0x4c633f = a0_0x1036;
const main = arg => {
    const _0x3270f6 = a0_0x1036;
    arg = arg[_0x3270f6(0x0)]()['split']('\x0a');
    const S = arg[0x0][_0x3270f6(0x1)]('');
    const K = parseInt(arg[0x1]);
    let streakS = 0x0;
    for (let i = 0x1; i < S['length']; i++) {
        if (S[i] === S[i - 0x1]) {
            streakS++;
            S[i] = '@';
        }
    }
    console[_0x3270f6(0x2)](S[_0x3270f6(0x3)] === 0x1 ? Math[_0x3270f6(0x4)](K / 0x2) : streakS * K);
};
main(require('fs')[a0_0x4c633f(0x5)](a0_0x4c633f(0x6), 'utf8'));