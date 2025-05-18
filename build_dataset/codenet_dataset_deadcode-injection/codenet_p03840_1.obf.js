'use strict';
function a0_0xe5ee(TNhkXt, key) {
    var stringArray = a0_0x8c90();
    a0_0xe5ee = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xe5ee(TNhkXt, key);
}
var a0_0x4723fb = a0_0xe5ee;
var input = require('fs')['readFileSync'](a0_0x4723fb(0x0), a0_0x4723fb(0x1));
var cin = input[a0_0x4723fb(0x2)](/ |\n/), cid = 0x0;
function next(a) {
    return a ? cin[cid++] : +cin[cid++];
}
function nexts(n, a) {
    var _0xe4a45f = a0_0xe5ee;
    return a ? cin[_0xe4a45f(0x3)](cid, cid += n) : cin['slice'](cid, cid += n)[_0xe4a45f(0x4)](a => +a);
}
function nextm(h, w, a) {
    var _0x477017 = a0_0xe5ee;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x477017(0x5)](cin[_0x477017(0x3)](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x477017(0x5)](cin[_0x477017(0x3)](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var _0xc4a13c = a0_0xe5ee;
    var a = arguments, l = a[_0xc4a13c(0x6)], r = _0xc4a13c(0x7) + --l + _0xc4a13c(0x8) + v + _0xc4a13c(0x9);
    while (--l)
        r = _0xc4a13c(0x7) + l + _0xc4a13c(0xa) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    var a = nexts(0x7);
    var ans = a[0x1] + ((a[0x0] / 0x2 | 0x0) + (a[0x3] / 0x2 | 0x0) + (a[0x4] / 0x2 | 0x0)) * 0x2;
    switch (a[0x0] % 0x2 + a[0x3] % 0x2 + a[0x4] % 0x2) {
    case 0x3:
        ans += 0x3;
        break;
    case 0x2:
        if (a[0x0] * a[0x3] * a[0x4])
            ans += 0x1;
        break;
    }
    return ans;
}
function a0_0x8c90() {
    var _0x118ede = [
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
        ']).fill().map(x=>'
    ];
    a0_0x8c90 = function () {
        return _0x118ede;
    };
    return a0_0x8c90();
}