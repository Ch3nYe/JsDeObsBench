function Main(input) {
    var JahdoN = {
        'eIhdJ': '9|4|6|5|3|1|8|2|7|0',
        'nvITa': function (x, y) {
            return x < y;
        },
        'JyOcC': function (callee, param1) {
            return callee(param1);
        },
        'LIlJi': function (x, y) {
            return x - y;
        },
        'EdghN': function (x, y) {
            return x == y;
        },
        'cqAtw': function (x, y) {
            return x - y;
        }
    };
    var wxtjoM = JahdoN['eIhdJ']['split']('|');
    var sjWQXW = 0x0;
    while (!![]) {
        switch (wxtjoM[sjWQXW++]) {
        case '0':
            console['log']('%s', ans);
            continue;
        case '1':
            b = new Array(n)['fill'](0x0);
            continue;
        case '2':
            var max = -0x1;
            continue;
        case '3':
            for (i = 0x0; JahdoN['nvITa'](i, n); i++) {
                a[i] = parseInt(input[0x1]['split']('\x20')[i]);
            }
            continue;
        case '4':
            tmp = input[0x0]['split']('\x20');
            continue;
        case '5':
            a = new Array(n)['fill'](0x0);
            continue;
        case '6':
            var n = JahdoN['JyOcC'](parseInt, tmp[0x0]);
            continue;
        case '7':
            for (i = 0x0; i < n; i++) {
                min = Math['min'](min, a[i]);
                if (JahdoN['nvITa'](max, JahdoN['LIlJi'](a[i], min))) {
                    ans = 0x1;
                }
                if (JahdoN['EdghN'](max, JahdoN['cqAtw'](a[i], min))) {
                    ans++;
                }
                max = Math['max'](max, a[i] - min);
            }
            continue;
        case '8':
            var min = Math['pow'](0xa, 0x9);
            continue;
        case '9':
            input = input['split']('\x0a');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));