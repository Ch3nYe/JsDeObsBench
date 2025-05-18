var a0_0x5cdbb4 = a0_0x5eb8;
var input = require('fs')[a0_0x5cdbb4(0x0)](a0_0x5cdbb4(0x1), a0_0x5cdbb4(0x2));
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var v = arr[a0_0x5cdbb4(0x3)]()[a0_0x5cdbb4(0x4)]('\x20')[a0_0x5cdbb4(0x5)](Number);
function a0_0x5eb8(eeJjfi, key) {
    var stringArray = a0_0x3058();
    a0_0x5eb8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5eb8(eeJjfi, key);
}
var sum = 0x0;
function a0_0x3058() {
    var _0x11e816 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'shift',
        'split',
        'map',
        'log'
    ];
    a0_0x3058 = function () {
        return _0x11e816;
    };
    return a0_0x3058();
}
for (var i = 0x0; i < n; i++) {
    sum += v[i] - (i + 0x1);
}
console[a0_0x5cdbb4(0x6)](sum);