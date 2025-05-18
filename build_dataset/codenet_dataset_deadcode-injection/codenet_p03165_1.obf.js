var a0_0x5dbc66 = a0_0x1af0;
function a0_0x1af0(UZMSlw, key) {
    var stringArray = a0_0x1de1();
    a0_0x1af0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1af0(UZMSlw, key);
}
function main(input) {
    var _0x57bc2b = a0_0x1af0;
    const lines = input[_0x57bc2b(0x0)]('\x0a');
    const S = lines[_0x57bc2b(0x1)]()['split']('');
    const T = lines[_0x57bc2b(0x1)]()[_0x57bc2b(0x0)]('');
    dp = [];
    for (var i = 0x0; i <= S[_0x57bc2b(0x2)]; i++) {
        dp[_0x57bc2b(0x3)](Array(T[_0x57bc2b(0x2)] + 0x1)[_0x57bc2b(0x4)](0x0));
    }
    for (var i = 0x1; i <= S['length']; i++) {
        for (var j = 0x1; j <= T['length']; j++) {
            if (_0x57bc2b(0x5) !== _0x57bc2b(0x5)) {
                dp[_0x57bc2b(0x3)](Array(T[_0x57bc2b(0x2)] + 0x1)[_0x57bc2b(0x4)](0x0));
            } else {
                if (S[i - 0x1] == T[j - 0x1]) {
                    dp[i][j] = Math[_0x57bc2b(0x6)](dp[i][j], dp[i - 0x1][j - 0x1] + 0x1);
                } else {
                    dp[i][j] = Math[_0x57bc2b(0x6)](dp[i - 0x1][j], dp[i][j - 0x1]);
                }
            }
        }
    }
    var i = S[_0x57bc2b(0x2)];
    var j = T['length'];
    var result = [];
    while (i != 0x0 && j != 0x0) {
        if ('KLSaM' !== _0x57bc2b(0x7)) {
            if (S[i - 0x1] == T[j - 0x1]) {
                result['unshift'](S[i - 0x1]);
                i--;
                j--;
            } else {
                if (_0x57bc2b(0x8) === _0x57bc2b(0x8)) {
                    if (dp[i - 0x1][j] < dp[i][j - 0x1]) {
                        if (_0x57bc2b(0x9) === 'TZrnH') {
                            j--;
                        } else {
                            for (var j = 0x1; j <= T[_0x57bc2b(0x2)]; j++) {
                                if (S[i - 0x1] == T[j - 0x1]) {
                                    dp[i][j] = Math['max'](dp[i][j], dp[i - 0x1][j - 0x1] + 0x1);
                                } else {
                                    dp[i][j] = Math['max'](dp[i - 0x1][j], dp[i][j - 0x1]);
                                }
                            }
                        }
                    } else {
                        if (_0x57bc2b(0xa) !== _0x57bc2b(0xb)) {
                            i--;
                        } else {
                            j--;
                        }
                    }
                } else {
                    i--;
                }
            }
        } else {
            if (S[i - 0x1] == T[j - 0x1]) {
                dp[i][j] = Math[_0x57bc2b(0x6)](dp[i][j], dp[i - 0x1][j - 0x1] + 0x1);
            } else {
                dp[i][j] = Math[_0x57bc2b(0x6)](dp[i - 0x1][j], dp[i][j - 0x1]);
            }
        }
    }
    console[_0x57bc2b(0xc)](result[_0x57bc2b(0xd)](''));
}
function a0_0x1de1() {
    var _0x4536e5 = [
        'split',
        'shift',
        'length',
        'push',
        'fill',
        'wsITZ',
        'max',
        'PuIRQ',
        'ecrvO',
        'TZrnH',
        'tnNYy',
        'eRjOG',
        'log',
        'join',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1de1 = function () {
        return _0x4536e5;
    };
    return a0_0x1de1();
}
main(require('fs')['readFileSync'](a0_0x5dbc66(0xe), a0_0x5dbc66(0xf)));