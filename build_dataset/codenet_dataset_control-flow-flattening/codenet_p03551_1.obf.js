'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['split'](/ |\n/), cid = 0x0;
function next() {
    return +cin[cid++];
}
function nextstr() {
    return cin[cid++];
}
function nextbig() {
    var AbWKDq = {
        'sKpRy': function (callee, param1) {
            return callee(param1);
        }
    };
    return AbWKDq['sKpRy'](BigInt, cin[cid++]);
}
function nexts(n, a) {
    return a ? cin['slice'](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var cnQDpT = {
        'UnJQG': function (x, y) {
            return x + y;
        },
        'pTfcf': 'Array(a[',
        'MmvDM': ']).fill().map(x=>{return\x20',
        'tCTAR': function (x, y) {
            return x + y;
        },
        'sPplK': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = cnQDpT['UnJQG'](cnQDpT['UnJQG'](cnQDpT['pTfcf'], --l), cnQDpT['MmvDM']) + v + ';})';
    while (--l)
        r = cnQDpT['UnJQG'](cnQDpT['tCTAR'](cnQDpT['pTfcf'], l) + ']).fill().map(x=>', r) + ')';
    return cnQDpT['sPplK'](eval, r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var mqrcTd = {
        'rqAhP': function (callee) {
            return callee();
        },
        'PamtI': function (x, y) {
            return x + y;
        },
        'RQLzF': function (x, y) {
            return x * y;
        },
        'oARak': function (x, y) {
            return x << y;
        }
    };
    var n = next();
    var m = mqrcTd['rqAhP'](next);
    var ans = mqrcTd['PamtI'](mqrcTd['RQLzF'](m, 0x708), n * 0x64);
    return mqrcTd['oARak'](ans, m);
}