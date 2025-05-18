function a0_0x2f83(cHCfCu, key) {
    var stringArray = a0_0x1ac5();
    a0_0x2f83 = function (index, key) {
        index = index - 0x143;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2f83(cHCfCu, key);
}
var a0_0x933d05 = a0_0x2f83;
(function (stringArrayFunction, comparisonValue) {
    var _0x20dffa = a0_0x2f83;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x20dffa(0x149)) / 0x1 + -parseInt(_0x20dffa(0x151)) / 0x2 + parseInt(_0x20dffa(0x148)) / 0x3 * (parseInt(_0x20dffa(0x145)) / 0x4) + -parseInt(_0x20dffa(0x143)) / 0x5 * (-parseInt(_0x20dffa(0x158)) / 0x6) + -parseInt(_0x20dffa(0x14b)) / 0x7 + parseInt(_0x20dffa(0x156)) / 0x8 * (-parseInt(_0x20dffa(0x153)) / 0x9) + -parseInt(_0x20dffa(0x155)) / 0xa * (-parseInt(_0x20dffa(0x146)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1ac5, 0x91ac7));
function a0_0x1ac5() {
    var _0x39c0b6 = [
        '1124354CXeNlD',
        'max',
        'utf8',
        'map',
        'min',
        '/dev/stdin',
        '956238xqycsR',
        'length',
        '195444OifzjT',
        '1\x201',
        '3170kgdUlP',
        '424dXURzL',
        'trim',
        '3590934PzCAig',
        '5ooCtKQ',
        'split',
        '34024hDApoZ',
        '52283AUVtdV',
        'readFileSync',
        '75sSEIZU',
        '68528oRwxnk',
        'log'
    ];
    a0_0x1ac5 = function () {
        return _0x39c0b6;
    };
    return a0_0x1ac5();
}
var input = require('fs')[a0_0x933d05(0x147)](a0_0x933d05(0x150), a0_0x933d05(0x14d));
var Arr = input[a0_0x933d05(0x157)]()[a0_0x933d05(0x144)]('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    if (N == 0x1) {
        console[a0_0x933d05(0x14a)](a0_0x933d05(0x154));
        continue;
    }
    var arr = [];
    arr[0x0] = [
        0x0,
        0x0
    ];
    for (var i = 0x0; i < N - 0x1; i++) {
        var nm = Arr['shift']()[a0_0x933d05(0x144)]('\x20')[a0_0x933d05(0x14e)](Number);
        var n = nm[0x0];
        var m = nm[0x1];
        var x = 0x0;
        var y = 0x0;
        if (m == 0x0)
            x = -0x1;
        if (m == 0x1)
            y = -0x1;
        if (m == 0x2)
            x = 0x1;
        if (m == 0x3)
            y = 0x1;
        arr[i + 0x1] = [
            arr[n][0x0] + x,
            arr[n][0x1] + y
        ];
    }
    var xA = 0x0;
    var xZ = 0x0;
    var yA = 0x0;
    var yZ = 0x0;
    for (var i = 0x0; i < arr[a0_0x933d05(0x152)]; i++) {
        xA = Math[a0_0x933d05(0x14f)](xA, arr[i][0x0]);
        xZ = Math[a0_0x933d05(0x14c)](xZ, arr[i][0x0]);
        yA = Math[a0_0x933d05(0x14f)](yA, arr[i][0x1]);
        yZ = Math['max'](yZ, arr[i][0x1]);
    }
    console[a0_0x933d05(0x14a)](xZ - xA + 0x1 + '\x20' + (yZ - yA + 0x1));
}