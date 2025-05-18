'use strict';
function a0_0x3ea0() {
    var _0x150709 = [
        '4jwbIuO',
        '6035320rlOxeM',
        '479740VnTjdS',
        '471wRFcqh',
        '2588460PMdnWa',
        'utf8',
        'readFileSync',
        'split',
        '4348MOQItw',
        'log',
        'trim',
        '114492CCuKnl',
        '20180020lVRiHw',
        '7KZXKZE',
        '8832906jkOnxl',
        'prototype',
        'length'
    ];
    a0_0x3ea0 = function () {
        return _0x150709;
    };
    return a0_0x3ea0();
}
var a0_0x490ab7 = a0_0xb290;
(function (stringArrayFunction, comparisonValue) {
    var _0x12b796 = a0_0xb290;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x12b796(0x174)) / 0x1 * (parseInt(_0x12b796(0x172)) / 0x2) + -parseInt(_0x12b796(0x175)) / 0x3 * (-parseInt(_0x12b796(0x169)) / 0x4) + -parseInt(_0x12b796(0x165)) / 0x5 + parseInt(_0x12b796(0x16c)) / 0x6 + parseInt(_0x12b796(0x16e)) / 0x7 * (parseInt(_0x12b796(0x173)) / 0x8) + -parseInt(_0x12b796(0x16f)) / 0x9 + parseInt(_0x12b796(0x16d)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3ea0, 0x7af00));
function I(s, f) {
    var _0x2ff05a = a0_0xb290;
    this['_s'] = s[_0x2ff05a(0x168)]('\x0a');
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = f || Number;
}
I[a0_0x490ab7(0x170)]['a'] = function () {
    var _0x3b733c = a0_0x490ab7;
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    var t = l[_0x3b733c(0x16b)]()[_0x3b733c(0x168)]('\x20');
    var a = t[this['_c']];
    this['_c']++;
    if (t[_0x3b733c(0x171)] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](a);
};
I[a0_0x490ab7(0x170)]['l'] = function () {
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    this['_c'] = 0x0;
    this['_l']++;
    return l['split']('\x20')['map'](this['_f']);
};
function a0_0xb290(NJhZjv, key) {
    var stringArray = a0_0x3ea0();
    a0_0xb290 = function (index, key) {
        index = index - 0x165;
        var value = stringArray[index];
        return value;
    };
    return a0_0xb290(NJhZjv, key);
}
function main(input) {
    var _0x48004b = a0_0x490ab7;
    var o = new I(input, String);
    var n = Number(o['a']());
    var s = o['a']();
    var white = 0x0;
    var black = 0x0;
    for (var i = 0x0; i < s[_0x48004b(0x171)]; i++) {
        if (s[i] === '.')
            white += 0x1;
    }
    let min = white;
    for (var i = 0x0; i < s[_0x48004b(0x171)]; i++) {
        if (s[i] === '#') {
            black += 0x1;
        } else {
            white -= 0x1;
        }
        if (black + white < min) {
            min = black + white;
        }
    }
    console[_0x48004b(0x16a)](min);
}
main(require('fs')[a0_0x490ab7(0x167)]('/dev/stdin', a0_0x490ab7(0x166)));