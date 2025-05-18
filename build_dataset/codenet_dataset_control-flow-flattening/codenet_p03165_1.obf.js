function main(input) {
    var EEAehy = {
        'oOrSn': function (x, y) {
            return x <= y;
        },
        'VORHH': function (callee, param1) {
            return callee(param1);
        },
        'YFOsE': function (x, y) {
            return x + y;
        },
        'hRtzt': function (x, y) {
            return x <= y;
        },
        'mVrYT': function (x, y) {
            return x <= y;
        },
        'dzgNn': function (x, y) {
            return x == y;
        },
        'nuIah': function (x, y) {
            return x - y;
        },
        'kvyno': function (x, y) {
            return x + y;
        },
        'vbKfU': function (x, y) {
            return x - y;
        },
        'NFOGs': function (x, y) {
            return x != y;
        },
        'gZxHr': function (x, y) {
            return x - y;
        },
        'ZlEjG': function (x, y) {
            return x - y;
        },
        'lYnqF': function (x, y) {
            return x < y;
        },
        'mOjCV': function (x, y) {
            return x - y;
        }
    };
    const lines = input['split']('\x0a');
    const S = lines['shift']()['split']('');
    const T = lines['shift']()['split']('');
    dp = [];
    for (var i = 0x0; EEAehy['oOrSn'](i, S['length']); i++) {
        dp['push'](EEAehy['VORHH'](Array, EEAehy['YFOsE'](T['length'], 0x1))['fill'](0x0));
    }
    for (var i = 0x1; EEAehy['hRtzt'](i, S['length']); i++) {
        for (var j = 0x1; EEAehy['mVrYT'](j, T['length']); j++) {
            if (EEAehy['dzgNn'](S[EEAehy['nuIah'](i, 0x1)], T[j - 0x1])) {
                dp[i][j] = Math['max'](dp[i][j], EEAehy['kvyno'](dp[EEAehy['vbKfU'](i, 0x1)][EEAehy['nuIah'](j, 0x1)], 0x1));
            } else {
                dp[i][j] = Math['max'](dp[EEAehy['vbKfU'](i, 0x1)][j], dp[i][EEAehy['nuIah'](j, 0x1)]);
            }
        }
    }
    var i = S['length'];
    var j = T['length'];
    var result = [];
    while (EEAehy['NFOGs'](i, 0x0) && EEAehy['NFOGs'](j, 0x0)) {
        if (EEAehy['dzgNn'](S[EEAehy['nuIah'](i, 0x1)], T[EEAehy['gZxHr'](j, 0x1)])) {
            result['unshift'](S[EEAehy['ZlEjG'](i, 0x1)]);
            i--;
            j--;
        } else {
            if (EEAehy['lYnqF'](dp[EEAehy['mOjCV'](i, 0x1)][j], dp[i][EEAehy['ZlEjG'](j, 0x1)])) {
                j--;
            } else {
                i--;
            }
        }
    }
    console['log'](result['join'](''));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));