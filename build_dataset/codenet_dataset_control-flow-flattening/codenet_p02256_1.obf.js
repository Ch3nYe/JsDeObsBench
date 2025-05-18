function Main(input) {
    var ZsNljs = {
        'FFYYK': '1|4|3|2|0',
        'JyQCk': function (x, y) {
            return x % y;
        },
        'hBPaq': function (x, y) {
            return x > y;
        }
    };
    var SxoWBF = ZsNljs['FFYYK']['split']('|');
    var HOaFtN = 0x0;
    while (!![]) {
        switch (SxoWBF[HOaFtN++]) {
        case '0':
            console['log'](a);
            continue;
        case '1':
            var [a, b] = input['split']('\x20')['map'](Number);
            continue;
        case '2':
            do {
                r = ZsNljs['JyQCk'](a, b);
                a = b;
                b = r;
            } while (r);
            continue;
        case '3':
            var r;
            continue;
        case '4':
            if (ZsNljs['hBPaq'](b, a))
                [a, b] = [
                    b,
                    a
                ];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));