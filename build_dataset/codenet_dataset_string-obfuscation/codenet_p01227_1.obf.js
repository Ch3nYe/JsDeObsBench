var a0_0x9ca03f = a0_0x2eb9;
(function (stringArrayFunction, comparisonValue) {
    var _0x48f925 = a0_0x2eb9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x48f925(0x1a8)) / 0x1 * (parseInt(_0x48f925(0x1ac)) / 0x2) + parseInt(_0x48f925(0x1a6)) / 0x3 + -parseInt(_0x48f925(0x1b1)) / 0x4 + -parseInt(_0x48f925(0x1a5)) / 0x5 * (parseInt(_0x48f925(0x1ad)) / 0x6) + -parseInt(_0x48f925(0x1b2)) / 0x7 + parseInt(_0x48f925(0x1ab)) / 0x8 * (parseInt(_0x48f925(0x1ae)) / 0x9) + parseInt(_0x48f925(0x1aa)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3d6c, 0x7a441));
function a0_0x2eb9(etwuZe, key) {
    var stringArray = a0_0x3d6c();
    a0_0x2eb9 = function (index, key) {
        index = index - 0x1a0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2eb9(etwuZe, key);
}
var input = require('fs')[a0_0x9ca03f(0x1a3)](a0_0x9ca03f(0x1a0), a0_0x9ca03f(0x1a7));
var arr = input[a0_0x9ca03f(0x1a4)]()[a0_0x9ca03f(0x1b3)]('\x0a');
function a0_0x3d6c() {
    var _0x334cfa = [
        'shift',
        '25765870oEYMeb',
        '15680TbuqHU',
        '2IYHHgQ',
        '5789904VzqNZx',
        '2916rUTUuj',
        'log',
        'map',
        '3314260dkIczX',
        '6057002VQJBTn',
        'split',
        '/dev/stdin',
        'push',
        'length',
        'readFileSync',
        'trim',
        '5ehOTNT',
        '476625NQvpjW',
        'utf8',
        '210866wUWZil'
    ];
    a0_0x3d6c = function () {
        return _0x334cfa;
    };
    return a0_0x3d6c();
}
var t = arr[a0_0x9ca03f(0x1a9)]() - 0x0;
while (t--) {
    var [n, k] = arr[a0_0x9ca03f(0x1a9)]()[a0_0x9ca03f(0x1b3)]('\x20')[a0_0x9ca03f(0x1b0)](Number);
    var x = arr[a0_0x9ca03f(0x1a9)]()[a0_0x9ca03f(0x1b3)]('\x20')[a0_0x9ca03f(0x1b0)](Number);
    var d = x[x[a0_0x9ca03f(0x1a2)] - 0x1] - x[0x0];
    var a = [];
    for (var i = 0x0; i < x[a0_0x9ca03f(0x1a2)] - 0x1; i++)
        a[a0_0x9ca03f(0x1a1)](x[i + 0x1] - x[i]);
    a['sort']((a, b) => b - a);
    var sum = 0x0;
    for (var i = 0x0; i < k - 0x1; i++) {
        if (i > a[a0_0x9ca03f(0x1a2)] - 0x1)
            break;
        sum += a[i];
    }
    console[a0_0x9ca03f(0x1af)](d - sum);
}