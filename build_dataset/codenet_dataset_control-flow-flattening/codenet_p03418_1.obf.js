function Main(input) {
    var ZprUTn = {
        'uJdGx': '2|3|4|5|6|0|1',
        'ucDmK': function (x, y) {
            return x || y;
        },
        'BykSZ': function (x, y) {
            return x <= y;
        },
        'dMEcQ': function (x, y) {
            return x || y;
        },
        'deFyN': function (x, y) {
            return x <= y;
        },
        'VGNim': function (x, y) {
            return x < y;
        },
        'mnZOA': function (x, y) {
            return x >= y;
        },
        'Qerxh': function (callee, param1) {
            return callee(param1);
        }
    };
    var VYqWLx = ZprUTn['uJdGx']['split']('|');
    var pWQOcU = 0x0;
    while (!![]) {
        switch (VYqWLx[pWQOcU++]) {
        case '0':
            for (var a = ZprUTn['ucDmK'](minrest, 0x1); ZprUTn['BykSZ'](a, maxint); a++) {
                for (var b = ZprUTn['dMEcQ'](minrest, 0x1); ZprUTn['deFyN'](b, maxint); b++) {
                    if (ZprUTn['VGNim'](a, b)) {
                        ans++;
                    } else {
                        if (ZprUTn['mnZOA'](a % b, minrest))
                            ans++;
                    }
                }
            }
            continue;
        case '1':
            console['log'](ans);
            continue;
        case '2':
            var line = input['split']('\x0a');
            continue;
        case '3':
            var tmp = line[0x0]['split']('\x20');
            continue;
        case '4':
            var maxint = ZprUTn['Qerxh'](Number, tmp[0x0]);
            continue;
        case '5':
            var minrest = ZprUTn['Qerxh'](Number, tmp[0x1]);
            continue;
        case '6':
            var ans = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));