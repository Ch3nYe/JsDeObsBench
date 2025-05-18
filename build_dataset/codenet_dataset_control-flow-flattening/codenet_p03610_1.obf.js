function Main(input) {
    var CISyWt = {
        'idiTj': '4|2|0|3|1',
        'FUwAI': function (x, y) {
            return x <= y;
        },
        'ATIiu': function (x, y) {
            return x + y;
        },
        'nXBRN': function (x, y) {
            return x - y;
        }
    };
    var heKiIi = CISyWt['idiTj']['split']('|');
    var ZgEzFz = 0x0;
    while (!![]) {
        switch (heKiIi[ZgEzFz++]) {
        case '0':
            var ans = '';
            continue;
        case '1':
            console['log'](ans);
            continue;
        case '2':
            input = input[0x0];
            continue;
        case '3':
            for (var i = 0x1; CISyWt['FUwAI'](i, input['length']); i = CISyWt['ATIiu'](i, 0x2)) {
                ans += input[CISyWt['nXBRN'](i, 0x1)];
            }
            continue;
        case '4':
            input = input['split']('\x0a');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));