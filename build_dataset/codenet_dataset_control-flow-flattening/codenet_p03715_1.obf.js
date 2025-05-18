function Main(input) {
    var TfJJUO = {
        'jWwqu': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'TiTiF': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var pYiRzt = '0|3|1|2|4'['split']('|');
    var RCoPbN = 0x0;
    while (!![]) {
        switch (pYiRzt[RCoPbN++]) {
        case '0':
            input = input['trim']()['split']('\x0a')['map'](function (x) {
                return x['split']('\x20');
            });
            continue;
        case '1':
            var W = TfJJUO['jWwqu'](parseInt, input[0x0][0x1], 0xa);
            continue;
        case '2':
            var ans = TfJJUO['TiTiF'](calc, H, W);
            continue;
        case '3':
            var H = parseInt(input[0x0][0x0], 0xa);
            continue;
        case '4':
            console['log'](ans);
            continue;
        }
        break;
    }
}
function calc(H, W) {
    var KbdPXz = {
        'ESuDa': function (x, y) {
            return x === y;
        },
        'LFTTY': function (x, y) {
            return x === y;
        },
        'MaWBE': function (x, y) {
            return x % y;
        },
        'XtfRf': function (x, y) {
            return x <= y;
        },
        'chVkW': function (x, y) {
            return x * y;
        },
        'WhoDu': function (x, y) {
            return x / y;
        },
        'qKpaJ': function (x, y) {
            return x * y;
        },
        'gmnqO': function (x, y) {
            return x - y;
        },
        'rLwIN': function (x, y) {
            return x / y;
        },
        'ClSTM': function (x, y) {
            return x * y;
        },
        'GhmCW': function (x, y) {
            return x - y;
        },
        'yBvCP': function (x, y) {
            return x * y;
        },
        'IdQkV': function (x, y) {
            return x - y;
        },
        'poADZ': function (x, y) {
            return x - y;
        },
        'YfYjm': function (x, y) {
            return x / y;
        },
        'NehqX': function (x, y) {
            return x / y;
        },
        'yNsrW': function (x, y) {
            return x % y;
        },
        'ekCeD': function (x, y) {
            return x > y;
        }
    };
    if (KbdPXz['ESuDa'](H % 0x3, 0x0) || KbdPXz['LFTTY'](KbdPXz['MaWBE'](W, 0x3), 0x0))
        return 0x0;
    var result = H * W;
    var tmp;
    var oldtmp = result;
    for (var i = 0x0; KbdPXz['XtfRf'](i, W); i++) {
        tmp = Math['max'](Math['abs'](i * H - KbdPXz['chVkW'](W - i, Math['ceil'](KbdPXz['WhoDu'](H, 0x2)))), Math['abs'](KbdPXz['chVkW'](i, H) - KbdPXz['qKpaJ'](KbdPXz['gmnqO'](W, i), Math['floor'](KbdPXz['rLwIN'](H, 0x2)))), KbdPXz['ClSTM'](KbdPXz['MaWBE'](H, 0x2), KbdPXz['GhmCW'](W, i)));
        result = Math['min'](result, tmp);
        if (tmp > oldtmp)
            break;
        oldtmp = tmp;
    }
    [W, H] = [
        H,
        W
    ];
    oldtmp = KbdPXz['yBvCP'](H, W);
    for (var i = 0x0; i <= W; i++) {
        tmp = Math['max'](Math['abs'](KbdPXz['IdQkV'](i * H, KbdPXz['chVkW'](KbdPXz['poADZ'](W, i), Math['ceil'](KbdPXz['YfYjm'](H, 0x2))))), Math['abs'](KbdPXz['gmnqO'](KbdPXz['ClSTM'](i, H), KbdPXz['GhmCW'](W, i) * Math['floor'](KbdPXz['NehqX'](H, 0x2)))), KbdPXz['yBvCP'](KbdPXz['yNsrW'](H, 0x2), KbdPXz['IdQkV'](W, i)));
        result = Math['min'](result, tmp);
        if (KbdPXz['ekCeD'](tmp, oldtmp))
            break;
        oldtmp = tmp;
    }
    return Math['min'](result, H, W);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));