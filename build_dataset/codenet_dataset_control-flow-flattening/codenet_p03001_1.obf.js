function Main(input) {
    var uhcaVO = {
        'SNWjF': '1|7|11|3|19|2|18|5|12|13|14|9|16|17|15|4|6|0|10|8',
        'UlXyM': function (x, y) {
            return x > y;
        },
        'uTMux': function (x, y) {
            return x + y;
        },
        'BKodc': function (x, y) {
            return x == y;
        },
        'tJgTa': function (x, y) {
            return x * y;
        },
        'bENft': function (x, y) {
            return x & y;
        },
        'NyFTy': function (x, y) {
            return x / y;
        }
    };
    var YhZmBz = uhcaVO['SNWjF']['split']('|');
    var DwIjLA = 0x0;
    while (!![]) {
        switch (YhZmBz[DwIjLA++]) {
        case '0':
            if (a < b) {
                reault = b;
            }
            continue;
        case '1':
            var input = input['split']('\x0a');
            continue;
        case '2':
            var y = arya[0x3];
            continue;
        case '3':
            var h = arya[0x1];
            continue;
        case '4':
            if (uhcaVO['UlXyM'](b1, b2)) {
                b = b2;
            }
            continue;
        case '5':
            var a1 = x * h;
            continue;
        case '6':
            var reault = a;
            continue;
        case '7':
            var arya = input[0x0]['split']('\x20')['map'](val => parseInt(val, 0xa))['slice'](0x0, 0x4);
            continue;
        case '8':
            console['log'](uhcaVO['uTMux'](reault['toFixed'](0x6), '\x20') + counter);
            continue;
        case '9':
            var a = a1;
            continue;
        case '10':
            if (uhcaVO['BKodc'](a, b)) {
                var counter = 0x1;
            }
            continue;
        case '11':
            var w = arya[0x0];
            continue;
        case '12':
            var a2 = uhcaVO['tJgTa'](w - x, h);
            continue;
        case '13':
            var b1 = uhcaVO['tJgTa'](y, w);
            continue;
        case '14':
            var b2 = uhcaVO['tJgTa'](h - y, w);
            continue;
        case '15':
            if (uhcaVO['UlXyM'](a1, a2)) {
                a = a2;
            }
            continue;
        case '16':
            var b = b1;
            continue;
        case '17':
            var counter = 0x0;
            continue;
        case '18':
            if (uhcaVO['bENft'](uhcaVO['BKodc'](x, 0x0), uhcaVO['BKodc'](y, 0x0)) || uhcaVO['BKodc'](x, w) && uhcaVO['BKodc'](y, h)) {
                console['log'](uhcaVO['uTMux'](uhcaVO['NyFTy'](uhcaVO['tJgTa'](w, h), 0x2)['toFixed'](0x6), '\x200'));
                return !![];
            }
            continue;
        case '19':
            var x = arya[0x2];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));