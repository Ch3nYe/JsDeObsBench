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
    return BigInt(cin[cid++]);
}
function nexts(n, a) {
    return a ? cin['slice'](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var JNvsZM = {
        'dtQzg': function (x, y) {
            return x < y;
        },
        'OtvAW': function (x, y) {
            return x < y;
        }
    };
    var r = [], i = 0x0;
    if (a)
        for (; JNvsZM['dtQzg'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; JNvsZM['OtvAW'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var RgsktS = {
        'IvnOB': function (x, y) {
            return x + y;
        },
        'WouRx': 'Array(a[',
        'jbqai': ';})',
        'PiOeM': function (x, y) {
            return x + y;
        },
        'oCPiy': function (x, y) {
            return x + y;
        },
        'YqiDy': ']).fill().map(x=>',
        'Gpxgw': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = RgsktS['IvnOB'](RgsktS['IvnOB'](RgsktS['WouRx'], --l) + ']).fill().map(x=>{return\x20', v) + RgsktS['jbqai'];
    while (--l)
        r = RgsktS['PiOeM'](RgsktS['PiOeM'](RgsktS['IvnOB'](RgsktS['oCPiy']('Array(a[', l), RgsktS['YqiDy']), r), ')');
    return RgsktS['Gpxgw'](eval, r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var cuieeW = {
        'VUDui': '2|5|3|1|0|4',
        'zCuLn': function (x, y) {
            return x < y;
        },
        'KdLjr': function (x, y) {
            return x * y;
        },
        'hnoPq': function (x, y) {
            return x * y;
        },
        'cQFGL': function (x, y) {
            return x < y;
        },
        'FrpJB': function (x, y) {
            return x * y;
        },
        'DsFlE': function (callee, param1) {
            return callee(param1);
        },
        'LQARo': function (x, y) {
            return x + y;
        },
        'mxXlN': function (x, y) {
            return x | y;
        },
        'meIPf': function (callee, param1) {
            return callee(param1);
        },
        'AZSBl': function (callee, param1) {
            return callee(param1);
        },
        'Wdyyq': function (x, y) {
            return x * y;
        },
        'KwOxZ': function (x, y) {
            return x & y;
        },
        'HJlMk': function (callee) {
            return callee();
        }
    };
    var ujEOrU = cuieeW['VUDui']['split']('|');
    var LfrBzG = 0x0;
    while (!![]) {
        switch (ujEOrU[LfrBzG++]) {
        case '0':
            if (cuieeW['zCuLn'](cuieeW['KdLjr'](s, 0x2), d))
                d = cuieeW['hnoPq'](s, 0x2);
            continue;
        case '1':
            if (cuieeW['cQFGL'](cuieeW['FrpJB'](h, 0x2), s))
                s = cuieeW['KdLjr'](h, 0x2);
            continue;
        case '2':
            var [q, h, s, d] = cuieeW['DsFlE'](nexts, 0x4);
            continue;
        case '3':
            if (cuieeW['hnoPq'](q, 0x2) < h)
                h = cuieeW['FrpJB'](q, 0x2);
            continue;
        case '4':
            return cuieeW['LQARo'](cuieeW['DsFlE'](BigInt, cuieeW['mxXlN'](n / 0x2, 0x0)) * cuieeW['meIPf'](BigInt, d), cuieeW['AZSBl'](BigInt, cuieeW['Wdyyq'](cuieeW['KwOxZ'](n, 0x1), s)));
        case '5':
            var n = cuieeW['HJlMk'](next);
            continue;
        }
        break;
    }
}