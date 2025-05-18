var a0_0x1aae9e = a0_0xba5a;
(function (stringArrayFunction, comparisonValue) {
    var _0x307bc6 = a0_0xba5a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x307bc6(0x1cb)) / 0x1 + parseInt(_0x307bc6(0x1c4)) / 0x2 * (-parseInt(_0x307bc6(0x1c1)) / 0x3) + parseInt(_0x307bc6(0x1bf)) / 0x4 + parseInt(_0x307bc6(0x1c2)) / 0x5 * (parseInt(_0x307bc6(0x1c7)) / 0x6) + -parseInt(_0x307bc6(0x1c8)) / 0x7 + parseInt(_0x307bc6(0x1ca)) / 0x8 * (-parseInt(_0x307bc6(0x1cd)) / 0x9) + -parseInt(_0x307bc6(0x1cc)) / 0xa * (-parseInt(_0x307bc6(0x1c0)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x67be, 0xbf939));
function a0_0xba5a(YuElUC, key) {
    var stringArray = a0_0x67be();
    a0_0xba5a = function (index, key) {
        index = index - 0x1bd;
        var value = stringArray[index];
        return value;
    };
    return a0_0xba5a(YuElUC, key);
}
function main(input) {
    var _0x290bcb = a0_0xba5a;
    const lines = input[_0x290bcb(0x1be)]('\x0a');
    const S = lines[_0x290bcb(0x1cf)]()[_0x290bcb(0x1be)]('');
    const T = lines[_0x290bcb(0x1cf)]()[_0x290bcb(0x1be)]('');
    dp = [];
    for (var i = 0x0; i <= S[_0x290bcb(0x1c9)]; i++) {
        dp['push'](Array(T[_0x290bcb(0x1c9)] + 0x1)[_0x290bcb(0x1c5)](0x0));
    }
    for (var i = 0x1; i <= S[_0x290bcb(0x1c9)]; i++) {
        for (var j = 0x1; j <= T[_0x290bcb(0x1c9)]; j++) {
            if (S[i - 0x1] == T[j - 0x1]) {
                dp[i][j] = Math[_0x290bcb(0x1d0)](dp[i][j], dp[i - 0x1][j - 0x1] + 0x1);
            } else {
                dp[i][j] = Math['max'](dp[i - 0x1][j], dp[i][j - 0x1]);
            }
        }
    }
    var i = S[_0x290bcb(0x1c9)];
    var j = T[_0x290bcb(0x1c9)];
    var result = [];
    while (i != 0x0 && j != 0x0) {
        if (S[i - 0x1] == T[j - 0x1]) {
            result[_0x290bcb(0x1c6)](S[i - 0x1]);
            i--;
            j--;
        } else {
            if (dp[i - 0x1][j] < dp[i][j - 0x1]) {
                j--;
            } else {
                i--;
            }
        }
    }
    console[_0x290bcb(0x1d1)](result['join'](''));
}
main(require('fs')[a0_0x1aae9e(0x1ce)](a0_0x1aae9e(0x1bd), a0_0x1aae9e(0x1c3)));
function a0_0x67be() {
    var _0x4a4e14 = [
        '151608DofzdO',
        '10670982PXtbJv',
        'length',
        '3630808BlvHpH',
        '1106539CZhtso',
        '419350LfiyWe',
        '18lGDiNQ',
        'readFileSync',
        'shift',
        'max',
        'log',
        '/dev/stdin',
        'split',
        '183052vxeWhy',
        '583QFsmPE',
        '1239sSSdwt',
        '175pfuwTj',
        'utf8',
        '5048MmbWrn',
        'fill',
        'unshift'
    ];
    a0_0x67be = function () {
        return _0x4a4e14;
    };
    return a0_0x67be();
}