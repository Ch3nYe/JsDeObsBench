function Main(input) {
    var nGPrZP = {
        'RuocL': '0|3|2|1|4',
        'AScdp': function (x, y) {
            return x != y;
        },
        'DuzrK': function (x, y) {
            return x < y;
        },
        'iYpcP': function (x, y) {
            return x % y;
        },
        'cHEWs': function (x, y) {
            return x + y;
        },
        'iAbCR': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var MSGdRA = nGPrZP['RuocL']['split']('|');
    var vFfIJm = 0x0;
    while (!![]) {
        switch (MSGdRA[vFfIJm++]) {
        case '0':
            input = input['split']('\x0a');
            continue;
        case '1':
            if (nGPrZP['AScdp'](n, 0x1)) {
                for (var i = 0x1; nGPrZP['DuzrK'](i, n); i++) {
                    count += nGPrZP['iYpcP'](i, nGPrZP['cHEWs'](i, 0x1));
                }
            }
            continue;
        case '2':
            var count = 0x0;
            continue;
        case '3':
            var n = nGPrZP['iAbCR'](parseInt, input[0x0], 0xa);
            continue;
        case '4':
            console['log']('%s', count);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));