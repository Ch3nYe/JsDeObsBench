function Main(input) {
    var OPLPlJ = {
        'ptFSU': function (x, y) {
            return x == y;
        },
        'bKahf': function (x, y) {
            return x % y;
        },
        'vaSEC': 'YES'
    };
    var FJoijy = '0|1|2|5|4|3'['split']('|');
    var wnJIVB = 0x0;
    while (!![]) {
        switch (FJoijy[wnJIVB++]) {
        case '0':
            input = input['split']('\x0a');
            continue;
        case '1':
            var arr = input[0x1]['split']('\x20')['map'](Number);
            continue;
        case '2':
            var m = 0x0;
            continue;
        case '3':
            console['log'](OPLPlJ['ptFSU'](OPLPlJ['bKahf'](n, 0x2), 0x0) && OPLPlJ['bKahf'](n / 0x2 + m, 0x2) == 0x0 ? OPLPlJ['vaSEC'] : 'NO');
            continue;
        case '4':
            for (var i = 0x0; i < arr['length']; i++) {
                if (OPLPlJ['bKahf'](arr[i], 0x2) == 0x0)
                    m++;
                else
                    n++;
            }
            continue;
        case '5':
            var n = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());