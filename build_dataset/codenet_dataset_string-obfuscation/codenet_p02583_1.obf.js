'use strict';
var a0_0x5a9ffd = a0_0x1720;
(function (stringArrayFunction, comparisonValue) {
    var _0x2ffac5 = a0_0x1720;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2ffac5(0x19d)) / 0x1 * (parseInt(_0x2ffac5(0x1a5)) / 0x2) + -parseInt(_0x2ffac5(0x198)) / 0x3 + parseInt(_0x2ffac5(0x19f)) / 0x4 + -parseInt(_0x2ffac5(0x1a6)) / 0x5 * (-parseInt(_0x2ffac5(0x1a7)) / 0x6) + -parseInt(_0x2ffac5(0x1a2)) / 0x7 + -parseInt(_0x2ffac5(0x1a9)) / 0x8 + parseInt(_0x2ffac5(0x196)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xda0a, 0x3d4af));
function a0_0xda0a() {
    var _0x519bed = [
        '3198072VZAuAp',
        'push',
        '4983939UTrNUt',
        'readFileSync',
        '1242381lBzMyW',
        'slice',
        '/dev/stdin',
        'split',
        ']).fill().map(x=>{return\x20',
        '4343JtVcOG',
        'sort',
        '406136dNseRE',
        ']).fill().map(x=>',
        'map',
        '2085146lmFjkv',
        'log',
        'utf8',
        '190bkYPvx',
        '64115KSsWJA',
        '138xhjing',
        'Array(a['
    ];
    a0_0xda0a = function () {
        return _0x519bed;
    };
    return a0_0xda0a();
}
var input = require('fs')[a0_0x5a9ffd(0x197)](a0_0x5a9ffd(0x19a), a0_0x5a9ffd(0x1a4));
var cin = input[a0_0x5a9ffd(0x19b)](/ |\n/), cid = 0x0;
function next() {
    return +cin[cid++];
}
function a0_0x1720(SMzdqQ, key) {
    var stringArray = a0_0xda0a();
    a0_0x1720 = function (index, key) {
        index = index - 0x195;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1720(SMzdqQ, key);
}
function nextstr() {
    return cin[cid++];
}
function nextbig() {
    return BigInt(cin[cid++]);
}
function nexts(n, a) {
    var _0xa3d3c7 = a0_0x5a9ffd;
    return a ? cin[_0xa3d3c7(0x199)](cid, cid += n) : cin['slice'](cid, cid += n)[_0xa3d3c7(0x1a1)](a => +a);
}
function nextm(h, w, a) {
    var _0x47bd0e = a0_0x5a9ffd;
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r[_0x47bd0e(0x195)](cin[_0x47bd0e(0x199)](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w)[_0x47bd0e(0x1a1)](a => +a));
    return r;
}
function xArray(v) {
    var _0x1f76d2 = a0_0x5a9ffd;
    var a = arguments, l = a['length'], r = 'Array(a[' + --l + _0x1f76d2(0x19c) + v + ';})';
    while (--l)
        r = _0x1f76d2(0x1a8) + l + _0x1f76d2(0x1a0) + r + ')';
    return eval(r);
}
var myOut = main();
if (myOut !== undefined)
    console[a0_0x5a9ffd(0x1a3)](String(myOut));
function main() {
    var _0x329c9b = a0_0x5a9ffd;
    var n = next();
    var l = nexts(n)[_0x329c9b(0x19e)]((a, b) => a - b);
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