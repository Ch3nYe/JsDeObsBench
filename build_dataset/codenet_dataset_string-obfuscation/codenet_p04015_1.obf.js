var a0_0x452910 = a0_0x37aa;
(function (stringArrayFunction, comparisonValue) {
    var _0x34cc59 = a0_0x37aa;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x34cc59(0x120)) / 0x1 + parseInt(_0x34cc59(0x11e)) / 0x2 * (-parseInt(_0x34cc59(0x122)) / 0x3) + -parseInt(_0x34cc59(0x12a)) / 0x4 * (-parseInt(_0x34cc59(0x11d)) / 0x5) + -parseInt(_0x34cc59(0x11c)) / 0x6 + parseInt(_0x34cc59(0x129)) / 0x7 * (parseInt(_0x34cc59(0x11f)) / 0x8) + parseInt(_0x34cc59(0x125)) / 0x9 + -parseInt(_0x34cc59(0x128)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x338f, 0xe8692));
function main(input) {
    var _0x1c981b = a0_0x37aa;
    input = input[_0x1c981b(0x127)]('\x0a');
    var tmp = input[0x0][_0x1c981b(0x127)]('\x20');
    var N = Number(tmp[0x0]);
    var A = Number(tmp[0x1]);
    var x = [0x0];
    x = x[_0x1c981b(0x12b)](input[0x1]['split']('\x20')[_0x1c981b(0x11b)](Number));
    var dp = new Array(N + 0x1);
    for (var i = 0x0; i <= N; ++i) {
        dp[i] = new Array(N + 0x1);
        for (var j = 0x0; j <= N; ++j) {
            dp[i][j] = new Array(A * N + 0x1)[_0x1c981b(0x123)](0x0);
        }
    }
    for (var i = 0x0; i < N; ++i)
        dp[i][0x0][0x0] = 0x1;
    for (var i = 0x1; i <= N; ++i) {
        for (var j = 0x1; j <= i; ++j) {
            for (var k = 0x1; k <= A * N; ++k) {
                if (k < x[i]) {
                    dp[i][j][k] = dp[i - 0x1][j][k];
                } else {
                    dp[i][j][k] = dp[i - 0x1][j][k] + dp[i - 0x1][j - 0x1][k - x[i]];
                }
            }
        }
    }
    var ans = 0x0;
    for (var j = 0x1; j <= N; ++j) {
        ans += dp[N][j][j * A];
    }
    console[_0x1c981b(0x124)](ans);
}
function a0_0x37aa(SWdOfv, key) {
    var stringArray = a0_0x338f();
    a0_0x37aa = function (index, key) {
        index = index - 0x11b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x37aa(SWdOfv, key);
}
main(require('fs')[a0_0x452910(0x126)]('/dev/stdin', a0_0x452910(0x121)));
function a0_0x338f() {
    var _0x206f12 = [
        'concat',
        'map',
        '6078702jQnARH',
        '45935JLUcFn',
        '2FkmqUu',
        '8lSoeeD',
        '469767JqakDe',
        'utf8',
        '1226247pLGrYj',
        'fill',
        'log',
        '3755304DwEbdC',
        'readFileSync',
        'split',
        '9471550ZXWvpB',
        '10735382pARvVk',
        '392bqLoue'
    ];
    a0_0x338f = function () {
        return _0x206f12;
    };
    return a0_0x338f();
}