function Main(input) {
    var iNpUoP = {
        'zjAsD': '5|6|2|9|3|1|0|7|10|8|4',
        'TXzkg': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'iuRJz': function (x, y) {
            return x < y;
        },
        'jiOXC': function (x, y) {
            return x + y;
        },
        'mXqeF': function (x, y) {
            return x - y;
        },
        'QYaQr': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'psWkV': function (x, y) {
            return x < y;
        },
        'iPXhr': function (x, y) {
            return x + y;
        },
        'smOMZ': function (x, y) {
            return x <= y;
        },
        'jyXkX': function (x, y) {
            return x + y;
        },
        'EcMIz': function (x, y) {
            return x - y;
        },
        'DrowV': function (x, y) {
            return x + y;
        }
    };
    var Kjdjog = iNpUoP['zjAsD']['split']('|');
    var ubznyG = 0x0;
    while (!![]) {
        switch (Kjdjog[ubznyG++]) {
        case '0':
            var dp = [];
            continue;
        case '1':
            arr_AB['sort']((a, b) => a[0x0] - b[0x0]);
            continue;
        case '2':
            var T = iNpUoP['TXzkg'](parseInt, input[0x0][0x1], 0xa);
            continue;
        case '3':
            for (var i = 0x0; iNpUoP['iuRJz'](i, N); i++) {
                arr_AB['push'](input[iNpUoP['jiOXC'](i, 0x1)]['map'](e => parseInt(e, 0xa)));
            }
            continue;
        case '4':
            console['log'](dp[N][iNpUoP['mXqeF'](T, 0x1)][0x1]);
            continue;
        case '5':
            input = input['trim']()['split']('\x0a')['map'](function (x) {
                return x['split']('\x20');
            });
            continue;
        case '6':
            var N = iNpUoP['QYaQr'](parseInt, input[0x0][0x0], 0xa);
            continue;
        case '7':
            var Ai, Bi;
            continue;
        case '8':
            for (var i = 0x0; iNpUoP['psWkV'](i, N); i++) {
                dp['push']([]);
                Ai = arr_AB[i][0x0];
                Bi = arr_AB[i][0x1];
                for (var j = 0x0; iNpUoP['psWkV'](j, T); j++) {
                    dp[iNpUoP['iPXhr'](i, 0x1)]['push']([
                        0x0,
                        0x0
                    ]);
                    if (iNpUoP['smOMZ'](Ai, j)) {
                        dp[iNpUoP['jyXkX'](i, 0x1)][j][0x0] = Math['max'](dp[i][j][0x0], iNpUoP['iPXhr'](dp[i][iNpUoP['EcMIz'](j, Ai)][0x0], Bi));
                    } else {
                        dp[iNpUoP['jyXkX'](i, 0x1)][j][0x0] = dp[i][j][0x0];
                    }
                    dp[iNpUoP['DrowV'](i, 0x1)][j][0x1] = Math['max'](dp[i][j][0x1], iNpUoP['DrowV'](dp[i][j][0x0], Bi));
                }
            }
            continue;
        case '9':
            var arr_AB = [];
            continue;
        case '10':
            dp['push'](Array['from']({ 'length': T }, () => [
                0x0,
                0x0
            ]));
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));