var a0_0x1e971c = a0_0x2598;
(function (stringArrayFunction, comparisonValue) {
    var _0x505bd3 = a0_0x2598;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x505bd3(0x1ad)) / 0x1 * (-parseInt(_0x505bd3(0x1a2)) / 0x2) + -parseInt(_0x505bd3(0x1a4)) / 0x3 * (-parseInt(_0x505bd3(0x19a)) / 0x4) + parseInt(_0x505bd3(0x1ae)) / 0x5 + parseInt(_0x505bd3(0x19c)) / 0x6 * (-parseInt(_0x505bd3(0x1a7)) / 0x7) + -parseInt(_0x505bd3(0x1aa)) / 0x8 * (parseInt(_0x505bd3(0x19f)) / 0x9) + -parseInt(_0x505bd3(0x1a5)) / 0xa * (parseInt(_0x505bd3(0x19e)) / 0xb) + parseInt(_0x505bd3(0x1a8)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x410a, 0x9ccdb));
function a0_0x410a() {
    var _0x26b5f5 = [
        '1516291yWgGqs',
        '14533320QdpMKP',
        'split',
        '4939984cQuGwd',
        'map',
        'from',
        '3syJbFT',
        '5556275SYDpae',
        'sort',
        'utf8',
        '20lNEfmw',
        'max',
        '6TGXscf',
        'log',
        '1307944VuDshM',
        '18zZxqBM',
        '/dev/stdin',
        'trim',
        '20454ZHWouB',
        'push',
        '557922yWtELS',
        '100bUgVus',
        'readFileSync'
    ];
    a0_0x410a = function () {
        return _0x26b5f5;
    };
    return a0_0x410a();
}
function Main(input) {
    var _0x14fd7f = a0_0x2598;
    input = input[_0x14fd7f(0x1a1)]()[_0x14fd7f(0x1a9)]('\x0a')[_0x14fd7f(0x1ab)](function (x) {
        var _0x29719b = _0x14fd7f;
        return x[_0x29719b(0x1a9)]('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var T = parseInt(input[0x0][0x1], 0xa);
    var arr_AB = [];
    for (var i = 0x0; i < N; i++) {
        arr_AB[_0x14fd7f(0x1a3)](input[i + 0x1][_0x14fd7f(0x1ab)](e => parseInt(e, 0xa)));
    }
    arr_AB[_0x14fd7f(0x1af)]((a, b) => a[0x0] - b[0x0]);
    var dp = [];
    var Ai, Bi;
    dp[_0x14fd7f(0x1a3)](Array[_0x14fd7f(0x1ac)]({ 'length': T }, () => [
        0x0,
        0x0
    ]));
    for (var i = 0x0; i < N; i++) {
        dp[_0x14fd7f(0x1a3)]([]);
        Ai = arr_AB[i][0x0];
        Bi = arr_AB[i][0x1];
        for (var j = 0x0; j < T; j++) {
            dp[i + 0x1]['push']([
                0x0,
                0x0
            ]);
            if (Ai <= j) {
                dp[i + 0x1][j][0x0] = Math[_0x14fd7f(0x19b)](dp[i][j][0x0], dp[i][j - Ai][0x0] + Bi);
            } else {
                dp[i + 0x1][j][0x0] = dp[i][j][0x0];
            }
            dp[i + 0x1][j][0x1] = Math['max'](dp[i][j][0x1], dp[i][j][0x0] + Bi);
        }
    }
    console[_0x14fd7f(0x19d)](dp[N][T - 0x1][0x1]);
}
function a0_0x2598(liOHbU, key) {
    var stringArray = a0_0x410a();
    a0_0x2598 = function (index, key) {
        index = index - 0x199;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2598(liOHbU, key);
}
Main(require('fs')[a0_0x1e971c(0x1a6)](a0_0x1e971c(0x1a0), a0_0x1e971c(0x199)));