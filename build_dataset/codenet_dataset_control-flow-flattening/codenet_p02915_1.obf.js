var GET = (function () {
    var gJfkaU = {
        'eZpaP': '1|3|4|0|2',
        'QzyEA': function (x, y) {
            return x === y;
        },
        'askfG': 'string'
    };
    function f(s) {
        return new g(s);
    }
    function g(s) {
        this['_s'] = s['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g['prototype']['a'] = function (f) {
        var RTXKMX = gJfkaU['eZpaP']['split']('|');
        var jELcGr = 0x0;
        while (!![]) {
            switch (RTXKMX[jELcGr++]) {
            case '0':
                if (!s[y]['length'])
                    this['_y']++;
                continue;
            case '1':
                var s = this['_s'], y = this['_y'], r;
                continue;
            case '2':
                return f ? r : +r;
            case '3':
                if (gJfkaU['QzyEA'](typeof s[y], gJfkaU['askfG']))
                    s[y] = s[y]['split']('\x20')['reverse']();
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
function xArray(v) {
    var UVtdMY = {
        'YPfCC': function (x, y) {
            return x + y;
        },
        'exHRi': function (x, y) {
            return x + y;
        },
        'VNgLg': 'Array(a[',
        'gVdik': ']).fill(0).map(x=>{return\x20',
        'SzCyL': ';})',
        'EASql': function (x, y) {
            return x + y;
        },
        'Qurty': function (x, y) {
            return x + y;
        },
        'Ovedl': ']).fill(0).map(x=>',
        'hxWtv': function (callee, param1) {
            return callee(param1);
        }
    };
    var a = arguments, l = a['length'], r = UVtdMY['YPfCC'](UVtdMY['exHRi'](UVtdMY['VNgLg'], --l), UVtdMY['gVdik']) + v + UVtdMY['SzCyL'];
    while (--l)
        r = UVtdMY['EASql'](UVtdMY['exHRi'](UVtdMY['EASql'](UVtdMY['Qurty'](UVtdMY['VNgLg'], l), UVtdMY['Ovedl']), r), ')');
    return UVtdMY['hxWtv'](eval, r);
}
console['log'](main());
function main() {
    var n = o['a']();
    return n * n * n;
}