var a0_0xba455a = a0_0x2f31;
function a0_0x2f31(QqIdTc, key) {
    var stringArray = a0_0x42c2();
    a0_0x2f31 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2f31(QqIdTc, key);
}
var input = require('fs')[a0_0xba455a(0x0)](a0_0xba455a(0x1), a0_0xba455a(0x2));
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (arr[0x0] == a0_0xba455a(0x3))
        break;
    var nm = arr[a0_0xba455a(0x4)]()['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var max = [];
    for (var i = 0x0; i < m; i++)
        max[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var dv = arr[a0_0xba455a(0x4)]()[a0_0xba455a(0x5)]('\x20')[a0_0xba455a(0x6)](Number);
        var d = dv[0x0] - 0x1;
        var v = dv[0x1];
        if (max[d] < v)
            max[d] = v;
    }
    var sum = 0x0;
    for (var i = 0x0; i < m; i++)
        sum += max[i];
    console[a0_0xba455a(0x7)](sum);
}
function a0_0x42c2() {
    var _0x535921 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        '0\x200',
        'shift',
        'split',
        'map',
        'log'
    ];
    a0_0x42c2 = function () {
        return _0x535921;
    };
    return a0_0x42c2();
}