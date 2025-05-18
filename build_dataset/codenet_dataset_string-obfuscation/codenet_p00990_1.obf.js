var a0_0x1ac3c1 = a0_0x1de0;
(function (stringArrayFunction, comparisonValue) {
    var _0x4bcd38 = a0_0x1de0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4bcd38(0x1d5)) / 0x1 * (-parseInt(_0x4bcd38(0x1ca)) / 0x2) + parseInt(_0x4bcd38(0x1c3)) / 0x3 * (parseInt(_0x4bcd38(0x1cb)) / 0x4) + parseInt(_0x4bcd38(0x1d4)) / 0x5 + -parseInt(_0x4bcd38(0x1cf)) / 0x6 * (parseInt(_0x4bcd38(0x1d1)) / 0x7) + -parseInt(_0x4bcd38(0x1c5)) / 0x8 + parseInt(_0x4bcd38(0x1cd)) / 0x9 + parseInt(_0x4bcd38(0x1c2)) / 0xa * (-parseInt(_0x4bcd38(0x1d3)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4942, 0x3f66e));
function a0_0x1de0(vmGNZm, key) {
    var stringArray = a0_0x4942();
    a0_0x1de0 = function (index, key) {
        index = index - 0x1c1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1de0(vmGNZm, key);
}
function over(x) {
    if (x >= 0xa)
        x = x - 0xa + 0x1;
    return x;
}
function a0_0x4942() {
    var _0xa8080b = [
        'trim',
        'log',
        'utf8',
        '10huhvZk',
        '24lWWYdl',
        'split',
        '189045CfirIh',
        'length',
        '42dIDbzx',
        '/dev/stdin',
        '227983IgjeGp',
        'push',
        '20174qpzYbH',
        '1112025WfLJFB',
        '78347iGOHtZ',
        'readFileSync',
        '1060LAQPPD',
        '24822tIQOBO',
        'map',
        '21664OZQIPC',
        'shift'
    ];
    a0_0x4942 = function () {
        return _0xa8080b;
    };
    return a0_0x4942();
}
var input = require('fs')[a0_0x1ac3c1(0x1c1)](a0_0x1ac3c1(0x1d0), a0_0x1ac3c1(0x1c9));
var arr = input[a0_0x1ac3c1(0x1c7)]()[a0_0x1ac3c1(0x1cc)]('\x0a');
var n = arr[a0_0x1ac3c1(0x1c6)]() - 0x0;
var id = arr[a0_0x1ac3c1(0x1c6)]()[a0_0x1ac3c1(0x1cc)]('');
var a = arr['shift']() - 0x0;
var ary = arr['shift']()['split']('\x20')[a0_0x1ac3c1(0x1c4)](Number);
var k = [];
var sum = 0x0;
id['forEach'](function (v, i) {
    var _0x3fb982 = a0_0x1ac3c1;
    if (v == '*') {
        if (i % 0x2 == 0x0)
            k[_0x3fb982(0x1d2)](0x1);
        else
            k[_0x3fb982(0x1d2)](0x2);
    } else {
        if (i % 0x2 == 0x0)
            sum += v - 0x0;
        else
            sum += over((v - 0x0) * 0x2);
    }
});
var dp = [];
for (var i = 0x0; i <= 0x7; i++) {
    dp[i] = [];
    for (var s = 0x0; s < 0xf4240; s++)
        dp[i][s] = ![];
}
dp[0x0][sum] = 0x1;
for (var i = 0x0; i < k['length']; i++) {
    for (var j = 0x0; j < ary[a0_0x1ac3c1(0x1ce)]; j++) {
        for (var s = 0x0; s < 0xf4240; s++) {
            dp[i + 0x1][s + over(ary[j] * k[i])] += dp[i][s];
        }
    }
}
var ans = 0x0;
for (var s = 0x0; s < 0x186a0; s++)
    ans += dp[k[a0_0x1ac3c1(0x1ce)]][s * 0xa];
console[a0_0x1ac3c1(0x1c8)](ans);