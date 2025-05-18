var a0_0x67c207 = a0_0x39ba;
function a0_0x328e() {
    var _0x33ad7b = [
        '8HYehpH',
        'readFileSync',
        '50OKoGOo',
        '80uOXVKQ',
        'log',
        'map',
        'sort',
        '/dev/stdin',
        'shift',
        '1562589nsADxA',
        '1492505eBnrso',
        '61860tIJNFJ',
        'length',
        'split',
        '50610rVvqAv',
        '2030DtEdJw',
        '1193687axzhBo',
        'push',
        '48UPGSPn',
        'trim',
        '15418728ogNAla',
        '558tRwuMc'
    ];
    a0_0x328e = function () {
        return _0x33ad7b;
    };
    return a0_0x328e();
}
(function (stringArrayFunction, comparisonValue) {
    var _0xd9a394 = a0_0x39ba;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xd9a394(0xeb)) / 0x1 * (-parseInt(_0xd9a394(0xe5)) / 0x2) + -parseInt(_0xd9a394(0xe1)) / 0x3 * (-parseInt(_0xd9a394(0xd9)) / 0x4) + parseInt(_0xd9a394(0xe4)) / 0x5 * (parseInt(_0xd9a394(0xe8)) / 0x6) + -parseInt(_0xd9a394(0xe0)) / 0x7 * (-parseInt(_0xd9a394(0xec)) / 0x8) + -parseInt(_0xd9a394(0xdf)) / 0x9 + parseInt(_0xd9a394(0xd8)) / 0xa * (parseInt(_0xd9a394(0xe6)) / 0xb) + -parseInt(_0xd9a394(0xea)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x328e, 0x572a7));
var input = require('fs')[a0_0x67c207(0xed)](a0_0x67c207(0xdd), 'utf8');
function a0_0x39ba(bZgbOZ, key) {
    var stringArray = a0_0x328e();
    a0_0x39ba = function (index, key) {
        index = index - 0xd8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x39ba(bZgbOZ, key);
}
var Arr = input[a0_0x67c207(0xe9)]()[a0_0x67c207(0xe3)]('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var team = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x67c207(0xde)]()[a0_0x67c207(0xe3)]('\x20')[a0_0x67c207(0xdb)](Number);
        var a = arr[0x1] * 0x3c + arr[0x2];
        var b = arr[0x3] * 0x3c + arr[0x4];
        var c = arr[0x5] * 0x3c + arr[0x6];
        var d = arr[0x7] * 0x3c + arr[0x8];
        team[a0_0x67c207(0xe7)]([
            arr[0x0],
            a + b + c + d
        ]);
    }
    team[a0_0x67c207(0xdc)](function (a, b) {
        a = a[0x1];
        b = b[0x1];
        return a - b;
    });
    console[a0_0x67c207(0xda)](team[0x0][0x0]);
    console[a0_0x67c207(0xda)](team[0x1][0x0]);
    console[a0_0x67c207(0xda)](team[team[a0_0x67c207(0xe2)] - 0x2][0x0]);
}