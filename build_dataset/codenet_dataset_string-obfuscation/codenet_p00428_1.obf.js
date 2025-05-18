function a0_0x3ae5(quQgyU, key) {
    var stringArray = a0_0x302d();
    a0_0x3ae5 = function (index, key) {
        index = index - 0x6d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3ae5(quQgyU, key);
}
var a0_0x4a8e03 = a0_0x3ae5;
(function (stringArrayFunction, comparisonValue) {
    var _0x4db461 = a0_0x3ae5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4db461(0x7f)) / 0x1 * (-parseInt(_0x4db461(0x76)) / 0x2) + parseInt(_0x4db461(0x6f)) / 0x3 * (-parseInt(_0x4db461(0x70)) / 0x4) + parseInt(_0x4db461(0x7a)) / 0x5 + parseInt(_0x4db461(0x75)) / 0x6 + -parseInt(_0x4db461(0x6d)) / 0x7 + -parseInt(_0x4db461(0x72)) / 0x8 * (parseInt(_0x4db461(0x74)) / 0x9) + -parseInt(_0x4db461(0x80)) / 0xa * (-parseInt(_0x4db461(0x78)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x302d, 0x2fa23));
var input = require('fs')[a0_0x4a8e03(0x73)](a0_0x4a8e03(0x7c), a0_0x4a8e03(0x71));
function a0_0x302d() {
    var _0x3fa5e2 = [
        '1114045XYgByi',
        'shift',
        '/dev/stdin',
        'sum',
        'trim',
        '14069JddCfS',
        '30zcIIQN',
        '340697pgTVtx',
        'push',
        '3BENUuB',
        '990764GVMHnn',
        'utf8',
        '17808qNwoJj',
        'readFileSync',
        '1062FiVYzq',
        '1872162ILabzi',
        '22fstlzV',
        'split',
        '236654jeJvuT',
        'map'
    ];
    a0_0x302d = function () {
        return _0x3fa5e2;
    };
    return a0_0x302d();
}
var Arr = input[a0_0x4a8e03(0x7e)]()[a0_0x4a8e03(0x77)]('\x0a');
while (!![]) {
    var NM = Arr[a0_0x4a8e03(0x7b)]();
    if (NM == '0\x200')
        break;
    var nm = NM['split']('\x20')[a0_0x4a8e03(0x79)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var arr = [];
    for (var i = 0x0; i < m; i++)
        arr['push']({
            'x': i + 0x1,
            'sum': 0x0
        });
    for (var i = 0x0; i < n; i++) {
        var data = Arr['shift']()[a0_0x4a8e03(0x77)]('\x20')[a0_0x4a8e03(0x79)](Number);
        arr['forEach'](function (v, j) {
            arr[j]['sum'] += data[j];
        });
    }
    arr['sort'](function (a, b) {
        var _0x246f37 = a0_0x4a8e03;
        a = a[_0x246f37(0x7d)];
        b = b[_0x246f37(0x7d)];
        return b - a;
    });
    var c = [];
    arr['forEach'](function (v) {
        var _0x98c45d = a0_0x4a8e03;
        c[_0x98c45d(0x6e)](v['x']);
    });
    console['log'](c['join']('\x20'));
}