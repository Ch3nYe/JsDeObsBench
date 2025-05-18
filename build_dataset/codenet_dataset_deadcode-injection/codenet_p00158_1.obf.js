var a0_0x4ff22e = a0_0x3c82;
var input = require('fs')[a0_0x4ff22e(0x0)]('/dev/stdin', a0_0x4ff22e(0x1));
function a0_0x3c82(zQYflS, key) {
    var stringArray = a0_0x1118();
    a0_0x3c82 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c82(zQYflS, key);
}
var Arr = input[a0_0x4ff22e(0x2)]()[a0_0x4ff22e(0x3)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x4ff22e(0x4)]() - 0x0;
    if (n == 0x0)
        break;
    var cnt = 0x0;
    while (n != 0x1) {
        cnt++;
        if (n % 0x2 == 0x0)
            n = n / 0x2;
        else
            n = 0x3 * n + 0x1;
    }
    console[a0_0x4ff22e(0x5)](cnt);
}
function a0_0x1118() {
    var _0x3c847c = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'log'
    ];
    a0_0x1118 = function () {
        return _0x3c847c;
    };
    return a0_0x1118();
}