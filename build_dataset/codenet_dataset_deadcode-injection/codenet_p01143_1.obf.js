function a0_0x2c74(YSoHEB, key) {
    var stringArray = a0_0x4d3c();
    a0_0x2c74 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c74(YSoHEB, key);
}
var a0_0x28c037 = a0_0x2c74;
var input = require('fs')[a0_0x28c037(0x0)](a0_0x28c037(0x1), 'utf8');
function a0_0x4d3c() {
    var _0x38d4d3 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'split',
        'map',
        'push',
        'floor'
    ];
    a0_0x4d3c = function () {
        return _0x38d4d3;
    };
    return a0_0x4d3c();
}
var Arr = input[a0_0x28c037(0x2)]()['split']('\x0a');
while (!![]) {
    var nmp = Arr[a0_0x28c037(0x3)]()[a0_0x28c037(0x4)]('\x20')[a0_0x28c037(0x5)](Number);
    if (nmp[0x0] == 0x0 && nmp[0x1] == 0x0 && nmp[0x2] == 0x0)
        break;
    var n = nmp[0x0];
    var m = nmp[0x1] - 0x1;
    var p = nmp[0x2];
    var arr = [];
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        var v = Arr['shift']() - 0x0;
        arr[a0_0x28c037(0x6)](v);
        sum += v * 0x64;
    }
    sum = sum * (0x64 - p) / 0x64;
    var ans = 0x0;
    if (arr[m] != 0x0)
        ans = Math[a0_0x28c037(0x7)](sum / arr[m]);
    console['log'](ans);
}