function Main(input) {
    var tcNMsh = {
        'azTlR': function (x, y) {
            return x - y;
        },
        'xdwqc': function (x, y) {
            return x == y;
        },
        'Ycucm': function (x, y) {
            return x == y;
        },
        'lRnZG': function (x, y) {
            return x < y;
        },
        'uuQli': function (x, y) {
            return x + y;
        },
        'snHHF': function (x, y) {
            return x + y;
        },
        'brBMT': function (x, y) {
            return x > y;
        },
        'rVXQm': function (x, y) {
            return x * y;
        },
        'fwFow': function (x, y) {
            return x - y;
        },
        'ayLWf': function (x, y) {
            return x == y;
        },
        'vFmBs': function (x, y) {
            return x + y;
        },
        'OpviA': function (x, y) {
            return x + y;
        },
        'lCuPS': function (x, y) {
            return x == y;
        }
    };
    input = input['split']('\x0a');
    const N = parseInt(input[0x0]);
    const As = input[0x1]['split']('\x20')['map'](x => parseInt(x));
    var now = As;
    while (!![]) {
        var min = -0x1;
        var next = [];
        for (i = 0x1; i < tcNMsh['azTlR'](now['length'], 0x1); i++) {
            if (tcNMsh['xdwqc'](min, -0x1) || now[min] > now[i])
                min = i;
            if (tcNMsh['Ycucm'](min, now[i]) && tcNMsh['lRnZG'](tcNMsh['uuQli'](now[tcNMsh['azTlR'](i, 0x1)], now[i + 0x1]), tcNMsh['snHHF'](now[tcNMsh['azTlR'](min, 0x1)], now[tcNMsh['snHHF'](min, 0x1)])))
                min = i;
        }
        if (tcNMsh['brBMT'](tcNMsh['rVXQm'](now[min], 0x2), now[now['length'] - 0x2]))
            min = tcNMsh['fwFow'](now['length'], 0x2);
        for (i = 0x0; tcNMsh['lRnZG'](i, now['length']); i++) {
            if (tcNMsh['ayLWf'](i, tcNMsh['fwFow'](min, 0x1))) {
                next['push'](tcNMsh['snHHF'](now[tcNMsh['azTlR'](min, 0x1)], now[min]));
            } else if (tcNMsh['xdwqc'](i, min)) {
            } else if (i == tcNMsh['vFmBs'](min, 0x1)) {
                next['push'](now[tcNMsh['OpviA'](min, 0x1)] + now[min]);
            } else {
                next['push'](now[i]);
            }
        }
        now = next;
        if (tcNMsh['lCuPS'](now['length'], 0x2))
            break;
    }
    console['log'](tcNMsh['vFmBs'](now[0x0], now[0x1]));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));