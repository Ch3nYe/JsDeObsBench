'use strict';
function a0_0x18ab(TnHYLD, key) {
    var stringArray = a0_0x3145();
    a0_0x18ab = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x18ab(TnHYLD, key);
}
var a0_0x3b3320 = a0_0x18ab;
var input = require('fs')['readFileSync'](a0_0x3b3320(0x0), a0_0x3b3320(0x1));
var cin = input[a0_0x3b3320(0x2)](/ |\n/), cid = 0x0;
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
    var _0x4585af = a0_0x18ab;
    return a ? cin[_0x4585af(0x3)](cid, cid += n) : cin[_0x4585af(0x3)](cid, cid += n)[_0x4585af(0x4)](a => +a);
}
function nextm(h, w, a) {
    var _0x30afa8 = a0_0x18ab;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x30afa8(0x5)](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x30afa8(0x5)](cin[_0x30afa8(0x3)](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var _0x41546a = a0_0x18ab;
    var a = arguments, l = a[_0x41546a(0x6)], r = 'Array(a[' + --l + _0x41546a(0x7) + v + _0x41546a(0x8);
    while (--l)
        r = 'Array(a[' + l + _0x41546a(0x9) + r + ')';
    return eval(r);
}
function a0_0x3145() {
    var _0x1ec6de = [
        '/dev/stdin',
        'utf8',
        'split',
        'slice',
        'map',
        'push',
        'length',
        ']).fill().map(x=>{return\x20',
        ';})',
        ']).fill().map(x=>',
        'log',
        'sort'
    ];
    a0_0x3145 = function () {
        return _0x1ec6de;
    };
    return a0_0x3145();
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x3b3320(0xa)](String(myOut));
function main() {
    var _0x5402be = a0_0x18ab;
    var n = next();
    var a = [];
    for (var i = 0x0; i < n; i++) {
        a[_0x5402be(0x5)]([
            next(),
            i & 0x1
        ]);
    }
    a[_0x5402be(0xb)]((a, b) => a[0x0] - b[0x0]);
    var ans = 0x0;
    for (var i = 0x0; i < n; i += 0x2)
        if (a[i][0x1] === 0x1)
            ans++;
    return ans;
}