'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['split'](/ |\n/), cid = 0x0;
function next(a) {
    return a ? cin[cid++] : +cin[cid++];
}
function nexts(n, a) {
    return a ? cin['slice'](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var auOHtL = {
        'LTtIb': function (x, y) {
            return x < y;
        },
        'lsEdr': function (x, y) {
            return x < y;
        }
    };
    var r = [], i = 0x0;
    if (a)
        for (; auOHtL['LTtIb'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; auOHtL['lsEdr'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var HcLooH = {
        'mYkYb': function (x, y) {
            return x + y;
        },
        'Kxiba': 'Array(a[',
        'YczmB': ']).fill().map(x=>{return\x20',
        'SnQGB': ';})',
        'RfxBn': ']).fill().map(x=>',
        'duCZU': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = HcLooH['mYkYb'](HcLooH['mYkYb'](HcLooH['mYkYb'](HcLooH['Kxiba'], --l), HcLooH['YczmB']) + v, HcLooH['SnQGB']);
    while (--l)
        r = HcLooH['mYkYb'](HcLooH['mYkYb'](HcLooH['mYkYb']('Array(a[', l) + HcLooH['RfxBn'], r), ')');
    return HcLooH['duCZU'](eval, r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    var QdqmTb = {
        'mfeYi': function (callee, param1) {
            return callee(param1);
        },
        'nyPJa': function (x, y) {
            return x + y;
        },
        'ifNsL': function (x, y) {
            return x * y;
        },
        'sAbqt': function (x, y) {
            return x + y;
        },
        'KbCoW': function (x, y) {
            return x | y;
        },
        'KmHKE': function (x, y) {
            return x / y;
        },
        'pbYrK': function (x, y) {
            return x + y;
        },
        'xuZxP': function (x, y) {
            return x % y;
        },
        'YtHyu': function (x, y) {
            return x * y;
        }
    };
    var a = QdqmTb['mfeYi'](nexts, 0x7);
    var ans = QdqmTb['nyPJa'](a[0x1], QdqmTb['ifNsL'](QdqmTb['sAbqt'](QdqmTb['KbCoW'](QdqmTb['KmHKE'](a[0x0], 0x2), 0x0), QdqmTb['KbCoW'](QdqmTb['KmHKE'](a[0x3], 0x2), 0x0)) + (QdqmTb['KmHKE'](a[0x4], 0x2) | 0x0), 0x2));
    switch (QdqmTb['pbYrK'](QdqmTb['xuZxP'](a[0x0], 0x2) + QdqmTb['xuZxP'](a[0x3], 0x2), QdqmTb['xuZxP'](a[0x4], 0x2))) {
    case 0x3:
        ans += 0x3;
        break;
    case 0x2:
        if (QdqmTb['YtHyu'](QdqmTb['ifNsL'](a[0x0], a[0x3]), a[0x4]))
            ans += 0x1;
        break;
    }
    return ans;
}