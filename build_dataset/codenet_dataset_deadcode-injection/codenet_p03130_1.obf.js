'use strict';
var a0_0x4c9da9 = a0_0xd960;
function I(s, f) {
    this['_s'] = s;
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = f || Number;
}
I[a0_0x4c9da9(0x0)]['a'] = function () {
    var _0x2d14ab = a0_0xd960;
    var l = this['_s']['split']('\x0a')[this['_l']];
    if (!l)
        return;
    var t = l[_0x2d14ab(0x1)]()[_0x2d14ab(0x2)]('\x20');
    var a = t[this['_c']];
    this['_c']++;
    if (t['length'] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](a);
};
I['prototype']['l'] = function () {
    var _0x1f8e9b = a0_0xd960;
    var l = this['_s']['split']('\x0a')[this['_l']];
    this['_c'] = 0x0;
    this['_l']++;
    return l['split']('\x20')[_0x1f8e9b(0x3)](this['_f']);
};
function main(input) {
    var _0x3dc956 = a0_0xd960;
    const o = new I(input);
    const arr = Array(0x4)[_0x3dc956(0x4)](0x0);
    for (let i = 0x0; i < 0x3; i++) {
        let a = o['a']();
        let b = o['a']();
        arr[a - 0x1]++;
        arr[b - 0x1]++;
    }
    if (arr[_0x3dc956(0x5)]((a, b) => a - b)[_0x3dc956(0x6)]('\x20') === _0x3dc956(0x7)) {
        console['log'](_0x3dc956(0x8));
    } else {
        console[_0x3dc956(0x9)]('NO');
    }
}
main(require('fs')['readFileSync'](a0_0x4c9da9(0xa), a0_0x4c9da9(0xb)));
function a0_0xd960(ruIHow, key) {
    var stringArray = a0_0x2461();
    a0_0xd960 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd960(ruIHow, key);
}
function a0_0x2461() {
    var _0x15a9e1 = [
        'prototype',
        'trim',
        'split',
        'map',
        'fill',
        'sort',
        'join',
        '1\x201\x202\x202',
        'YES',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2461 = function () {
        return _0x15a9e1;
    };
    return a0_0x2461();
}