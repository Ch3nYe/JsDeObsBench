function Main(input) {
    var JJUQJQ = {
        'mXJyQ': function (x, y) {
            return x < y;
        },
        'xCkgr': function (x, y) {
            return x + y;
        },
        'bIPjy': function (x, y) {
            return x + y;
        },
        'mfusF': function (x, y) {
            return x - y;
        },
        'Qqogx': function (x, y) {
            return x < y;
        },
        'ABoso': function (x, y) {
            return x + y;
        },
        'sRtdY': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var iNJXiE = '4|8|6|3|7|1|5|2|0'['split']('|');
    var NlIaoT = 0x0;
    while (!![]) {
        switch (iNJXiE[NlIaoT++]) {
        case '0':
            console['log'](count);
            continue;
        case '1':
            b = b['map'](str => parseInt(str, 0xa));
            continue;
        case '2':
            for (var i = 0x0; JJUQJQ['mXJyQ'](i, n); i++) {
                var atarget = JJUQJQ['xCkgr'](a[i], a[JJUQJQ['bIPjy'](i, 0x1)]);
                var rest = JJUQJQ['mfusF'](atarget, b[i]);
                if (JJUQJQ['Qqogx'](rest, 0x0)) {
                    count += atarget;
                    a[JJUQJQ['ABoso'](i, 0x1)] = 0x0;
                } else {
                    count += b[i];
                    a[i + 0x1] = Math['min'](rest, a[JJUQJQ['bIPjy'](i, 0x1)]);
                }
            }
            continue;
        case '3':
            a = a['map'](str => parseInt(str, 0xa));
            continue;
        case '4':
            input = input['split']('\x0a');
            continue;
        case '5':
            var count = 0x0;
            continue;
        case '6':
            var a = input[0x1]['split']('\x20');
            continue;
        case '7':
            var b = input[0x2]['split']('\x20');
            continue;
        case '8':
            var n = JJUQJQ['sRtdY'](parseInt, input[0x0], 0xa);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));