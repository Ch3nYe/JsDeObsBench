'use strict';
var a0_0x2a5913 = a0_0x3bf8;
(function (stringArrayFunction, comparisonValue) {
    var _0x215bde = a0_0x3bf8;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x215bde(0xe1)) / 0x1 * (-parseInt(_0x215bde(0xe4)) / 0x2) + parseInt(_0x215bde(0xe8)) / 0x3 * (-parseInt(_0x215bde(0xee)) / 0x4) + parseInt(_0x215bde(0xe5)) / 0x5 + -parseInt(_0x215bde(0xef)) / 0x6 + parseInt(_0x215bde(0xf3)) / 0x7 + parseInt(_0x215bde(0xec)) / 0x8 * (-parseInt(_0x215bde(0xf1)) / 0x9) + parseInt(_0x215bde(0xf2)) / 0xa * (-parseInt(_0x215bde(0xf4)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5575, 0xea606));
var input = require('fs')['readFileSync'](a0_0x2a5913(0xf0), a0_0x2a5913(0xe6));
var cin = input[a0_0x2a5913(0xea)](/ |\n/), cid = 0x0;
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
    var _0x5b4ee4 = a0_0x2a5913;
    return a ? cin[_0x5b4ee4(0xe2)](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var _0x4e7a61 = a0_0x2a5913;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r['push'](cin[_0x4e7a61(0xe2)](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x4e7a61(0xe3)](cin[_0x4e7a61(0xe2)](cid, cid += w)[_0x4e7a61(0xe0)](a => +a));
    return r;
}
function xArray(v) {
    var _0x2a1126 = a0_0x2a5913;
    var a = arguments, l = a[_0x2a1126(0xeb)], r = 'Array(a[' + --l + _0x2a1126(0xf5) + v + _0x2a1126(0xed);
    while (--l)
        r = _0x2a1126(0xf6) + l + _0x2a1126(0xe7) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function a0_0x3bf8(YJdooN, key) {
    var stringArray = a0_0x5575();
    a0_0x3bf8 = function (index, key) {
        index = index - 0xe0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3bf8(YJdooN, key);
}
function a0_0x5575() {
    var _0x5a7d3c = [
        '10035575yMMJXx',
        ']).fill().map(x=>{return\x20',
        'Array(a[',
        'map',
        '712186CgExHU',
        'slice',
        'push',
        '2KMYiEF',
        '7339030dwQBiP',
        'utf8',
        ']).fill().map(x=>',
        '162273ezjQBZ',
        'charCodeAt',
        'split',
        'length',
        '112ajwmgH',
        ';})',
        '28UUVfEx',
        '4486740VDsHqS',
        '/dev/stdin',
        '29115MOxKLT',
        '10pNgnMw',
        '6048392UmNamd'
    ];
    a0_0x5575 = function () {
        return _0x5a7d3c;
    };
    return a0_0x5575();
}
function main() {
    var _0x45f9fe = a0_0x2a5913;
    var a = nextstr();
    var ans = 0x1;
    var c = xArray(0x0, 0x1a);
    for (var i = 0x0; i < a[_0x45f9fe(0xeb)]; i++) {
        var t = a[i][_0x45f9fe(0xe9)]() - 0x61;
        ans += i - c[t];
        c[t]++;
    }
    return ans;
}