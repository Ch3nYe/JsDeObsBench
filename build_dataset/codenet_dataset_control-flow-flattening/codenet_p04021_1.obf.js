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
    var OvDQNI = {
        'HLslr': function (callee, param1) {
            return callee(param1);
        }
    };
    return OvDQNI['HLslr'](BigInt, cin[cid++]);
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
    var LlDUKh = {
        'jHMeI': function (x, y) {
            return x + y;
        },
        'aojRY': function (x, y) {
            return x + y;
        },
        'dhAJX': 'Array(a[',
        'evrGt': ']).fill().map(x=>{return\x20',
        'oVhzS': function (x, y) {
            return x + y;
        },
        'dgepf': ']).fill().map(x=>',
        'dVxgr': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = LlDUKh['jHMeI'](LlDUKh['jHMeI'](LlDUKh['aojRY'](LlDUKh['dhAJX'], --l) + LlDUKh['evrGt'], v), ';})');
    while (--l)
        r = LlDUKh['aojRY'](LlDUKh['jHMeI'](LlDUKh['oVhzS'](LlDUKh['dhAJX'] + l, LlDUKh['dgepf']), r), ')');
    return LlDUKh['dVxgr'](eval, r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var fMgdeX = {
        'ChgDV': '6|5|2|3|1|4|0',
        'QVjkA': function (callee) {
            return callee();
        },
        'lGsLu': function (x, y) {
            return x & y;
        },
        'wLxmj': function (x, y) {
            return x === y;
        },
        'hEzTy': function (callee) {
            return callee();
        }
    };
    var oUNYuJ = fMgdeX['ChgDV']['split']('|');
    var YfesjU = 0x0;
    while (!![]) {
        switch (oUNYuJ[YfesjU++]) {
        case '0':
            return ans;
        case '1':
            var ans = 0x0;
            continue;
        case '2':
            for (var i = 0x0; i < n; i++) {
                a['push']([
                    fMgdeX['QVjkA'](next),
                    fMgdeX['lGsLu'](i, 0x1)
                ]);
            }
            continue;
        case '3':
            a['sort']((a, b) => a[0x0] - b[0x0]);
            continue;
        case '4':
            for (var i = 0x0; i < n; i += 0x2)
                if (fMgdeX['wLxmj'](a[i][0x1], 0x1))
                    ans++;
            continue;
        case '5':
            var a = [];
            continue;
        case '6':
            var n = fMgdeX['hEzTy'](next);
            continue;
        }
        break;
    }
}