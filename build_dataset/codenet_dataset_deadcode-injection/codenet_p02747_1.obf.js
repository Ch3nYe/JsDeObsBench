'use strict';
function a0_0x1011() {
    const _0xe67e11 = [
        'split',
        'length',
        'LOXtv',
        'jgtKe',
        'NGFwA',
        'log',
        'Yes',
        'cRObm',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1011 = function () {
        return _0xe67e11;
    };
    return a0_0x1011();
}
const a0_0x59d80c = a0_0x246a;
function a0_0x246a(xtWKQq, key) {
    const stringArray = a0_0x1011();
    a0_0x246a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x246a(xtWKQq, key);
}
const Main = input => {
    const _0x11c3e2 = a0_0x246a;
    let xs = input['trim']()[_0x11c3e2(0x0)]('');
    let len = xs[_0x11c3e2(0x1)];
    let ans = 0x0;
    for (let i = 0x0; i <= len; i++) {
        if ('crizh' !== _0x11c3e2(0x2)) {
            if (i % 0x2 == 0x0 && xs[i] == 'h' && [i + 0x1] != 'h') {
                ans += 0x1;
            } else if (i % 0x2 == 0x1 && xs[i] == 'i' && xs[i + 0x1] != 'i') {
                ans += 0x1;
            } else {
                if (_0x11c3e2(0x3) !== 'PTOzE') {
                    ans += 0x0;
                } else {
                    ans += 0x0;
                }
            }
        } else {
            ans += 0x1;
        }
    }
    if (ans >= 0x2) {
        if (_0x11c3e2(0x4) !== 'NGFwA') {
            ans += 0x1;
        } else {
            console[_0x11c3e2(0x5)](_0x11c3e2(0x6));
        }
    } else {
        if ('cRObm' === _0x11c3e2(0x7)) {
            console[_0x11c3e2(0x5)]('No');
        } else {
            if (i % 0x2 == 0x0 && xs[i] == 'h' && [i + 0x1] != 'h') {
                ans += 0x1;
            } else if (i % 0x2 == 0x1 && xs[i] == 'i' && xs[i + 0x1] != 'i') {
                ans += 0x1;
            } else {
                ans += 0x0;
            }
        }
    }
};
Main(require('fs')[a0_0x59d80c(0x8)](a0_0x59d80c(0x9), a0_0x59d80c(0xa)));