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
    var SbcGWp = {
        'rvQNi': function (callee, param1) {
            return callee(param1);
        }
    };
    return SbcGWp['rvQNi'](BigInt, cin[cid++]);
}
function nexts(n, a) {
    return a ? cin['slice'](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var GIqILV = {
        'nXPeH': function (x, y) {
            return x < y;
        }
    };
    var r = [], i = 0x0;
    if (a)
        for (; GIqILV['nXPeH'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var FReMCQ = {
        'zklRy': function (x, y) {
            return x + y;
        },
        'pCBtN': ']).fill().map(x=>{return\x20',
        'yYWKs': ';})',
        'oPoiB': function (x, y) {
            return x + y;
        },
        'KbbGg': 'Array(a[',
        'kVKlw': ']).fill().map(x=>',
        'rdfrW': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = FReMCQ['zklRy'](FReMCQ['zklRy'](FReMCQ['zklRy'](FReMCQ['zklRy']('Array(a[', --l), FReMCQ['pCBtN']), v), FReMCQ['yYWKs']);
    while (--l)
        r = FReMCQ['oPoiB'](FReMCQ['zklRy'](FReMCQ['KbbGg'], l) + FReMCQ['kVKlw'], r) + ')';
    return FReMCQ['rdfrW'](eval, r);
}
var tm = +new Date() + 0x384;
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var jCZbAg = {
        'CiOBa': function (callee, param1) {
            return callee(param1);
        },
        'ATCEp': function (x, y) {
            return x < y;
        },
        'CIAtd': function (x, y) {
            return x % y;
        },
        'BnrxL': function (x, y) {
            return x % y;
        },
        'kMiwt': function (x, y) {
            return x >> y;
        },
        'OJCtI': function (x, y) {
            return x + y;
        },
        'bEgUu': function (x, y) {
            return x + y;
        }
    };
    var [a, b, c] = jCZbAg['CiOBa'](nexts, 0x3);
    var cnt = 0x0;
    while (jCZbAg['ATCEp'](new Date(), tm)) {
        if (jCZbAg['CIAtd'](a, 0x2) || jCZbAg['BnrxL'](b, 0x2) || jCZbAg['CIAtd'](c, 0x2))
            return cnt;
        var a2 = jCZbAg['kMiwt'](b + c, 0x1), b2 = jCZbAg['OJCtI'](a, c) >> 0x1, c2 = jCZbAg['kMiwt'](jCZbAg['bEgUu'](a, b), 0x1);
        a = a2, b = b2, c = c2;
        cnt++;
    }
    return -0x1;
}