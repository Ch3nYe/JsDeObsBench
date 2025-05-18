function GCD(a, b) {
    var cenXEG = {
        'vViKA': function (x, y) {
            return x != y;
        },
        'ZXRXO': function (x, y) {
            return x % y;
        }
    };
    var m = Math['max'](a, b);
    var n = Math['min'](a, b);
    while (cenXEG['vViKA'](n, 0x0)) {
        var N = n;
        n = cenXEG['ZXRXO'](m, n);
        m = N;
    }
    return m;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var I = 0x0; I < n; I++) {
        var v = Arr['shift']()['split']('\x20')['map'](Number);
        var gcd = GCD(v[0x0], v[0x1]);
        arr['push']([
            v[0x0] / gcd,
            v[0x1] / gcd
        ]);
    }
    var lcm = 0x1;
    arr['forEach'](function (v) {
        var Xayzrq = {
            'aEWEQ': function (callee, param1, param2) {
                return callee(param1, param2);
            },
            'NleHA': function (x, y) {
                return x / y;
            }
        };
        var gcd = Xayzrq['aEWEQ'](GCD, v[0x1], lcm);
        lcm = Xayzrq['NleHA'](v[0x1] * lcm, gcd);
    });
    arr = arr['map'](function (v, i) {
        var CyTcMh = {
            'flxsx': function (x, y) {
                return x * y;
            },
            'JacrV': function (x, y) {
                return x / y;
            }
        };
        return CyTcMh['flxsx'](v[0x0], CyTcMh['JacrV'](lcm, v[0x1]));
    });
    var lcm = 0x1;
    arr['forEach'](function (v) {
        var nDYcbV = {
            'JsSLj': function (callee, param1, param2) {
                return callee(param1, param2);
            },
            'EgZba': function (x, y) {
                return x / y;
            }
        };
        var gcd = nDYcbV['JsSLj'](GCD, v, lcm);
        lcm = nDYcbV['EgZba'](v * lcm, gcd);
    });
    arr['forEach'](function (v) {
        var ihVKJk = {
            'nMONh': function (x, y) {
                return x / y;
            }
        };
        console['log'](ihVKJk['nMONh'](lcm, v));
    });
}