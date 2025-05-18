var GET = (function () {
    var vohpWp = {
        'zZuqd': '2|1|0|3|4',
        'thQWi': 'string'
    };
    function f(s) {
        return new g(s);
    }
    function g(s) {
        this['_s'] = s['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g['prototype']['a'] = function (f) {
        var PMpbMf = vohpWp['zZuqd']['split']('|');
        var RYvDkG = 0x0;
        while (!![]) {
            switch (PMpbMf[RYvDkG++]) {
            case '0':
                r = s[y]['pop']();
                continue;
            case '1':
                if (typeof s[y] === vohpWp['thQWi'])
                    s[y] = s[y]['split']('\x20')['reverse']();
                continue;
            case '2':
                var s = this['_s'], y = this['_y'], r;
                continue;
            case '3':
                if (!s[y]['length'])
                    this['_y']++;
                continue;
            case '4':
                return f ? r : +r;
            }
            break;
        }
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
    var ZSQJsy = {
        'KPgSJ': function (x, y) {
            return x < y;
        },
        'YnukM': function (x, y) {
            return x + y;
        },
        'WefOA': function (x, y) {
            return x - y;
        },
        'sSFGn': function (x, y) {
            return x - y;
        },
        'HHMOE': function (x, y) {
            return x - y;
        }
    };
    var s = o['a'](0x1);
    var ans = 0x3e7;
    for (var i = 0x2; ZSQJsy['KPgSJ'](i, s['length']); i++) {
        var t = ZSQJsy['YnukM'](s[ZSQJsy['WefOA'](i, 0x2)], s[ZSQJsy['sSFGn'](i, 0x1)]) + s[i];
        t = Math['abs'](ZSQJsy['HHMOE'](t, 0x2f1));
        if (ans > t)
            ans = t;
    }
    return ans;
}