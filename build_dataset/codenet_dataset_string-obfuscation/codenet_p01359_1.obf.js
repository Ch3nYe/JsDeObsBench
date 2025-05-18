function a0_0x4ffa(YbWdvy, key) {
    var stringArray = a0_0x1194();
    a0_0x4ffa = function (index, key) {
        index = index - 0x12f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ffa(YbWdvy, key);
}
var a0_0x193ccf = a0_0x4ffa;
(function (stringArrayFunction, comparisonValue) {
    var _0x3069ce = a0_0x4ffa;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3069ce(0x140)) / 0x1 + parseInt(_0x3069ce(0x134)) / 0x2 * (-parseInt(_0x3069ce(0x133)) / 0x3) + parseInt(_0x3069ce(0x12f)) / 0x4 + parseInt(_0x3069ce(0x143)) / 0x5 * (parseInt(_0x3069ce(0x130)) / 0x6) + parseInt(_0x3069ce(0x135)) / 0x7 + -parseInt(_0x3069ce(0x136)) / 0x8 * (parseInt(_0x3069ce(0x13c)) / 0x9) + parseInt(_0x3069ce(0x139)) / 0xa * (parseInt(_0x3069ce(0x137)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1194, 0x19dd0));
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x193ccf(0x132));
var arr = input[a0_0x193ccf(0x141)]()[a0_0x193ccf(0x13e)]('\x0a');
while (!![]) {
    var [n, q] = arr[a0_0x193ccf(0x138)]()[a0_0x193ccf(0x13e)]('\x20')[a0_0x193ccf(0x142)](Number);
    if (n == 0x0 && q == 0x0)
        break;
    var g = [];
    for (var i = 0x0; i < n; i++) {
        var [e, ey, wy] = arr[a0_0x193ccf(0x138)]()[a0_0x193ccf(0x13e)]('\x20');
        [ey, wy] = [
            ey - 0x0,
            wy - 0x0
        ];
        g[a0_0x193ccf(0x13a)]([
            e,
            wy - ey,
            wy
        ]);
    }
    for (var i = 0x0; i < q; i++) {
        var n = arr[a0_0x193ccf(0x138)]() - 0x0;
        var ans = a0_0x193ccf(0x13b);
        for (var j = 0x0; j < g[a0_0x193ccf(0x13f)]; j++) {
            var a = g[j][0x1];
            var b = g[j][0x2];
            if (a < n && n <= b) {
                ans = [
                    g[j][0x0],
                    n - a
                ][a0_0x193ccf(0x13d)]('\x20');
            }
        }
        console[a0_0x193ccf(0x131)](ans);
    }
}
function a0_0x1194() {
    var _0x13a1bb = [
        'trim',
        'map',
        '39830zmsDhv',
        '133528nlZASY',
        '18HbcSYz',
        'log',
        'utf8',
        '48tLPlyo',
        '9562KLRSjJ',
        '754950pepqBr',
        '394952phrCGA',
        '11ceKMQc',
        'shift',
        '1706790NnTeOl',
        'push',
        'Unknown',
        '9bwAPCq',
        'join',
        'split',
        'length',
        '104008rmNIGx'
    ];
    a0_0x1194 = function () {
        return _0x13a1bb;
    };
    return a0_0x1194();
}