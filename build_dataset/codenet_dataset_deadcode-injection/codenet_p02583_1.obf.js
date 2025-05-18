'use strict';
var a0_0x3853e4 = a0_0x5f3c;
var input = require('fs')[a0_0x3853e4(0x0)](a0_0x3853e4(0x1), a0_0x3853e4(0x2));
var cin = input['split'](/ |\n/), cid = 0x0;
function a0_0x550a() {
    var _0x4a157b = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'slice',
        'map',
        'push',
        'length',
        ']).fill().map(x=>{return\x20',
        ']).fill().map(x=>',
        'log'
    ];
    a0_0x550a = function () {
        return _0x4a157b;
    };
    return a0_0x550a();
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
function a0_0x5f3c(DCHeDR, key) {
    var stringArray = a0_0x550a();
    a0_0x5f3c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5f3c(DCHeDR, key);
}
function nexts(n, a) {
    var _0x2fe4aa = a0_0x5f3c;
    return a ? cin[_0x2fe4aa(0x3)](cid, cid += n) : cin[_0x2fe4aa(0x3)](cid, cid += n)[_0x2fe4aa(0x4)](a => +a);
}
function nextm(h, w, a) {
    var _0x3703af = a0_0x5f3c;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x3703af(0x5)](cin[_0x3703af(0x3)](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x3703af(0x5)](cin[_0x3703af(0x3)](cid, cid += w)[_0x3703af(0x4)](a => +a));
    return r;
}
function xArray(v) {
    var _0x477142 = a0_0x5f3c;
    var a = arguments, l = a[_0x477142(0x6)], r = 'Array(a[' + --l + _0x477142(0x7) + v + ';})';
    while (--l)
        r = 'Array(a[' + l + _0x477142(0x8) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x3853e4(0x9)](String(myOut));
function main() {
    var n = next();
    var l = nexts(n)['sort']((a, b) => a - b);
    var ans = 0x0;
    for (var i = 0x0; i < n; i++)
        for (var j = i + 0x1; j < n; j++)
            for (var k = j + 0x1; k < n; k++) {
                if (l[i] === l[j] || l[j] === l[k])
                    continue;
                if (l[i] + l[j] > l[k])
                    ans++;
            }
    return ans;
}