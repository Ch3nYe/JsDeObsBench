function Main(input) {
    var dpENFF = {
        'fHrbs': '2|5|4|3|1|0|7|6',
        'Faxii': function (callee, param1) {
            return callee(param1);
        },
        'RrQQh': function (x, y) {
            return x === y;
        },
        'xlPhY': function (x, y) {
            return x - y;
        }
    };
    var XseYbc = dpENFF['fHrbs']['split']('|');
    var SvibUD = 0x0;
    while (!![]) {
        switch (XseYbc[SvibUD++]) {
        case '0':
            var count = 0x0;
            continue;
        case '1':
            c = input[0x3]['split']('\x20')['map'](Number);
            continue;
        case '2':
            input = input['split']('\x0a');
            continue;
        case '3':
            b = input[0x2]['split']('\x20')['map'](Number);
            continue;
        case '4':
            a = input[0x1]['split']('\x20')['map'](Number);
            continue;
        case '5':
            n = dpENFF['Faxii'](Number, input[0x0]['split']('\x20'));
            continue;
        case '6':
            console['log'](count);
            continue;
        case '7':
            for (var i = 0x0; i < n; i++) {
                count += b[a[i] - 0x1];
                if (dpENFF['RrQQh'](a[i], a[i - 0x1] + 0x1)) {
                    count += c[dpENFF['xlPhY'](a[i], 0x2)];
                }
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));