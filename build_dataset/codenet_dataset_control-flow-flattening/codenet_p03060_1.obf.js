function Main(input) {
    var PkCPhA = {
        'yDAms': '3|6|5|0|1|2|4',
        'jPnYB': function (x, y) {
            return x - y;
        },
        'CExny': function (x, y) {
            return x >= y;
        },
        'YqdnS': function (callee, param1) {
            return callee(param1);
        }
    };
    var XiuQvV = PkCPhA['yDAms']['split']('|');
    var HPyLqx = 0x0;
    while (!![]) {
        switch (XiuQvV[HPyLqx++]) {
        case '0':
            C = input[0x2]['split']('\x20')['map'](Number);
            continue;
        case '1':
            var Y = 0x0;
            continue;
        case '2':
            for (var i = 0x0; i < n; i++) {
                y = PkCPhA['jPnYB'](V[i], C[i]);
                if (PkCPhA['CExny'](y, 0x0)) {
                    Y = Y + y;
                }
            }
            continue;
        case '3':
            input = input['split']('\x0a');
            continue;
        case '4':
            console['log'](Y);
            continue;
        case '5':
            V = input[0x1]['split']('\x20')['map'](Number);
            continue;
        case '6':
            n = PkCPhA['YqdnS'](Number, input[0x0]['split']('\x20'));
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));