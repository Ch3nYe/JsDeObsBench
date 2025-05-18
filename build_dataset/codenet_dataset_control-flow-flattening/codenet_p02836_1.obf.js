function Main(input) {
    var rpcsNm = {
        'Qejfg': '3|4|0|5|6|2|8|1|7',
        'LMUSp': function (x, y) {
            return x < y;
        },
        'qiYzB': function (x, y) {
            return x - y;
        },
        'OyOXS': function (x, y) {
            return x + y;
        },
        'kdmmg': function (x, y) {
            return x % y;
        },
        'feEjl': function (x, y) {
            return x / y;
        }
    };
    var HHsKvL = rpcsNm['Qejfg']['split']('|');
    var WcuCXO = 0x0;
    while (!![]) {
        switch (HHsKvL[WcuCXO++]) {
        case '0':
            var len = T['length'];
            continue;
        case '1':
            for (i = 0x0; rpcsNm['LMUSp'](i, q); i++) {
                if (T['substr'](i, 0x1) == T['substr'](rpcsNm['qiYzB'](rpcsNm['qiYzB'](len, 0x1), i), 0x1)) {
                    cnt = rpcsNm['OyOXS'](cnt, 0x0);
                } else {
                    cnt++;
                }
            }
            continue;
        case '2':
            cnt = 0x0;
            continue;
        case '3':
            input = input['split']('\x0a');
            continue;
        case '4':
            T = input[0x0];
            continue;
        case '5':
            var p = rpcsNm['kdmmg'](len, 0x2);
            continue;
        case '6':
            q = Math['floor'](rpcsNm['feEjl'](len, 0x2));
            continue;
        case '7':
            console['log'](cnt);
            continue;
        case '8':
            i = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));