'use strict';
function a0_0x2631() {
    const _0x1b5e35 = [
        'split',
        'length',
        'shift',
        'forEach',
        'EJwsd',
        'charAt',
        'FjbRr',
        'EPCtK',
        'min',
        'max',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2631 = function () {
        return _0x1b5e35;
    };
    return a0_0x2631();
}
const a0_0x2e02db = a0_0x1e0a;
function a0_0x1e0a(PwUWZt, key) {
    const stringArray = a0_0x2631();
    a0_0x1e0a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1e0a(PwUWZt, key);
}
function counter(str, seq) {
    const _0x2320e6 = a0_0x1e0a;
    return str[_0x2320e6(0x0)](seq)[_0x2320e6(0x1)] - 0x1;
}
function main(stdin) {
    const _0x1bd3d1 = a0_0x1e0a;
    const input = stdin[_0x1bd3d1(0x0)]('\x0a');
    input[_0x1bd3d1(0x2)]();
    let ans = 0x0;
    let startsB = 0x0;
    let endsA = 0x0;
    let startsBandEndsA = 0x0;
    input[_0x1bd3d1(0x3)](s => {
        const _0x171bd0 = a0_0x1e0a;
        if (_0x171bd0(0x4) === 'NhMVv') {
            if (s[_0x171bd0(0x5)](s['length'] - 0x1) === 'A') {
                ++startsBandEndsA;
            } else {
                ++startsB;
            }
        } else {
            ans += counter(s, 'AB');
            if (s[_0x171bd0(0x5)](0x0) === 'B') {
                if (s[_0x171bd0(0x5)](s['length'] - 0x1) === 'A') {
                    if (_0x171bd0(0x6) !== _0x171bd0(0x6)) {
                        return str[_0x171bd0(0x0)](seq)[_0x171bd0(0x1)] - 0x1;
                    } else {
                        ++startsBandEndsA;
                    }
                } else {
                    ++startsB;
                }
            } else if (s[_0x171bd0(0x5)](s['length'] - 0x1) === 'A') {
                if (_0x171bd0(0x7) === 'XssBn') {
                    ++startsBandEndsA;
                } else {
                    ++endsA;
                }
            }
        }
    });
    const smaller = Math[_0x1bd3d1(0x8)](startsB, endsA);
    const bigger = Math[_0x1bd3d1(0x9)](startsB, endsA);
    const shortage = bigger - smaller;
    let extra = Math[_0x1bd3d1(0x9)](0x0, startsBandEndsA - shortage);
    if (shortage === 0x0 && extra !== 0x0)
        --extra;
    ans += smaller;
    ans += Math[_0x1bd3d1(0x8)](shortage, startsBandEndsA);
    ans += extra;
    console['log'](ans);
}
main(require('fs')[a0_0x2e02db(0xa)](a0_0x2e02db(0xb), a0_0x2e02db(0xc)));