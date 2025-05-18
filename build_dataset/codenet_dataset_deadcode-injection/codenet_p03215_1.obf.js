'use strict';
const a0_0x3659d5 = a0_0x5ab7;
function a0_0x5ab7(AbUYWA, key) {
    const stringArray = a0_0x19d8();
    a0_0x5ab7 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5ab7(AbUYWA, key);
}
function _(s) {
    const _0x1a64e9 = a0_0x5ab7;
    let l = s[_0x1a64e9(0x0)]('\x0a');
    if (l[l[_0x1a64e9(0x1)] - 0x1] == '')
        l[_0x1a64e9(0x2)]();
    this['l'] = l;
    this['y'] = 0x0;
}
function a0_0x19d8() {
    const _0x2781ec = [
        'split',
        'length',
        'pop',
        'ints',
        'prototype',
        'intv',
        'slice',
        'map',
        'strv',
        'strn',
        '/dev/stdin',
        'utf8',
        'push',
        'sort',
        'filter',
        'cnKqy',
        'log'
    ];
    a0_0x19d8 = function () {
        return _0x2781ec;
    };
    return a0_0x19d8();
}
_['prototype'][a0_0x3659d5(0x3)] = function () {
    const _0x3b22b2 = a0_0x5ab7;
    return this['l'][this['y']++][_0x3b22b2(0x0)]('\x20')['map'](v => +v);
};
_[a0_0x3659d5(0x4)][a0_0x3659d5(0x5)] = function () {
    const _0x1b2c08 = a0_0x5ab7;
    const y = this['y'];
    this['y'] = this['l'][_0x1b2c08(0x1)];
    return this['l'][_0x1b2c08(0x6)](y)[_0x1b2c08(0x7)](v => +v);
};
_[a0_0x3659d5(0x4)][a0_0x3659d5(0x8)] = function () {
    const _0x16e8f6 = a0_0x5ab7;
    const y = this['y'];
    this['y'] = this['l'][_0x16e8f6(0x1)];
    return this['l'][_0x16e8f6(0x6)](y);
};
_[a0_0x3659d5(0x4)][a0_0x3659d5(0x9)] = function (n) {
    const _0x2e6b93 = a0_0x5ab7;
    const y = this['y'];
    this['y'] += n;
    return this['l'][_0x2e6b93(0x6)](y, y + n);
};
const $ = new _(require('fs')['readFileSync'](a0_0x3659d5(0xa), a0_0x3659d5(0xb)));
((() => {
    const _0x16a44f = a0_0x5ab7;
    const nk = $[_0x16a44f(0x3)]();
    const n = nk[0x0];
    const k = nk[0x1];
    const a = $[_0x16a44f(0x3)]();
    const rr = [];
    for (let i = 0x0; i < n; i++) {
        let s = 0x0;
        for (let j = i; j < n; j++) {
            s += a[j];
            rr[_0x16a44f(0xc)](s);
        }
    }
    rr[_0x16a44f(0xd)]((a, b) => b - a);
    let res = 0x0;
    for (let d = 0x29; d >= 0x0; d--) {
        let border = 0x1 << d;
        let num = rr[_0x16a44f(0xe)](e => (e & res + border) === res + border)[_0x16a44f(0x1)];
        if (num >= k) {
            if ('QdxDI' !== _0x16a44f(0xf)) {
                res += border;
            } else {
                res += border;
            }
        }
    }
    console[_0x16a44f(0x10)](res);
})());