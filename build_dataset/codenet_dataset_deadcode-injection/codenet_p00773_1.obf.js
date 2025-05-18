var a0_0x23b56c = a0_0x2d33;
var input = require('fs')[a0_0x23b56c(0x0)]('/dev/stdin', a0_0x23b56c(0x1));
function a0_0x2d33(cRgiXq, key) {
    var stringArray = a0_0x26ee();
    a0_0x2d33 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d33(cRgiXq, key);
}
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var xys = Arr[a0_0x23b56c(0x2)]()[a0_0x23b56c(0x3)]('\x20')[a0_0x23b56c(0x4)](Number);
    var x = xys[0x0];
    var y = xys[0x1];
    var s = xys[0x2];
    if (x == 0x0 && y == 0x0 && s == 0x0)
        break;
    var max = 0x0;
    for (var i = 0x1; i <= s - 0x1; i++) {
        for (var j = 0x1; j <= s - 0x1; j++) {
            var a = Math[a0_0x23b56c(0x5)](i * (0x64 + x) / 0x64) + Math[a0_0x23b56c(0x5)](j * (0x64 + x) / 0x64);
            if (a > s)
                break;
            if (a == s) {
                var b = Math[a0_0x23b56c(0x5)](i * (0x64 + y) / 0x64) + Math[a0_0x23b56c(0x5)](j * (0x64 + y) / 0x64);
                max = Math[a0_0x23b56c(0x6)](max, b);
                break;
            }
        }
    }
    console[a0_0x23b56c(0x7)](max);
}
function a0_0x26ee() {
    var _0x15202f = [
        'readFileSync',
        'utf8',
        'shift',
        'split',
        'map',
        'floor',
        'max',
        'log'
    ];
    a0_0x26ee = function () {
        return _0x15202f;
    };
    return a0_0x26ee();
}