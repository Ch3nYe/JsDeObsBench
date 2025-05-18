function Main(input) {
    var adXJIF = {
        'bLnWK': function (x, y) {
            return x < y;
        },
        'zJBxA': function (x, y) {
            return x + y;
        },
        'CwYZx': function (x, y) {
            return x + y;
        },
        'sdssm': function (x, y) {
            return x ** y;
        },
        'bXWjY': function (x, y) {
            return x ** y;
        },
        'DKIYA': function (callee, param1) {
            return callee(param1);
        },
        'ecjew': function (x, y) {
            return x + y;
        },
        'sIcim': function (x, y) {
            return x <= y;
        },
        'uxXdZ': function (x, y) {
            return x <= y;
        }
    };
    input = input['split']('\x20')['map'](a => ~~a);
    var H = input[0x0];
    var W = input[0x1];
    var K = input[0x2];
    var mod = adXJIF['CwYZx'](adXJIF['sdssm'](0xa, 0x9), 0x7);
    if (W == 0x1)
        return 0x1;
    var validAmidaList = Array(adXJIF['bXWjY'](0x2, W - 0x1))['fill'](0x0)['map']((a, b) => b)['map'](a => a['toString'](0x2))['filter'](a => !/11/['test'](a))['map'](a => '000000' + a)['map'](a => a['slice'](0x1 - W))['map'](a => '0' + a + '0');
    var dp = adXJIF['DKIYA'](Array, adXJIF['ecjew'](H, 0x1));
    for (var i = 0x0; adXJIF['sIcim'](i, H); i++) {
        dp[i] = adXJIF['DKIYA'](Array, W)['fill'](0x0);
    }
    dp[0x0][0x0] = 0x1;
    for (var i = 0x1; adXJIF['uxXdZ'](i, H); i++) {
        validAmidaList['forEach'](function (elem) {
            for (var j = 0x0; adXJIF['bLnWK'](j, W); j++) {
                ({
                    '10': a => dp[i][j] += dp[i - 0x1][j - 0x1],
                    '01': a => dp[i][j] += dp[i - 0x1][j + 0x1],
                    '00': a => dp[i][j] += dp[i - 0x1][j]
                }[adXJIF['zJBxA'](elem[j], elem[j + 0x1])]());
                dp[i][j] %= mod;
            }
        });
    }
    return dp[H][K - 0x1];
}
if (typeof require !== 'undefined')
    console['log'](Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));