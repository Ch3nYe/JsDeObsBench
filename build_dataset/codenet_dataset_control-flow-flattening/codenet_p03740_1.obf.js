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
    var HEQXiL = {
        'eBndy': function (callee, param1) {
            return callee(param1);
        }
    };
    return HEQXiL['eBndy'](BigInt, cin[cid++]);
}
function nexts(n, a) {
    return a ? cin['slice'](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var UODGhC = {
        'AgMol': function (x, y) {
            return x < y;
        }
    };
    var r = [], i = 0x0;
    if (a)
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; UODGhC['AgMol'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var bSEXWl = {
        'qKcMZ': function (x, y) {
            return x + y;
        },
        'cgEsD': function (x, y) {
            return x + y;
        },
        'FCMUz': function (x, y) {
            return x + y;
        },
        'LbnyE': 'Array(a[',
        'lGRVS': ']).fill().map(x=>{return\x20',
        'LvvLE': ';})',
        'cjVIz': function (x, y) {
            return x + y;
        },
        'hOFjx': function (x, y) {
            return x + y;
        },
        'GGCGP': function (x, y) {
            return x + y;
        },
        'wMZso': ']).fill().map(x=>',
        'Jxczb': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = bSEXWl['qKcMZ'](bSEXWl['cgEsD'](bSEXWl['FCMUz'](bSEXWl['LbnyE'], --l) + bSEXWl['lGRVS'], v), bSEXWl['LvvLE']);
    while (--l)
        r = bSEXWl['cjVIz'](bSEXWl['hOFjx'](bSEXWl['GGCGP'](bSEXWl['LbnyE'] + l, bSEXWl['wMZso']), r), ')');
    return bSEXWl['Jxczb'](eval, r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var EBNUAu = {
        'kekTM': function (callee) {
            return callee();
        },
        'yGgjA': function (x, y) {
            return x < y;
        },
        'OIULI': function (x, y) {
            return x - y;
        },
        'QJelm': function (x, y) {
            return x < y;
        },
        'wqvFp': 'Brown'
    };
    var x = nextbig(), y = EBNUAu['kekTM'](nextbig);
    if (EBNUAu['yGgjA'](EBNUAu['OIULI'](x, y), 0x2) && EBNUAu['QJelm'](EBNUAu['OIULI'](y, x), 0x2))
        return EBNUAu['wqvFp'];
    return 'Alice';
}