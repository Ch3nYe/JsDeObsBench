'use strict';
var a0_0x17c358 = a0_0x3418;
function a0_0x3418(BpDdbS, key) {
    var stringArray = a0_0x5e42();
    a0_0x3418 = function (index, key) {
        index = index - 0x15d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3418(BpDdbS, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2de673 = a0_0x3418;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2de673(0x160)) / 0x1 + parseInt(_0x2de673(0x15f)) / 0x2 * (parseInt(_0x2de673(0x164)) / 0x3) + -parseInt(_0x2de673(0x16e)) / 0x4 * (parseInt(_0x2de673(0x15e)) / 0x5) + parseInt(_0x2de673(0x16b)) / 0x6 + -parseInt(_0x2de673(0x170)) / 0x7 + parseInt(_0x2de673(0x161)) / 0x8 + -parseInt(_0x2de673(0x16d)) / 0x9 * (parseInt(_0x2de673(0x165)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5e42, 0xdfc43));
function I(s, f) {
    this['_s'] = s;
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = f || Number;
}
I[a0_0x17c358(0x163)]['a'] = function () {
    var _0x11e640 = a0_0x17c358;
    var l = this['_s'][_0x11e640(0x168)]('\x0a')[this['_l']];
    if (!l)
        return;
    var t = l['trim']()['split']('\x20');
    var a = t[this['_c']];
    this['_c']++;
    if (t[_0x11e640(0x167)] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](a);
};
function a0_0x5e42() {
    var _0x11e8b3 = [
        '39jjWlxA',
        '8750obEzCz',
        '/dev/stdin',
        'length',
        'split',
        'readFileSync',
        'log',
        '3748254DyfKHu',
        'fill',
        '23778UyILVk',
        '118076LPvnFV',
        'YES',
        '1546188VXtiLX',
        'join',
        '110OqwpIs',
        '264810Lfuvlt',
        '1667823mmOoVe',
        '678416PJjXOc',
        'sort',
        'prototype'
    ];
    a0_0x5e42 = function () {
        return _0x11e8b3;
    };
    return a0_0x5e42();
}
I[a0_0x17c358(0x163)]['l'] = function () {
    var _0x45761f = a0_0x17c358;
    var l = this['_s'][_0x45761f(0x168)]('\x0a')[this['_l']];
    this['_c'] = 0x0;
    this['_l']++;
    return l[_0x45761f(0x168)]('\x20')['map'](this['_f']);
};
function main(input) {
    var _0x159a48 = a0_0x17c358;
    const o = new I(input);
    const arr = Array(0x4)[_0x159a48(0x16c)](0x0);
    for (let i = 0x0; i < 0x3; i++) {
        let a = o['a']();
        let b = o['a']();
        arr[a - 0x1]++;
        arr[b - 0x1]++;
    }
    if (arr[_0x159a48(0x162)]((a, b) => a - b)[_0x159a48(0x15d)]('\x20') === '1\x201\x202\x202') {
        console[_0x159a48(0x16a)](_0x159a48(0x16f));
    } else {
        console[_0x159a48(0x16a)]('NO');
    }
}
main(require('fs')[a0_0x17c358(0x169)](a0_0x17c358(0x166), 'utf8'));