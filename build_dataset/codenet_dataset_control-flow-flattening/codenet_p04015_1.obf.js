function main(input) {
    var nsGCrW = {
        'kNHSd': '8|3|1|2|5|11|9|7|0|12|6|4|10',
        'jYBKh': function (x, y) {
            return x < y;
        },
        'dsrKR': function (callee, param1) {
            return callee(param1);
        },
        'UINoU': function (x, y) {
            return x * y;
        },
        'AKNAE': function (x, y) {
            return x + y;
        },
        'UhBDW': function (x, y) {
            return x <= y;
        },
        'czBsz': function (x, y) {
            return x + y;
        },
        'ZhOOm': function (x, y) {
            return x < y;
        },
        'MEYnd': function (x, y) {
            return x - y;
        }
    };
    var gVtLuY = nsGCrW['kNHSd']['split']('|');
    var LBbGbn = 0x0;
    while (!![]) {
        switch (gVtLuY[LBbGbn++]) {
        case '0':
            for (var i = 0x0; nsGCrW['jYBKh'](i, N); ++i)
                dp[i][0x0][0x0] = 0x1;
            continue;
        case '1':
            var N = nsGCrW['dsrKR'](Number, tmp[0x0]);
            continue;
        case '2':
            var A = Number(tmp[0x1]);
            continue;
        case '3':
            var tmp = input[0x0]['split']('\x20');
            continue;
        case '4':
            for (var j = 0x1; j <= N; ++j) {
                ans += dp[N][j][nsGCrW['UINoU'](j, A)];
            }
            continue;
        case '5':
            var x = [0x0];
            continue;
        case '6':
            var ans = 0x0;
            continue;
        case '7':
            for (var i = 0x0; i <= N; ++i) {
                dp[i] = new Array(nsGCrW['AKNAE'](N, 0x1));
                for (var j = 0x0; nsGCrW['UhBDW'](j, N); ++j) {
                    dp[i][j] = new Array(nsGCrW['UINoU'](A, N) + 0x1)['fill'](0x0);
                }
            }
            continue;
        case '8':
            input = input['split']('\x0a');
            continue;
        case '9':
            var dp = new Array(nsGCrW['czBsz'](N, 0x1));
            continue;
        case '10':
            console['log'](ans);
            continue;
        case '11':
            x = x['concat'](input[0x1]['split']('\x20')['map'](Number));
            continue;
        case '12':
            for (var i = 0x1; nsGCrW['UhBDW'](i, N); ++i) {
                for (var j = 0x1; nsGCrW['UhBDW'](j, i); ++j) {
                    for (var k = 0x1; nsGCrW['UhBDW'](k, nsGCrW['UINoU'](A, N)); ++k) {
                        if (nsGCrW['ZhOOm'](k, x[i])) {
                            dp[i][j][k] = dp[nsGCrW['MEYnd'](i, 0x1)][j][k];
                        } else {
                            dp[i][j][k] = nsGCrW['AKNAE'](dp[nsGCrW['MEYnd'](i, 0x1)][j][k], dp[i - 0x1][nsGCrW['MEYnd'](j, 0x1)][nsGCrW['MEYnd'](k, x[i])]);
                        }
                    }
                }
            }
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));