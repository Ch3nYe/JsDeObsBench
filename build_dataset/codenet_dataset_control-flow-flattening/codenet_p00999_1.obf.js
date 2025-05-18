var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var abc = arr['shift']();
    if (abc == '0\x200\x200\x200\x200')
        break;
    var ary = (abc + '\x20' + arr['shift']())['split']('\x20')['map'](Number);
    (function (a, b, c, d, e, na, nb, nc) {
        var fwpAmz = {
            'WPOus': function (x, y) {
                return x * y;
            },
            'wrveM': function (x, y) {
                return x + y;
            },
            'VVKUa': function (x, y) {
                return x == y;
            },
            'BHugF': function (x, y) {
                return x * y;
            },
            'oktOA': function (x, y) {
                return x > y;
            },
            'ndHAf': function (x, y) {
                return x * y;
            },
            'PpwIX': function (x, y) {
                return x != y;
            },
            'FuaDY': function (x, y) {
                return x + y;
            },
            'mgWOF': function (x, y) {
                return x / y;
            }
        };
        var ans = fwpAmz['WPOus'](fwpAmz['WPOus'](Math['floor'](fwpAmz['mgWOF'](nc, d)), d), e);
        var nokori = nc % d;
        var A = function (ans) {
            ans += fwpAmz['WPOus'](nokori, c);
            ans += fwpAmz['wrveM'](na * a, fwpAmz['WPOus'](nb, b));
            return ans;
        }(ans);
        var B = function (ans, na, nb) {
            if (fwpAmz['VVKUa'](ans, 0x0)) {
                var yobun = fwpAmz['VVKUa'](nokori, 0x0) ? 0x0 : d - nokori;
                if (yobun > 0x0)
                    ans += fwpAmz['BHugF'](e, d);
                while (yobun--) {
                    if (fwpAmz['oktOA'](nb, 0x0))
                        nb--;
                    else if (na > 0x0)
                        na--;
                }
                ans += fwpAmz['wrveM'](fwpAmz['WPOus'](na, a), fwpAmz['ndHAf'](nb, b));
                return ans;
            }
            if (fwpAmz['PpwIX'](ans, 0x0)) {
                return fwpAmz['FuaDY'](fwpAmz['FuaDY'](na * a, fwpAmz['WPOus'](nb, b)), fwpAmz['BHugF'](nc, e));
            }
        }(ans, na, nb);
        console['log'](Math['min'](A, B));
    }['apply'](null, ary));
}