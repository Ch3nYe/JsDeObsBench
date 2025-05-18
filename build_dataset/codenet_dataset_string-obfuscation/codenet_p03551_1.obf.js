'use strict';
var a0_0x17271f = a0_0x164b;
function a0_0x164b(dXUCRS, key) {
    var stringArray = a0_0x4b4d();
    a0_0x164b = function (index, key) {
        index = index - 0x12f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x164b(dXUCRS, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x30d8c6 = a0_0x164b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x30d8c6(0x13c)) / 0x1 * (-parseInt(_0x30d8c6(0x13b)) / 0x2) + -parseInt(_0x30d8c6(0x134)) / 0x3 + parseInt(_0x30d8c6(0x145)) / 0x4 * (parseInt(_0x30d8c6(0x140)) / 0x5) + parseInt(_0x30d8c6(0x13d)) / 0x6 * (-parseInt(_0x30d8c6(0x141)) / 0x7) + parseInt(_0x30d8c6(0x138)) / 0x8 + -parseInt(_0x30d8c6(0x132)) / 0x9 * (parseInt(_0x30d8c6(0x131)) / 0xa) + -parseInt(_0x30d8c6(0x133)) / 0xb * (-parseInt(_0x30d8c6(0x13e)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4b4d, 0xf1f4d));
var input = require('fs')['readFileSync'](a0_0x17271f(0x13f), a0_0x17271f(0x139));
var cin = input[a0_0x17271f(0x135)](/ |\n/), cid = 0x0;
function next() {
    return +cin[cid++];
}
function nextstr() {
    return cin[cid++];
}
function nextbig() {
    return BigInt(cin[cid++]);
}
function nexts(n, a) {
    var _0x3601b9 = a0_0x17271f;
    return a ? cin['slice'](cid, cid += n) : cin[_0x3601b9(0x142)](cid, cid += n)[_0x3601b9(0x143)](a => +a);
}
function nextm(h, w, a) {
    var _0x10110d = a0_0x17271f;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x10110d(0x144)](cin[_0x10110d(0x142)](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x10110d(0x144)](cin[_0x10110d(0x142)](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var _0x2a5ca7 = a0_0x17271f;
    var a = arguments, l = a['length'], r = _0x2a5ca7(0x13a) + --l + _0x2a5ca7(0x130) + v + _0x2a5ca7(0x12f);
    while (--l)
        r = 'Array(a[' + l + _0x2a5ca7(0x137) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x17271f(0x136)](String(myOut));
function a0_0x4b4d() {
    var _0x548431 = [
        '590499KcGLav',
        'slice',
        'map',
        'push',
        '12YdBucE',
        ';})',
        ']).fill().map(x=>{return\x20',
        '15534470FcNlTz',
        '9KwkXHa',
        '2857701aVBMQa',
        '3469242UBtCwI',
        'split',
        'log',
        ']).fill().map(x=>',
        '4166568kgQqbw',
        'utf8',
        'Array(a[',
        '716OmzgKp',
        '186RJWHHE',
        '138UYeTpn',
        '180nQLxwB',
        '/dev/stdin',
        '2150045vJacEz'
    ];
    a0_0x4b4d = function () {
        return _0x548431;
    };
    return a0_0x4b4d();
}
function main() {
    var n = next();
    var m = next();
    var ans = m * 0x708 + n * 0x64;
    return ans << m;
}