'use strict';
const a0_0x325ff9 = a0_0x7a48;
function a0_0x7a48(MDmLNB, key) {
    const stringArray = a0_0x243f();
    a0_0x7a48 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x7a48(MDmLNB, key);
}
function a0_0x243f() {
    const _0x3390c3 = [
        'split',
        'length',
        'log',
        'YES',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x243f = function () {
        return _0x3390c3;
    };
    return a0_0x243f();
}
const main = arg => {
    const _0x3eacd4 = a0_0x7a48;
    const S = arg[_0x3eacd4(0x0)]('\x0a')[0x0]['split']('\x20');
    let tail = S[0x0][_0x3eacd4(0x0)]('')['pop']();
    for (let i = 0x1; i < S[_0x3eacd4(0x1)]; i++) {
        if (tail == S[i][_0x3eacd4(0x0)]('')[0x0]) {
            tail = S[i][_0x3eacd4(0x0)]('')['pop']();
        } else {
            console[_0x3eacd4(0x2)]('NO');
            return;
        }
    }
    console[_0x3eacd4(0x2)](_0x3eacd4(0x3));
};
main(require('fs')[a0_0x325ff9(0x4)](a0_0x325ff9(0x5), a0_0x325ff9(0x6)));