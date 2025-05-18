'use strict';
var a0_0x8947e4 = a0_0x186e;
var input = require('fs')['readFileSync'](a0_0x8947e4(0x0), a0_0x8947e4(0x1));
var cin = input[a0_0x8947e4(0x2)](/ |\n/), cid = 0x0;
function next() {
    return +cin[cid++];
}
function a0_0x575d() {
    var _0x3a2323 = [
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
        'log'
    ];
    a0_0x575d = function () {
        return _0x3a2323;
    };
    return a0_0x575d();
}
function a0_0x186e(qCeSWw, key) {
    var stringArray = a0_0x575d();
    a0_0x186e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x186e(qCeSWw, key);
}
function nextstr() {
    return cin[cid++];
}
function nextbig() {
    return BigInt(cin[cid++]);
}
function nexts(n, a) {
    var _0xb166be = a0_0x186e;
    return a ? cin[_0xb166be(0x3)](cid, cid += n) : cin[_0xb166be(0x3)](cid, cid += n)[_0xb166be(0x4)](a => +a);
}
function nextm(h, w, a) {
    var _0x1d5791 = a0_0x186e;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x1d5791(0x5)](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin[_0x1d5791(0x3)](cid, cid += w)[_0x1d5791(0x4)](a => +a));
    return r;
}
function xArray(v) {
    var _0xa36570 = a0_0x186e;
    var a = arguments, l = a[_0xa36570(0x6)], r = _0xa36570(0x7) + --l + _0xa36570(0x8) + v + _0xa36570(0x9);
    while (--l)
        r = _0xa36570(0x7) + l + ']).fill().map(x=>' + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x8947e4(0xa)](String(myOut));
function main() {
    var [q, h, s, d] = nexts(0x4);
    var n = next();
    if (q * 0x2 < h)
        h = q * 0x2;
    if (h * 0x2 < s)
        s = h * 0x2;
    if (s * 0x2 < d)
        d = s * 0x2;
    return BigInt(n / 0x2 | 0x0) * BigInt(d) + BigInt((n & 0x1) * s);
}