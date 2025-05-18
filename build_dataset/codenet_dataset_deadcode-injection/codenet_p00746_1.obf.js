function a0_0x2f44(UajZnX, key) {
    var stringArray = a0_0x2f2a();
    a0_0x2f44 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2f44(UajZnX, key);
}
var a0_0x19a70a = a0_0x2f44;
function a0_0x2f2a() {
    var _0x320fb1 = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'shift',
        '1\x201',
        'map',
        'length',
        'max',
        'min',
        'log'
    ];
    a0_0x2f2a = function () {
        return _0x320fb1;
    };
    return a0_0x2f2a();
}
var input = require('fs')[a0_0x19a70a(0x0)](a0_0x19a70a(0x1), 'utf8');
var Arr = input['trim']()[a0_0x19a70a(0x2)]('\x0a');
while (!![]) {
    var N = Arr[a0_0x19a70a(0x3)]() - 0x0;
    if (N == 0x0)
        break;
    if (N == 0x1) {
        console['log'](a0_0x19a70a(0x4));
        continue;
    }
    var arr = [];
    arr[0x0] = [
        0x0,
        0x0
    ];
    for (var i = 0x0; i < N - 0x1; i++) {
        var nm = Arr[a0_0x19a70a(0x3)]()[a0_0x19a70a(0x2)]('\x20')[a0_0x19a70a(0x5)](Number);
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
    for (var i = 0x0; i < arr[a0_0x19a70a(0x6)]; i++) {
        xA = Math['min'](xA, arr[i][0x0]);
        xZ = Math[a0_0x19a70a(0x7)](xZ, arr[i][0x0]);
        yA = Math[a0_0x19a70a(0x8)](yA, arr[i][0x1]);
        yZ = Math['max'](yZ, arr[i][0x1]);
    }
    console[a0_0x19a70a(0x9)](xZ - xA + 0x1 + '\x20' + (yZ - yA + 0x1));
}