var a0_0x443bcf = a0_0xf19b;
function bomb(name) {
    var _0x6df2e9 = a0_0xf19b;
    var min = obj[name];
    M[_0x6df2e9(0x0)](function (v) {
        var _0x5df13e = a0_0xf19b;
        if (name == v[0x0]) {
            var sum = 0x0;
            v[0x1][_0x5df13e(0x0)](function (value) {
                sum += bomb(value);
            });
            min = Math['min'](min, sum);
        }
    });
    return min;
}
var input = require('fs')['readFileSync'](a0_0x443bcf(0x1), a0_0x443bcf(0x2));
function a0_0x4854() {
    var _0x28f43a = [
        'forEach',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'push'
    ];
    a0_0x4854 = function () {
        return _0x28f43a;
    };
    return a0_0x4854();
}
var arr = input[a0_0x443bcf(0x3)]()[a0_0x443bcf(0x4)]('\x0a');
function a0_0xf19b(adYcNN, key) {
    var stringArray = a0_0x4854();
    a0_0xf19b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf19b(adYcNN, key);
}
while (!![]) {
    var n = arr[a0_0x443bcf(0x5)]() - 0x0;
    if (n == 0x0)
        break;
    var obj = {};
    for (var i = 0x0; i < n; i++) {
        var data = arr['shift']()[a0_0x443bcf(0x4)]('\x20');
        obj[data[0x0]] = data[0x1] - 0x0;
    }
    var m = arr[a0_0x443bcf(0x5)]() - 0x0;
    var M = [];
    for (var i = 0x0; i < m; i++) {
        var data = arr[a0_0x443bcf(0x5)]()[a0_0x443bcf(0x4)]('\x20');
        var name = data[a0_0x443bcf(0x5)]();
        data[a0_0x443bcf(0x5)]();
        M[a0_0x443bcf(0x6)]([
            name,
            data
        ]);
    }
    var item = arr[a0_0x443bcf(0x5)]();
    console['log'](bomb(item));
}