'use strict';
var a0_0x84e3c2 = a0_0x4c15;
var input = require('fs')[a0_0x84e3c2(0x0)]('/dev/stdin', 'utf8');
var cin = input[a0_0x84e3c2(0x1)](/ |\n/), cid = 0x0;
function next(a) {
    return a ? cin[cid++] : +cin[cid++];
}
function nexts(n, a) {
    var _0x36af30 = a0_0x4c15;
    return a ? cin[_0x36af30(0x2)](cid, cid += n) : cin[_0x36af30(0x2)](cid, cid += n)[_0x36af30(0x3)](a => +a);
}
function nextm(h, w, a) {
    var _0x1f2602 = a0_0x4c15;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x1f2602(0x4)](cin[_0x1f2602(0x2)](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x1f2602(0x4)](cin['slice'](cid, cid += w)[_0x1f2602(0x3)](a => +a));
    return r;
}
function xArray(v) {
    var _0x190cdb = a0_0x4c15;
    var a = arguments, l = a[_0x190cdb(0x5)], r = _0x190cdb(0x6) + --l + ']).fill().map(x=>{return\x20' + v + _0x190cdb(0x7);
    while (--l)
        r = 'Array(a[' + l + _0x190cdb(0x8) + r + ')';
    return eval(r);
}
var mod = 0x3b9aca00 + 0x7;
function mul() {
    var _0x455f05 = a0_0x4c15;
    for (var a = arguments, r = a[0x0], i = a[_0x455f05(0x5)]; --i;)
        r = ((r >> 0x10) * a[i] % mod * 0x10000 + (r & 0xffff) * a[i]) % mod;
    return r;
}
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function a0_0x4c15(vTexGU, key) {
    var stringArray = a0_0x2b29();
    a0_0x4c15 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c15(vTexGU, key);
}
function a0_0x2b29() {
    var _0x4939a3 = [
        'readFileSync',
        'split',
        'slice',
        'map',
        'push',
        'length',
        'Array(a[',
        ';})',
        ']).fill().map(x=>',
        'KMNUT',
        ']).fill().map(x=>{return\x20'
    ];
    a0_0x2b29 = function () {
        return _0x4939a3;
    };
    return a0_0x2b29();
}
function main() {
    var _0x5443cd = a0_0x4c15;
    var n = next();
    var x = nexts(n);
    var ans = 0x1, id = 0x1, rem = 0x0;
    for (var i = 0x0; i < n; i++) {
        rem++;
        ans = mul(ans, rem);
        if (x[i] < id) {
            if (_0x5443cd(0x9) === 'mfjiQ') {
                var a = arguments, l = a[_0x5443cd(0x5)], r = _0x5443cd(0x6) + --l + _0x5443cd(0xa) + v + _0x5443cd(0x7);
                while (--l)
                    r = _0x5443cd(0x6) + l + _0x5443cd(0x8) + r + ')';
                return eval(r);
            } else {
                rem--;
            }
        } else {
            id += 0x2;
        }
    }
    return ans;
}