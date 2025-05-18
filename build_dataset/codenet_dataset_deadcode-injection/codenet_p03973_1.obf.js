'use strict';
var a0_0x2c4f82 = a0_0x23ab;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x2c4f82(0x0));
function a0_0x23ab(tjukde, key) {
    var stringArray = a0_0x1ba2();
    a0_0x23ab = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x23ab(tjukde, key);
}
var cin = input['split'](/ |\n/), cid = 0x0;
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
    var _0x2afd70 = a0_0x23ab;
    return a ? cin[_0x2afd70(0x1)](cid, cid += n) : cin[_0x2afd70(0x1)](cid, cid += n)['map'](a => +a);
}
function a0_0x1ba2() {
    var _0x284a53 = [
        'utf8',
        'slice',
        'push',
        'map',
        'length',
        'Array(a[',
        ';})',
        ']).fill().map(x=>',
        'log',
        'vOSKK',
        'TDsjA',
        ']).fill().map(x=>{return\x20',
        'max'
    ];
    a0_0x1ba2 = function () {
        return _0x284a53;
    };
    return a0_0x1ba2();
}
function nextm(h, w, a) {
    var _0x4a31e0 = a0_0x23ab;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x4a31e0(0x2)](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x4a31e0(0x2)](cin['slice'](cid, cid += w)[_0x4a31e0(0x3)](a => +a));
    return r;
}
function xArray(v) {
    var _0x2ebc9d = a0_0x23ab;
    var a = arguments, l = a[_0x2ebc9d(0x4)], r = _0x2ebc9d(0x5) + --l + ']).fill().map(x=>{return\x20' + v + _0x2ebc9d(0x6);
    while (--l)
        r = 'Array(a[' + l + _0x2ebc9d(0x7) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x2c4f82(0x8)](String(myOut));
function main() {
    var _0x5c4275 = a0_0x23ab;
    var n = next();
    var ans = 0x0, mn = 0x1;
    for (var i = 0x0; i < n; i++) {
        if (_0x5c4275(0x9) !== 'fvhbV') {
            var t = next() - 0x1;
            if (t < mn) {
                if (_0x5c4275(0xa) !== _0x5c4275(0xa)) {
                    var a = arguments, l = a[_0x5c4275(0x4)], r = _0x5c4275(0x5) + --l + _0x5c4275(0xb) + v + _0x5c4275(0x6);
                    while (--l)
                        r = _0x5c4275(0x5) + l + _0x5c4275(0x7) + r + ')';
                    return eval(r);
                } else {
                    mn = Math[_0x5c4275(0xc)](mn, t + 0x2);
                }
            } else {
                ans += t / mn | 0x0;
                mn = Math['max'](0x2, mn);
            }
        } else {
            var t = next() - 0x1;
            if (t < mn) {
                mn = Math[_0x5c4275(0xc)](mn, t + 0x2);
            } else {
                ans += t / mn | 0x0;
                mn = Math[_0x5c4275(0xc)](0x2, mn);
            }
        }
    }
    return ans;
}