function Main(input) {
    var BKfMiv = {
        'ilvUL': '10|9|1|2|7|4|5|3|12|0|6|11|8',
        'ozbQN': function (x, y) {
            return x < y;
        },
        'wRmNd': '2|1|4|3|0',
        'jEXQw': function (x, y) {
            return x - y;
        },
        'utDDs': function (callee, param1) {
            return callee(param1);
        },
        'KHxkT': function (x, y) {
            return x <= y;
        },
        'HdGeL': function (x, y) {
            return x * y;
        },
        'gNnIx': 'Yes'
    };
    var TWLoSs = BKfMiv['ilvUL']['split']('|');
    var TXspii = 0x0;
    while (!![]) {
        switch (TWLoSs[TXspii++]) {
        case '0':
            for (i = 0x0; BKfMiv['ozbQN'](i, n); i++) {
                var PtGVla = BKfMiv['wRmNd']['split']('|');
                var EZKIux = 0x0;
                while (!![]) {
                    switch (PtGVla[EZKIux++]) {
                    case '0':
                        dif += Math['abs'](BKfMiv['jEXQw'](a[i], b[i]));
                        continue;
                    case '1':
                        suma += a[i];
                        continue;
                    case '2':
                        a[i] = parseInt(tmpa[i]);
                        continue;
                    case '3':
                        sumb += b[i];
                        continue;
                    case '4':
                        b[i] = BKfMiv['utDDs'](parseInt, tmpb[i]);
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '1':
            a = new Array(n)['fill'](0x0);
            continue;
        case '2':
            b = new Array(n)['fill'](0x0);
            continue;
        case '3':
            var sumb = 0x0;
            continue;
        case '4':
            tmpb = input[0x2]['split']('\x20');
            continue;
        case '5':
            var suma = 0x0;
            continue;
        case '6':
            var ans = 'No';
            continue;
        case '7':
            tmpa = input[0x1]['split']('\x20');
            continue;
        case '8':
            console['log']('%s', ans);
            continue;
        case '9':
            var n = BKfMiv['utDDs'](parseInt, input[0x0]);
            continue;
        case '10':
            input = input['split']('\x0a');
            continue;
        case '11':
            if (BKfMiv['KHxkT'](suma, sumb) && BKfMiv['KHxkT'](dif, BKfMiv['HdGeL'](BKfMiv['jEXQw'](sumb, suma), 0x3))) {
                ans = BKfMiv['gNnIx'];
            }
            continue;
        case '12':
            var dif = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));