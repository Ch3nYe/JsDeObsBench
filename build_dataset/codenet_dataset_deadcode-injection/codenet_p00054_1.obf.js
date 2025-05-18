var a0_0xbe36aa = a0_0xbffa;
function a0_0x3fd7() {
    var _0x57215d = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'length',
        'map',
        'toFixed',
        'slice',
        'log'
    ];
    a0_0x3fd7 = function () {
        return _0x57215d;
    };
    return a0_0x3fd7();
}
var input = require('fs')[a0_0xbe36aa(0x0)](a0_0xbe36aa(0x1), a0_0xbe36aa(0x2));
function a0_0xbffa(ayoYlb, key) {
    var stringArray = a0_0x3fd7();
    a0_0xbffa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xbffa(ayoYlb, key);
}
var Arr = input['trim']()[a0_0xbe36aa(0x3)]('\x0a');
for (var i = 0x0; i < Arr[a0_0xbe36aa(0x4)]; i++) {
    var arr = Arr[i][a0_0xbe36aa(0x3)]('\x20')[a0_0xbe36aa(0x5)](Number);
    var n = arr[0x2];
    var sum = 0x0;
    while (n--) {
        var str = (arr[0x0] / arr[0x1])[a0_0xbe36aa(0x6)](n + 0x2)[a0_0xbe36aa(0x7)](-0x2);
        sum += str[0x0] - 0x0;
    }
    console[a0_0xbe36aa(0x8)](sum);
}