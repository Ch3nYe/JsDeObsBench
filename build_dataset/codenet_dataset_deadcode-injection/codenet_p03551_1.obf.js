'use strict';
var a0_0x15c434 = a0_0x517a;
var input = require('fs')[a0_0x15c434(0x0)](a0_0x15c434(0x1), a0_0x15c434(0x2));
var cin = input[a0_0x15c434(0x3)](/ |\n/), cid = 0x0;
function next() {
    return +cin[cid++];
}
function a0_0x517a(SCRpNU, key) {
    var stringArray = a0_0xb0c7();
    a0_0x517a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x517a(SCRpNU, key);
}
function nextstr() {
    return cin[cid++];
}
function nextbig() {
    return BigInt(cin[cid++]);
}
function nexts(n, a) {
    var _0x1486c1 = a0_0x517a;
    return a ? cin[_0x1486c1(0x4)](cid, cid += n) : cin[_0x1486c1(0x4)](cid, cid += n)[_0x1486c1(0x5)](a => +a);
}
function nextm(h, w, a) {
    var _0x51cd23 = a0_0x517a;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x51cd23(0x6)](cin[_0x51cd23(0x4)](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin[_0x51cd23(0x4)](cid, cid += w)[_0x51cd23(0x5)](a => +a));
    return r;
}
function xArray(v) {
    var _0x5dfb9b = a0_0x517a;
    var a = arguments, l = a[_0x5dfb9b(0x7)], r = 'Array(a[' + --l + _0x5dfb9b(0x8) + v + _0x5dfb9b(0x9);
    while (--l)
        r = _0x5dfb9b(0xa) + l + ']).fill().map(x=>' + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x15c434(0xb)](String(myOut));
function a0_0xb0c7() {
    var _0x49273b = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'slice',
        'map',
        'push',
        'length',
        ']).fill().map(x=>{return\x20',
        ';})',
        'Array(a[',
        'log'
    ];
    a0_0xb0c7 = function () {
        return _0x49273b;
    };
    return a0_0xb0c7();
}
function main() {
    var n = next();
    var m = next();
    var ans = m * 0x708 + n * 0x64;
    return ans << m;
}