'use strict';
const a0_0x4b12f3 = a0_0x33fe;
(function (stringArrayFunction, comparisonValue) {
    const _0x46cee4 = a0_0x33fe;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x46cee4(0x1cd)) / 0x1 * (parseInt(_0x46cee4(0x1d8)) / 0x2) + -parseInt(_0x46cee4(0x1c6)) / 0x3 + -parseInt(_0x46cee4(0x1cb)) / 0x4 + -parseInt(_0x46cee4(0x1d2)) / 0x5 * (parseInt(_0x46cee4(0x1d0)) / 0x6) + parseInt(_0x46cee4(0x1c9)) / 0x7 + parseInt(_0x46cee4(0x1d9)) / 0x8 * (-parseInt(_0x46cee4(0x1d6)) / 0x9) + parseInt(_0x46cee4(0x1d7)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x53f5, 0x3b66e));
function a0_0x33fe(hbRwNm, key) {
    const stringArray = a0_0x53f5();
    a0_0x33fe = function (index, key) {
        index = index - 0x1c6;
        let value = stringArray[index];
        return value;
    };
    return a0_0x33fe(hbRwNm, key);
}
function I(s, f) {
    const _0xdf263b = a0_0x33fe;
    this['_s'] = s[_0xdf263b(0x1cf)]('\x0a');
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = f || Number;
}
I[a0_0x4b12f3(0x1d3)]['a'] = function () {
    const _0x27e7d0 = a0_0x4b12f3;
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    var t = l[_0x27e7d0(0x1ce)]()[_0x27e7d0(0x1cf)]('\x20');
    var a = t[this['_c']];
    this['_c']++;
    if (t[_0x27e7d0(0x1d5)] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](a);
};
function a0_0x53f5() {
    const _0x1d98bb = [
        '66TsONKy',
        'readFileSync',
        '178465gwznhT',
        'prototype',
        'log',
        'length',
        '2556iPrBiy',
        '13112930JyucpR',
        '4wDCfJg',
        '3448IHNtkR',
        '/dev/stdin',
        '946515aPGupy',
        'utf8',
        'exports',
        '1669675ImQLcB',
        'push',
        '388440vdNeIV',
        'map',
        '189433GazMNR',
        'trim',
        'split'
    ];
    a0_0x53f5 = function () {
        return _0x1d98bb;
    };
    return a0_0x53f5();
}
I[a0_0x4b12f3(0x1d3)]['l'] = function () {
    const _0x202e51 = a0_0x4b12f3;
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    this['_c'] = 0x0;
    this['_l']++;
    return l[_0x202e51(0x1cf)]('\x20')[_0x202e51(0x1cc)](this['_f']);
};
module[a0_0x4b12f3(0x1c8)] = I;
function main(input) {
    const _0x44dda9 = a0_0x4b12f3;
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
        adj[ai]['push'](bi);
        adj[bi][_0x44dda9(0x1ca)](ai);
    }
    let flag1 = ![];
    let flag2 = !![];
    for (let i = 0x1; i <= N; i++) {
        if (adj[i][_0x44dda9(0x1d5)] === 0x6) {
            flag1 = !![];
        }
        if (adj[i][_0x44dda9(0x1d5)] % 0x2 !== 0x0) {
            flag2 = ![];
        }
    }
    console[_0x44dda9(0x1d4)](flag1 && flag2 ? 'Yes' : 'No');
}
main(require('fs')[a0_0x4b12f3(0x1d1)](a0_0x4b12f3(0x1da), a0_0x4b12f3(0x1c7)));