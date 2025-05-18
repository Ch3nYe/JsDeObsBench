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
    var CkDTUQ = {
        'URrtT': function (x, y) {
            return x < y;
        }
    };
    var r = [], i = 0x0;
    if (a)
        for (; CkDTUQ['URrtT'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; CkDTUQ['URrtT'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var NafAvl = {
        'rDWHK': function (x, y) {
            return x + y;
        },
        'TNPfu': function (x, y) {
            return x + y;
        },
        'aTheQ': ']).fill().map(x=>{return\x20',
        'lvZhQ': ';})',
        'gDlhS': function (x, y) {
            return x + y;
        },
        'YqLra': ']).fill().map(x=>',
        'gMMtR': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = NafAvl['rDWHK'](NafAvl['rDWHK'](NafAvl['TNPfu']('Array(a[' + --l, NafAvl['aTheQ']), v), NafAvl['lvZhQ']);
    while (--l)
        r = NafAvl['rDWHK'](NafAvl['TNPfu'](NafAvl['gDlhS']('Array(a[' + l, NafAvl['YqLra']), r), ')');
    return NafAvl['gMMtR'](eval, r);
}
var mod = 0x3b9aca00 + 0x7;
function mul() {
    var dIuPHO = {
        'qLRNc': function (x, y) {
            return x % y;
        },
        'vMJge': function (x, y) {
            return x + y;
        },
        'vTqrz': function (x, y) {
            return x * y;
        },
        'uLzVQ': function (x, y) {
            return x % y;
        },
        'usWeQ': function (x, y) {
            return x & y;
        }
    };
    for (var a = arguments, r = a[0x0], i = a['length']; --i;)
        r = dIuPHO['qLRNc'](dIuPHO['vMJge'](dIuPHO['vTqrz'](dIuPHO['uLzVQ'](dIuPHO['vTqrz'](r >> 0x10, a[i]), mod), 0x10000), dIuPHO['usWeQ'](r, 0xffff) * a[i]), mod);
    return r;
}
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    var JztOHZ = {
        'RTSiC': '4|1|3|0|2',
        'KNOsi': function (x, y) {
            return x < y;
        },
        'RXbpx': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'XfTKO': function (callee, param1) {
            return callee(param1);
        },
        'jJzzv': function (callee) {
            return callee();
        }
    };
    var WDnFmH = JztOHZ['RTSiC']['split']('|');
    var acPDnw = 0x0;
    while (!![]) {
        switch (WDnFmH[acPDnw++]) {
        case '0':
            for (var i = 0x0; JztOHZ['KNOsi'](i, n); i++) {
                rem++;
                ans = JztOHZ['RXbpx'](mul, ans, rem);
                if (x[i] < id) {
                    rem--;
                } else {
                    id += 0x2;
                }
            }
            continue;
        case '1':
            var x = JztOHZ['XfTKO'](nexts, n);
            continue;
        case '2':
            return ans;
        case '3':
            var ans = 0x1, id = 0x1, rem = 0x0;
            continue;
        case '4':
            var n = JztOHZ['jJzzv'](next);
            continue;
        }
        break;
    }
}