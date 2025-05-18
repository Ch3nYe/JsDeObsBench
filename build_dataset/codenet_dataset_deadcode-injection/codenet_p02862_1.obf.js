'use strict';
function a0_0x3602(qnehqX, key) {
    const stringArray = a0_0x2211();
    a0_0x3602 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3602(qnehqX, key);
}
function a0_0x2211() {
    const _0x1d7816 = [
        'max',
        'min',
        'fTNsW',
        'dFTTK',
        'uIfBg',
        'trim',
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2211 = function () {
        return _0x1d7816;
    };
    return a0_0x2211();
}
const a0_0xe3944b = a0_0x3602;
const ncr = (n, r, mod) => {
    const _0x2f94fe = a0_0x3602;
    mod = mod || 0x3b9aca00 + 0x7;
    const a = Math[_0x2f94fe(0x0)](n, r);
    const b = Math[_0x2f94fe(0x1)](n, r);
    const p = Math[_0x2f94fe(0x1)](b, a - b);
    const nu = new Array(p + 0x1);
    const de = new Array(p + 0x1);
    let dest = 0x1;
    if (p > 0x0) {
        for (let i = 0x1; i <= p; i++) {
            nu[i] = a - p + i;
            de[i] = i;
        }
        for (let k = 0x2; k <= p; k++) {
            const piv = de[k];
            const j = piv > 0x1 ? -((a - p) % k) : 0x0;
            for (let i = k; i <= p; i += k) {
                if ('wgXOv' === _0x2f94fe(0x2)) {
                    if (nu[i] > 0x1)
                        dest = dest * nu[i] % mod;
                } else {
                    nu[i + j] /= piv;
                    de[i] /= piv;
                }
            }
        }
        for (let i = 0x1; i <= p; i++) {
            if (_0x2f94fe(0x3) !== _0x2f94fe(0x4)) {
                if (nu[i] > 0x1)
                    dest = dest * nu[i] % mod;
            } else {
                nu[i + j] /= piv;
                de[i] /= piv;
            }
        }
    }
    return dest;
};
function main(inp) {
    const _0x56259c = a0_0x3602;
    inp = inp[_0x56259c(0x5)]()[_0x56259c(0x6)]('\x20');
    const x = Number(inp[0x0]);
    const y = Number(inp[0x1]);
    let sum = 0x0;
    for (let i = Math['floor'](x / 0x2); i >= 0x0; i--) {
        const a = x - i * 0x2;
        if (a * 0x2 + i === y) {
            sum = ncr(i + a, i);
        }
    }
    console[_0x56259c(0x7)](sum);
}
main(require('fs')[a0_0xe3944b(0x8)](a0_0xe3944b(0x9), a0_0xe3944b(0xa)));