function Main(input) {
    var lpMkrV = {
        'oQlYJ': '4|5|3|2|6|0|1',
        'uCqpD': function (x, y) {
            return x < y;
        },
        'NNkOO': function (x, y) {
            return x == y;
        },
        'PlQpJ': function (x, y) {
            return x == y;
        },
        'VXioT': function (x, y) {
            return x == y;
        },
        'fDrrT': function (x, y) {
            return x == y;
        },
        'obNgX': 'YES'
    };
    var UYumqk = lpMkrV['oQlYJ']['split']('|');
    var yRNfEd = 0x0;
    while (!![]) {
        switch (UYumqk[yRNfEd++]) {
        case '0':
            for (var i = 0x0; lpMkrV['uCqpD'](i, 0x4); i++) {
                if (lpMkrV['NNkOO'](tmp[i], '1')) {
                    a = 0x1;
                }
                if (lpMkrV['NNkOO'](tmp[i], '9')) {
                    b = 0x1;
                }
                if (lpMkrV['PlQpJ'](tmp[i], '7')) {
                    c = 0x1;
                }
                if (lpMkrV['VXioT'](tmp[i], '4')) {
                    d = 0x1;
                }
            }
            continue;
        case '1':
            if (a == 0x1 && b == 0x1 && lpMkrV['NNkOO'](c, 0x1) && lpMkrV['fDrrT'](d, 0x1)) {
                console['log'](lpMkrV['obNgX']);
            } else {
                console['log']('NO');
            }
            continue;
        case '2':
            c = 0x0;
            continue;
        case '3':
            b = 0x0;
            continue;
        case '4':
            tmp = input['split']('\x20');
            continue;
        case '5':
            a = 0x0;
            continue;
        case '6':
            d = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));