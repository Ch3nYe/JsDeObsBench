'use strict';
var a0_0x213a57 = a0_0x2a45;
function a0_0x7a16() {
    var _0x19e023 = [
        'utf8',
        'split',
        'slice',
        'map',
        'push',
        'length',
        ']).fill().map(x=>{return\x20',
        ';})',
        'log',
        'charCodeAt'
    ];
    a0_0x7a16 = function () {
        return _0x19e023;
    };
    return a0_0x7a16();
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x213a57(0x0));
var cin = input[a0_0x213a57(0x1)](/ |\n/), cid = 0x0;
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
    var _0xb968a0 = a0_0x2a45;
    return a ? cin[_0xb968a0(0x2)](cid, cid += n) : cin[_0xb968a0(0x2)](cid, cid += n)[_0xb968a0(0x3)](a => +a);
}
function nextm(h, w, a) {
    var _0x5db602 = a0_0x2a45;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x5db602(0x4)](cin[_0x5db602(0x2)](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w)[_0x5db602(0x3)](a => +a));
    return r;
}
function xArray(v) {
    var _0x2d8e1d = a0_0x2a45;
    var a = arguments, l = a[_0x2d8e1d(0x5)], r = 'Array(a[' + --l + _0x2d8e1d(0x6) + v + _0x2d8e1d(0x7);
    while (--l)
        r = 'Array(a[' + l + ']).fill().map(x=>' + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x213a57(0x8)](String(myOut));
function a0_0x2a45(RCDQpu, key) {
    var stringArray = a0_0x7a16();
    a0_0x2a45 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a45(RCDQpu, key);
}
function main() {
    var _0x499798 = a0_0x2a45;
    var a = nextstr();
    var ans = 0x1;
    var c = xArray(0x0, 0x1a);
    for (var i = 0x0; i < a[_0x499798(0x5)]; i++) {
        var t = a[i][_0x499798(0x9)]() - 0x61;
        ans += i - c[t];
        c[t]++;
    }
    return ans;
}