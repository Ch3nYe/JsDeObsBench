var a0_0x5d5aca = a0_0x59d1;
(function (stringArrayFunction, comparisonValue) {
    var _0x5d74f7 = a0_0x59d1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5d74f7(0x107)) / 0x1 * (-parseInt(_0x5d74f7(0x103)) / 0x2) + -parseInt(_0x5d74f7(0x100)) / 0x3 * (-parseInt(_0x5d74f7(0xfe)) / 0x4) + -parseInt(_0x5d74f7(0x101)) / 0x5 + -parseInt(_0x5d74f7(0xff)) / 0x6 + parseInt(_0x5d74f7(0x106)) / 0x7 * (-parseInt(_0x5d74f7(0x102)) / 0x8) + parseInt(_0x5d74f7(0xf6)) / 0x9 + parseInt(_0x5d74f7(0x104)) / 0xa * (parseInt(_0x5d74f7(0xfd)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xfc9b, 0x242ba));
function a0_0x59d1(awfiOF, key) {
    var stringArray = a0_0xfc9b();
    a0_0x59d1 = function (index, key) {
        index = index - 0xf6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59d1(awfiOF, key);
}
function bomb(start, sum) {
    var _0x51a9c1 = a0_0x59d1;
    dp[start][sum]++;
    if (start == card[_0x51a9c1(0xf9)])
        return;
    var v = card[start][0x0];
    var k = card[start][0x1];
    for (var i = 0x0; i <= k; i++) {
        bomb(start + 0x1, sum + v * i);
    }
}
var input = require('fs')[a0_0x5d5aca(0xfc)](a0_0x5d5aca(0xfb), 'utf8');
var arr = input[a0_0x5d5aca(0xf7)]()[a0_0x5d5aca(0xfa)]('\x0a');
function a0_0xfc9b() {
    var _0x8b59ff = [
        'length',
        'split',
        '/dev/stdin',
        'readFileSync',
        '11kNwluI',
        '952936wZnVRS',
        '1130448WCCWXN',
        '3KVrePa',
        '1275870riCyxX',
        '122552eIIJwt',
        '564494rKsCoU',
        '5393990nouSlZ',
        'log',
        '49zDqTbn',
        '1YXVtLU',
        '1832247ArAMti',
        'trim',
        'shift'
    ];
    a0_0xfc9b = function () {
        return _0x8b59ff;
    };
    return a0_0xfc9b();
}
while (!![]) {
    var m = arr[a0_0x5d5aca(0xf8)]() - 0x0;
    if (m == 0x0)
        break;
    var card = [];
    while (m--)
        card['push'](arr['shift']()[a0_0x5d5aca(0xfa)]('\x20')['map'](Number));
    var g = arr['shift']() - 0x0;
    var dp = [];
    for (var i = 0x0; i <= card[a0_0x5d5aca(0xf9)]; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= 0x3e8; j++) {
            dp[i][j] = 0x0;
        }
    }
    bomb(0x0, 0x0);
    while (g--)
        console[a0_0x5d5aca(0x105)](dp[card[a0_0x5d5aca(0xf9)]][arr[a0_0x5d5aca(0xf8)]() - 0x0]);
}