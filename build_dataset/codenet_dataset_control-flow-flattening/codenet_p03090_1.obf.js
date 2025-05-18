var GET = (function () {
    var CqvmFd = {
        'IqaSt': function (x, y) {
            return x === y;
        },
        'vJxiJ': 'string'
    };
    function f(s) {
        return new g(s);
    }
    function g(s) {
        this['_s'] = s['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g['prototype']['a'] = function (f) {
        var KFuMpb = '2|1|0|3|4'['split']('|');
        var uWKxKa = 0x0;
        while (!![]) {
            switch (KFuMpb[uWKxKa++]) {
            case '0':
                r = s[y]['pop']();
                continue;
            case '1':
                if (CqvmFd['IqaSt'](typeof s[y], CqvmFd['vJxiJ']))
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
    var BxjBNh = {
        'dkgXx': function (x, y) {
            return x + y;
        },
        'rEfpP': function (x, y) {
            return x === y;
        },
        'JRKLS': function (x, y) {
            return x === y;
        },
        'UmeWb': function (x, y) {
            return x + y;
        }
    };
    var n = o['a']();
    var ans = [];
    for (var i = 0x1; i <= n; i++) {
        for (var j = BxjBNh['dkgXx'](i, 0x1); j <= n; j++) {
            if (n % 0x2 && BxjBNh['rEfpP'](BxjBNh['dkgXx'](i, j), n))
                continue;
            if (n % 0x2 === 0x0 && BxjBNh['JRKLS'](i + j, BxjBNh['UmeWb'](n, 0x1)))
                continue;
            ans['push'](BxjBNh['UmeWb'](BxjBNh['UmeWb'](i, '\x20'), j));
        }
    }
    console['log'](ans['length']);
    return ans['join']('\x0a');
}