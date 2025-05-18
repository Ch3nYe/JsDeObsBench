function a0_0x119a(KBImnh, key) {
    var stringArray = a0_0x1be3();
    a0_0x119a = function (index, key) {
        index = index - 0x1bb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x119a(KBImnh, key);
}
var a0_0x103d37 = a0_0x119a;
function a0_0x1be3() {
    var _0x39e60a = [
        '427NdCpON',
        '137059QOjZcg',
        'max',
        '215rhqLUE',
        '100436fLoaGh',
        'utf8',
        '92850jPdctj',
        'shift',
        'log',
        '/dev/stdin',
        '149840sFOkgq',
        '631056EvqIiG',
        'map',
        '747crmTYD',
        'readFileSync',
        '2595090GlKEKu',
        '1924671XIeXRC',
        'split'
    ];
    a0_0x1be3 = function () {
        return _0x39e60a;
    };
    return a0_0x1be3();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3df94b = a0_0x119a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3df94b(0x1bc)) / 0x1 + parseInt(_0x3df94b(0x1ca)) / 0x2 + parseInt(_0x3df94b(0x1cb)) / 0x3 + -parseInt(_0x3df94b(0x1bf)) / 0x4 * (parseInt(_0x3df94b(0x1be)) / 0x5) + parseInt(_0x3df94b(0x1c6)) / 0x6 + parseInt(_0x3df94b(0x1bb)) / 0x7 * (-parseInt(_0x3df94b(0x1c5)) / 0x8) + -parseInt(_0x3df94b(0x1c8)) / 0x9 * (-parseInt(_0x3df94b(0x1c1)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1be3, 0xb22af));
function bomb(x, y, z) {
    var _0x332024 = a0_0x119a;
    max = Math[_0x332024(0x1bd)](max, z);
    if (max == n)
        return;
    var dx = [
        -0x1,
        0x0,
        0x1,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x1,
        0x0,
        0x1
    ];
    var dy = [
        -0x2,
        -0x2,
        -0x2,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x2,
        0x2,
        0x2
    ];
    var Safe = {};
    for (var i = -0x1; i <= 0x1; i++) {
        for (var j = -0x1; j <= 0x1; j++) {
            Safe[water[z * 0x2] + i + '\x20' + (water[z * 0x2 + 0x1] + j)] = !![];
        }
    }
    for (var i = 0x0; i < 0xc; i++) {
        var xx = x + dx[i];
        var yy = y + dy[i];
        if (xx < 0x0 || yy < 0x0 || xx >= 0xa || yy >= 0xa)
            continue;
        if (Safe['hasOwnProperty'](xx + '\x20' + yy))
            bomb(xx, yy, z + 0x1);
    }
}
var input = require('fs')[a0_0x103d37(0x1c9)](a0_0x103d37(0x1c4), a0_0x103d37(0x1c0));
var Arr = input['trim']()[a0_0x103d37(0x1cc)]('\x0a');
while (!![]) {
    var xy = Arr[a0_0x103d37(0x1c2)]()['split']('\x20')[a0_0x103d37(0x1c7)](Number);
    if (xy[0x0] == 0x0 && xy[0x1] == 0x0)
        break;
    var map = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    var n = Arr[a0_0x103d37(0x1c2)]() - 0x0;
    var water = Arr[a0_0x103d37(0x1c2)]()[a0_0x103d37(0x1cc)]('\x20')['map'](Number);
    var max = 0x0;
    bomb(xy[0x0], xy[0x1], 0x0);
    console[a0_0x103d37(0x1c3)](max == n ? 'OK' : 'NA');
}