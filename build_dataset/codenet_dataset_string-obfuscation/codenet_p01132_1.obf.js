function a0_0x47df(nUDyiX, key) {
    var stringArray = a0_0x19da();
    a0_0x47df = function (index, key) {
        index = index - 0xfe;
        var value = stringArray[index];
        return value;
    };
    return a0_0x47df(nUDyiX, key);
}
var a0_0xffb937 = a0_0x47df;
(function (stringArrayFunction, comparisonValue) {
    var _0x423ed8 = a0_0x47df;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x423ed8(0xfe)) / 0x1 * (parseInt(_0x423ed8(0x105)) / 0x2) + parseInt(_0x423ed8(0x10d)) / 0x3 * (-parseInt(_0x423ed8(0x102)) / 0x4) + -parseInt(_0x423ed8(0x103)) / 0x5 * (parseInt(_0x423ed8(0x104)) / 0x6) + parseInt(_0x423ed8(0x106)) / 0x7 + -parseInt(_0x423ed8(0x10a)) / 0x8 + -parseInt(_0x423ed8(0x101)) / 0x9 + parseInt(_0x423ed8(0xff)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x19da, 0xbdd5b));
var input = require('fs')['readFileSync'](a0_0xffb937(0x109), 'utf8');
function a0_0x19da() {
    var _0x34dbf7 = [
        '36793170rCByBp',
        'trim',
        '4165920GKSloQ',
        '2792vnXKfd',
        '5vghusN',
        '6737982eBSwHI',
        '4PynQkr',
        '4620623JSELSB',
        'log',
        'forEach',
        '/dev/stdin',
        '4497552eySEmr',
        'split',
        'map',
        '4914tWWeqL',
        '135224InDnUg'
    ];
    a0_0x19da = function () {
        return _0x34dbf7;
    };
    return a0_0x19da();
}
var Arr = input[a0_0xffb937(0x100)]()['split']('\x0a');
var j = 0x0;
while (!![]) {
    var v = Arr['shift']() - 0x0;
    if (v == 0x0)
        break;
    var m = Arr['shift']()[a0_0xffb937(0x10b)]('\x20')[a0_0xffb937(0x10c)](Number);
    var money = 0xa * m[0x0] + 0x32 * m[0x1] + 0x64 * m[0x2] + 0x1f4 * m[0x3] - v;
    var M = [
        0x0,
        0x0,
        0x0,
        0x0
    ];
    while (0x1f4 <= money) {
        M[0x3]++;
        money -= 0x1f4;
    }
    while (0x64 <= money) {
        M[0x2]++;
        money -= 0x64;
    }
    while (0x32 <= money) {
        M[0x1]++;
        money -= 0x32;
    }
    while (0xa <= money) {
        M[0x0]++;
        money -= 0xa;
    }
    var coin = [
        0xa,
        0x32,
        0x64,
        0x1f4
    ];
    var str = '';
    m[a0_0xffb937(0x108)](function (v, i) {
        if (v > M[i])
            str += coin[i] + '\x20' + (v - M[i]) + '\x0a';
    });
    console[a0_0xffb937(0x107)](str);
}