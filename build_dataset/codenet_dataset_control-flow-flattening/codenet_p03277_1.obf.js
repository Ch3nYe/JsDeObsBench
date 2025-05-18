function gets(str) {
    this['_s'] = str['split']('\x0a');
    this['_y'] = 0x0;
}
;
gets['prototype'] = {
    'a': function (f) {
        var rSxlcN = {
            'AudBF': function (x, y) {
                return x === y;
            }
        };
        var s = this['_s'], y = this['_y'], r;
        if (rSxlcN['AudBF'](typeof s[y], 'string'))
            s[y] = s[y]['split']('\x20')['reverse']();
        r = s[y]['pop']();
        if (!s[y]['length'])
            this['_y']++;
        return f ? r : +r;
    },
    'l': function (f) {
        var s = this['_s'][this['_y']++]['split']('\x20');
        return f ? s : s['map'](a => +a);
    },
    'm': function (n, f) {
        var qBKpOt = {
            'IHSzG': function (x, y) {
                return x + y;
            },
            'yFnuq': function (x, y) {
                return x < y;
            }
        };
        var s = this['_s'], y = this['_y'], r = [], i = 0x0;
        if (f)
            for (; i < n; i++)
                r[i] = s[qBKpOt['IHSzG'](y, i)]['split']('\x20');
        else
            for (; qBKpOt['yFnuq'](i, n); i++)
                r[i] = s[y + i]['split']('\x20')['map'](a => +a);
        this['_y'] += n;
        return r;
    }
};
var o = new gets(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console['log'](main());
function main() {
    var hBUHyP = {
        'FPeie': function (x, y) {
            return x < y;
        },
        'ICevp': function (x, y) {
            return x + y;
        },
        'IrUdZ': function (x, y) {
            return x + y;
        },
        'MqLDt': function (callee, param1) {
            return callee(param1);
        }
    };
    var n = o['a']();
    var a = o['l']();
    var b = [];
    if (n <= 0x2)
        return Math['max'](...a);
    for (var i = 0x0; hBUHyP['FPeie'](i, n - 0x1); i++)
        a[hBUHyP['ICevp'](n, i)] = Math['max'](a[i], a[hBUHyP['IrUdZ'](i, 0x1)]);
    return hBUHyP['MqLDt'](middle, a);
    function middle(a) {
        a['sort']((a, b) => a - b);
        return a[a['length'] >> 0x1];
    }
}