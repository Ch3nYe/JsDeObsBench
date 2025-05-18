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
    var ugNorR = {
        'RsyBP': function (callee, param1) {
            return callee(param1);
        }
    };
    return ugNorR['RsyBP'](BigInt, cin[cid++]);
}
function nexts(n, a) {
    return a ? cin['slice'](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var dZdjUr = {
        'EIshh': function (x, y) {
            return x < y;
        },
        'pGeYV': function (x, y) {
            return x < y;
        }
    };
    var r = [], i = 0x0;
    if (a)
        for (; dZdjUr['EIshh'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; dZdjUr['pGeYV'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var FaJuzW = {
        'viFOI': function (x, y) {
            return x + y;
        },
        'hwPdg': 'Array(a[',
        'vNhsP': ']).fill().map(x=>{return\x20',
        'EVLXH': function (x, y) {
            return x + y;
        },
        'SlBtJ': function (x, y) {
            return x + y;
        },
        'ZEHDa': ']).fill().map(x=>',
        'AtRdz': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = FaJuzW['viFOI'](FaJuzW['hwPdg'] + --l + FaJuzW['vNhsP'] + v, ';})');
    while (--l)
        r = FaJuzW['EVLXH'](FaJuzW['SlBtJ'](FaJuzW['hwPdg'], l) + FaJuzW['ZEHDa'], r) + ')';
    return FaJuzW['AtRdz'](eval, r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var wFoGEq = {
        'FhTuD': function (callee) {
            return callee();
        },
        'Hydmf': function (callee, param1) {
            return callee(param1);
        },
        'KCDIn': function (x, y) {
            return x < y;
        },
        'CuyKd': function (x, y) {
            return x + y;
        },
        'uAVhs': function (x, y) {
            return x < y;
        },
        'klkda': function (x, y) {
            return x === y;
        },
        'JLYUP': function (x, y) {
            return x > y;
        }
    };
    var n = wFoGEq['FhTuD'](next);
    var l = wFoGEq['Hydmf'](nexts, n)['sort']((a, b) => a - b);
    var ans = 0x0;
    for (var i = 0x0; i < n; i++)
        for (var j = i + 0x1; wFoGEq['KCDIn'](j, n); j++)
            for (var k = wFoGEq['CuyKd'](j, 0x1); wFoGEq['uAVhs'](k, n); k++) {
                if (wFoGEq['klkda'](l[i], l[j]) || l[j] === l[k])
                    continue;
                if (wFoGEq['JLYUP'](l[i] + l[j], l[k]))
                    ans++;
            }
    return ans;
}