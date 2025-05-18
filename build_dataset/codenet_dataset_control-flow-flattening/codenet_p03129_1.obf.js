function main(arg) {
    var Ofsvbl = {
        'WgTBU': '5|2|0|4|1|3',
        'TLfUG': 'YES'
    };
    var EzwouR = Ofsvbl['WgTBU']['split']('|');
    var DxgovV = 0x0;
    while (!![]) {
        switch (EzwouR[DxgovV++]) {
        case '0':
            var K = Number(arg[0x1]);
            continue;
        case '1':
            for (var i = 0x1; i <= N; i += 0x2) {
                count++;
            }
            continue;
        case '2':
            var N = Number(arg[0x0]);
            continue;
        case '3':
            if (K > count) {
                console['log']('NO');
            } else {
                console['log'](Ofsvbl['TLfUG']);
            }
            continue;
        case '4':
            var count = 0x0;
            continue;
        case '5':
            arg = arg['split']('\x0a')[0x0]['split']('\x20');
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));