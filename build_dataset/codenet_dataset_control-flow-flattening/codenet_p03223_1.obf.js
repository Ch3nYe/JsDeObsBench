console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function main(s) {
    var uxrQPx = {
        'leKSi': '7|5|4|2|3|6|10|1|8|0|9',
        'kWOwe': function (x, y) {
            return x % y;
        },
        'DtHxX': function (x, y) {
            return x + y;
        },
        'jQVOT': function (x, y) {
            return x - y;
        },
        'WVLbb': function (x, y) {
            return x < y;
        },
        'XdfHZ': function (x, y) {
            return x * y;
        },
        'mxRoW': function (x, y) {
            return x < y;
        },
        'gdRyA': function (x, y) {
            return x * y;
        },
        'AXtel': function (x, y) {
            return x - y;
        },
        'KuFZX': function (x, y) {
            return x - y;
        },
        'hSiPS': function (x, y) {
            return x + y;
        },
        'CuFNW': function (x, y) {
            return x - y;
        },
        'Jtlxe': function (x, y) {
            return x - y;
        },
        'ewKdM': function (x, y) {
            return x + y;
        },
        'CVJKG': function (x, y) {
            return x - y;
        }
    };
    var aKPwgL = uxrQPx['leKSi']['split']('|');
    var sQNYVA = 0x0;
    while (!![]) {
        switch (aKPwgL[sQNYVA++]) {
        case '0':
            if (uxrQPx['kWOwe'](n, 0x2) === 0x0)
                return uxrQPx['DtHxX'](uxrQPx['jQVOT'](ans, s[m]), s[m - 0x1]);
            continue;
        case '1':
            for (var i = 0x0; uxrQPx['WVLbb'](i, m); i++) {
                ans -= uxrQPx['XdfHZ'](s[i], 0x2);
            }
            continue;
        case '2':
            s['pop']();
            continue;
        case '3':
            s['sort']((a, b) => a - b);
            continue;
        case '4':
            s[0x0] = s[n];
            continue;
        case '5':
            var n = s[0x0];
            continue;
        case '6':
            var ans = 0x0;
            continue;
        case '7':
            s = s['split']('\x0a')['map'](a => +a);
            continue;
        case '8':
            for (; uxrQPx['mxRoW'](i, n); i++) {
                ans += uxrQPx['gdRyA'](s[i], 0x2);
            }
            continue;
        case '9':
            if (s[uxrQPx['AXtel'](m, 0x1)] + s[uxrQPx['jQVOT'](m, 0x2)] > s[uxrQPx['KuFZX'](m, 0x1)] * 0x3 - s[m])
                return uxrQPx['hSiPS'](ans, s[uxrQPx['CuFNW'](m, 0x1)]) + s[uxrQPx['CuFNW'](m, 0x2)];
            else
                return uxrQPx['Jtlxe'](uxrQPx['ewKdM'](ans, s[uxrQPx['CVJKG'](m, 0x1)] * 0x3), s[m]);
            continue;
        case '10':
            var m = n + 0x1 >> 0x1;
            continue;
        }
        break;
    }
}