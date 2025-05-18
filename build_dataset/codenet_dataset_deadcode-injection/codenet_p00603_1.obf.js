function a0_0x1f92(CLEpRW, key) {
    var stringArray = a0_0xebac();
    a0_0x1f92 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1f92(CLEpRW, key);
}
function a0_0xebac() {
    var _0x554fc3 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'length',
        'shift',
        'map',
        'push',
        'concat',
        'splice'
    ];
    a0_0xebac = function () {
        return _0x554fc3;
    };
    return a0_0xebac();
}
var a0_0x176fb6 = a0_0x1f92;
var input = require('fs')[a0_0x176fb6(0x0)](a0_0x176fb6(0x1), 'utf8');
var Arr = input[a0_0x176fb6(0x2)]()[a0_0x176fb6(0x3)]('\x0a');
while (!![]) {
    if (Arr[a0_0x176fb6(0x4)] == 0x0)
        break;
    var nr = Arr[a0_0x176fb6(0x5)]()[a0_0x176fb6(0x3)]('\x20')[a0_0x176fb6(0x6)](Number);
    var n = nr[0x0];
    var r = nr[0x1];
    var card = [];
    for (var i = 0x0; i < n; i++)
        card[i] = i;
    var arr = Arr[a0_0x176fb6(0x5)]()['split']('\x20')[a0_0x176fb6(0x6)](Number);
    for (var i = 0x0; i < r; i++) {
        var v = arr[i];
        var a = [];
        var b = [];
        for (var j = 0x0; j < n; j++)
            Math['floor'](n / 0x2) > j ? b[a0_0x176fb6(0x7)](card[j]) : a[a0_0x176fb6(0x7)](card[j]);
        card = [];
        while (!![]) {
            if (a[a0_0x176fb6(0x4)] == 0x0 && b[a0_0x176fb6(0x4)] == 0x0)
                break;
            card = card[a0_0x176fb6(0x8)](a[a0_0x176fb6(0x9)](0x0, v));
            card = card['concat'](b[a0_0x176fb6(0x9)](0x0, v));
        }
    }
    console['log'](card[card[a0_0x176fb6(0x4)] - 0x1]);
}