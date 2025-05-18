function Main(input) {
    var vdhCHt = {
        'PVqkv': '2|4|1|3|0|5|6',
        'NubUC': function (x, y) {
            return x + y;
        },
        'tYjwb': function (x, y) {
            return x - y;
        }
    };
    var RhyGsI = vdhCHt['PVqkv']['split']('|');
    var uhvOvI = 0x0;
    while (!![]) {
        switch (RhyGsI[uhvOvI++]) {
        case '0':
            var kekka = 0x0;
            continue;
        case '1':
            var n = h[0x0];
            continue;
        case '2':
            var str = input['trim']();
            continue;
        case '3':
            var k = h[0x1];
            continue;
        case '4':
            var h = str['split']('\x20');
            continue;
        case '5':
            var kekka = vdhCHt['NubUC'](vdhCHt['tYjwb'](n, k), 0x1);
            continue;
        case '6':
            console['log'](kekka);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));