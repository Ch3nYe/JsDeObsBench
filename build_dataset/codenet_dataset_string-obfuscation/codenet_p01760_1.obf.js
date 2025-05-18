function a0_0x5f34(kYJXCH, key) {
    var stringArray = a0_0xc637();
    a0_0x5f34 = function (index, key) {
        index = index - 0x160;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5f34(kYJXCH, key);
}
var a0_0x5b0e36 = a0_0x5f34;
(function (stringArrayFunction, comparisonValue) {
    var _0x2f928a = a0_0x5f34;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2f928a(0x172)) / 0x1 * (parseInt(_0x2f928a(0x168)) / 0x2) + parseInt(_0x2f928a(0x16c)) / 0x3 + parseInt(_0x2f928a(0x161)) / 0x4 * (parseInt(_0x2f928a(0x167)) / 0x5) + parseInt(_0x2f928a(0x16f)) / 0x6 * (parseInt(_0x2f928a(0x16e)) / 0x7) + parseInt(_0x2f928a(0x173)) / 0x8 + parseInt(_0x2f928a(0x170)) / 0x9 * (-parseInt(_0x2f928a(0x160)) / 0xa) + parseInt(_0x2f928a(0x16a)) / 0xb * (-parseInt(_0x2f928a(0x163)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xc637, 0x4578c));
var input = require('fs')['readFileSync'](a0_0x5b0e36(0x169), a0_0x5b0e36(0x171));
var arr = input[a0_0x5b0e36(0x16d)]()[a0_0x5b0e36(0x162)]('\x0a');
var TD = arr[a0_0x5b0e36(0x164)]()['split']('\x20')[a0_0x5b0e36(0x16b)](Number);
var T = TD[0x0];
var D = TD[0x1];
var t = arr[a0_0x5b0e36(0x164)]()[a0_0x5b0e36(0x162)]('\x20')[a0_0x5b0e36(0x16b)](Number);
var tA = t[0x0];
var tB = t[0x1];
var d = arr[a0_0x5b0e36(0x164)]()[a0_0x5b0e36(0x162)]('\x20')[a0_0x5b0e36(0x16b)](Number);
var dA = d[0x0];
function a0_0xc637() {
    var _0x389be0 = [
        'trim',
        '3235463NpOiMU',
        '6QTfrgl',
        '100305cRKcfG',
        'utf8',
        '3413QRWJUW',
        '2928536qixQYq',
        'abs',
        'min',
        '220SvNebI',
        '196NaKbSO',
        'split',
        '26628OJxoeP',
        'shift',
        'toFixed',
        'log',
        '10315NCPyXl',
        '206QqippE',
        '/dev/stdin',
        '473EOBBTe',
        'map',
        '142017UobECn'
    ];
    a0_0xc637 = function () {
        return _0x389be0;
    };
    return a0_0xc637();
}
var dB = d[0x1];
var min = Infinity;
var i = 0x0;
while (!![]) {
    var vA = i * dA;
    if (vA > D)
        break;
    var j = 0x0;
    while (!![]) {
        var vB = j * dB;
        if (vA + vB > D)
            break;
        if (vA + vB != 0x0) {
            var c = T - (tA * vA + tB * vB) / (vA + vB);
            min = Math[a0_0x5b0e36(0x175)](min, Math[a0_0x5b0e36(0x174)](c));
        }
        j++;
    }
    i++;
}
console[a0_0x5b0e36(0x166)](min[a0_0x5b0e36(0x165)](0xa));