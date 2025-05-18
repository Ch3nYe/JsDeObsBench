'use strict';
var a0_0x3f267e = a0_0x1ed1;
function a0_0x1ed1(MVfpWt, key) {
    var stringArray = a0_0x2c1b();
    a0_0x1ed1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ed1(MVfpWt, key);
}
var input = require('fs')['readFileSync'](a0_0x3f267e(0x0), a0_0x3f267e(0x1));
var cin = input[a0_0x3f267e(0x2)](/ |\n/), cid = 0x0;
function a0_0x2c1b() {
    var _0x58bfb3 = [
        '/dev/stdin',
        'utf8',
        'split',
        'slice',
        'map',
        'push',
        'length',
        'Array(a[',
        ']).fill().map(x=>{return\x20',
        ';})',
        ']).fill().map(x=>',
        'log'
    ];
    a0_0x2c1b = function () {
        return _0x58bfb3;
    };
    return a0_0x2c1b();
}
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
    var _0x2dfda1 = a0_0x1ed1;
    return a ? cin[_0x2dfda1(0x3)](cid, cid += n) : cin[_0x2dfda1(0x3)](cid, cid += n)[_0x2dfda1(0x4)](a => +a);
}
function nextm(h, w, a) {
    var _0x2974f1 = a0_0x1ed1;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x2974f1(0x5)](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin[_0x2974f1(0x3)](cid, cid += w)[_0x2974f1(0x4)](a => +a));
    return r;
}
function xArray(v) {
    var _0xbd837f = a0_0x1ed1;
    var a = arguments, l = a[_0xbd837f(0x6)], r = _0xbd837f(0x7) + --l + _0xbd837f(0x8) + v + _0xbd837f(0x9);
    while (--l)
        r = _0xbd837f(0x7) + l + _0xbd837f(0xa) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x3f267e(0xb)](String(myOut));
function main() {
    var x = nextbig(), y = nextbig();
    if (x - y < 0x2 && y - x < 0x2)
        return 'Brown';
    return 'Alice';
}