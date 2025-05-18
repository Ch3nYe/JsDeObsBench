'use strict';
function a0_0x269d(SWFozP, key) {
    const stringArray = a0_0x4813();
    a0_0x269d = function (index, key) {
        index = index - 0xcc;
        let value = stringArray[index];
        return value;
    };
    return a0_0x269d(SWFozP, key);
}
const a0_0x24f820 = a0_0x269d;
(function (stringArrayFunction, comparisonValue) {
    const _0x4e27cc = a0_0x269d;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4e27cc(0xd9)) / 0x1 + -parseInt(_0x4e27cc(0xd7)) / 0x2 * (parseInt(_0x4e27cc(0xdc)) / 0x3) + parseInt(_0x4e27cc(0xe3)) / 0x4 * (-parseInt(_0x4e27cc(0xce)) / 0x5) + -parseInt(_0x4e27cc(0xd6)) / 0x6 * (parseInt(_0x4e27cc(0xda)) / 0x7) + parseInt(_0x4e27cc(0xd8)) / 0x8 * (parseInt(_0x4e27cc(0xcc)) / 0x9) + -parseInt(_0x4e27cc(0xe0)) / 0xa + parseInt(_0x4e27cc(0xe2)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4813, 0x463c4));
function a0_0x4813() {
    const _0x309a3e = [
        '72447jUhHTl',
        '465479dKbQPf',
        'pop',
        '10899iJUnIR',
        'ints',
        'strn',
        '/dev/stdin',
        '5030070DwhpuE',
        'slice',
        '12561879vMqUJh',
        '353516yeCjcl',
        'sort',
        '306DdmBFS',
        'utf8',
        '25VFauQC',
        'filter',
        'strv',
        'prototype',
        'log',
        'length',
        'map',
        'split',
        '6rOooLO',
        '98dxHjAK',
        '95896YEAlug'
    ];
    a0_0x4813 = function () {
        return _0x309a3e;
    };
    return a0_0x4813();
}
function _(s) {
    const _0x1ca034 = a0_0x269d;
    let l = s['split']('\x0a');
    if (l[l[_0x1ca034(0xd3)] - 0x1] == '')
        l[_0x1ca034(0xdb)]();
    this['l'] = l;
    this['y'] = 0x0;
}
_['prototype'][a0_0x24f820(0xdd)] = function () {
    const _0xc20080 = a0_0x24f820;
    return this['l'][this['y']++][_0xc20080(0xd5)]('\x20')[_0xc20080(0xd4)](v => +v);
};
_[a0_0x24f820(0xd1)]['intv'] = function () {
    const _0x57b1a3 = a0_0x24f820;
    const y = this['y'];
    this['y'] = this['l'][_0x57b1a3(0xd3)];
    return this['l'][_0x57b1a3(0xe1)](y)[_0x57b1a3(0xd4)](v => +v);
};
_[a0_0x24f820(0xd1)][a0_0x24f820(0xd0)] = function () {
    const _0x4f3d64 = a0_0x24f820;
    const y = this['y'];
    this['y'] = this['l'][_0x4f3d64(0xd3)];
    return this['l'][_0x4f3d64(0xe1)](y);
};
_[a0_0x24f820(0xd1)][a0_0x24f820(0xde)] = function (n) {
    const _0x505b6f = a0_0x24f820;
    const y = this['y'];
    this['y'] += n;
    return this['l'][_0x505b6f(0xe1)](y, y + n);
};
const $ = new _(require('fs')['readFileSync'](a0_0x24f820(0xdf), a0_0x24f820(0xcd)));
((() => {
    const _0x5287e3 = a0_0x24f820;
    const nk = $[_0x5287e3(0xdd)]();
    const n = nk[0x0];
    const k = nk[0x1];
    const a = $[_0x5287e3(0xdd)]();
    const rr = [];
    for (let i = 0x0; i < n; i++) {
        let s = 0x0;
        for (let j = i; j < n; j++) {
            s += a[j];
            rr['push'](s);
        }
    }
    rr[_0x5287e3(0xe4)]((a, b) => b - a);
    let res = 0x0;
    for (let d = 0x29; d >= 0x0; d--) {
        let border = 0x1 << d;
        let num = rr[_0x5287e3(0xcf)](e => (e & res + border) === res + border)[_0x5287e3(0xd3)];
        if (num >= k) {
            res += border;
        }
    }
    console[_0x5287e3(0xd2)](res);
})());