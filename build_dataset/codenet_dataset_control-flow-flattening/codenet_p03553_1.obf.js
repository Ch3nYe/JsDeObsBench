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
    var flQWrl = {
        'daWHl': function (x, y) {
            return x < y;
        },
        'qgQqA': function (x, y) {
            return x < y;
        }
    };
    var r = [], i = 0x0;
    if (a)
        for (; flQWrl['daWHl'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w));
    else
        for (; flQWrl['qgQqA'](i, h); i++)
            r['push'](cin['slice'](cid, cid += w)['map'](a => +a));
    return r;
}
function xArray(v) {
    var paQKkl = {
        'nCesT': function (x, y) {
            return x + y;
        },
        'cYUEI': function (x, y) {
            return x + y;
        },
        'ryGGe': ';})',
        'EgkCM': function (x, y) {
            return x + y;
        },
        'fyuCE': 'Array(a[',
        'dZGKN': ']).fill().map(x=>',
        'Nhnqh': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = paQKkl['nCesT'](paQKkl['nCesT'](paQKkl['cYUEI']('Array(a[' + --l, ']).fill().map(x=>{return\x20'), v), paQKkl['ryGGe']);
    while (--l)
        r = paQKkl['cYUEI'](paQKkl['cYUEI'](paQKkl['EgkCM'](paQKkl['fyuCE'], l), paQKkl['dZGKN']) + r, ')');
    return paQKkl['Nhnqh'](eval, r);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var ihgyXk = {
        'kQFtq': function (callee, param1) {
            return callee(param1);
        },
        'rLmEd': function (x, y) {
            return x >= y;
        },
        'cpIZK': function (x, y) {
            return x <= y;
        },
        'atZWs': function (x, y) {
            return x < y;
        }
    };
    var n = next();
    var a = [0x0]['concat'](ihgyXk['kQFtq'](nexts, n));
    for (var i = n; ihgyXk['rLmEd'](i, 0x1); i--) {
        var sum = 0x0;
        for (var j = i; ihgyXk['cpIZK'](j, n); j += i)
            sum += a[j];
        if (ihgyXk['atZWs'](sum, 0x0))
            for (var j = i; j <= n; j += i)
                a[j] = 0x0;
    }
    return a['reduce']((a, b) => a + b);
}