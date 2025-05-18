var a0_0x3b8efb = a0_0x2c91;
var input = require('fs')[a0_0x3b8efb(0x0)]('/dev/stdin', a0_0x3b8efb(0x1));
function a0_0x4a9c() {
    var _0x36239c = [
        'readFileSync',
        'utf8',
        'replace',
        'shift',
        'split',
        'map',
        'forEach',
        'log'
    ];
    a0_0x4a9c = function () {
        return _0x36239c;
    };
    return a0_0x4a9c();
}
function a0_0x2c91(vNnGIV, key) {
    var stringArray = a0_0x4a9c();
    a0_0x2c91 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c91(vNnGIV, key);
}
var Arr = input[a0_0x3b8efb(0x2)](/\n$/, '')['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr[a0_0x3b8efb(0x3)]()[a0_0x3b8efb(0x4)]('\x20')[a0_0x3b8efb(0x5)](Number);
    var sum = 0x0;
    var flag = ![];
    arr[a0_0x3b8efb(0x6)](function (v) {
        if (v != 0x0)
            sum += 0x1;
        if (v >= 0x2)
            flag = !![];
    });
    console[a0_0x3b8efb(0x7)](flag ? sum + 0x1 : 'NA');
}