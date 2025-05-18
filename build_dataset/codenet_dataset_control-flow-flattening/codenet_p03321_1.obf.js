function Main(s) {
    var Bbmaps = {
        'oTAPG': function (callee, param1) {
            return callee(param1);
        },
        'CLeZf': function (x, y) {
            return x < y;
        },
        'zPDGb': function (x, y) {
            return x < y;
        },
        'tfVpA': function (x, y) {
            return x > y;
        },
        'kMwOT': function (x, y) {
            return x < y;
        },
        'BPGdW': function (x, y) {
            return x === y;
        },
        'xhncr': function (x, y) {
            return x + y;
        },
        'MlmeV': function (x, y) {
            return x < y;
        },
        'kRVbq': function (x, y) {
            return x / y;
        },
        'xkTBF': function (x, y) {
            return x * y;
        },
        'UEVSM': function (x, y) {
            return x - y;
        },
        'sDKrO': function (x, y) {
            return x - y;
        },
        'MyERo': function (x, y) {
            return x - y;
        }
    };
    s = s['split']('\x0a');
    var n = s[0x0]['split']('\x20')['map'](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var b = Bbmaps['oTAPG'](Array, n)['fill'](0x0)['map'](a => Array(n)['fill'](0x0));
    for (var i = 0x0; Bbmaps['CLeZf'](i, m); i++) {
        var a = s[i + 0x1]['split']('\x20')['map'](a => a - 0x1);
        b[a[0x0]][a[0x1]] = b[a[0x1]][a[0x0]] = 0x1;
    }
    var k = 0x218711a00;
    var x;
    for (i = 0x0; Bbmaps['zPDGb'](i, n); i++) {
        var t = b[i]['reduce']((a, b) => a + b);
        if (Bbmaps['tfVpA'](k, t)) {
            k = t;
            x = i;
        }
    }
    var y = [], z = [];
    for (i = 0x0; Bbmaps['kMwOT'](i, n); i++) {
        if (Bbmaps['BPGdW'](i, x))
            continue;
        if (b[x][i])
            y['push'](i);
        else
            z['push'](i);
    }
    for (i = 0x0; i < y['length']; i++)
        for (var j = Bbmaps['xhncr'](i, 0x1); Bbmaps['kMwOT'](j, y['length']); j++) {
            if (!b[y[i]][y[j]]) {
                console['log'](-0x1);
                return;
            }
        }
    for (i = 0x0; Bbmaps['MlmeV'](i, z['length']); i++)
        for (j = i + 0x1; Bbmaps['kMwOT'](j, z['length']); j++) {
            if (!b[z[i]][z[j]]) {
                console['log'](-0x1);
                return;
            }
        }
    console['log'](Bbmaps['kRVbq'](k * Bbmaps['xhncr'](k, 0x1), 0x2) + Bbmaps['xkTBF'](Bbmaps['UEVSM'](Bbmaps['sDKrO'](n, k), 0x1), Bbmaps['UEVSM'](Bbmaps['MyERo'](n, k), 0x2)) / 0x2);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));