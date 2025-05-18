'use strict';
var a0_0x48d06a = a0_0x2a51;
(function (stringArrayFunction, comparisonValue) {
    var _0x13b656 = a0_0x2a51;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x13b656(0x1f7)) / 0x1 * (-parseInt(_0x13b656(0x1f3)) / 0x2) + parseInt(_0x13b656(0x1f5)) / 0x3 + parseInt(_0x13b656(0x1ec)) / 0x4 + -parseInt(_0x13b656(0x1e6)) / 0x5 + -parseInt(_0x13b656(0x1ee)) / 0x6 + -parseInt(_0x13b656(0x1e7)) / 0x7 * (-parseInt(_0x13b656(0x1ef)) / 0x8) + -parseInt(_0x13b656(0x1e8)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1fce, 0x39ee2));
function a0_0x2a51(GQWQOw, key) {
    var stringArray = a0_0x1fce();
    a0_0x2a51 = function (index, key) {
        index = index - 0x1e6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a51(GQWQOw, key);
}
var input = require('fs')[a0_0x48d06a(0x1f0)](a0_0x48d06a(0x1eb), 'utf8');
var cin = input[a0_0x48d06a(0x1f8)](/ |\n/), cid = 0x0;
function next() {
    return +cin[cid++];
}
function a0_0x1fce() {
    var _0x28b96a = [
        '7xFJqmB',
        '5896521vALrpc',
        'log',
        'map',
        '/dev/stdin',
        '1471876sOwxOc',
        'Array(a[',
        '1996644nSPsQq',
        '2069832Uhihlb',
        'readFileSync',
        'push',
        ']).fill().map(x=>{return\x20',
        '2DYWxkF',
        ']).fill().map(x=>',
        '743991eZUYpQ',
        'length',
        '422621cBHEdF',
        'split',
        'slice',
        '360455aheufJ'
    ];
    a0_0x1fce = function () {
        return _0x28b96a;
    };
    return a0_0x1fce();
}
function nextstr() {
    return cin[cid++];
}
function nextbig() {
    return BigInt(cin[cid++]);
}
function nexts(n, a) {
    var _0x368c0e = a0_0x48d06a;
    return a ? cin[_0x368c0e(0x1f9)](cid, cid += n) : cin[_0x368c0e(0x1f9)](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var _0x1401f1 = a0_0x48d06a;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x1401f1(0x1f1)](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin[_0x1401f1(0x1f9)](cid, cid += w)[_0x1401f1(0x1ea)](a => +a));
    return r;
}
function xArray(v) {
    var _0xde8755 = a0_0x48d06a;
    var a = arguments, l = a[_0xde8755(0x1f6)], r = _0xde8755(0x1ed) + --l + _0xde8755(0x1f2) + v + ';})';
    while (--l)
        r = _0xde8755(0x1ed) + l + _0xde8755(0x1f4) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x48d06a(0x1e9)](String(myOut));
function main() {
    var n = next();
    var a = [0x0]['concat'](nexts(n));
    for (var i = n; i >= 0x1; i--) {
        var sum = 0x0;
        for (var j = i; j <= n; j += i)
            sum += a[j];
        if (sum < 0x0)
            for (var j = i; j <= n; j += i)
                a[j] = 0x0;
    }
    return a['reduce']((a, b) => a + b);
}