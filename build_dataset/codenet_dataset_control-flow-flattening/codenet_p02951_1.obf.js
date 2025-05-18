function Main(input) {
    var TiNnLd = {
        'FLsRo': '2|4|3|0|1',
        'WbSxt': function (x, y) {
            return x > y;
        },
        'eUyRZ': function (x, y) {
            return x - y;
        },
        'udRDM': function (x, y) {
            return x - y;
        },
        'pijYB': function (callee, param1) {
            return callee(param1);
        }
    };
    var aShBuP = TiNnLd['FLsRo']['split']('|');
    var HewmWS = 0x0;
    while (!![]) {
        switch (aShBuP[HewmWS++]) {
        case '0':
            c = Number(input['split']('\x0a')[0x0]['split']('\x20')[0x2]);
            continue;
        case '1':
            console['log'](TiNnLd['WbSxt'](c - (a - b), 0x0) ? TiNnLd['eUyRZ'](c, TiNnLd['udRDM'](a, b)) : 0x0);
            continue;
        case '2':
            var a, b, c;
            continue;
        case '3':
            b = TiNnLd['pijYB'](Number, input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
            continue;
        case '4':
            a = TiNnLd['pijYB'](Number, input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));