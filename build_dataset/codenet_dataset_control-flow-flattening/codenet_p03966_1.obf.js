function Main(input) {
    var KfTDUc = {
        'QmQgg': '0|4|3|2|5|1',
        'IfGnX': function (x, y) {
            return x + y;
        },
        'YxggH': function (x, y) {
            return x * y;
        },
        'lqgIE': function (x, y) {
            return x <= y;
        },
        'ZonCC': function (x, y) {
            return x <= y;
        },
        'fOkwu': '4|1|2|3|0',
        'VfihL': function (x, y) {
            return x / y;
        },
        'hLmcY': function (x, y) {
            return x * y;
        },
        'dJzHJ': function (x, y) {
            return x / y;
        }
    };
    var KlSyCa = KfTDUc['QmQgg']['split']('|');
    var QYRkiW = 0x0;
    while (!![]) {
        switch (KlSyCa[QYRkiW++]) {
        case '0':
            TT = 0x0;
            continue;
        case '1':
            console['log'](KfTDUc['IfGnX'](TT, AA));
            continue;
        case '2':
            N = input[0x0];
            continue;
        case '3':
            input = input['split']('\x0a');
            continue;
        case '4':
            AA = 0x0;
            continue;
        case '5':
            for (i = 0x1; i <= N; i++) {
                tmp = input[i]['split']('\x20');
                T = KfTDUc['YxggH'](tmp[0x0], 0x1);
                A = KfTDUc['YxggH'](tmp[0x1], 0x1);
                if (KfTDUc['lqgIE'](TT, T) && KfTDUc['ZonCC'](AA, A)) {
                    TT = T;
                    AA = A;
                } else {
                    var xzDQvu = KfTDUc['fOkwu']['split']('|');
                    var wzqdcC = 0x0;
                    while (!![]) {
                        switch (xzDQvu[wzqdcC++]) {
                        case '0':
                            AA = KfTDUc['YxggH'](A, ratio);
                            continue;
                        case '1':
                            ratioA = KfTDUc['VfihL'](AA, A);
                            continue;
                        case '2':
                            ratio = Math['ceil'](Math['max'](ratioT, ratioA));
                            continue;
                        case '3':
                            TT = KfTDUc['hLmcY'](T, ratio);
                            continue;
                        case '4':
                            ratioT = KfTDUc['dJzHJ'](TT, T);
                            continue;
                        }
                        break;
                    }
                }
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));