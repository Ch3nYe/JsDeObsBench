var a0_0x5e739d = a0_0x3663;
(function (stringArrayFunction, comparisonValue) {
    var _0x304bbf = a0_0x3663;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x304bbf(0x160)) / 0x1 + parseInt(_0x304bbf(0x166)) / 0x2 * (-parseInt(_0x304bbf(0x161)) / 0x3) + parseInt(_0x304bbf(0x168)) / 0x4 * (parseInt(_0x304bbf(0x162)) / 0x5) + -parseInt(_0x304bbf(0x16a)) / 0x6 + parseInt(_0x304bbf(0x15c)) / 0x7 + -parseInt(_0x304bbf(0x15b)) / 0x8 + -parseInt(_0x304bbf(0x163)) / 0x9 * (-parseInt(_0x304bbf(0x167)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x376e, 0x2c516));
var input = require('fs')[a0_0x5e739d(0x159)](a0_0x5e739d(0x15e), 'utf8');
var arr = input[a0_0x5e739d(0x165)]()[a0_0x5e739d(0x164)]('\x0a');
function a0_0x376e() {
    var _0xe3ff5d = [
        '0\x200',
        '2376584UoQaoh',
        '159523VnyHQp',
        'shift',
        '/dev/stdin',
        'forEach',
        '302436jhpAee',
        '27630sIfgFR',
        '215sudNNv',
        '9dYeAfN',
        'split',
        'trim',
        '4TRtsVU',
        '9084770ULorwl',
        '2868OaXAZg',
        'max',
        '975852RrxANV',
        'log',
        'readFileSync'
    ];
    a0_0x376e = function () {
        return _0xe3ff5d;
    };
    return a0_0x376e();
}
function a0_0x3663(RcUxil, key) {
    var stringArray = a0_0x376e();
    a0_0x3663 = function (index, key) {
        index = index - 0x159;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3663(RcUxil, key);
}
while (!![]) {
    if (arr[0x0] == a0_0x5e739d(0x15a))
        break;
    var nm = arr[a0_0x5e739d(0x15d)]()[a0_0x5e739d(0x164)]('\x20')['map'](Number);
    var point = [];
    for (var i = 0x0; i < nm[0x0]; i++)
        point[i] = [
            0x0,
            0x0
        ];
    for (var i = 0x0; i < nm[0x1]; i++) {
        var c = arr['shift']()[a0_0x5e739d(0x164)]('\x20')['map'](Number);
        var s = c[a0_0x5e739d(0x15d)]();
        var k = c[a0_0x5e739d(0x15d)]();
        if (k == 0x1)
            point[c[0x0] - 0x1][0x0] += s;
        c[a0_0x5e739d(0x15f)](function (v, i) {
            point[v - 0x1][0x1] += s;
        });
    }
    var max = 0x0;
    for (var i = 0x0; i < nm[0x0]; i++) {
        for (var j = 0x0; j < nm[0x0]; j++) {
            if (i == j)
                continue;
            max = Math[a0_0x5e739d(0x169)](max, point[i][0x1] - point[j][0x0]);
        }
    }
    console[a0_0x5e739d(0x16b)](max + 0x1);
}