function Main(s) {
    var LtjyRG = {
        'QlYow': function (x, y) {
            return x < y;
        },
        'ajDuI': function (x, y) {
            return x + y;
        },
        'jlMHE': function (x, y) {
            return x * y;
        },
        'bDPvP': function (x, y) {
            return x + y;
        },
        'htDBQ': function (x, y) {
            return x * y;
        },
        'QRdgM': function (x, y) {
            return x - y;
        }
    };
    s = s['split']('\x0a');
    const q = +s[0x0];
    for (var i = 0x0; LtjyRG['QlYow'](i, q); i++) {
        var kybWgc = '0|2|5|1|7|3|6|4'['split']('|');
        var lIoSCO = 0x0;
        while (!![]) {
            switch (kybWgc[lIoSCO++]) {
            case '0':
                var a = s[LtjyRG['ajDuI'](i, 0x1)]['split']('\x20')['map'](a => +a);
                continue;
            case '1':
                var c = Math['ceil'](Math['sqrt'](LtjyRG['jlMHE'](a, b)));
                continue;
            case '2':
                var b = Math['max'](a[0x0], a[0x1]);
                continue;
            case '3':
                if (LtjyRG['QlYow'](a, b - 0x1))
                    ans++;
                continue;
            case '4':
                console['log'](ans);
                continue;
            case '5':
                a = Math['min'](a[0x0], a[0x1]);
                continue;
            case '6':
                for (var j = LtjyRG['bDPvP'](a, 0x1); LtjyRG['QlYow'](j, c); j++) {
                    if (Math['floor'](LtjyRG['jlMHE'](a / j, b)) === j)
                        ans++;
                    else
                        ans += 0x2;
                }
                continue;
            case '7':
                var ans = LtjyRG['htDBQ'](LtjyRG['QRdgM'](a, 0x1), 0x2);
                continue;
            }
            break;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));