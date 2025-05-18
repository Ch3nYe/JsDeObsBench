'use strict';
var a0_0x5abe53 = a0_0x5041;
(function (stringArrayFunction, comparisonValue) {
    var _0x8cc0fe = a0_0x5041;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x8cc0fe(0x135)) / 0x1 * (-parseInt(_0x8cc0fe(0x141)) / 0x2) + -parseInt(_0x8cc0fe(0x131)) / 0x3 * (parseInt(_0x8cc0fe(0x13b)) / 0x4) + -parseInt(_0x8cc0fe(0x140)) / 0x5 * (parseInt(_0x8cc0fe(0x136)) / 0x6) + -parseInt(_0x8cc0fe(0x13f)) / 0x7 + -parseInt(_0x8cc0fe(0x143)) / 0x8 + parseInt(_0x8cc0fe(0x13c)) / 0x9 * (parseInt(_0x8cc0fe(0x130)) / 0xa) + parseInt(_0x8cc0fe(0x12e)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4d4a, 0x50081));
function a0_0x4d4a() {
    var _0x3a49c7 = [
        '1182Sejswc',
        'Array(a[',
        'map',
        'push',
        '17CEEhiu',
        '6qLLysB',
        'Brown',
        ']).fill().map(x=>',
        'utf8',
        'Alice',
        '2596JyMWvO',
        '45nNgoEI',
        ']).fill().map(x=>{return\x20',
        ';})',
        '1065967vBYwen',
        '2533670fMfTMt',
        '19374VKlmxL',
        'split',
        '2055000uIHscn',
        '16062794xyrPMY',
        'slice',
        '407660TNoYGH'
    ];
    a0_0x4d4a = function () {
        return _0x3a49c7;
    };
    return a0_0x4d4a();
}
function a0_0x5041(tzcorZ, key) {
    var stringArray = a0_0x4d4a();
    a0_0x5041 = function (index, key) {
        index = index - 0x12e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5041(tzcorZ, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x5abe53(0x139));
var cin = input[a0_0x5abe53(0x142)](/ |\n/), cid = 0x0;
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
    var _0x197b92 = a0_0x5abe53;
    return a ? cin['slice'](cid, cid += n) : cin[_0x197b92(0x12f)](cid, cid += n)[_0x197b92(0x133)](a => +a);
}
function nextm(h, w, a) {
    var _0xdb74dd = a0_0x5abe53;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0xdb74dd(0x134)](cin[_0xdb74dd(0x12f)](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0xdb74dd(0x134)](cin[_0xdb74dd(0x12f)](cid, cid += w)[_0xdb74dd(0x133)](a => +a));
    return r;
}
function xArray(v) {
    var _0x2193eb = a0_0x5abe53;
    var a = arguments, l = a['length'], r = _0x2193eb(0x132) + --l + _0x2193eb(0x13d) + v + _0x2193eb(0x13e);
    while (--l)
        r = _0x2193eb(0x132) + l + _0x2193eb(0x138) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var _0x425b31 = a0_0x5abe53;
    var x = nextbig(), y = nextbig();
    if (x - y < 0x2 && y - x < 0x2)
        return _0x425b31(0x137);
    return _0x425b31(0x13a);
}