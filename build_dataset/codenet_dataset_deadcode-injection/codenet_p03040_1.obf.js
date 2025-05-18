'use strict';
var a0_0x380fe9 = a0_0x5108;
function a0_0x5108(hANtDA, key) {
    var stringArray = a0_0x26aa();
    a0_0x5108 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5108(hANtDA, key);
}
function I(t, i) {
    var _0x413cee = a0_0x5108;
    this['_s'] = t[_0x413cee(0x0)]('\x0a'), this['_c'] = 0x0, this['_l'] = 0x0, this['_f'] = i || Number;
}
I[a0_0x380fe9(0x1)]['a'] = function (t) {
    var _0x119914 = a0_0x5108;
    var i = this['_s'][this['_l']];
    if (i) {
        if (_0x119914(0x2) !== _0x119914(0x2)) {
            var s = i[_0x119914(0x3)]()[_0x119914(0x0)]('\x20'), h = s[this['_c']];
            return this['_c']++, s[_0x119914(0x4)] === this['_c'] && (this['_c'] = 0x0, this['_l']++), t ? t(h) : this['_f'](h);
        } else {
            var s = i[_0x119914(0x3)]()[_0x119914(0x0)]('\x20'), h = s[this['_c']];
            return this['_c']++, s[_0x119914(0x4)] === this['_c'] && (this['_c'] = 0x0, this['_l']++), t ? t(h) : this['_f'](h);
        }
    }
}, I['prototype']['l'] = function (t) {
    var _0xd57297 = a0_0x5108;
    var i = this['_s'][this['_l']];
    if (i)
        return this['_c'] = 0x0, this['_l']++, i[_0xd57297(0x0)]('\x20')['map'](t || this['_f']);
}, module[a0_0x380fe9(0x5)] = I;
function main(input) {
    var _0x5abad3 = a0_0x5108;
    var o = new I(input);
    var q = o['a']();
    var c = 0x0;
    var sorted = [];
    for (var i = 0x0; i < q; i++) {
        var q1 = o['a']();
        if (q1 === 0x1) {
            if (_0x5abad3(0x6) !== _0x5abad3(0x6)) {
                sorted = sorted[_0x5abad3(0x7)]((a, b) => a - b);
                var mid = sorted[Math['floor']((sorted['length'] - 0x1) / 0x2)];
                var ans = sorted[_0x5abad3(0x8)](x => Math[_0x5abad3(0x9)](x - mid))[_0x5abad3(0xa)]((acc, cur) => acc + cur) + c;
                console['log'](mid, ans);
            } else {
                var a = o['a']();
                var b = o['a']();
                c += b;
                sorted[_0x5abad3(0xb)](a);
            }
        } else {
            sorted = sorted[_0x5abad3(0x7)]((a, b) => a - b);
            var mid = sorted[Math[_0x5abad3(0xc)]((sorted[_0x5abad3(0x4)] - 0x1) / 0x2)];
            var ans = sorted[_0x5abad3(0x8)](x => Math[_0x5abad3(0x9)](x - mid))[_0x5abad3(0xa)]((acc, cur) => acc + cur) + c;
            console[_0x5abad3(0xd)](mid, ans);
        }
    }
}
main(require('fs')[a0_0x380fe9(0xe)](a0_0x380fe9(0xf), 'utf8'));
function a0_0x26aa() {
    var _0x14cea9 = [
        'split',
        'prototype',
        'drNRY',
        'trim',
        'length',
        'exports',
        'JSCCp',
        'sort',
        'map',
        'abs',
        'reduce',
        'push',
        'floor',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x26aa = function () {
        return _0x14cea9;
    };
    return a0_0x26aa();
}