function Main(input) {
    var bXncli = {
        'rgAlb': '2|4|0|1|3|6|5',
        'kkBOM': function (x, y) {
            return x < y;
        },
        'QubDL': function (x, y) {
            return x == y;
        },
        'IlHMG': function (x, y) {
            return x + y;
        },
        'AQLsf': function (x, y) {
            return x + y;
        },
        'aijHT': function (x, y) {
            return x * y;
        }
    };
    var legIBk = bXncli['rgAlb']['split']('|');
    var AtFyjF = 0x0;
    while (!![]) {
        switch (legIBk[AtFyjF++]) {
        case '0':
            var valK = input[0x1];
            continue;
        case '1':
            if (bXncli['kkBOM'](valN, 0x3)) {
                console['log']('0');
                return;
            }
            continue;
        case '2':
            input = input['split']('\x20');
            continue;
        case '3':
            var count = 0x0;
            continue;
        case '4':
            var valN = input[0x0];
            continue;
        case '5':
            console['log'](count);
            continue;
        case '6':
            for (var i = 0x0; bXncli['kkBOM'](i + 0x2, valN); i++) {
                for (var j = 0x0; bXncli['kkBOM'](j, 0x5); j++) {
                    if (bXncli['QubDL'](bXncli['IlHMG'](bXncli['AQLsf'](bXncli['aijHT'](i, 0x3f), bXncli['aijHT'](j, 0x9)), 0x51) % 0xb, valK)) {
                        count++;
                    }
                }
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));