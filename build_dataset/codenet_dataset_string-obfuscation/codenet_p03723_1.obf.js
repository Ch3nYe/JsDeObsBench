'use strict';
var a0_0x26674c = a0_0x3a2f;
(function (stringArrayFunction, comparisonValue) {
    var _0x11d7d2 = a0_0x3a2f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x11d7d2(0x11a)) / 0x1 * (-parseInt(_0x11d7d2(0x124)) / 0x2) + parseInt(_0x11d7d2(0x127)) / 0x3 * (parseInt(_0x11d7d2(0x12b)) / 0x4) + parseInt(_0x11d7d2(0x126)) / 0x5 * (-parseInt(_0x11d7d2(0x122)) / 0x6) + parseInt(_0x11d7d2(0x129)) / 0x7 * (parseInt(_0x11d7d2(0x121)) / 0x8) + parseInt(_0x11d7d2(0x11c)) / 0x9 + -parseInt(_0x11d7d2(0x12c)) / 0xa * (parseInt(_0x11d7d2(0x117)) / 0xb) + -parseInt(_0x11d7d2(0x11e)) / 0xc * (parseInt(_0x11d7d2(0x120)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4105, 0x24486));
var input = require('fs')[a0_0x26674c(0x118)](a0_0x26674c(0x125), a0_0x26674c(0x119));
var cin = input[a0_0x26674c(0x12a)](/ |\n/), cid = 0x0;
function a0_0x3a2f(Ygadhn, key) {
    var stringArray = a0_0x4105();
    a0_0x3a2f = function (index, key) {
        index = index - 0x117;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3a2f(Ygadhn, key);
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
function nexts(n, a) {
    var _0x1206ed = a0_0x26674c;
    return a ? cin[_0x1206ed(0x12d)](cid, cid += n) : cin[_0x1206ed(0x12d)](cid, cid += n)[_0x1206ed(0x11f)](a => +a);
}
function nextm(h, w, a) {
    var _0xfcfcba = a0_0x26674c;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r['push'](cin[_0xfcfcba(0x12d)](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin[_0xfcfcba(0x12d)](cid, cid += w)[_0xfcfcba(0x11f)](a => +a));
    return r;
}
function xArray(v) {
    var _0x465b83 = a0_0x26674c;
    var a = arguments, l = a[_0x465b83(0x11b)], r = 'Array(a[' + --l + _0x465b83(0x128) + v + ';})';
    while (--l)
        r = 'Array(a[' + l + _0x465b83(0x123) + r + ')';
    return eval(r);
}
function a0_0x4105() {
    var _0x4f695f = [
        '1253XRAdxl',
        'split',
        '1155204doKivt',
        '70brIyvq',
        'slice',
        '280412IUkxSb',
        'readFileSync',
        'utf8',
        '2143QTzORw',
        'length',
        '782748SDPrLw',
        'log',
        '36CoELve',
        'map',
        '1108913rqZOSu',
        '11912pEjppK',
        '6iKNDqD',
        ']).fill().map(x=>',
        '4BFcMOj',
        '/dev/stdin',
        '275285lJGZlP',
        '3pLwEal',
        ']).fill().map(x=>{return\x20'
    ];
    a0_0x4105 = function () {
        return _0x4f695f;
    };
    return a0_0x4105();
}
var tm = +new Date() + 0x384;
var myOut = main();
if (myOut !== undefined)
    console[a0_0x26674c(0x11d)](String(myOut));
function main() {
    var [a, b, c] = nexts(0x3);
    var cnt = 0x0;
    while (new Date() < tm) {
        if (a % 0x2 || b % 0x2 || c % 0x2)
            return cnt;
        var a2 = b + c >> 0x1, b2 = a + c >> 0x1, c2 = a + b >> 0x1;
        a = a2, b = b2, c = c2;
        cnt++;
    }
    return -0x1;
}