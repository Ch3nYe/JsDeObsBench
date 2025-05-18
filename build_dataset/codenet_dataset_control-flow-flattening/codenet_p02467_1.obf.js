function Main(input) {
    var LjCvbn = {
        'GboJQ': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'ORXdu': function (x, y) {
            return x + y;
        },
        'wuOTM': function (x, y) {
            return x <= y;
        },
        'QOmcW': function (x, y) {
            return x === y;
        },
        'oGafD': function (x, y) {
            return x % y;
        }
    };
    var pYBMJb = '0|1|3|4|2|6|5'['split']('|');
    var SsaufM = 0x0;
    while (!![]) {
        switch (pYBMJb[SsaufM++]) {
        case '0':
            input = input['trim']()['split']('\x0a')['map'](function (x) {
                return x['split']('\x20');
            });
            continue;
        case '1':
            var n = LjCvbn['GboJQ'](parseInt, input[0x0][0x0], 0xa);
            continue;
        case '2':
            var start = 0x2;
            continue;
        case '3':
            var originalN = n;
            continue;
        case '4':
            var v_ans = [];
            continue;
        case '5':
            console['log'](LjCvbn['ORXdu'](LjCvbn['ORXdu'](originalN['toString'](), ':\x20'), v_ans['join']('\x20')));
            continue;
        case '6':
            whole_loop:
                while (!![]) {
                    for (var i = start; LjCvbn['wuOTM'](i, Math['sqrt'](n)); i++) {
                        if (LjCvbn['QOmcW'](LjCvbn['oGafD'](n, i), 0x0)) {
                            v_ans['push'](i);
                            n /= i;
                            start = i;
                            continue whole_loop;
                        }
                    }
                    v_ans['push'](n);
                    break;
                }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));