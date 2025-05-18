var a0_0x59ee6a = a0_0x1ec4;
var input = require('fs')['readFileSync'](a0_0x59ee6a(0x0), a0_0x59ee6a(0x1));
var Arr = input[a0_0x59ee6a(0x2)]()[a0_0x59ee6a(0x3)]('\x0a');
function a0_0x1ec4(rUqpnS, key) {
    var stringArray = a0_0x2a41();
    a0_0x1ec4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ec4(rUqpnS, key);
}
var t = Arr[a0_0x59ee6a(0x4)]() - 0x0;
function a0_0x2a41() {
    var _0x5f3fce = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'max',
        'min',
        'log',
        'abs'
    ];
    a0_0x2a41 = function () {
        return _0x5f3fce;
    };
    return a0_0x2a41();
}
for (var i = 0x0; i < t; i++) {
    var n = Arr[a0_0x59ee6a(0x4)]() - 0x0;
    var arr = Arr[a0_0x59ee6a(0x4)]()['split']('\x20')[a0_0x59ee6a(0x5)](Number);
    var max = 0x0;
    var min = 0x0;
    var m = arr[0x0];
    for (var j = 0x1; j < n; j++) {
        max = Math[a0_0x59ee6a(0x6)](arr[j] - m, max);
        min = Math[a0_0x59ee6a(0x7)](arr[j] - m, min);
        m = arr[j];
    }
    console[a0_0x59ee6a(0x8)](max + '\x20' + Math[a0_0x59ee6a(0x9)](min));
}