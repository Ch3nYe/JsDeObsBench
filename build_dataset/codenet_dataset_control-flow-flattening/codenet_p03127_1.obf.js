var GET = (function () {
    var ATVJnc = { 'wvSww': '3|1|4|2|0' };
    function f(s) {
        return new g(s);
    }
    function g(s) {
        this['_s'] = s['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g['prototype']['a'] = function (f) {
        var Zbjnzh = ATVJnc['wvSww']['split']('|');
        var oNhtat = 0x0;
        while (!![]) {
            switch (Zbjnzh[oNhtat++]) {
            case '0':
                return f ? r : +r;
            case '1':
                if (typeof s[y] === 'string')
                    s[y] = s[y]['split']('\x20')['reverse']();
                continue;
            case '2':
                if (!s[y]['length'])
                    this['_y']++;
                continue;
            case '3':
                var s = this['_s'], y = this['_y'], r;
                continue;
            case '4':
                r = s[y]['pop']();
                continue;
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
function gcd(a, b) {
    var RVCvMA = {
        'TSoXd': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'znzdb': function (x, y) {
            return x % y;
        }
    };
    return b ? RVCvMA['TSoXd'](gcd, b, RVCvMA['znzdb'](a, b)) : a;
}
console['log'](main());
function main() {
    var gnJyPF = {
        'tDEFZ': '2|0|1|4|3',
        'bWpJl': function (x, y) {
            return x < y;
        }
    };
    var ONuuXv = gnJyPF['tDEFZ']['split']('|');
    var nRibLR = 0x0;
    while (!![]) {
        switch (ONuuXv[nRibLR++]) {
        case '0':
            var a = o['l']();
            continue;
        case '1':
            var ans = a[0x0];
            continue;
        case '2':
            var n = o['a']();
            continue;
        case '3':
            return ans;
        case '4':
            for (var i = 0x1; gnJyPF['bWpJl'](i, n); i++) {
                ans = gcd(ans, a[i]);
            }
            continue;
        }
        break;
    }
}