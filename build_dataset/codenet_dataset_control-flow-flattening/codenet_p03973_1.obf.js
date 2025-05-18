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
    var rHNUDR = {
        'TbcoQ': function (callee, param1) {
            return callee(param1);
        }
    };
    return rHNUDR['TbcoQ'](BigInt, cin[cid++]);
}
function nexts(n, a) {
    return a ? cin['slice'](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
    var mjyeBO = {
        'zMHRu': function (x, y) {
            return x < y;
        }
    };
    var r = [], i = 0x0;
    if (a)
        for (; mjyeBO['zMHRu'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; i < h; i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var XfVVpX = {
        'EmNny': function (x, y) {
            return x + y;
        },
        'GyDZD': function (x, y) {
            return x + y;
        },
        'rcGia': 'Array(a[',
        'uIiuP': ';})',
        'PFJUd': function (x, y) {
            return x + y;
        },
        'HoqCQ': function (x, y) {
            return x + y;
        },
        'hizZb': ']).fill().map(x=>',
        'LNqak': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = XfVVpX['EmNny'](XfVVpX['GyDZD'](XfVVpX['GyDZD'](XfVVpX['rcGia'], --l), ']).fill().map(x=>{return\x20'), v) + XfVVpX['uIiuP'];
    while (--l)
        r = XfVVpX['PFJUd'](XfVVpX['PFJUd'](XfVVpX['HoqCQ'](XfVVpX['rcGia'], l) + XfVVpX['hizZb'], r), ')');
    return XfVVpX['LNqak'](eval, r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var soMETv = {
        'yMvvs': function (callee) {
            return callee();
        },
        'HJLnG': function (x, y) {
            return x - y;
        },
        'UqQMI': function (x, y) {
            return x < y;
        }
    };
    var n = soMETv['yMvvs'](next);
    var ans = 0x0, mn = 0x1;
    for (var i = 0x0; i < n; i++) {
        var t = soMETv['HJLnG'](next(), 0x1);
        if (soMETv['UqQMI'](t, mn)) {
            mn = Math['max'](mn, t + 0x2);
        } else {
            ans += t / mn | 0x0;
            mn = Math['max'](0x2, mn);
        }
    }
    return ans;
}