'use strict';
var a0_0x13d961 = a0_0x41b0;
function I(s, f) {
    var _0x2fde61 = a0_0x41b0;
    this['_s'] = s[_0x2fde61(0x0)]('\x0a');
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = f || Number;
}
function a0_0x4600() {
    var _0x2c56ff = [
        'split',
        'prototype',
        'ZroMT',
        'oBjCC',
        'map',
        'length',
        'iDWDT',
        'GOsTT',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4600 = function () {
        return _0x2c56ff;
    };
    return a0_0x4600();
}
I[a0_0x13d961(0x1)]['a'] = function () {
    var _0x3d279f = a0_0x41b0;
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    var t = l['trim']()['split']('\x20');
    var a = t[this['_c']];
    this['_c']++;
    if (t['length'] === this['_c']) {
        if (_0x3d279f(0x2) !== _0x3d279f(0x3)) {
            this['_c'] = 0x0;
            this['_l']++;
        } else {
            this['_c'] = 0x0;
            this['_l']++;
        }
    }
    return this['_f'](a);
};
I[a0_0x13d961(0x1)]['l'] = function () {
    var _0x618c24 = a0_0x41b0;
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    this['_c'] = 0x0;
    this['_l']++;
    return l[_0x618c24(0x0)]('\x20')[_0x618c24(0x4)](this['_f']);
};
function main(input) {
    var _0x2f0615 = a0_0x41b0;
    var o = new I(input, String);
    var n = Number(o['a']());
    var s = o['a']();
    var white = 0x0;
    var black = 0x0;
    for (var i = 0x0; i < s[_0x2f0615(0x5)]; i++) {
        if (s[i] === '.')
            white += 0x1;
    }
    let min = white;
    for (var i = 0x0; i < s['length']; i++) {
        if (s[i] === '#') {
            if (_0x2f0615(0x6) !== 'iDWDT') {
                white -= 0x1;
            } else {
                black += 0x1;
            }
        } else {
            if (_0x2f0615(0x7) === 'OKBtG') {
                if (s[i] === '.')
                    white += 0x1;
            } else {
                white -= 0x1;
            }
        }
        if (black + white < min) {
            min = black + white;
        }
    }
    console[_0x2f0615(0x8)](min);
}
function a0_0x41b0(gRNwzO, key) {
    var stringArray = a0_0x4600();
    a0_0x41b0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x41b0(gRNwzO, key);
}
main(require('fs')[a0_0x13d961(0x9)](a0_0x13d961(0xa), 'utf8'));