var GET = (function () {
    var OfXDCc = {
        'kKRYa': function (x, y) {
            return x === y;
        }
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
        if (OfXDCc['kKRYa'](typeof s[y], 'string'))
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
    var wCJGXP = {
        'BuVZH': 'Yes',
        'kjnBW': function (x, y) {
            return x < y;
        },
        'oMtKK': '4|0|3|2|1|5|6',
        'wxswY': function (x, y) {
            return x - y;
        },
        'qAEkg': function (x, y) {
            return x > y;
        },
        'qRWvu': function (x, y) {
            return x !== y;
        },
        'HxuNP': function (x, y) {
            return x % y;
        },
        'AAbrd': function (x, y) {
            return x % y;
        },
        'MXfGD': function (x, y) {
            return x - y;
        }
    };
    var uAidbI = '3|2|4|1|0'['split']('|');
    var lsCdnr = 0x0;
    while (!![]) {
        switch (uAidbI[lsCdnr++]) {
        case '0':
            return wCJGXP['BuVZH'];
        case '1':
            for (var i = 0x0; wCJGXP['kjnBW'](i, n); i++) {
                var ogtyfy = wCJGXP['oMtKK']['split']('|');
                var ptavKp = 0x0;
                while (!![]) {
                    switch (ogtyfy[ptavKp++]) {
                    case '0':
                        dxy += Math['abs'](wCJGXP['wxswY'](y, m[i][0x2]));
                        continue;
                    case '1':
                        x = m[i][0x1];
                        continue;
                    case '2':
                        if (wCJGXP['qAEkg'](dxy, dt) || wCJGXP['qRWvu'](wCJGXP['HxuNP'](dxy, 0x2), wCJGXP['AAbrd'](dt, 0x2)))
                            return 'No';
                        continue;
                    case '3':
                        var dt = wCJGXP['wxswY'](m[i][0x0], t);
                        continue;
                    case '4':
                        var dxy = Math['abs'](wCJGXP['MXfGD'](x, m[i][0x1]));
                        continue;
                    case '5':
                        y = m[i][0x2];
                        continue;
                    case '6':
                        t = m[i][0x0];
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '2':
            var m = o['m'](n);
            continue;
        case '3':
            var n = o['a']();
            continue;
        case '4':
            var t = 0x0, x = 0x0, y = 0x0;
            continue;
        }
        break;
    }
}