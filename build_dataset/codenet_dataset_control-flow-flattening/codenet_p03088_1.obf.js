const main = input => {
    var GInAPk = {
        'LrPnA': function (callee, param1) {
            return callee(param1);
        }
    };
    const N = GInAPk['LrPnA'](Number, input);
    console['log'](calc(N, '', 0x0));
};
var map = {};
var w = [
    'A',
    'C',
    'G',
    'T'
];
function calc(N, lst4, cnt) {
    var csPROf = {
        'QNZwy': function (x, y) {
            return x < y;
        },
        'RgoyG': function (x, y) {
            return x + y;
        },
        'Vsszk': function (x, y) {
            return x + y;
        },
        'OAvML': function (x, y) {
            return x != y;
        },
        'pyqFE': function (x, y) {
            return x + y;
        },
        'VVQCo': function (x, y) {
            return x + y;
        },
        'tFRgk': 'AGC',
        'sFIXM': function (x, y) {
            return x != y;
        },
        'jlcYV': function (x, y) {
            return x + y;
        },
        'cKEFt': function (x, y) {
            return x + y;
        },
        'MSCeu': function (x, y) {
            return x + y;
        },
        'bTPgO': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'DriOs': function (x, y) {
            return x + y;
        },
        'TyYJt': function (x, y) {
            return x == y;
        }
    };
    var HDmmeN = '1|5|4|2|0|3|6'['split']('|');
    var XyVszw = 0x0;
    while (!![]) {
        switch (HDmmeN[XyVszw++]) {
        case '0':
            for (var i = 0x0; csPROf['QNZwy'](i, 0x4); i++) {
                var next = csPROf['RgoyG'](lst4, w[i]);
                var next3 = next['slice'](-0x3);
                var next4 = next['slice'](-0x4);
                if (csPROf['RgoyG'](csPROf['RgoyG'](next3[0x0], next3[0x1]), next3[0x2]) != 'AGC' && csPROf['RgoyG'](csPROf['Vsszk'](next3[0x0], next3[0x2]), next3[0x1]) != 'AGC' && csPROf['OAvML'](csPROf['pyqFE'](csPROf['VVQCo'](next3[0x1], next3[0x0]), next3[0x2]), csPROf['tFRgk']) && csPROf['sFIXM'](csPROf['Vsszk'](csPROf['jlcYV'](next4[0x0], next4[0x1]), next4[0x3]), csPROf['tFRgk']) && csPROf['sFIXM'](csPROf['cKEFt'](csPROf['MSCeu'](next4[0x0], next4[0x2]), next4[0x3]), csPROf['tFRgk'])) {
                    ans += csPROf['bTPgO'](calc, N, next['slice'](-0x4), csPROf['DriOs'](cnt, 0x1));
                    ans %= 0x3b9aca07;
                }
            }
            continue;
        case '1':
            var key = csPROf['cKEFt'](lst4 + '_', cnt);
            continue;
        case '2':
            var ans = 0x0;
            continue;
        case '3':
            map[key] = ans;
            continue;
        case '4':
            if (csPROf['TyYJt'](cnt, N)) {
                return 0x1;
            }
            continue;
        case '5':
            if (map[key])
                return map[key];
            continue;
        case '6':
            return ans;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));