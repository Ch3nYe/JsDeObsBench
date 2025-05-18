var a0_0x371f2a = a0_0x9a85;
(function (stringArrayFunction, comparisonValue) {
    var _0x2b8812 = a0_0x9a85;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2b8812(0x175)) / 0x1 + -parseInt(_0x2b8812(0x16c)) / 0x2 + -parseInt(_0x2b8812(0x172)) / 0x3 + parseInt(_0x2b8812(0x176)) / 0x4 * (-parseInt(_0x2b8812(0x177)) / 0x5) + -parseInt(_0x2b8812(0x16d)) / 0x6 * (parseInt(_0x2b8812(0x16b)) / 0x7) + -parseInt(_0x2b8812(0x171)) / 0x8 + parseInt(_0x2b8812(0x178)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3311, 0xef927));
function a0_0x3311() {
    var _0x1b998d = [
        '0\x200',
        'min',
        'forEach',
        '36274nYpdiU',
        '2690316xeOsUX',
        '1038PFlYvD',
        'shift',
        'push',
        'join',
        '5955184ncmPue',
        '1750203AFzmIA',
        'pow',
        'split',
        '924319AwKeRU',
        '4pmmYhq',
        '685205WQExES',
        '33871068BcoxNL'
    ];
    a0_0x3311 = function () {
        return _0x1b998d;
    };
    return a0_0x3311();
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()[a0_0x371f2a(0x174)]('\x0a');
function a0_0x9a85(kEjtis, key) {
    var stringArray = a0_0x3311();
    a0_0x9a85 = function (index, key) {
        index = index - 0x169;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9a85(kEjtis, key);
}
while (!![]) {
    var nm = arr[a0_0x371f2a(0x16e)]()['split']('\x20');
    if (nm[a0_0x371f2a(0x170)]('\x20') == a0_0x371f2a(0x179))
        break;
    var n = nm[0x0];
    var m = nm[0x1];
    var M = [];
    for (var i = 0x0; i < m; i++)
        M[a0_0x371f2a(0x16f)](arr[a0_0x371f2a(0x16e)]() - 0x0);
    var N = [];
    for (var i = 0x0; i < n; i++)
        N['push'](arr[a0_0x371f2a(0x16e)]() - 0x0);
    var dp = [];
    for (var i = 0x0; i <= n; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= 0xff; j++) {
            dp[i][j] = Infinity;
        }
    }
    dp[0x0][0x80] = 0x0;
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x0; j <= 0xff; j++) {
            if (dp[i - 0x1][j] != Infinity) {
                for (var k = 0x0; k < m; k++) {
                    var jm = j + M[k];
                    if (jm < 0x0)
                        jm = 0x0;
                    if (jm > 0xff)
                        jm = 0xff;
                    dp[i][jm] = Math[a0_0x371f2a(0x169)](dp[i][jm], dp[i - 0x1][j] + Math[a0_0x371f2a(0x173)](N[i - 0x1] - jm, 0x2));
                }
            }
        }
    }
    var min = Infinity;
    dp[n][a0_0x371f2a(0x16a)](function (v) {
        min = Math['min'](min, v);
    });
    console['log'](min);
}