var a0_0x2914a4 = a0_0x26f7;
var input = require('fs')[a0_0x2914a4(0x0)](a0_0x2914a4(0x1), a0_0x2914a4(0x2));
function a0_0x26f7(CrdxWK, key) {
    var stringArray = a0_0x76fc();
    a0_0x26f7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x26f7(CrdxWK, key);
}
function a0_0x76fc() {
    var _0x5882a5 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        '0\x200',
        'split',
        'map',
        'sort',
        'log'
    ];
    a0_0x76fc = function () {
        return _0x5882a5;
    };
    return a0_0x76fc();
}
var Arr = input[a0_0x2914a4(0x3)]()['split']('\x0a');
while (!![]) {
    var NM = Arr[a0_0x2914a4(0x4)]();
    if (NM == a0_0x2914a4(0x5))
        break;
    var nm = NM[a0_0x2914a4(0x6)]('\x20')[a0_0x2914a4(0x7)](Number);
    var m = nm[0x1];
    var arr = Arr[a0_0x2914a4(0x4)]()[a0_0x2914a4(0x6)]('\x20')['map'](Number);
    arr[a0_0x2914a4(0x8)](function (a, b) {
        return b - a;
    });
    var sum = 0x0;
    for (var i = 0x0; i < arr['length']; i++) {
        if ((i + 0x1) % m != 0x0)
            sum += arr[i];
    }
    console[a0_0x2914a4(0x9)](sum);
}