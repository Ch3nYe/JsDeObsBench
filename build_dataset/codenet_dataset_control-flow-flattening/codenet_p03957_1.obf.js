function Main(input) {
    var Cuwlwf = {
        'xWrgu': '4|0|1|3|2|5',
        'OZURX': function (x, y) {
            return x < y;
        },
        'ukdHK': function (x, y) {
            return x == y;
        },
        'EESpX': 'Yes'
    };
    var WraiNH = Cuwlwf['xWrgu']['split']('|');
    var bDDCnJ = 0x0;
    while (!![]) {
        switch (WraiNH[bDDCnJ++]) {
        case '0':
            var string = input[0x0];
            continue;
        case '1':
            var c, f, Cfound = 0x0;
            continue;
        case '2':
            ;
            continue;
        case '3':
            for (var i = 0x0; Cuwlwf['OZURX'](i, string['length']); i++) {
                if (Cuwlwf['ukdHK'](string[i], 'C') && !Cfound) {
                    c = i;
                    Cfound++;
                }
                ;
                if (Cfound && string[i] == 'F') {
                    f = i;
                    return console['log'](Cuwlwf['EESpX']);
                }
            }
            continue;
        case '4':
            var input = input['split']('\x0a');
            continue;
        case '5':
            return console['log']('No');
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));