function Main(input) {
    var RGTQDW = {
        'MECHf': function (x, y) {
            return x < y;
        },
        'ubulk': function (x, y) {
            return x - y;
        },
        'dlbkt': function (x, y) {
            return x == y;
        },
        'OqxqG': function (x, y) {
            return x > y;
        },
        'mZaiv': function (x, y) {
            return x + y;
        },
        'WGZBy': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'wXgzi': function (x, y) {
            return x == y;
        },
        'QCbiT': function (x, y) {
            return x + y;
        },
        'uMrfb': function (callee, param1) {
            return callee(param1);
        },
        'VDxJc': function (x, y) {
            return x - y;
        },
        'TIvKb': function (x, y) {
            return x - y;
        },
        'keccu': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'QQMKZ': function (x, y) {
            return x - y;
        },
        'eEyqB': function (x, y) {
            return x != y;
        },
        'mjyjQ': function (x, y) {
            return x != y;
        },
        'mqjyX': function (x, y) {
            return x - y;
        },
        'kzOYJ': function (x, y) {
            return x <= y;
        },
        'Ftvyb': 'Fennec',
        'PSYzD': 'Snuke'
    };
    input = input['split']('\x0a');
    var n = RGTQDW['uMrfb'](parseInt, input[0x0]);
    a = new Array(RGTQDW['ubulk'](n, 0x1))['fill'](0x0);
    b = new Array(RGTQDW['VDxJc'](n, 0x1))['fill'](0x0);
    for (i = 0x0; RGTQDW['MECHf'](i, RGTQDW['ubulk'](n, 0x1)); i++) {
        tmp = input[RGTQDW['mZaiv'](i, 0x1)]['split']('\x20');
        a[i] = RGTQDW['ubulk'](RGTQDW['uMrfb'](parseInt, tmp[0x0]), 0x1);
        b[i] = RGTQDW['uMrfb'](parseInt, tmp[0x1]) - 0x1;
    }
    d1 = new Array(n)['fill'](n);
    d1[0x0] = 0x0;
    d2 = new Array(n)['fill'](n);
    d2[RGTQDW['TIvKb'](n, 0x1)] = 0x0;
    function f(x, d) {
        for (i = 0x0; RGTQDW['MECHf'](i, RGTQDW['ubulk'](n, 0x1)); i++) {
            if (RGTQDW['dlbkt'](a[i], x) && RGTQDW['OqxqG'](d[b[i]], d[a[i]])) {
                d[b[i]] = RGTQDW['mZaiv'](d[a[i]], 0x1);
                var j = i;
                RGTQDW['WGZBy'](f, b[i], d);
                i = j;
            }
            if (RGTQDW['wXgzi'](b[i], x) && RGTQDW['OqxqG'](d[a[i]], d[b[i]])) {
                d[a[i]] = RGTQDW['QCbiT'](d[b[i]], 0x1);
                var j = i;
                RGTQDW['WGZBy'](f, a[i], d);
                i = j;
            }
        }
        return d;
    }
    d1 = RGTQDW['WGZBy'](f, 0x0, d1);
    d2 = RGTQDW['keccu'](f, RGTQDW['QQMKZ'](n, 0x1), d2);
    var x = 0x0;
    for (i = 0x0; RGTQDW['MECHf'](i, n); i++) {
        if (RGTQDW['eEyqB'](i, 0x0) && RGTQDW['mjyjQ'](i, RGTQDW['mqjyX'](n, 0x1))) {
            if (RGTQDW['kzOYJ'](d1[i], d2[i])) {
                x++;
            }
        }
    }
    var ans = RGTQDW['Ftvyb'];
    if (RGTQDW['kzOYJ'](x, n - 0x2 - x)) {
        ans = RGTQDW['PSYzD'];
    }
    console['log']('%s', ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));