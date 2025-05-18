'use strict';
var a0_0x363d96 = a0_0x563f;
var input = require('fs')[a0_0x363d96(0x0)]('/dev/stdin', 'utf8');
var cin = input[a0_0x363d96(0x1)](/ |\n/), cid = 0x0;
function next() {
    return +cin[cid++];
}
function nextstr() {
    return cin[cid++];
}
function nextbig() {
    return BigInt(cin[cid++]);
}
function a0_0x5359() {
    var _0x5bbac0 = [
        'readFileSync',
        'split',
        'slice',
        'map',
        'push',
        'Array(a[',
        ']).fill().map(x=>{return\x20',
        ';})',
        ']).fill().map(x=>',
        'log'
    ];
    a0_0x5359 = function () {
        return _0x5bbac0;
    };
    return a0_0x5359();
}
function nexts(n, a) {
    var _0x45c2d4 = a0_0x563f;
    return a ? cin[_0x45c2d4(0x2)](cid, cid += n) : cin['slice'](cid, cid += n)[_0x45c2d4(0x3)](a => +a);
}
function nextm(h, w, a) {
    var _0x5069fe = a0_0x563f;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x5069fe(0x4)](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x5069fe(0x4)](cin[_0x5069fe(0x2)](cid, cid += w)[_0x5069fe(0x3)](a => +a));
    return r;
}
function xArray(v) {
    var _0x413116 = a0_0x563f;
    var a = arguments, l = a['length'], r = _0x413116(0x5) + --l + _0x413116(0x6) + v + _0x413116(0x7);
    while (--l)
        r = _0x413116(0x5) + l + _0x413116(0x8) + r + ')';
    return eval(r);
}
var tm = +new Date() + 0x384;
function a0_0x563f(RlNRYx, key) {
    var stringArray = a0_0x5359();
    a0_0x563f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x563f(RlNRYx, key);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x363d96(0x9)](String(myOut));
function main() {
    var [a, b, c] = nexts(0x3);
    var cnt = 0x0;
    while (new Date() < tm) {
        if (a % 0x2 || b % 0x2 || c % 0x2)
            return cnt;
        var a2 = b + c >> 0x1, b2 = a + c >> 0x1, c2 = a + b >> 0x1;
        a = a2, b = b2, c = c2;
        cnt++;
    }
    return -0x1;
}