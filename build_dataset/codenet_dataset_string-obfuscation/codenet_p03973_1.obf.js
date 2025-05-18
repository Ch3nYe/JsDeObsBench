'use strict';
var a0_0xb2b195 = a0_0x27a0;
(function (stringArrayFunction, comparisonValue) {
    var _0x547e0d = a0_0x27a0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x547e0d(0xb7)) / 0x1 + parseInt(_0x547e0d(0xb3)) / 0x2 * (parseInt(_0x547e0d(0xc0)) / 0x3) + parseInt(_0x547e0d(0xc3)) / 0x4 + -parseInt(_0x547e0d(0xaf)) / 0x5 * (parseInt(_0x547e0d(0xb6)) / 0x6) + -parseInt(_0x547e0d(0xba)) / 0x7 + parseInt(_0x547e0d(0xc2)) / 0x8 * (parseInt(_0x547e0d(0xb0)) / 0x9) + parseInt(_0x547e0d(0xbc)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4063, 0xd4459));
function a0_0x27a0(CdIVvt, key) {
    var stringArray = a0_0x4063();
    a0_0x27a0 = function (index, key) {
        index = index - 0xaf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x27a0(CdIVvt, key);
}
var input = require('fs')[a0_0xb2b195(0xc5)](a0_0xb2b195(0xb9), a0_0xb2b195(0xbf));
var cin = input[a0_0xb2b195(0xbe)](/ |\n/), cid = 0x0;
function next() {
    return +cin[cid++];
}
function nextstr() {
    return cin[cid++];
}
function a0_0x4063() {
    var _0xca6082 = [
        ']).fill().map(x=>{return\x20',
        'map',
        '2nlEyDM',
        ';})',
        ']).fill().map(x=>',
        '12iDAuEb',
        '471253xOozLG',
        'push',
        '/dev/stdin',
        '6778373egKBXj',
        'log',
        '6759020ThHiXl',
        'max',
        'split',
        'utf8',
        '3601833bOLamp',
        'Array(a[',
        '7472PgMKKy',
        '819880GfKvux',
        'slice',
        'readFileSync',
        '1247695NLmieP',
        '7002sEUKPQ'
    ];
    a0_0x4063 = function () {
        return _0xca6082;
    };
    return a0_0x4063();
}
function nextbig() {
    return BigInt(cin[cid++]);
}
function nexts(n, a) {
    var _0x164270 = a0_0xb2b195;
    return a ? cin[_0x164270(0xc4)](cid, cid += n) : cin[_0x164270(0xc4)](cid, cid += n)[_0x164270(0xb2)](a => +a);
}
function nextm(h, w, a) {
    var _0x2b1e91 = a0_0xb2b195;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r['push'](cin[_0x2b1e91(0xc4)](cid, cid += w));
    else
        for (; i < h; i++)
            r[_0x2b1e91(0xb8)](cin[_0x2b1e91(0xc4)](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var _0x36b3ba = a0_0xb2b195;
    var a = arguments, l = a['length'], r = _0x36b3ba(0xc1) + --l + _0x36b3ba(0xb1) + v + _0x36b3ba(0xb4);
    while (--l)
        r = 'Array(a[' + l + _0x36b3ba(0xb5) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0xb2b195(0xbb)](String(myOut));
function main() {
    var _0xefc768 = a0_0xb2b195;
    var n = next();
    var ans = 0x0, mn = 0x1;
    for (var i = 0x0; i < n; i++) {
        var t = next() - 0x1;
        if (t < mn) {
            mn = Math['max'](mn, t + 0x2);
        } else {
            ans += t / mn | 0x0;
            mn = Math[_0xefc768(0xbd)](0x2, mn);
        }
    }
    return ans;
}