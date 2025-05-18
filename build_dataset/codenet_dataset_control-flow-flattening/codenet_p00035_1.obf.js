function heron(a, b, c) {
    var rxKdDu = {
        'WTIkY': function (x, y) {
            return x / y;
        },
        'bNoxu': function (x, y) {
            return x + y;
        },
        'JliDq': function (x, y) {
            return x * y;
        },
        'jKhXL': function (x, y) {
            return x * y;
        },
        'WElnl': function (x, y) {
            return x - y;
        },
        'XVPiy': function (x, y) {
            return x - y;
        }
    };
    var s = rxKdDu['WTIkY'](rxKdDu['bNoxu'](a, b) + c, 0x2);
    var S = Math['sqrt'](rxKdDu['JliDq'](rxKdDu['jKhXL'](s, s - a), rxKdDu['WElnl'](s, b)) * rxKdDu['XVPiy'](s, c));
    return S;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split'](',')['map'](Number);
    (function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var GdUuwP = {
            'xyrEP': function (x, y) {
                return x + y;
            },
            'UrTgs': function (x, y) {
                return x - y;
            },
            'bzIlG': function (x, y) {
                return x + y;
            },
            'kCoAs': function (x, y) {
                return x - y;
            },
            'TnXNT': function (callee, param1, param2, param3) {
                return callee(param1, param2, param3);
            },
            'cTSEx': function (x, y) {
                return x + y;
            },
            'XlrfY': function (x, y) {
                return x - y;
            },
            'xuwHJ': function (x, y) {
                return x - y;
            },
            'TSwhq': function (callee, param1, param2, param3) {
                return callee(param1, param2, param3);
            },
            'zNEpE': function (x, y) {
                return x + y;
            },
            'xkCyN': function (x, y) {
                return x - y;
            },
            'FHtQf': function (x, y) {
                return x - y;
            },
            'TKdQG': function (x, y) {
                return x - y;
            },
            'TZyat': 'YES'
        };
        var hHIVyy = '1|4|0|6|8|3|5|2|9|7'['split']('|');
        var pRYEKO = 0x0;
        while (!![]) {
            switch (hHIVyy[pRYEKO++]) {
            case '0':
                var d34 = Math['sqrt'](GdUuwP['xyrEP'](Math['pow'](GdUuwP['UrTgs'](x3, x4), 0x2), Math['pow'](y3 - y4, 0x2)));
                continue;
            case '1':
                var d12 = Math['sqrt'](GdUuwP['bzIlG'](Math['pow'](GdUuwP['kCoAs'](x1, x2), 0x2), Math['pow'](GdUuwP['kCoAs'](y1, y2), 0x2)));
                continue;
            case '2':
                var B = GdUuwP['bzIlG'](heron(d12, d23, d13), GdUuwP['TnXNT'](heron, d13, d34, d41));
                continue;
            case '3':
                var d24 = Math['sqrt'](GdUuwP['cTSEx'](Math['pow'](GdUuwP['kCoAs'](x2, x4), 0x2), Math['pow'](GdUuwP['kCoAs'](y2, y4), 0x2)));
                continue;
            case '4':
                var d23 = Math['sqrt'](GdUuwP['cTSEx'](Math['pow'](GdUuwP['XlrfY'](x2, x3), 0x2), Math['pow'](GdUuwP['xuwHJ'](y2, y3), 0x2)));
                continue;
            case '5':
                var A = GdUuwP['cTSEx'](GdUuwP['TSwhq'](heron, d12, d24, d41), GdUuwP['TSwhq'](heron, d23, d34, d24));
                continue;
            case '6':
                var d41 = Math['sqrt'](GdUuwP['zNEpE'](Math['pow'](GdUuwP['UrTgs'](x4, x1), 0x2), Math['pow'](GdUuwP['xuwHJ'](y4, y1), 0x2)));
                continue;
            case '7':
                console['log'](ans);
                continue;
            case '8':
                var d13 = Math['sqrt'](GdUuwP['zNEpE'](Math['pow'](GdUuwP['xkCyN'](x1, x3), 0x2), Math['pow'](GdUuwP['FHtQf'](y1, y3), 0x2)));
                continue;
            case '9':
                var ans = Math['abs'](GdUuwP['TKdQG'](A, B)) < 0.00001 ? GdUuwP['TZyat'] : 'NO';
                continue;
            }
            break;
        }
    }['apply'](null, arr));
}