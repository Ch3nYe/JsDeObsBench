var a0_0x5114a3 = a0_0x16a2;
var input = require('fs')[a0_0x5114a3(0x0)]('/dev/stdin', a0_0x5114a3(0x1));
var Arr = input[a0_0x5114a3(0x2)]()[a0_0x5114a3(0x3)]('\x0a');
function a0_0x16a2(DkjfCw, key) {
    var stringArray = a0_0x1c1b();
    a0_0x16a2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16a2(DkjfCw, key);
}
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr[a0_0x5114a3(0x4)]()[a0_0x5114a3(0x3)]('\x20')[a0_0x5114a3(0x5)](Number);
    var ball = 0x20;
    var i = 0x0;
    while (!![]) {
        ball -= (ball - 0x1) % 0x5;
        console[a0_0x5114a3(0x6)](ball);
        if (ball == 0x1) {
            console['log'](0x0);
            break;
        }
        ball -= arr[i % n];
        i++;
        console[a0_0x5114a3(0x6)](ball);
    }
}
function a0_0x1c1b() {
    var _0x5615dd = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0x1c1b = function () {
        return _0x5615dd;
    };
    return a0_0x1c1b();
}