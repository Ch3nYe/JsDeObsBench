'use strict';
var a0_0xa901bf = a0_0x23ae;
function a0_0x23ae(XldbWP, key) {
    var stringArray = a0_0xc306();
    a0_0x23ae = function (index, key) {
        index = index - 0x1c6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x23ae(XldbWP, key);
}
function a0_0xc306() {
    var _0x1c02ad = [
        'length',
        '112ZjVrKK',
        '5697qUPSjv',
        'readFileSync',
        ';})',
        ']).fill().map(x=>',
        ']).fill().map(x=>{return\x20',
        '1754694AkBvds',
        '/dev/stdin',
        '3577975WHKNzA',
        '72KMLZbA',
        'Array(a[',
        'push',
        'split',
        '849981YFIHZk',
        '3460ztMJVZ',
        'utf8',
        '12581160gWasQd',
        'slice',
        '497903fTDGbF',
        'map',
        '710370oUrsKe',
        'log'
    ];
    a0_0xc306 = function () {
        return _0x1c02ad;
    };
    return a0_0xc306();
}
(function (stringArrayFunction, comparisonValue) {
    var _0xee5f18 = a0_0x23ae;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xee5f18(0x1d9)) / 0x1 + parseInt(_0xee5f18(0x1d2)) / 0x2 + parseInt(_0xee5f18(0x1cd)) / 0x3 * (-parseInt(_0xee5f18(0x1da)) / 0x4) + -parseInt(_0xee5f18(0x1d4)) / 0x5 + parseInt(_0xee5f18(0x1d5)) / 0x6 * (parseInt(_0xee5f18(0x1c7)) / 0x7) + -parseInt(_0xee5f18(0x1cc)) / 0x8 * (-parseInt(_0xee5f18(0x1c9)) / 0x9) + parseInt(_0xee5f18(0x1dc)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xc306, 0xd843c));
var input = require('fs')[a0_0xa901bf(0x1ce)](a0_0xa901bf(0x1d3), a0_0xa901bf(0x1db));
var cin = input[a0_0xa901bf(0x1d8)](/ |\n/), cid = 0x0;
function next(a) {
    return a ? cin[cid++] : +cin[cid++];
}
function nexts(n, a) {
    var _0x5b564a = a0_0xa901bf;
    return a ? cin[_0x5b564a(0x1c6)](cid, cid += n) : cin[_0x5b564a(0x1c6)](cid, cid += n)[_0x5b564a(0x1c8)](a => +a);
}
function nextm(h, w, a) {
    var _0x198f82 = a0_0xa901bf;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x198f82(0x1d7)](cin[_0x198f82(0x1c6)](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w)[_0x198f82(0x1c8)](a => +a));
    return r;
}
function xArray(v) {
    var _0x1ebfe4 = a0_0xa901bf;
    var a = arguments, l = a['length'], r = _0x1ebfe4(0x1d6) + --l + _0x1ebfe4(0x1d1) + v + _0x1ebfe4(0x1cf);
    while (--l)
        r = _0x1ebfe4(0x1d6) + l + _0x1ebfe4(0x1d0) + r + ')';
    return eval(r);
}
var mod = 0x3b9aca00 + 0x7;
function mul() {
    var _0x56d9f1 = a0_0xa901bf;
    for (var a = arguments, r = a[0x0], i = a[_0x56d9f1(0x1cb)]; --i;)
        r = ((r >> 0x10) * a[i] % mod * 0x10000 + (r & 0xffff) * a[i]) % mod;
    return r;
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0xa901bf(0x1ca)](myOut);
function main() {
    var n = next();
    var x = nexts(n);
    var ans = 0x1, id = 0x1, rem = 0x0;
    for (var i = 0x0; i < n; i++) {
        rem++;
        ans = mul(ans, rem);
        if (x[i] < id) {
            rem--;
        } else {
            id += 0x2;
        }
    }
    return ans;
}