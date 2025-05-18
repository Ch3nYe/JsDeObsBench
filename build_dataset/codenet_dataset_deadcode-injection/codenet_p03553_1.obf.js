'use strict';
var a0_0x131ecc = a0_0x4519;
var input = require('fs')['readFileSync'](a0_0x131ecc(0x0), 'utf8');
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
    var _0x8eea2a = a0_0x4519;
    return a ? cin[_0x8eea2a(0x1)](cid, cid += n) : cin[_0x8eea2a(0x1)](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var _0x21bcdd = a0_0x4519;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x21bcdd(0x2)](cin[_0x21bcdd(0x1)](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x21bcdd(0x2)](cin['slice'](cid, cid += w)[_0x21bcdd(0x3)](a => +a));
    return r;
}
function a0_0x4519(iMupUc, key) {
    var stringArray = a0_0x3208();
    a0_0x4519 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4519(iMupUc, key);
}
function xArray(v) {
    var _0xdb349d = a0_0x4519;
    var a = arguments, l = a['length'], r = _0xdb349d(0x4) + --l + _0xdb349d(0x5) + v + _0xdb349d(0x6);
    while (--l)
        r = 'Array(a[' + l + ']).fill().map(x=>' + r + ')';
    return eval(r);
}
var myOut = main();
function a0_0x3208() {
    var _0x1ec25f = [
        '/dev/stdin',
        'slice',
        'push',
        'map',
        'Array(a[',
        ']).fill().map(x=>{return\x20',
        ';})',
        'log',
        'concat',
        'reduce'
    ];
    a0_0x3208 = function () {
        return _0x1ec25f;
    };
    return a0_0x3208();
}
if (myOut !== undefined)
    console[a0_0x131ecc(0x7)](String(myOut));
function main() {
    var _0x59eaf4 = a0_0x4519;
    var n = next();
    var a = [0x0][_0x59eaf4(0x8)](nexts(n));
    for (var i = n; i >= 0x1; i--) {
        var sum = 0x0;
        for (var j = i; j <= n; j += i)
            sum += a[j];
        if (sum < 0x0)
            for (var j = i; j <= n; j += i)
                a[j] = 0x0;
    }
    return a[_0x59eaf4(0x9)]((a, b) => a + b);
}