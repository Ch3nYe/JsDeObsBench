'use strict';
const a0_0x3a179e = a0_0x2dbc;
function a0_0x59bd() {
    const _0x1b103f = [
        'prototype',
        'trim',
        'split',
        'length',
        'exports',
        'push',
        'aaNtf',
        'log',
        'Yes',
        'readFileSync',
        'utf8'
    ];
    a0_0x59bd = function () {
        return _0x1b103f;
    };
    return a0_0x59bd();
}
function I(s, f) {
    this['_s'] = s['split']('\x0a');
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = f || Number;
}
I[a0_0x3a179e(0x0)]['a'] = function () {
    const _0x4f664f = a0_0x2dbc;
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    var t = l[_0x4f664f(0x1)]()[_0x4f664f(0x2)]('\x20');
    var a = t[this['_c']];
    this['_c']++;
    if (t[_0x4f664f(0x3)] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](a);
};
function a0_0x2dbc(kHToil, key) {
    const stringArray = a0_0x59bd();
    a0_0x2dbc = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2dbc(kHToil, key);
}
I['prototype']['l'] = function () {
    const _0x127b6f = a0_0x2dbc;
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    this['_c'] = 0x0;
    this['_l']++;
    return l[_0x127b6f(0x2)]('\x20')['map'](this['_f']);
};
module[a0_0x3a179e(0x4)] = I;
function main(input) {
    const _0x225d6d = a0_0x2dbc;
    const o = new I(input);
    const N = o['a']();
    const M = o['a']();
    const adj = [];
    for (let i = 0x1; i <= N; i++) {
        adj[i] = [];
    }
    for (let i = 0x0; i < M; i++) {
        let ai = o['a']();
        let bi = o['a']();
        adj[ai][_0x225d6d(0x5)](bi);
        adj[bi][_0x225d6d(0x5)](ai);
    }
    let flag1 = ![];
    let flag2 = !![];
    for (let i = 0x1; i <= N; i++) {
        if (_0x225d6d(0x6) === 'aaNtf') {
            if (adj[i][_0x225d6d(0x3)] === 0x6) {
                flag1 = !![];
            }
            if (adj[i][_0x225d6d(0x3)] % 0x2 !== 0x0) {
                flag2 = ![];
            }
        } else {
            if (adj[i][_0x225d6d(0x3)] === 0x6) {
                flag1 = !![];
            }
            if (adj[i][_0x225d6d(0x3)] % 0x2 !== 0x0) {
                flag2 = ![];
            }
        }
    }
    console[_0x225d6d(0x7)](flag1 && flag2 ? _0x225d6d(0x8) : 'No');
}
main(require('fs')[a0_0x3a179e(0x9)]('/dev/stdin', a0_0x3a179e(0xa)));