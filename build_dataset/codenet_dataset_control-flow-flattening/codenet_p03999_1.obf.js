function Main(s) {
    var cXVuLB = {
        'NwFLm': function (x, y) {
            return x < y;
        },
        'gLCnL': function (x, y) {
            return x << y;
        },
        'rISEi': function (x, y) {
            return x + y;
        }
    };
    const sl = s['length'] - 0x1;
    const sa = s['split']('')['map'](a => parseInt(a));
    var ans = 0x0;
    for (var i = 0x0; cXVuLB['NwFLm'](i, 0x1 << sl); i++) {
        var b = 0x0;
        for (var j = 0x0; cXVuLB['NwFLm'](j, sl); j++) {
            b += sa[j];
            if (i & cXVuLB['gLCnL'](0x1, j)) {
                ans += b;
                b = 0x0;
            } else
                b *= 0xa;
        }
        ans += cXVuLB['rISEi'](b, sa[sl]);
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());