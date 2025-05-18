require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split'](/\s/)['map'](function (i) {
    var oohZaF = {
        'QjuJI': function (x, y) {
            return x / y;
        },
        'qBbfn': function (x, y) {
            return x - y;
        },
        'HUmNu': function (x, y) {
            return x >= y;
        }
    };
    j = i['split'](',');
    for (s = 0x0, m = n = 0xa; m--;)
        j[m] = s -= j[m];
    for (s *= oohZaF['QjuJI'](j[0xb], oohZaF['qBbfn'](-j[0xb], j[n])); oohZaF['HUmNu'](j[--n], -s););
    console['log'](++n);
});