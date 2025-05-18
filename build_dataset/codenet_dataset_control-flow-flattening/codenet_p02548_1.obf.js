function Main(input) {
    var lTxioK = {
        'lOUtG': '1|3|4|0|2',
        'lDtYg': function (x, y) {
            return x < y;
        },
        'YlAOr': function (x, y) {
            return x - y;
        },
        'szOkW': function (callee, param1) {
            return callee(param1);
        }
    };
    var FIbsDd = lTxioK['lOUtG']['split']('|');
    var QtZlQe = 0x0;
    while (!![]) {
        switch (FIbsDd[QtZlQe++]) {
        case '0':
            for (var i = 0x1; lTxioK['lDtYg'](i, N); i++) {
                result += Math['floor'](lTxioK['YlAOr'](N, 0x1) / i);
            }
            continue;
        case '1':
            input = input['split']('\x0a');
            continue;
        case '2':
            console['log']('%d', result);
            continue;
        case '3':
            N = lTxioK['szOkW'](parseInt, input[0x0]['split']('\x20'));
            continue;
        case '4':
            var result = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));