function Main(data) {
    var FYqsfo = {
        'WsNex': '4|3|2|1|0',
        'tejQW': function (x, y) {
            return x + y;
        },
        'RJyZx': function (x, y) {
            return x - y;
        },
        'rAeoH': function (x, y) {
            return x * y;
        },
        'RmpUt': function (x, y) {
            return x - y;
        },
        'bJBVN': function (x, y) {
            return x - y;
        },
        'bgpDx': function (x, y) {
            return x - y;
        }
    };
    var uirlBm = FYqsfo['WsNex']['split']('|');
    var Pacrum = 0x0;
    while (!![]) {
        switch (uirlBm[Pacrum++]) {
        case '0':
            console['log'](a);
            continue;
        case '1':
            var a = FYqsfo['tejQW'](data[0x1], FYqsfo['RJyZx'](data[0x0], data[0x1])) + FYqsfo['rAeoH'](data[0x0] - FYqsfo['RmpUt'](data[0x0], data[0x1]), 0x2) + FYqsfo['rAeoH'](FYqsfo['RmpUt'](FYqsfo['bJBVN'](data[0x0], data[0x1]), FYqsfo['bgpDx'](data[0x0], FYqsfo['bJBVN'](data[0x0], data[0x1]))), 0x3);
            continue;
        case '2':
            data[0x1] = Number(data[0x1]);
            continue;
        case '3':
            data[0x0] = Number(data[0x0]);
            continue;
        case '4':
            data = data['split']('\x20');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));