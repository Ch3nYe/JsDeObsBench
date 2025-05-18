'use strict';
function I(t, i) {
    this['_s'] = t['split']('\x0a'), this['_c'] = 0x0, this['_l'] = 0x0, this['_f'] = i || Number;
}
I['prototype']['a'] = function (t) {
    var GEWeEk = {
        'FsPeO': function (x, y) {
            return x === y;
        }
    };
    var i = this['_s'][this['_l']];
    if (i) {
        var s = i['trim']()['split']('\x20'), h = s[this['_c']];
        return this['_c']++, GEWeEk['FsPeO'](s['length'], this['_c']) && (this['_c'] = 0x0, this['_l']++), t ? t(h) : this['_f'](h);
    }
}, I['prototype']['l'] = function (t) {
    var i = this['_s'][this['_l']];
    if (i)
        return this['_c'] = 0x0, this['_l']++, i['split']('\x20')['map'](t || this['_f']);
}, module['exports'] = I;
function main(input) {
    var bvzHjP = {
        'jmxku': '3|0|4|2|1',
        'EFVkH': function (x, y) {
            return x < y;
        },
        'oMAdm': function (x, y) {
            return x === y;
        },
        'jpAOS': function (x, y) {
            return x / y;
        }
    };
    var GvELEu = bvzHjP['jmxku']['split']('|');
    var vtKilm = 0x0;
    while (!![]) {
        switch (GvELEu[vtKilm++]) {
        case '0':
            var q = o['a']();
            continue;
        case '1':
            for (var i = 0x0; bvzHjP['EFVkH'](i, q); i++) {
                var q1 = o['a']();
                if (bvzHjP['oMAdm'](q1, 0x1)) {
                    var a = o['a']();
                    var b = o['a']();
                    c += b;
                    sorted['push'](a);
                } else {
                    sorted = sorted['sort']((a, b) => a - b);
                    var mid = sorted[Math['floor'](bvzHjP['jpAOS'](sorted['length'] - 0x1, 0x2))];
                    var ans = sorted['map'](x => Math['abs'](x - mid))['reduce']((acc, cur) => acc + cur) + c;
                    console['log'](mid, ans);
                }
            }
            continue;
        case '2':
            var sorted = [];
            continue;
        case '3':
            var o = new I(input);
            continue;
        case '4':
            var c = 0x0;
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));