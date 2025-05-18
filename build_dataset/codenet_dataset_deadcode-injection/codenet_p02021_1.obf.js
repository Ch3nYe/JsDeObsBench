var a0_0x5177f6 = a0_0xaf1c;
function a0_0xaf1c(WfmmDA, key) {
    var stringArray = a0_0x1c5c();
    a0_0xaf1c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xaf1c(WfmmDA, key);
}
var input = require('fs')[a0_0x5177f6(0x0)](a0_0x5177f6(0x1), a0_0x5177f6(0x2));
var [n, arr] = input[a0_0x5177f6(0x3)]()[a0_0x5177f6(0x4)]('\x0a');
arr = arr['split']('\x20')[a0_0x5177f6(0x5)](Number);
for (var i = 0x1; i <= 0x64; i++) {
    var sum = 0x0;
    var flag = arr['every'](v => {
        sum = sum + v - i;
        return sum >= 0x0;
    });
    if (!flag)
        break;
}
function a0_0x1c5c() {
    var _0x267507 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x1c5c = function () {
        return _0x267507;
    };
    return a0_0x1c5c();
}
console[a0_0x5177f6(0x6)](i - 0x1);