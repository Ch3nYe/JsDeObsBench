var GET = (function () {
    var kDjJqo = {
        'pLsvi': function (x, y) {
            return x === y;
        },
        'zUgTg': 'string'
    };
    function f(s) {
        return new g(s);
    }
    function g(s) {
        this['_s'] = s['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g['prototype']['a'] = function (f) {
        var s = this['_s'], y = this['_y'], r;
        if (kDjJqo['pLsvi'](typeof s[y], kDjJqo['zUgTg']))
            s[y] = s[y]['split']('\x20')['reverse']();
        r = s[y]['pop']();
        if (!s[y]['length'])
            this['_y']++;
        return f ? r : +r;
    };
    g['prototype']['l'] = function (f) {
        var s = this['_s'][this['_y']++]['split']('\x20');
        return f ? s : s['map'](a => +a);
    };
    g['prototype']['m'] = function (n, f) {
        var r = this['_s']['slice'](this['_y'], this['_y'] += n)['map'](a => a['split']('\x20'));
        return f ? r : r['map'](a => a['map'](a => +a));
    };
    g['prototype']['r'] = function (n, f) {
        var r = this['_s']['slice'](this['_y'], this['_y'] += n);
        return f ? r : r['map'](a => +a);
    };
    return f;
}());
var o = GET(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console['log'](main());
function main() {
    var WrLOJh = {
        'lutRI': function (x, y) {
            return x >> y;
        },
        'rTeSU': function (x, y) {
            return x + y;
        },
        'XeWja': function (x, y) {
            return x - y;
        },
        'WxzaW': function (x, y) {
            return x & y;
        },
        'fakQm': function (x, y) {
            return x - y;
        },
        'rspPG': function (x, y) {
            return x >= y;
        },
        'dKVXg': function (x, y) {
            return x !== y;
        },
        'azXxh': function (x, y) {
            return x !== y;
        }
    };
    var s = o['a'](0x1);
    var n = s['length'];
    var l = WrLOJh['lutRI'](WrLOJh['rTeSU'](n, 0x1), 0x1), u, v = l;
    var f = s[WrLOJh['XeWja'](l, 0x1)];
    if (WrLOJh['WxzaW'](n, 0x1))
        u = l - 0x2;
    else
        u = WrLOJh['fakQm'](l, 0x1);
    for (; WrLOJh['rspPG'](u, 0x0); u--, v++) {
        if (WrLOJh['dKVXg'](s[u], f) || WrLOJh['azXxh'](s[v], f))
            break;
        l++;
    }
    return l;
}