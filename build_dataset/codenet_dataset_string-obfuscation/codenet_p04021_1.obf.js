'use strict';
var a0_0x311e75 = a0_0x456f;
(function (stringArrayFunction, comparisonValue) {
    var _0x2b32de = a0_0x456f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2b32de(0x6c)) / 0x1 * (-parseInt(_0x2b32de(0x69)) / 0x2) + parseInt(_0x2b32de(0x6b)) / 0x3 * (-parseInt(_0x2b32de(0x70)) / 0x4) + -parseInt(_0x2b32de(0x78)) / 0x5 + parseInt(_0x2b32de(0x67)) / 0x6 * (-parseInt(_0x2b32de(0x79)) / 0x7) + -parseInt(_0x2b32de(0x72)) / 0x8 + parseInt(_0x2b32de(0x6e)) / 0x9 + parseInt(_0x2b32de(0x6d)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x50aa, 0xe387c));
var input = require('fs')[a0_0x311e75(0x6f)](a0_0x311e75(0x7a), 'utf8');
var cin = input[a0_0x311e75(0x68)](/ |\n/), cid = 0x0;
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
    var _0x319f7f = a0_0x311e75;
    return a ? cin[_0x319f7f(0x71)](cid, cid += n) : cin[_0x319f7f(0x71)](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var _0x541540 = a0_0x311e75;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x541540(0x66)](cin[_0x541540(0x71)](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin[_0x541540(0x71)](cid, cid += w)[_0x541540(0x73)](a => +a));
    return r;
}
function xArray(v) {
    var _0x2e1406 = a0_0x311e75;
    var a = arguments, l = a[_0x2e1406(0x75)], r = _0x2e1406(0x74) + --l + ']).fill().map(x=>{return\x20' + v + _0x2e1406(0x77);
    while (--l)
        r = _0x2e1406(0x74) + l + ']).fill().map(x=>' + r + ')';
    return eval(r);
}
function a0_0x456f(wkVJfk, key) {
    var stringArray = a0_0x50aa();
    a0_0x456f = function (index, key) {
        index = index - 0x66;
        var value = stringArray[index];
        return value;
    };
    return a0_0x456f(wkVJfk, key);
}
var myOut = main();
function a0_0x50aa() {
    var _0x90d72a = [
        'push',
        '10930530hcsmRj',
        'split',
        '3345468dMRPZR',
        'sort',
        '3AtdbUw',
        '1PGJSVq',
        '56463070enFEhy',
        '16262163JsbAEF',
        'readFileSync',
        '7136392DJQiuI',
        'slice',
        '4037728VkRIKW',
        'map',
        'Array(a[',
        'length',
        'log',
        ';})',
        '3689735CsrLTS',
        '7rhiWeH',
        '/dev/stdin'
    ];
    a0_0x50aa = function () {
        return _0x90d72a;
    };
    return a0_0x50aa();
}
if (myOut !== undefined)
    console[a0_0x311e75(0x76)](String(myOut));
function main() {
    var _0x27f431 = a0_0x311e75;
    var n = next();
    var a = [];
    for (var i = 0x0; i < n; i++) {
        a[_0x27f431(0x66)]([
            next(),
            i & 0x1
        ]);
    }
    a[_0x27f431(0x6a)]((a, b) => a[0x0] - b[0x0]);
    var ans = 0x0;
    for (var i = 0x0; i < n; i += 0x2)
        if (a[i][0x1] === 0x1)
            ans++;
    return ans;
}